
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

// Helper function to find and highlight text in a specific section
const highlightTextInSection = (searchQuery: string, sectionId?: string) => {
  if (!searchQuery.trim()) return;
  
  const queryTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 1);
  if (queryTerms.length === 0) return;
  
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
      console.log(`📍 Section element found:`, sectionElement);
    } else {
      console.warn(`⚠️ Section element not found: ${sectionId}`);
      return; // Don't search if the target section doesn't exist
    }
  }
  
  // Find and highlight the first occurrence of any search term within the RESTRICTED scope
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
  
  console.log(`🔍 Starting search for terms: ${queryTerms.join(', ')} in scope:`, searchScope);
  
  while (node = walker.nextNode()) {
    const textContent = node.textContent?.toLowerCase() || '';
    
    for (const term of queryTerms) {
      if (textContent.includes(term)) {
        const parent = node.parentElement;
        if (parent) {
          const text = node.textContent || '';
          const lowerText = text.toLowerCase();
          const index = lowerText.indexOf(term);
          
          if (index !== -1) {
            console.log(`✅ Found "${term}" in text: "${text.substring(0, 50)}..."`);
            
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
            
            if (!firstMatch) {
              firstMatch = span;
              console.log(`🎯 Setting first match to:`, span);
            }
            break;
          }
        }
      }
    }
  }
  
  // Scroll to the first match and add temporary prominent highlighting
  if (firstMatch) {
    console.log(`📍 Scrolling to first match within ${sectionId ? 'section ' + sectionId : 'page'}`);
    setTimeout(() => {
      firstMatch.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
      console.log(`🎯 Scrolled to and highlighted search term in ${sectionId ? 'section ' + sectionId : 'page'}`);
      
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
    console.log(`❌ No matches found for terms: ${queryTerms.join(', ')} in ${sectionId ? 'section ' + sectionId : 'page'}`);
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

  const handleSelect = (path: string, anchor?: string, query?: string) => {
    console.log(`🚀 SearchDialog: Navigating to ${path}${anchor ? '#' + anchor : ''} with query "${query}"`);
    setIsSearchOpen(false);
    const currentQuery = query || searchQuery;
    setSearchQuery('');
    
    // Navigate to the path first
    navigate(path);
    
    // Handle scrolling and highlighting with proper priority for anchors
    setTimeout(() => {
      if (anchor) {
        const element = document.getElementById(anchor);
        if (element) {
          // First scroll to the anchor section
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          console.log(`📍 Scrolled to anchor: ${anchor}`);
          
          // After scrolling to anchor, highlight search terms ONLY within that section
          setTimeout(() => {
            highlightTextInSection(currentQuery, anchor);
          }, 800); // Even longer delay to ensure scroll and DOM are stable
        } else {
          console.warn(`⚠️ Anchor element not found: ${anchor}`);
          // If anchor not found, fall back to general page highlighting
          highlightTextInSection(currentQuery);
        }
      } else {
        // No anchor, highlight search terms on the entire page
        highlightTextInSection(currentQuery);
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
                  onSelect={() => handleSelect(result.path, result.anchor, searchQuery)}
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
