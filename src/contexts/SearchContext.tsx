
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchItem {
  title: string;
  path: string;
  content: string;
  category: string;
  anchor?: string; // Add anchor support for sections within pages
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

// Enhanced search data with comprehensive coverage of all docs
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
    title: 'Stream - Live Streaming',
    path: '/docs/dapps',
    anchor: 'live-streaming',
    content: 'Live Streaming decentralized streaming platform user-centric protocol empower creators viewers censorship resistance content moderation watch-to-earn watch2earn content locking PPV pay-per-view token-gated subscriber data ownership IPFS NFT minting AI content moderation adult content 18+ zone bounty tips leaderboards ad revenue share badge honour badge of honour DHB tokens tipping services decentralised moderation upload video live stream creator profile channel community chat forum categories locked content streaming rewards creator economy viewer rewards tokenomics streaming monetization content discovery social features live chat interactive streaming real-time broadcasting live video streaming',
    category: 'dApps'
  },
  {
    title: 'Stream - Ecosystem Features',
    path: '/docs/dapps',
    anchor: 'ecosystem',
    content: 'Stream dapp ecosystem features decentralized streaming platform user-centric protocol empower creators viewers censorship resistance content moderation watch-to-earn watch2earn content locking PPV pay-per-view token-gated subscriber data ownership IPFS NFT minting AI content moderation adult content 18+ zone bounty tips leaderboards ad revenue share badge honour badge of honour DHB tokens tipping services decentralised moderation upload video live stream creator profile channel community chat forum categories locked content streaming rewards creator economy viewer rewards',
    category: 'dApps'
  },
  {
    title: 'Stream - Fee Tier System',
    path: '/docs/dapps',
    anchor: 'fee-tier-system',
    content: 'Fee tier system badges ranks levels creator monetization subscription model tiers basic premium VIP exclusive content access benefits perks revenue sharing percentage cuts commission rates creator earnings subscriber benefits exclusive features advanced tools analytics revenue streams monetization tiers subscription levels membership badges status ranks creator rewards viewer benefits',
    category: 'dApps'
  },
  {
    title: 'Stream - Tokenised Content',
    path: '/docs/dapps',
    anchor: 'tokenised-content',
    content: 'Tokenised content NFT minting blockchain ownership digital assets intellectual property content creators monetization token gated access exclusive content subscription model pay per view PPV content locking unlocking premium content digital rights management creator economy blockchain verified ownership immutable records content authenticity verification',
    category: 'dApps'
  },
  {
    title: 'Stream - Social Features',
    path: '/docs/dapps',
    anchor: 'social-features',
    content: 'Social features community interaction engagement live chat messaging commenting rating reviews social networking follower following creator fan interaction community building social media integration sharing viral content community driven moderation social reputation badges achievements leaderboards social commerce',
    category: 'dApps'
  },
  {
    title: 'Stream - Content Discovery',
    path: '/docs/dapps',
    anchor: 'content-discovery',
    content: 'Content discovery algorithm recommendation engine personalized content feeds trending popular viral content categories genres tags search filters content curation discovery mechanisms content suggestion machine learning AI powered recommendations user preferences content matching viewer interests content browsing navigation',
    category: 'dApps'
  },
  {
    title: 'Stream - Monetization',
    path: '/docs/dapps',
    anchor: 'monetization',
    content: 'Monetization creator economy revenue streams subscription tipping donations pay per view advertising sponsorship brand partnerships affiliate marketing content monetization models recurring revenue passive income creator funds revenue sharing commission rates payout systems financial sustainability creator support economic incentives',
    category: 'dApps'
  },
  {
    title: 'Stream - Privacy & Security',
    path: '/docs/dapps',
    anchor: 'privacy-security',
    content: 'Privacy security data protection encryption blockchain security decentralized storage IPFS content moderation user safety privacy controls data ownership personal information protection secure transactions wallet security authentication verification account protection cybersecurity measures',
    category: 'dApps'
  },
  {
    title: 'Stream - Mobile Experience',
    path: '/docs/dapps',
    anchor: 'mobile-experience',
    content: 'Mobile experience mobile app responsive design mobile optimization touch interface gesture controls mobile streaming mobile gaming cross platform compatibility iOS Android mobile wallet integration mobile notifications push notifications offline viewing mobile data optimization mobile user experience',
    category: 'dApps'
  },
  {
    title: 'Stream - Supported Tokens',
    path: '/docs/dapps',
    anchor: 'supported-tokens',
    content: 'Supported tokens DHB DeHub token ETH Ethereum USDC USD Coin USDT Tether stablecoin crypto cryptocurrency digital assets payment methods blockchain native tokens ERC-20 token standards wallet integration payment processing transaction fees gas optimization multi-token support cross-chain compatibility token economics payment gateway cryptocurrency payments',
    category: 'dApps'
  },
  {
    title: 'Contact Us',
    path: '/docs/contact',
    content: 'Contact support help assistance tech@dehub.net marketing@dehub.net hr@dehub.net technical support business inquiries partnerships media press investor relations Telegram portal https://t.me/portal Discord dehub.io/d Turkish community Dehub_Turkish Arabic community Dehub_Arabic holders whales exclusive channels token holders community management customer service business development media inquiries community engagement social media presence communication channels support resources',
    category: 'Main'
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
    title: 'Token Staking',
    path: '/docs/token/stake',
    content: 'Token staking stake DHB tokens earn rewards staking rewards yield farming liquidity mining validator nodes network security proof of stake consensus mechanism staking pools delegation rewards staking requirements minimum stake amounts lock-up periods unbonding periods slashing conditions validator selection staking rewards distribution APY annual percentage yield compound interest staking strategies risk management',
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
  },
  {
    title: 'Terms of Service',
    path: '/docs/terms-of-service',
    content: 'Terms of Service user agreement service terms conditions liability limitation intellectual property rights data protection user responsibilities prohibited activities account termination dispute resolution governing law arbitration legal compliance regulatory requirements jurisdiction applicable law enforcement service availability modifications updates user conduct content guidelines community standards violation consequences suspension termination appeal process',
    category: 'Legal'
  },
  {
    title: 'Privacy Policy',
    path: '/docs/privacy',
    content: 'Privacy Policy data protection GDPR compliance personal information collection processing storage sharing cookies tracking analytics third party services user rights consent withdrawal data retention deletion security measures breach notification international transfers privacy controls settings data subject rights access rectification erasure portability objection automated decision making profiling contact information data protection officer',
    category: 'Legal'
  },
  {
    title: 'Roadmap',
    path: '/docs/roadmap',
    content: 'Roadmap development timeline milestones features releases upcoming planned future developments product roadmap strategic goals quarterly objectives annual targets feature releases bug fixes improvements platform enhancements user experience upgrades technology stack updates blockchain integrations new partnerships ecosystem expansion community initiatives governance implementation DePIN network growth scaling solutions performance optimizations',
    category: 'Main'
  }
];

