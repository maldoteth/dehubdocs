
import { useState, useEffect, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { useLocation, useNavigate } from 'react-router-dom';

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  path: string;
  category: string;
  type: 'page' | 'blog' | 'section';
  matches?: Fuse.FuseResultMatch[];
  score?: number;
}

export interface SearchIndex {
  id: string;
  title: string;
  content: string;
  path: string;
  category: string;
  type: 'page' | 'blog' | 'section';
  keywords: string[];
}

const SEARCH_INDEX_KEY = 'docs-search-index';
const RECENT_SEARCHES_KEY = 'recent-searches';

// Comprehensive content index for all documentation
const createSearchIndex = (): SearchIndex[] => {
  return [
    // Main pages
    {
      id: 'docs-home',
      title: 'Documentation Home',
      content: 'Welcome to DeHub documentation. Learn about our decentralized infrastructure platform, token economics, DePIN network, and development tools.',
      path: '/docs',
      category: 'Main',
      type: 'page',
      keywords: ['home', 'documentation', 'welcome', 'getting started']
    },
    {
      id: 'overview',
      title: 'Overview',
      content: 'DeHub platform overview, architecture, core features, decentralized infrastructure, blockchain technology, Web3 ecosystem',
      path: '/docs/overview',
      category: 'Main',
      type: 'page',
      keywords: ['overview', 'platform', 'architecture', 'features']
    },
    {
      id: 'dapps',
      title: 'd\'App',
      content: 'Decentralized applications on DeHub platform, development tools, APIs, SDKs, smart contracts',
      path: '/docs/dapps',
      category: 'Main',
      type: 'page',
      keywords: ['dapp', 'decentralized', 'applications', 'development']
    },
    {
      id: 'games',
      title: 'Games',
      content: 'Gaming ecosystem on DeHub, play-to-earn, NFT integration, gaming infrastructure, tournaments',
      path: '/docs/games',
      category: 'Main',
      type: 'page',
      keywords: ['games', 'gaming', 'play-to-earn', 'nft', 'tournaments']
    },
    {
      id: 'token-economics',
      title: 'Token Economics & Emissions',
      content: 'DHB token economics, emission schedule, tokenomics model, distribution, supply mechanics',
      path: '/docs/token/economics',
      category: 'Token',
      type: 'page',
      keywords: ['token', 'economics', 'emissions', 'tokenomics', 'dhb']
    },
    {
      id: 'token-utility',
      title: 'Token Utility & Holder Benefits',
      content: 'DHB token utility, holder benefits, staking rewards, governance rights, ecosystem benefits',
      path: '/docs/token/utility',
      category: 'Token',
      type: 'page',
      keywords: ['utility', 'benefits', 'staking', 'governance', 'rewards']
    },
    {
      id: 'where-to-buy',
      title: 'Where to Buy',
      content: 'Buy DHB token on exchanges, trading pairs, liquidity pools, DEX, CEX listings',
      path: '/docs/token/where-to-buy',
      category: 'Token',
      type: 'page',
      keywords: ['buy', 'exchange', 'trading', 'dex', 'cex', 'liquidity']
    },
    {
      id: 'governance',
      title: 'Governance',
      content: 'DeHub governance system, voting mechanisms, proposals, DAO structure, community decisions',
      path: '/docs/token/governance',
      category: 'Token',
      type: 'page',
      keywords: ['governance', 'voting', 'dao', 'proposals', 'community']
    },
    {
      id: 'stake',
      title: 'Stake',
      content: 'Staking DHB tokens, staking rewards, validation, network security, staking pools',
      path: '/docs/token/stake',
      category: 'Token',
      type: 'page',
      keywords: ['stake', 'staking', 'rewards', 'validation', 'security']
    },
    {
      id: 'depin',
      title: 'DePIN',
      content: 'Decentralized Physical Infrastructure Network, hardware nodes, network participation, rewards',
      path: '/docs/depin',
      category: 'Main',
      type: 'page',
      keywords: ['depin', 'infrastructure', 'physical', 'nodes', 'hardware']
    },
    {
      id: 'ai-toolkits',
      title: 'AI Toolkits',
      content: 'Artificial intelligence tools, machine learning, AI development, APIs, toolkits',
      path: '/docs/ai-toolkits',
      category: 'Main',
      type: 'page',
      keywords: ['ai', 'artificial intelligence', 'machine learning', 'toolkits']
    },
    {
      id: 'advertising',
      title: 'Advertising',
      content: 'Advertising platform, ad campaigns, monetization, content creators, advertising revenue',
      path: '/docs/advertising',
      category: 'Main',
      type: 'page',
      keywords: ['advertising', 'ads', 'campaigns', 'monetization', 'revenue']
    },
    {
      id: 'team',
      title: 'Team',
      content: 'DeHub team members, founders, developers, advisors, company information',
      path: '/docs/team',
      category: 'Main',
      type: 'page',
      keywords: ['team', 'founders', 'developers', 'company', 'about']
    },
    {
      id: 'security',
      title: 'Security',
      content: 'Security measures, audits, smart contract security, platform security, best practices',
      path: '/docs/security',
      category: 'Main',
      type: 'page',
      keywords: ['security', 'audits', 'smart contracts', 'safety']
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      content: 'DeHub development roadmap, future plans, milestones, upcoming features, timeline',
      path: '/docs/roadmap',
      category: 'Main',
      type: 'page',
      keywords: ['roadmap', 'future', 'plans', 'milestones', 'development']
    },
    {
      id: 'brand-assets',
      title: 'Brand Assets',
      content: 'DeHub brand assets, logos, graphics, brand guidelines, marketing materials',
      path: '/docs/brand-assets',
      category: 'Main',
      type: 'page',
      keywords: ['brand', 'assets', 'logos', 'graphics', 'marketing']
    },
    {
      id: 'contact',
      title: 'Contact',
      content: 'Contact DeHub team, support, partnerships, business inquiries, community',
      path: '/docs/contact',
      category: 'Main',
      type: 'page',
      keywords: ['contact', 'support', 'partnerships', 'business', 'help']
    },
    {
      id: 'blog',
      title: 'Community Blog',
      content: 'DeHub community blog, latest news, updates, announcements, insights, stories',
      path: '/docs/blog',
      category: 'Blog',
      type: 'blog',
      keywords: ['blog', 'news', 'updates', 'announcements', 'community']
    }
  ];
};

