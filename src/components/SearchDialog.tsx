
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
  
  console.log(`🎯 Enhanced search for result: "${searchResult?.title}"`);
  console.log(`🎯 Target section: ${sectionId || 'none specified'}`);
  console.log(`🔍 Search query: "${searchQuery}"`);
  
  // Remove any existing highlights first
  const existingHighlights = document.querySelectorAll('.search-highlight');
  existingHighlights.forEach(el => {
    const parent = el.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(el.textContent || ''), el);
      parent.normalize();
    }
  });
  
  // If we have a specific section ID, scroll to it first
  if (sectionId) {
    // Handle roadmap sections - switch to the correct tab first
    if (sectionId.includes('2021') || sectionId.includes('2022') || sectionId.includes('2023') || sectionId.includes('2024') || sectionId.includes('2025')) {
      const year = sectionId.split('-')[1]; // Extract year from ID like "q1-2025"
      console.log(`🗓️ Detected roadmap section for year: ${year}`);
      
      // Find and click the correct year tab
      const yearTab = document.querySelector(`[value="${year}"]`);
      if (yearTab) {
        console.log(`🔄 Switching to ${year} tab`);
        (yearTab as HTMLElement).click();
        
        // Wait for tab content to render before scrolling
        setTimeout(() => {
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            console.log(`📍 Found target section after tab switch: ${sectionId}`);
            
            sectionElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
            
            // Add temporary highlight to the entire section
            sectionElement.classList.add('bg-blue-100', 'border-l-4', 'border-blue-400', 'pl-4', 'rounded-r');
            
            // Remove the section highlight after 3 seconds
            setTimeout(() => {
              sectionElement.classList.remove('bg-blue-100', 'border-l-4', 'border-blue-400', 'pl-4', 'rounded-r');
            }, 3000);
          } else {
            console.warn(`⚠️ Section element not found after tab switch: ${sectionId}`);
          }
        }, 300);
        return;
      }
    }
    
    // For non-roadmap sections, handle normally
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      console.log(`📍 Found target section: ${sectionId}`);
      
      // Scroll to the section immediately
      sectionElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      
      // Add temporary highlight to the entire section
      sectionElement.classList.add('bg-blue-100', 'border-l-4', 'border-blue-400', 'pl-4', 'rounded-r');
      
      // Remove the section highlight after 3 seconds
      setTimeout(() => {
        sectionElement.classList.remove('bg-blue-100', 'border-l-4', 'border-blue-400', 'pl-4', 'rounded-r');
      }, 3000);
      
      // Now search for specific terms within this section only
      const queryTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 1);
      
      const walker = document.createTreeWalker(
        sectionElement,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );
      
      let firstMatch: Element | null = null;
      let node;
      
      // Look for query terms within the target section
      while (node = walker.nextNode()) {
        const textContent = node.textContent?.toLowerCase() || '';
        
        for (const term of queryTerms) {
          if (term.length > 2 && textContent.includes(term)) {
            const parent = node.parentElement;
            if (parent) {
              const text = node.textContent || '';
              const lowerText = text.toLowerCase();
              const index = lowerText.indexOf(term);
              
              if (index !== -1) {
                console.log(`✅ Found term "${term}" in target section`);
                
                const before = text.substring(0, index);
                const match = text.substring(index, index + term.length);
                const after = text.substring(index + term.length);
                
                const span = document.createElement('span');
                span.className = 'search-highlight bg-yellow-300 px-1 rounded font-semibold';
                span.textContent = match;
                
                const fragment = document.createDocumentFragment();
                if (before) fragment.appendChild(document.createTextNode(before));
                fragment.appendChild(span);
                if (after) fragment.appendChild(document.createTextNode(after));
                
                parent.replaceChild(fragment, node);
                
                if (!firstMatch) {
                  firstMatch = span;
                }
                
                // Reset walker since we modified the DOM
                walker.currentNode = sectionElement;
                break;
              }
            }
          }
        }
      }
      
      // If we found specific matches, scroll to the first one after a delay
      if (firstMatch) {
        setTimeout(() => {
          firstMatch.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
          
          // Add extra emphasis to the first match
          firstMatch.classList.add('bg-blue-400', 'shadow-lg');
          firstMatch.classList.remove('bg-yellow-300');
          
          setTimeout(() => {
            firstMatch.classList.remove('bg-blue-400', 'shadow-lg');
            firstMatch.classList.add('bg-yellow-300');
            
            setTimeout(() => {
              firstMatch.classList.remove('bg-yellow-300');
            }, 3000);
          }, 2000);
        }, 1000);
      }
      
      return;
    } else {
      console.warn(`⚠️ Section element not found: ${sectionId}`);
    }
  }
  
  // Fallback: search the entire page if no section specified or section not found
  console.log(`🔍 Performing fallback search on entire page`);
  
  const queryTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 1);
  
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  
  let firstMatch: Element | null = null;
  let node;
  
  while (node = walker.nextNode()) {
    const textContent = node.textContent?.toLowerCase() || '';
    
    for (const term of queryTerms) {
      if (term.length > 2 && textContent.includes(term)) {
        const parent = node.parentElement;
        if (parent) {
          const text = node.textContent || '';
          const lowerText = text.toLowerCase();
          const index = lowerText.indexOf(term);
          
          if (index !== -1) {
            console.log(`✅ Found fallback term "${term}"`);
            
            const before = text.substring(0, index);
            const match = text.substring(index, index + term.length);
            const after = text.substring(index + term.length);
            
            const span = document.createElement('span');
            span.className = 'search-highlight bg-yellow-300 px-1 rounded font-semibold';
            span.textContent = match;
            
            const fragment = document.createDocumentFragment();
            if (before) fragment.appendChild(document.createTextNode(before));
            fragment.appendChild(span);
            if (after) fragment.appendChild(document.createTextNode(after));
            
            parent.replaceChild(fragment, node);
            
            if (!firstMatch) {
              firstMatch = span;
            }
            
            // Reset walker since we modified the DOM
            walker.currentNode = document.body;
            break;
          }
        }
      }
    }
  }
  
  if (firstMatch) {
    setTimeout(() => {
      firstMatch.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
    }, 500);
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
    console.log(`🎯 Target anchor: ${result.anchor || 'none'}`);
    
    setIsSearchOpen(false);
    const currentQuery = query || searchQuery;
    setSearchQuery('');
    
    // Navigate to the path first
    navigate(result.path);
    
    // Handle scrolling and highlighting with proper section targeting
    setTimeout(() => {
      if (result.anchor) {
        console.log(`🎯 Processing anchor-based navigation to: ${result.anchor}`);
        // We have a specific section to target
        highlightTextInSection(result, currentQuery, result.anchor);
      } else {
        console.log(`🎯 Processing general page navigation`);
        // No specific anchor, search the entire page
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
              
              console.log(`📝 SearchDialog: Rendering result ${index + 1}: "${result.title}" (anchor: ${result.anchor || 'none'})`);
              
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
