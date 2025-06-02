
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

const highlightMatchingTerms = (text: string, query: string) => {
  if (!query.trim()) return text;
  
  const queryTerms = query.toLowerCase().split(' ').filter(term => term.length > 1);
  let highlightedText = text;
  
  queryTerms.forEach(term => {
    const regex = new RegExp(`(${term})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  });
  
  return highlightedText;
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
    performSearch(searchQuery);
  }, [searchQuery, performSearch]);

  const handleSelect = (path: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  return (
    <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <CommandInput
        placeholder="Search documentation..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {searchResults.length > 0 && (
          <CommandGroup heading="Documentation">
            {searchResults.map((result) => {
              const IconComponent = getCategoryIcon(result.category);
              const excerpt = extractRelevantExcerpt(result.content, searchQuery);
              const highlightedExcerpt = highlightMatchingTerms(excerpt, searchQuery);
              
              return (
                <CommandItem
                  key={result.path}
                  value={result.title}
                  onSelect={() => handleSelect(result.path)}
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