export const useDocsSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize search index
  const searchIndex = useMemo(() => createSearchIndex(), []);

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    const options = {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'content', weight: 0.3 },
        { name: 'keywords', weight: 0.2 },
        { name: 'category', weight: 0.1 }
      ],
      threshold: 0.3,
      includeMatches: true,
      includeScore: true,
      minMatchCharLength: 2,
    };
    return new Fuse(searchIndex, options);
  }, [searchIndex]);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse recent searches:', e);
      }
    }
  }, []);

  // Debounced search function
  const performSearch = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      
      // Simulate slight delay for better UX
      setTimeout(() => {
        const searchResults = fuse.search(searchQuery);
        const formattedResults: SearchResult[] = searchResults.map((result, index) => ({
          id: result.item.id,
          title: result.item.title,
          content: result.item.content,
          path: result.item.path,
          category: result.item.category,
          type: result.item.type,
          matches: result.matches,
          score: result.score
        }));
        
        setResults(formattedResults);
        setIsLoading(false);
        setHighlightedIndex(-1);
      }, 100);
    },
    [fuse]
  );

  // Handle search query changes
  useEffect(() => {
    performSearch(query);
  }, [query, performSearch]);

  // Save search to recent searches
  const saveRecentSearch = useCallback((searchTerm: string) => {
    if (!searchTerm.trim()) return;
    
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  }, [recentSearches]);

  // Navigate to search result with highlighting
  const navigateToResult = useCallback((result: SearchResult, searchTerm?: string) => {
    if (searchTerm) {
      saveRecentSearch(searchTerm);
    }
    
    setIsOpen(false);
    setQuery('');
    
    // Store search term for highlighting
    if (searchTerm) {
      sessionStorage.setItem('search-highlight', searchTerm);
    }
    
    navigate(result.path);
  }, [navigate, saveRecentSearch]);

  // Keyboard navigation handlers
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && results[highlightedIndex]) {
          navigateToResult(results[highlightedIndex], query);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setQuery('');
        break;
    }
  }, [isOpen, results, highlightedIndex, navigateToResult, query]);

  // Global keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Add keyboard navigation when modal is open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  return {
    isOpen,
    setIsOpen,
    query,
    setQuery,
    results,
    isLoading,
    recentSearches,
    highlightedIndex,
    navigateToResult,
    saveRecentSearch,
    clearRecentSearches: () => {
      setRecentSearches([]);
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    }
  };
};
