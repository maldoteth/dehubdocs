
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useSearch } from '@/contexts/SearchContext';
import { FileText, Coins, Users, Shield, ExternalLink } from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Token':
      return Coins;
    case 'Legal':
      return Shield;
    case 'Main':
    default:
      return FileText;
  }
};

const extractRelevantExcerpt = (content: string, query: string, maxLength: number = 120) => {
  if (!query.trim()) return content.substring(0, maxLength) + '...';
  
  const lowercaseContent = content.toLowerCase();
  const lowercaseQuery = query.toLowerCase();
  const queryTerms = lowercaseQuery.split(' ').filter(term => term.length > 1);
  
  // Find the first occurrence of any query term
  let bestMatch = -1;
  let matchedTerm = '';
  
  for (const term of queryTerms) {
    const index = lowercaseContent.indexOf(term);
    if (index !== -1 && (bestMatch === -1 || index < bestMatch)) {
      bestMatch = index;
      matchedTerm = term;
    }
  }
  
  if (bestMatch === -1) {
    return content.substring(0, maxLength) + '...';
  }
  
  // Calculate excerpt boundaries to show context around the match
  const contextLength = Math.floor((maxLength - matchedTerm.length) / 2);
  const start = Math.max(0, bestMatch - contextLength);
  const end = Math.min(content.length, bestMatch + matchedTerm.length + contextLength);
  
  let excerpt = content.substring(start, end);
  
  // Add ellipsis if we're not at the beginning/end
  if (start > 0) excerpt = '...' + excerpt;
  if (end < content.length) excerpt = excerpt + '...';
  
  return excerpt;
};

// Function to escape special regex characters
const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const highlightMatchingTerms = (text: string, query: string) => {
  if (!query.trim()) return text;
  
  const queryTerms = query.toLowerCase().split(' ').filter(term => term.length > 1);
  let highlightedText = text;
  
  queryTerms.forEach(term => {
    // Escape special regex characters before creating the RegExp
    const escapedTerm = escapeRegExp(term);
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  });
  
  return highlightedText;
};

// Enhanced function to find and highlight text with better context awareness
const highlightTextInSection = (searchResult: any, searchQuery: string, sectionId?: string) => {
  if (!searchQuery.trim()) return;
  
  // Extract meaningful terms from the search result's title and content
  const resultTitle = searchResult?.title?.toLowerCase() || '';
  const resultContent = searchResult?.content?.toLowerCase() || '';
  
  // Get query terms but also consider the result's title for context
  const queryTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 1);
  const titleWords = resultTitle.split(' ').filter(word => word.length > 2);
  
  // Combine and prioritize terms, giving preference to title words and longer query terms
  const searchTerms = [...new Set([...titleWords, ...queryTerms])].sort((a, b) => b.length - a.length);
  
  console.log(`🎯 Enhanced search for result: "${resultTitle}"`);
  console.log(`🔍 Using search terms: ${searchTerms.join(', ')}`);
  
  if (searchTerms.length === 0) return;
  
  // Remove any existing highlights first
  const existingHighlights = document.querySelectorAll('.search-highlight');
  existingHighlights.forEach(el => {
    const parent = el.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(el.textContent || ''), el);
      parent.normalize();
    }
  });
  
  // Determine search scope - if we have a section ID, ONLY search within that section
  let searchScope = document.body;
  if (sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      searchScope = sectionElement;
      console.log(`🎯 Restricting search to section: ${sectionId}`);
      console.log(`📍 Section element:`, sectionElement);
    } else {
      console.warn(`⚠️ Section element not found: ${sectionId}`);
      return; // Don't search if the target section doesn't exist
    }
  }
  
  // Create a more targeted search that looks for the most relevant terms first
  const walker = document.createTreeWalker(
    searchScope,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        // Skip script and style elements
        const parent = node.parentElement;
        if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
          return NodeFilter.FILTER_REJECT;
        }
        
        // If we have a sectionId, make sure we're actually inside that section
        if (sectionId && !searchScope.contains(node)) {
          return NodeFilter.FILTER_REJECT;
        }
        
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  
  let firstMatch: Element | null = null;
  let node;
  const foundMatches = new Set<string>();
  
  console.log(`🔍 Starting contextual search in ${sectionId ? 'section ' + sectionId : 'page'}`);
  
  // First pass: look for longer, more specific terms that are likely to be in the target section
  while (node = walker.nextNode()) {
    const textContent = node.textContent?.toLowerCase() || '';
    
    // Try to find the most specific terms first (from title or longer query terms)
    for (const term of searchTerms) {
      if (term.length > 3 && textContent.includes(term) && !foundMatches.has(term)) {
        const parent = node.parentElement;
        if (parent) {
          const text = node.textContent || '';
          const lowerText = text.toLowerCase();
          const index = lowerText.indexOf(term);
          
          if (index !== -1) {
            console.log(`✅ Found contextual term "${term}" in: "${text.substring(0, 50)}..."`);
            
            const before = text.substring(0, index);
            const match = text.substring(index, index + term.length);
            const after = text.substring(index + term.length);
            
            const span = document.createElement('span');
            span.className = 'search-highlight bg-yellow-300 px-1 rounded font-semibold transition-all duration-1000';
            span.textContent = match;
            
            const fragment = document.createDocumentFragment();
            if (before) fragment.appendChild(document.createTextNode(before));
            fragment.appendChild(span);
            if (after) fragment.appendChild(document.createTextNode(after));
            
            parent.replaceChild(fragment, node);
            foundMatches.add(term);
            
            if (!firstMatch) {
              firstMatch = span;
              console.log(`🎯 Setting first contextual match to:`, span);
            }
            
            // Reset walker since we modified the DOM
            walker.currentNode = searchScope;
            break;
          }
        }
      }
    }
  }
  
  // If we found contextual matches, scroll to the first one
  if (firstMatch) {
    console.log(`📍 Scrolling to contextual match in ${sectionId ? 'section ' + sectionId : 'page'}`);
    setTimeout(() => {
      firstMatch.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
      console.log(`🎯 Scrolled to contextual match in ${sectionId ? 'section ' + sectionId : 'page'}`);
      
      // Add prominent temporary highlight
      firstMatch.classList.add('bg-blue-400', 'shadow-lg', 'scale-110');
      firstMatch.classList.remove('bg-yellow-300');
      
      // Fade back to normal highlighting after 2 seconds
      setTimeout(() => {
        firstMatch.classList.remove('bg-blue-400', 'shadow-lg', 'scale-110');
        firstMatch.classList.add('bg-yellow-300');
        
        // Remove highlight completely after another 3 seconds
        setTimeout(() => {
          firstMatch.classList.remove('bg-yellow-300');
          firstMatch.classList.add('bg-transparent');
        }, 3000);
      }, 2000);
    }, 200);
  } else {
    console.log(`❌ No contextual matches found for "${resultTitle}" in ${sectionId ? 'section ' + sectionId : 'page'}`);
  }
};

