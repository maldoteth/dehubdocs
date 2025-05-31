
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchItem {
  title: string;
  path: string;
  content: string;
  category: string;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchItem[];
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  performSearch: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Static search data - in a real app, this could come from an API or be generated at build time
const searchData: SearchItem[] = [
  {
    title: 'Home',
    path: '/docs',
    content: 'Welcome documentation overview getting started',
    category: 'Main'
  },
  {
    title: 'Overview',
    path: '/docs/overview',
    content: 'Overview platform features capabilities introduction',
    category: 'Main'
  },
  {
    title: 'Token Economics & Emissions',
    path: '/docs/token/economics',
    content: 'Token economics emissions tokenomics distribution supply',
    category: 'Token'
  },
  {
    title: 'Token Utility & Holder Benefits',
    path: '/docs/token/utility',
    content: 'Token utility benefits holders rewards staking',
    category: 'Token'
  },
  {
    title: 'Where to Buy Token',
    path: '/docs/token/where-to-buy',
    content: 'Buy token exchange purchase trade DEX CEX',
    category: 'Token'
  },
  {
    title: 'Token Governance',
    path: '/docs/token/governance',
    content: 'Governance voting proposals DAO community decisions',
    category: 'Token'
  },
  {
    title: 'DePIN',
    path: '/docs/depin',
    content: 'DePIN decentralized physical infrastructure network',
    category: 'Main'
  },
  {
    title: 'Team',
    path: '/docs/team',
    content: 'Team members founders developers contributors',
    category: 'Main'
  },
  {
    title: 'Security',
    path: '/docs/security',
    content: 'Security audit smart contracts safety measures',
    category: 'Main'
  },
  {
    title: 'Brand Assets',
    path: '/docs/brand-assets',
    content: 'Brand assets logo guidelines design resources',
    category: 'Main'
  },
  {
    title: 'Terms & Disclaimers',
    path: '/docs/terms',
    content: 'Terms conditions disclaimers legal privacy policy',
    category: 'Legal'
  }
];

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const results = searchData.filter(item =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.content.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
    );

    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      searchResults,
      isSearchOpen,
      setIsSearchOpen,
      performSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
