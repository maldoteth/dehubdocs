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

// Real content extracted from actual documentation pages
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
    title: 'Contact Us',
    path: '/docs/contact',
    content: 'Contact support help assistance tech@dehub.net marketing@dehub.net hr@dehub.net technical support business inquiries partnerships media press investor relations Telegram portal https://t.me/portal Discord dehub.io/d Turkish community Dehub_Turkish Arabic community Dehub_Arabic holders whales exclusive channels token holders community management customer service business development media inquiries community engagement social media presence communication channels support resources',
    category: 'Main'
  },
  {
    title: 'Stream',
    path: '/docs/dapps',
    content: 'Stream dapp decentralized streaming platform user-centric protocol empower creators viewers censorship resistance content moderation watch-to-earn watch2earn content locking PPV pay-per-view token-gated subscriber data ownership IPFS NFT minting AI content moderation adult content 18+ zone bounty tips leaderboards ad revenue share badge honour badge of honour DHB tokens tipping services decentralised moderation upload video live stream creator profile channel community chat forum categories locked content streaming rewards creator economy viewer rewards tokenomics streaming monetization content discovery social features live chat interactive streaming',
    category: 'dApps'
  },
  {
    title: 'Games',
    path: '/docs/games',
    content: 'Games sustainable play-to-earn play2earn no dilution inflation arcade casual games web3 gaming Whack A Schifff Gas Guzzler Rocket Blaster Street Slayer Last Chad Standing UFC stars battle royale memes skins arcade.dehub.net lastchadstanding.com LCFC Lean Chad Fight Club genesis NFT tournaments leaderboards achievements rewards gaming economy virtual assets digital collectibles game marketplace competitive gaming esports blockchain games NFT gaming assets gaming tokenomics virtual worlds metaverse gaming community',
    category: 'Main'
  },
  {
    title: 'Token Economics & Emissions',
    path: '/docs/token/economics',
    content: 'Token economics emissions tokenomics DHB DeHub token BASE BNB chain total supply 8000000000 8 billion burn LGE 3360000000 3.36 billion circulating supply 2154403105 final supply 1000000000 1 billion burn schedule 42% launch periodic dynamic team allocation 8% operational allocation research development partnerships licensing burn wallet 42% buy back stakeholders proportion holdings net negative emission FDV fully diluted valuation no premine no VCs venture capital contributors rewards tradable allocation percentage',
    category: 'Token'
  },
  {
    title: 'Token Utility & Holder Benefits',
    path: '/docs/token/utility',
    content: 'Token utility benefits holders DHB access games content events enhanced features dapps transact globally instantly gas fees permissionless deposit contract tip creators reward viewers bounties token locked content purchase products digital collectables assets services Phygital NFT Marketplace propose vote protocol decisions content productions cancellations stake earn real yield protocol revenue buy backs x-2-earn rewards secure network enhanced rights mine dispute management content moderation Hub Improvement Proposals HIPS development regulatory advancements utility purposes in-game in-app digital tokens currencies on-chain transparency educational informative DeHub affiliates liability financial losses volatile unforeseen errors competency failures technical error hacks afford lose',
    category: 'Token'
  },
  {
    title: 'Where to Buy Token',
    path: '/docs/token/where-to-buy',
    content: 'Buy token exchange purchase trade DEX Uniswap Base https://app.uniswap.org/explore/tokens/base/0xd20ab1015f6a2de4a6fddebab270113f689c2f7c Pancakeswap BNB https://pancakeswap.finance/swap marketplace decentralized exchange centralized exchange trading pairs liquidity pools swap tokens officially tradable decentralised exchanges tokenomics on-chain transactions disclaimer utility purposes in-game in-app digital tokens currencies transparency educational informative DeHub affiliates liability financial losses volatile unforeseen errors competency failures technical error hacks afford lose',
    category: 'Token'
  },
  {
    title: 'Token Governance',
    path: '/docs/token/governance',
    content: 'Governance voting proposals DAO community decisions fair voting logic stakeholder weight multiplied limited amounts single entity control protocol larger investors rewarded proportionally game theory vote burn DHB currently 50 disincentives bad actors manipulation incentivises engagement users vote poll whale manipulation preventing novel voting logic rewarding larger investors burn requirement voting meaningful participation frivolous malicious voting solving governance issues whale manipulation lack engagement wider holder base novel solution token governance skeptics launch officially early 2026 disclaimer utility purposes in-game in-app digital tokens currencies on-chain transparency educational informative DeHub affiliates liability financial losses volatile unforeseen errors competency failures technical error hacks afford lose',
    category: 'Token'
  },
  {
    title: 'Token Security',
    path: '/docs/token/security',
    content: 'Security audit smart contracts safety measures contract security Certik https://skynet.certik.com/projects/dehub bug bounty tech@dehub.net security protocols vulnerability assessment penetration testing security measures disclaimer utility purposes in-game in-app digital tokens currencies on-chain transparency educational informative DeHub affiliates liability financial losses volatile unforeseen errors competency failures technical error hacks afford lose',
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
    content: 'Team Malik Jan Co-Founder DeLabs LTD Puso group SEC licensed construction development Philippines Guide Dogs fundraising manager Randstad senior consultant Blue Arrow biggest biller award winning consultant ITS Construction Sussex regional manager Biomedical Science Portsmouth University Queen Alexander Hospital Laboratory BTEC Business Diploma Distinction Star NEBOSH qualified HSE consultant LinkedIn https://uk.linkedin.com/in/malik-jan-turkistani-842b4b195 X https://x.com/maldoteth Mike Hales Co-founder social media star TikTok partner agency First Class 400 influencers TikTok executives live streams digital mixed martial artist Lean Chad Fight Club Rapz Sport cobra bag provider NGNE TikTok https://www.tiktok.com/@mikehalesmma Instagram https://www.instagram.com/mikehalesmma Indi Jay Cammish Co-Founder social media content dance expert communications corporate relations Mabel world tours Platinum Party Palace Queen England 2022 First Class TikTok partner agency Instagram https://www.instagram.com/indijayofficial TikTok https://www.tiktok.com/@indijaycammish Bailey Young Co-Founder operational powerhouse pro-gamer gaming music entertainment investments tokenomics expert DeHub growth 2021 Blocjerk fundraise 1000000 peak ROI 1000% professional gamer top 3 COD MW2 top 100 Warzone RickyBobby',
    category: 'Main'
  },
  {
    title: 'Installation',
    path: '/docs/installation',
    content: 'Installation setup platform project npm yarn pnpm package manager system requirements Node.js environment TypeScript browser support Chrome Firefox Safari Edge CDN environment variables API configuration verification SDK version client initialization complete next steps quick start configuration authentication',
    category: 'Developer'
  },
  {
    title: 'API Endpoints',
    path: '/docs/api/endpoints',
    content: 'API endpoints reference documentation authentication bearer token authorization GET POST PUT DELETE users data pagination filters response schemas curl examples JSON API key management rate limiting error codes 400 401 403 404 429 500 base URL api.yourplatform.com REST API endpoints user management data retrieval filtering sorting pagination request examples response examples error handling API documentation developer resources integration guides SDK libraries HTTP methods query parameters request headers response headers status codes API versioning',
    category: 'Developer'
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
  }
];

