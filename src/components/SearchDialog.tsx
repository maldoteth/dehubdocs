
import React, { useEffect, useRef } from 'react';
import { Search, FileText, Hash, ArrowRight } from 'lucide-react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { useSearch } from '@/hooks/useSearch';

export function SearchDialog() {
  const {
    query,
    setQuery,
    results,
    hasResults,
    isOpen,
    setIsOpen,
    selectedIndex,
    navigateResults,
    selectResult
  } = useSearch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateResults('down');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateResults('up');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      selectResult();
    }
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="bg-yellow-200 text-royal-blue rounded px-1">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <CommandDialog 
      open={isOpen} 
      onOpenChange={setIsOpen}
      shouldFilter={false}
    >
      <CommandInput
        ref={inputRef}
        placeholder="Search documentation..."
        value={query}
        onValueChange={setQuery}
        onKeyDown={handleKeyDown}
        className="text-base"
      />
      <CommandList>
        {!hasResults && query && (
          <CommandEmpty>
            <div className="flex flex-col items-center py-6 text-center">
              <Search className="w-8 h-8 text-slate-400 mb-2" />
              <p className="text-slate-600">No results found for "{query}"</p>
              <p className="text-sm text-slate-400 mt-1">
                Try different keywords or check your spelling
              </p>
            </div>
          </CommandEmpty>
        )}
        
        {hasResults && (
          <CommandGroup heading="Documentation">
            {results.map((result, index) => (
              <CommandItem
                key={result.id}
                value={result.id}
                onSelect={() => selectResult(index)}
                className={`cursor-pointer ${
                  index === selectedIndex ? 'bg-accent' : ''
                }`}
              >
                <div className="flex items-start space-x-3 w-full">
                  <div className="flex-shrink-0 mt-0.5">
                    {result.type === 'page' ? (
                      <FileText className="w-4 h-4 text-royal-blue/70" />
                    ) : (
                      <Hash className="w-4 h-4 text-royal-blue/70" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-royal-blue truncate">
                        {highlightMatch(result.title, query)}
                      </h4>
                      <ArrowRight className="w-3 h-3 text-slate-400 flex-shrink-0 ml-2" />
                    </div>
                    {result.content && (
                      <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                        {highlightMatch(
                          result.content.substring(0, 120) + (result.content.length > 120 ? '...' : ''),
                          query
                        )}
                      </p>
                    )}
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {result.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {result.path}
                      </span>
                    </div>
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
      
      <div className="border-t border-slate-200 px-3 py-2">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span>⌘K to search</span>
        </div>
      </div>
    </CommandDialog>
  );
}
