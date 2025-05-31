
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
              return (
                <CommandItem
                  key={result.path}
                  value={result.title}
                  onSelect={() => handleSelect(result.path)}
                  className="cursor-pointer"
                >
                  <IconComponent className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span className="font-medium">{result.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {result.category}
                    </span>
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