// Fixed and simplified search function
const searchInText = (text: string, query: string): boolean => {
  const textLower = text.toLowerCase();
  const queryLower = query.toLowerCase().trim();
  
  console.log(`🔍 Searching for "${queryLower}" in text: "${textLower.substring(0, 100)}..."`);
  
  // Direct substring match (this should catch "malik" in "malik jan")
  if (textLower.includes(queryLower)) {
    console.log(`✅ DIRECT MATCH: "${queryLower}" found in text`);
    return true;
  }
  
  // Word boundary match - check if query matches start of any word
  const words = textLower.split(/\s+/);
  for (const word of words) {
    if (word.startsWith(queryLower)) {
      console.log(`✅ WORD START MATCH: "${queryLower}" matches start of word "${word}"`);
      return true;
    }
  }
  
  // Partial word match - check if any word contains the query
  for (const word of words) {
    if (word.includes(queryLower)) {
      console.log(`✅ PARTIAL WORD MATCH: "${queryLower}" found in word "${word}"`);
      return true;
    }
  }
  
  console.log(`❌ NO MATCH: "${queryLower}" not found in text`);
  return false;
};

// Calculate relevance score
const calculateRelevance = (item: SearchItem, query: string): number => {
  const titleLower = item.title.toLowerCase();
  const contentLower = item.content.toLowerCase();
  const queryLower = query.toLowerCase().trim();
  
  let score = 0;
  
  // Title exact match
  if (titleLower === queryLower) score += 100;
  else if (titleLower.includes(queryLower)) score += 50;
  
  // Content match
  if (contentLower.includes(queryLower)) score += 20;
  
  // Partial word matches
  const queryWords = queryLower.split(/\s+/).filter(word => word.length >= 2);
  queryWords.forEach(word => {
    if (titleLower.includes(word)) score += 15;
    if (contentLower.includes(word)) score += 5;
  });
  
  return score;
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const performSearch = (query: string) => {
    console.log(`🔍 === STARTING SEARCH FOR: "${query}" ===`);
    
    if (!query.trim()) {
      console.log('Empty query, clearing results');
      setSearchResults([]);
      return;
    }

    // Filter items using the simplified search
    const results = searchData.filter(item => {
      console.log(`\n--- Checking item: ${item.title} ---`);
      
      const titleMatch = searchInText(item.title, query);
      const contentMatch = searchInText(item.content, query);
      const categoryMatch = searchInText(item.category, query);
      
      const hasMatch = titleMatch || contentMatch || categoryMatch;
      console.log(`🎯 FINAL RESULT for "${item.title}": ${hasMatch ? '✅ MATCH' : '❌ NO MATCH'}`);
      
      return hasMatch;
    });

    console.log(`\n🎉 SEARCH COMPLETE: Found ${results.length} results:`, results.map(r => r.title));

    // Sort by relevance score
    results.sort((a, b) => {
      const scoreA = calculateRelevance(a, query);
      const scoreB = calculateRelevance(b, query);
      return scoreB - scoreA;
    });

    setSearchResults(results.slice(0, 10));
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
