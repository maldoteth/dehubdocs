
import { useState, useEffect, useMemo } from 'react';
import { searchContent, SearchItem } from '@/utils/searchIndex';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = useMemo(() => {
    return searchContent(query);
  }, [query]);

  const hasResults = results.length > 0;

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateResults = (direction: 'up' | 'down') => {
    if (!hasResults) return;
    
    if (direction === 'down') {
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else {
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    }
  };

  const selectResult = (index?: number) => {
    const targetIndex = index ?? selectedIndex;
    const result = results[targetIndex];
    if (result) {
      window.location.href = result.path;
      setIsOpen(false);
      setQuery('');
    }
  };

  return {
    query,
    setQuery,
    results,
    hasResults,
    isOpen,
    setIsOpen,
    selectedIndex,
    navigateResults,
    selectResult
  };
}
