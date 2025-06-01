
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

// Comprehensive search data with full content from documentation pages
const searchData: SearchItem[] = [
  {
    title: 'Home',
    path: '/docs',
    content: 'Welcome to DeHub Documentation hub decentralized streaming platform blockchain gaming marketplace ecosystem Web3 DePIN physical infrastructure network community developers getting started overview features capabilities',
    category: 'Main'
  },
  {
    title: 'Overview',
    path: '/docs/overview',
    content: 'DeHub Overview platform ecosystem decentralized applications streaming gaming marketplace token utility governance community driven blockchain technology Web3 infrastructure DePIN network physical computing resources user-centric protocols censorship resistance content creators viewers monetization revenue sharing',
    category: 'Main'
  },
  {
    title: 'Stream',
    path: '/docs/dapps',
    content: 'Stream dapp user-centric streaming protocol empower creators viewers simultaneously censorship resistance moderation mining watch-to-earn content locking PPV pay-per-view token-gated subscriber data ownership IPFS NFT minting AI content moderation adult content 18+ zone bounty tips leaderboards ad revenue share badge honour DHB tokens tipping services decentralised moderation upload video live stream creator profile channel community chat forum categories locked content pay per view bounty rewards streaming platform video content live broadcasting',
    category: 'Main'
  },
  {
    title: 'Games',
    path: '/docs/games',
    content: 'Games gaming platform blockchain Web3 gaming NFT collectibles play-to-earn game development community tournaments leaderboards achievements rewards gaming economy virtual assets digital collectibles game marketplace competitive gaming esports',
    category: 'Main'
  },
  {
    title: 'Token Economics & Emissions',
    path: '/docs/token/economics',
    content: 'Token economics emissions tokenomics distribution supply DHB DeHub token allocation vesting schedule inflation deflation burn mechanisms staking rewards governance tokens utility value proposition economic model sustainability token metrics circulation market cap total supply max supply distribution schedule team allocation community treasury ecosystem development marketing partnerships advisors strategic reserves liquidity mining yield farming staking APY annual percentage yield',
    category: 'Token'
  },
  {
    title: 'Token Utility & Holder Benefits',
    path: '/docs/token/utility',
    content: 'Token utility benefits holders rewards staking governance voting premium features badge honour exclusive access discounts revenue sharing protocol fees community rewards loyalty program tier system unlock benefits holding requirements DHB token utility use cases payment method transaction fees governance rights staking rewards premium subscriptions exclusive content access voting power platform benefits',
    category: 'Token'
  },
  {
    title: 'Where to Buy Token',
    path: '/docs/token/where-to-buy',
    content: 'Buy token exchange purchase trade DEX CEX Uniswap Pancakeswap Base BNB chain decentralized exchange centralized exchange trading pairs liquidity pools swap tokens marketplace official tradable tokenomics on-chain transactions Base network BNB Smart Chain Ethereum Polygon Arbitrum Optimism layer 2 scaling solutions DEX aggregators slippage tolerance transaction fees gas fees network fees wallet connection MetaMask Trust Wallet WalletConnect',
    category: 'Token'
  },
  {
    title: 'Token Governance',
    path: '/docs/token/governance',
    content: 'Governance voting proposals DAO community decisions stakeholder voting rights consensus mechanisms protocol upgrades community governance treasury management proposal submission voting power delegation governance tokens democratic process decentralized autonomous organization on-chain governance off-chain governance snapshot voting Aragon Governor contract timelock executor community treasury allocation protocol parameters fee structures upgrade mechanisms',
    category: 'Token'
  },
  {
    title: 'DePIN',
    path: '/docs/depin',
    content: 'DePIN decentralized physical infrastructure network hardware nodes computing resources distributed network blockchain infrastructure physical devices edge computing network rewards mining nodes validators infrastructure providers network security scalability bandwidth sharing storage sharing compute sharing GPU mining CPU mining proof of work proof of stake consensus mechanisms network topology mesh networks peer-to-peer networking IoT devices smart contracts oracles data feeds real-world assets tokenization',
    category: 'Main'
  },
  {
    title: 'Team',
    path: '/docs/team',
    content: 'Team members founders developers contributors advisors core team leadership development team community managers marketing partnerships business development technical expertise blockchain experience startup background industry veterans software engineers product managers designers UX UI researchers data scientists DevOps engineers security auditors legal advisors regulatory compliance business strategy tokenomics specialists',
    category: 'Main'
  },
  {
    title: 'Security',
    path: '/docs/security',
    content: 'Security audit smart contracts safety measures code review vulnerability assessment penetration testing security best practices multi-signature wallets cold storage encryption data protection privacy compliance regulatory standards security protocols incident response bug bounty program responsible disclosure security researchers smart contract audits formal verification code coverage testing automated testing continuous integration deployment security OWASP top 10 cybersecurity frameworks',
    category: 'Main'
  },
  {
    title: 'Contact',
    path: '/docs/contact',
    content: 'Contact support help assistance customer service technical support business inquiries partnerships media press investor relations community management social media Discord Telegram Twitter LinkedIn GitHub email contact form support tickets FAQ frequently asked questions troubleshooting documentation feedback suggestions feature requests bug reports',
    category: 'Main'
  },
  {
    title: 'Brand Assets',
    path: '/docs/brand-assets',
    content: 'Brand assets logo guidelines design resources download PNG SVG EPS vector formats brand identity color palette typography usage guidelines marketing materials presentation templates brand package contact brand team official branding trademark copyright intellectual property press kit media assets high resolution images logos icons fonts brand colors hex codes RGB CMYK pantone brand voice tone messaging style guide',
    category: 'Main'
  },
  {
    title: 'Terms & Disclaimers',
    path: '/docs/terms',
    content: 'Terms conditions disclaimers legal privacy policy user agreement service terms liability limitation intellectual property rights data protection GDPR compliance cookie policy age restrictions prohibited activities termination conditions governing law dispute resolution arbitration terms of service privacy notice data processing user rights consent withdrawal cookies tracking analytics third party services legal compliance regulatory requirements jurisdiction applicable law enforcement',
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

    // Sort results by relevance (title matches first, then content matches)
    results.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(lowercaseQuery);
      const bTitle = b.title.toLowerCase().includes(lowercaseQuery);
      
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      return 0;
    });

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
