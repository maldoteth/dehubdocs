
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

// Helper function to find and highlight text in the page
const highlightTextInPage = (searchQuery: string) => {
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
  
  // Find and highlight the first occurrence of any search term
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        // Skip script and style elements
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
      if (textContent.includes(term)) {
        const parent = node.parentElement;
        if (parent) {
          const text = node.textContent || '';
          const lowerText = text.toLowerCase();
          const index = lowerText.indexOf(term);
          
          if (index !== -1) {
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
            break;
          }
        }
      }
    }
  }
  
  // Scroll to the first match
  if (firstMatch) {
    setTimeout(() => {
      firstMatch.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
      });
      console.log(`🎯 Scrolled to and highlighted search term in page`);
    }, 200);
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
    
    // Handle scrolling and highlighting
    setTimeout(() => {
      if (anchor) {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          console.log(`📍 Scrolled to anchor: ${anchor}`);
          
          // After scrolling to anchor, highlight the search terms
          setTimeout(() => {
            highlightTextInPage(currentQuery);
          }, 300);
        } else {
          console.warn(`⚠️ Anchor element not found: ${anchor}`);
          // If anchor not found, just highlight the search terms on the page
          highlightTextInPage(currentQuery);
        }
      } else {
        // No anchor, just highlight search terms on the page
        highlightTextInPage(currentQuery);
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