// Absolutely minimal search - just check if query exists in text
const simpleSearch = (text: string, query: string): boolean => {
  const textLower = text.toLowerCase();
  const queryLower = query.toLowerCase().trim();
  
  const result = textLower.includes(queryLower);
  console.log(`🔍 "${queryLower}" in "${textLower.substring(0, 30)}..." = ${result ? '✅' : '❌'}`);
  
  return result;
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const performSearch = (query: string) => {
    console.log(`\n🔍 === SEARCH START: "${query}" ===`);
    console.log(`📝 Query length: ${query.length}, trimmed: "${query.trim()}"`);
    
    if (!query.trim()) {
      console.log('❌ Empty query, clearing results');
      setSearchResults([]);
      return;
    }

    const results: SearchItem[] = [];

    searchData.forEach((item, index) => {
      console.log(`\n${index + 1}. Checking "${item.title}"`);
      
      const titleMatch = simpleSearch(item.title, query);
      const contentMatch = simpleSearch(item.content, query);
      const categoryMatch = simpleSearch(item.category, query);
      
      if (titleMatch || contentMatch || categoryMatch) {
        console.log(`✅ MATCH found in "${item.title}"`);
        results.push(item);
      }
    });

    console.log(`\n🎉 Search complete. Found ${results.length} results`);
    console.log(`📋 Results:`, results.map(r => r.title));
    
    console.log(`🔄 Setting search results...`);
    setSearchResults(results);
    
    console.log(`✨ Search state updated. Current results count: ${results.length}`);
  };

  console.log(`🏪 SearchProvider render - current results count: ${searchResults.length}`);

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
