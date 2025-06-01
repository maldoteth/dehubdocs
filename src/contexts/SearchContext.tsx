
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

// Real content extracted from documentation pages
const searchData: SearchItem[] = [
  {
    title: 'Home',
    path: '/docs',
    content: 'Welcome to DeHub Documentation everything you need to use integrate build scale platform quick start guides advanced configurations API reference development resources fast reliable secure dev support community building safest speediest chains L1s EVM L2s token holders run nodes globally power network earn rewards fund community projects initiatives established supportive community since 2021 Basescan Base network BSCScan BNB Smart Chain DHBScan DeHub network explorer dehub.io application',
    category: 'Main'
  },
  {
    title: 'Overview',
    path: '/docs/overview',
    content: 'DeHub Overview decentralized streaming gaming marketplace token utility governance community driven blockchain technology Web3 infrastructure DePIN network physical computing resources user-centric protocols censorship resistance content creators viewers monetization revenue sharing next-generation gaming streaming protocol sustainable token economy DHB tokens ecosystem platform capabilities features building decentralized applications',
    category: 'Main'
  },
  {
    title: 'Stream',
    path: '/docs/dapps',
    content: 'Stream dapp user-centric streaming protocol empower creators viewers censorship resistance moderation mining watch-to-earn content locking PPV pay-per-view token-gated subscriber data ownership IPFS NFT minting AI content moderation adult content 18+ zone bounty tips leaderboards ad revenue share badge honour DHB tokens tipping services decentralised moderation upload video live stream creator profile channel community chat forum categories locked content streaming platform video content live broadcasting decentralized video platform blockchain streaming content creation monetization creator economy viewer rewards tokenomics streaming rewards content discovery social features community building live chat interactive streaming censorship resistant platform',
    category: 'dApps'
  },
  {
    title: 'Games',
    path: '/docs/games',
    content: 'Games sustainable play win earn no dilution inflation arcade casual games web3 gaming Whack A Schifff Gas Guzzler Rocket Blaster Street Slayer Last Chad Standing UFC stars battle royale memes skins arcade.dehub.net lastchadstanding.com LCFC Lean Chad Fight Club genesis NFT play-to-earn tournaments leaderboards achievements rewards gaming economy virtual assets digital collectibles game marketplace competitive gaming esports blockchain games NFT gaming assets gaming tokenomics virtual worlds metaverse gaming community gaming tournaments competitive play',
    category: 'Main'
  },
  {
    title: 'Token Economics & Emissions',
    path: '/docs/token/economics',
    content: 'Token economics emissions tokenomics distribution supply DHB DeHub token allocation vesting schedule inflation deflation burn mechanisms staking rewards governance tokens utility value proposition economic model sustainability token metrics circulation market cap total supply max supply distribution schedule team allocation community treasury ecosystem development marketing partnerships advisors strategic reserves liquidity mining yield farming staking APY annual percentage yield token distribution model economic incentives token utility mechanisms burn rate inflation control deflationary mechanisms staking economics reward distribution governance participation economic sustainability long-term value creation token holder benefits ecosystem growth incentives network effects value accrual mechanisms',
    category: 'Token'
  },
  {
    title: 'Token Utility & Holder Benefits',
    path: '/docs/token/utility',
    content: 'Token utility benefits holders rewards staking governance voting premium features badge honour exclusive access discounts revenue sharing protocol fees community rewards loyalty program tier system unlock benefits holding requirements DHB token utility use cases payment method transaction fees governance rights staking rewards premium subscriptions exclusive content access voting power platform benefits holder privileges community governance participation revenue sharing mechanisms premium tier access exclusive features discount benefits loyalty rewards token-gated content utility token ecosystem benefits network participation rewards',
    category: 'Token'
  },
  {
    title: 'Where to Buy Token',
    path: '/docs/token/where-to-buy',
    content: 'Buy token exchange purchase trade DEX CEX Uniswap Pancakeswap Base BNB chain decentralized exchange centralized exchange trading pairs liquidity pools swap tokens marketplace official tradable tokenomics on-chain transactions Base network BNB Smart Chain Ethereum Polygon Arbitrum Optimism layer 2 scaling solutions DEX aggregators slippage tolerance transaction fees gas fees network fees wallet connection MetaMask Trust Wallet WalletConnect exchange listings trading platforms cryptocurrency exchanges DeFi protocols automated market makers AMM liquidity provision trading volume price discovery market making arbitrage opportunities cross-chain swaps bridge protocols multi-chain compatibility',
    category: 'Token'
  },
  {
    title: 'Token Governance',
    path: '/docs/token/governance',
    content: 'Governance voting proposals DAO community decisions stakeholder voting rights consensus mechanisms protocol upgrades community governance treasury management proposal submission voting power delegation governance tokens democratic process decentralized autonomous organization on-chain governance off-chain governance snapshot voting Aragon Governor contract timelock executor community treasury allocation protocol parameters fee structures upgrade mechanisms governance participation community decision making decentralized governance mechanisms voting procedures proposal lifecycle governance token rights stakeholder representation democratic processes consensus building community involvement protocol evolution governance framework',
    category: 'Token'
  },
  {
    title: 'DePIN',
    path: '/docs/depin',
    content: 'DePIN decentralized physical infrastructure network shared computing power miners data hosting transcoding delivery mobile devices PCs servers contributors revenue pool inflation-free model proof-of-computation verification rewards mining nodes validators infrastructure providers network security scalability bandwidth sharing storage sharing compute sharing GPU mining CPU mining hardware requirements staking amounts 100000 DHB mobile phones 1000000 DHB PCs laptops 10000000 DHB dedicated servers depin-coordinator.dehub.net miner client registration device allocation task assignment reward calculator dynamic scaling',
    category: 'Main'
  },
  {
    title: 'Team',
    path: '/docs/team',
    content: 'Team members founders developers contributors advisors core team leadership development team community managers marketing partnerships business development technical expertise blockchain experience startup background industry veterans software engineers product managers designers UX UI researchers data scientists DevOps engineers security auditors legal advisors regulatory compliance business strategy tokenomics specialists team composition leadership structure advisory board technical team business development marketing team community management product development engineering team design team operations team executive leadership founding team',
    category: 'Main'
  },
  {
    title: 'Security',
    path: '/docs/security',
    content: 'Security audit smart contracts safety measures code review vulnerability assessment penetration testing security best practices multi-signature wallets cold storage encryption data protection privacy compliance regulatory standards security protocols incident response bug bounty program responsible disclosure security researchers smart contract audits formal verification code coverage testing automated testing continuous integration deployment security OWASP top 10 cybersecurity frameworks blockchain security smart contract security audit reports vulnerability management security assessment penetration testing security monitoring threat detection incident response security policies compliance frameworks',
    category: 'Main'
  },
  {
    title: 'Contact',
    path: '/docs/contact',
    content: 'Contact support help assistance customer service technical support business inquiries partnerships media press investor relations community management social media Discord Telegram Twitter LinkedIn GitHub email contact form support tickets FAQ frequently asked questions troubleshooting documentation feedback suggestions feature requests bug reports customer support technical assistance business development partnerships media inquiries investor relations community engagement social media presence communication channels support resources help documentation customer service contact information business contacts tech@dehub.net marketing@dehub.net hr@dehub.net telegram t.me/portal discord dehub.io/d Dehub_Turkish Dehub_Arabic holders whales community channels',
    category: 'Main'
  },
  {
    title: 'Brand Assets',
    path: '/docs/brand-assets',
    content: 'Brand assets logo guidelines design resources download PNG SVG EPS vector formats brand identity color palette typography usage guidelines marketing materials presentation templates brand package contact brand team official branding trademark copyright intellectual property press kit media assets high resolution images logos icons fonts brand colors hex codes RGB CMYK pantone brand voice tone messaging style guide logo downloads high-quality files various formats use cases brand guidelines style guide design resources marketing materials press kit media assets brand identity visual identity corporate identity brand standards DeHub logo primary alternative brand guidelines presentation',
    category: 'Main'
  },
  {
    title: 'Terms & Disclaimers',
    path: '/docs/terms',
    content: 'Terms conditions disclaimers legal privacy policy user agreement service terms liability limitation intellectual property rights data protection GDPR compliance cookie policy age restrictions prohibited activities termination conditions governing law dispute resolution arbitration terms of service privacy notice data processing user rights consent withdrawal cookies tracking analytics third party services legal compliance regulatory requirements jurisdiction applicable law enforcement legal documentation terms of use privacy policy user agreement service agreement legal disclaimers liability limitations intellectual property data protection compliance regulatory compliance',
    category: 'Legal'
  },
  {
    title: 'API Endpoints',
    path: '/docs/api/endpoints',
    content: 'API endpoints reference documentation authentication bearer token authorization GET POST PUT DELETE users data pagination filters response schemas curl examples JSON API key management rate limiting error codes 400 401 403 404 429 500 base URL api.yourplatform.com REST API endpoints user management data retrieval filtering sorting pagination request examples response examples error handling API documentation developer resources integration guides SDK libraries HTTP methods query parameters request headers response headers status codes API versioning',
    category: 'Developer'
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
    const queryTerms = lowercaseQuery.split(' ').filter(term => term.length > 2);
    
    const results = searchData.filter(item => {
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();
      const categoryLower = item.category.toLowerCase();
      
      // Check for exact phrase match first
      if (titleLower.includes(lowercaseQuery) || 
          contentLower.includes(lowercaseQuery) || 
          categoryLower.includes(lowercaseQuery)) {
        return true;
      }
      
      // Check for individual term matches
      return queryTerms.some(term => 
        titleLower.includes(term) || 
        contentLower.includes(term) || 
        categoryLower.includes(term)
      );
    });

    // Enhanced relevance scoring
    results.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const aContent = a.content.toLowerCase();
      const bContent = b.content.toLowerCase();
      
      // Exact title match gets highest priority
      const aExactTitle = aTitle === lowercaseQuery;
      const bExactTitle = bTitle === lowercaseQuery;
      if (aExactTitle && !bExactTitle) return -1;
      if (!aExactTitle && bExactTitle) return 1;
      
      // Title contains query gets second priority
      const aTitleMatch = aTitle.includes(lowercaseQuery);
      const bTitleMatch = bTitle.includes(lowercaseQuery);
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      
      // Count term matches for better relevance
      const aTermMatches = queryTerms.filter(term => 
        aTitle.includes(term) || aContent.includes(term)
      ).length;
      const bTermMatches = queryTerms.filter(term => 
        bTitle.includes(term) || bContent.includes(term)
      ).length;
      
      return bTermMatches - aTermMatches;
    });

    setSearchResults(results.slice(0, 10)); // Limit to top 10 results
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