export const SearchDialog = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    searchQuery, 
    setSearchQuery, 
    searchResults, 
    performSearch 
  } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    console.log(`🎯 SearchDialog: Query changed to "${searchQuery}", performing search...`);
    performSearch(searchQuery);
  }, [searchQuery, performSearch]);

  const handleSelect = (result: any, query?: string) => {
    console.log(`🚀 SearchDialog: Navigating to ${result.path}${result.anchor ? '#' + result.anchor : ''} for result "${result.title}"`);
    setIsSearchOpen(false);
    const currentQuery = query || searchQuery;
    setSearchQuery('');
    
    // Navigate to the path first
    navigate(result.path);
    
    // Handle scrolling and highlighting with proper context awareness
    setTimeout(() => {
      if (result.anchor) {
        const element = document.getElementById(result.anchor);
        if (element) {
          // First scroll to the anchor section
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          console.log(`📍 Scrolled to anchor: ${result.anchor}`);
          
          // After scrolling to anchor, highlight search terms ONLY within that section with context
          setTimeout(() => {
            highlightTextInSection(result, currentQuery, result.anchor);
          }, 800); // Delay to ensure scroll and DOM are stable
        } else {
          console.warn(`⚠️ Anchor element not found: ${result.anchor}`);
          // If anchor not found, fall back to general page highlighting with context
          highlightTextInSection(result, currentQuery);
        }
      } else {
        // No anchor, highlight search terms on the entire page with context
        highlightTextInSection(result, currentQuery);
      }
    }, 100);
  };

  console.log(`🎨 SearchDialog render: ${searchResults.length} results available`);

  return (
    <CommandDialog 
      open={isSearchOpen} 
      onOpenChange={setIsSearchOpen}
      shouldFilter={false}
    >
      <CommandInput
        placeholder="Search documentation..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {searchResults.length > 0 && (
          <CommandGroup heading="Documentation">
            {searchResults.map((result, index) => {
              const IconComponent = getCategoryIcon(result.category);
              const excerpt = extractRelevantExcerpt(result.content, searchQuery);
              const highlightedExcerpt = highlightMatchingTerms(excerpt, searchQuery);
              
              console.log(`📝 SearchDialog: Rendering result ${index + 1}: "${result.title}"`);
              
              return (
                <CommandItem
                  key={`${result.path}-${result.anchor || 'main'}`}
                  onSelect={() => handleSelect(result, searchQuery)}
                  className="cursor-pointer py-3"
                >
                  <IconComponent className="mr-3 h-4 w-4 flex-shrink-0 mt-1" />
                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{result.title}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {result.category}
                      </span>
                    </div>
                    <div 
                      className="text-xs text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: highlightedExcerpt }}
                    />
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
};
