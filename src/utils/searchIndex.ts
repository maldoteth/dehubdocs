
export interface SearchItem {
  id: string;
  title: string;
  path: string;
  content: string;
  headings: { level: number; text: string; id?: string }[];
  category: string;
  type: 'page' | 'section';
}

export interface SearchIndex {
  items: SearchItem[];
}

// Static content index for all documentation pages
export const searchIndex: SearchIndex = {
  items: [
    {
      id: 'docs-home',
      title: 'Documentation Home',
      path: '/docs',
      content: 'Welcome to DeHub documentation. Find everything you need to know about our platform, token, and ecosystem. DeHub is a decentralized content platform that connects creators with their audiences through blockchain technology.',
      headings: [
        { level: 2, text: 'Getting Started', id: 'getting-started' },
        { level: 2, text: 'Platform Overview', id: 'platform-overview' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'overview',
      title: 'Overview',
      path: '/docs/overview',
      content: 'DeHub overview and introduction to our platform and ecosystem. DeHub is revolutionizing content creation and distribution through decentralized technology, empowering creators and building sustainable communities.',
      headings: [
        { level: 2, text: 'Vision', id: 'vision' },
        { level: 2, text: 'Mission', id: 'mission' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'dapps',
      title: 'Dapp',
      path: '/docs/dapps',
      content: 'DeHub dapp decentralized applications blockchain ecosystem user experience content creators monetization platform features social media Web3 creator economy digital content NFTs smart contracts',
      headings: [
        { level: 2, text: 'Overview', id: 'overview' },
        { level: 2, text: 'Features', id: 'features' },
        { level: 2, text: 'Getting Started', id: 'getting-started' },
        { level: 3, text: 'Content Creation', id: 'content-creation' },
        { level: 3, text: 'Monetization', id: 'monetization' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'games',
      title: 'Games',
      path: '/docs/games',
      content: 'DeHub games gaming ecosystem blockchain play-to-earn rewards entertainment Web3 gaming NFT gaming assets digital collectibles gaming tournaments esports competitive gaming casual games mobile games',
      headings: [
        { level: 2, text: 'Game Types', id: 'game-types' },
        { level: 2, text: 'Rewards System', id: 'rewards-system' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'token-economics',
      title: 'Economics & Emissions',
      path: '/docs/token/economics',
      content: 'DeHub token economics emissions distribution tokenomics supply inflation deflation rewards staking mining validator nodes consensus mechanism token allocation initial distribution vesting schedule burn mechanisms deflationary pressure supply cap maximum supply circulating supply market dynamics economic incentives',
      headings: [
        { level: 2, text: 'Token Supply', id: 'token-supply' },
        { level: 2, text: 'Distribution Model', id: 'distribution-model' },
        { level: 2, text: 'Emission Schedule', id: 'emission-schedule' }
      ],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'token-utility',
      title: 'Utility / Holder Benefits',
      path: '/docs/token/utility',
      content: 'DeHub token utility holder benefits access games content events features transactions tips creators marketplace governance staking mining validator rewards premium features exclusive content early access beta testing voting rights proposal creation community participation revenue sharing profit distribution',
      headings: [
        { level: 2, text: 'Access Benefits', id: 'access-benefits' },
        { level: 2, text: 'Economic Benefits', id: 'economic-benefits' },
        { level: 2, text: 'Governance Rights', id: 'governance-rights' }
      ],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'token-where-to-buy',
      title: 'Where to Buy',
      path: '/docs/token/where-to-buy',
      content: 'Where to buy DeHub tokens exchanges trading platforms purchasing guide DEX centralized exchange decentralized exchange Uniswap PancakeSwap liquidity pools trading pairs USDT USDC ETH BNB trading tutorial wallet setup MetaMask Trust Wallet exchange listings',
      headings: [
        { level: 2, text: 'Centralized Exchanges', id: 'centralized-exchanges' },
        { level: 2, text: 'Decentralized Exchanges', id: 'decentralized-exchanges' },
        { level: 2, text: 'Trading Guide', id: 'trading-guide' }
      ],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'token-governance',
      title: 'Governance',
      path: '/docs/token/governance',
      content: 'DeHub governance voting democracy fair voting logic whale manipulation stakeholder weight protocol decisions burn mechanism engagement DAO decentralized autonomous organization proposal system voting power delegation community governance on-chain governance off-chain governance governance token voting periods quorum requirements',
      headings: [
        { level: 2, text: 'Voting Mechanism', id: 'voting-mechanism' },
        { level: 2, text: 'Proposal Process', id: 'proposal-process' },
        { level: 2, text: 'Anti-Whale Measures', id: 'anti-whale-measures' }
      ],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'token-stake',
      title: 'Stake',
      path: '/docs/token/stake',
      content: 'DeHub staking rewards yield earn stake tokens protocol revenue network security validator nodes delegated staking liquid staking staking pools minimum stake requirements lock-up periods unbonding period slashing conditions staking rewards APY annual percentage yield compound interest',
      headings: [
        { level: 2, text: 'Staking Mechanism', id: 'staking-mechanism' },
        { level: 2, text: 'Rewards Structure', id: 'rewards-structure' },
        { level: 2, text: 'Staking Pools', id: 'staking-pools' }
      ],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'depin',
      title: 'DePIN',
      path: '/docs/depin',
      content: 'DeHub DePIN decentralized physical infrastructure network hardware devices computing resources edge computing distributed computing IoT Internet of Things sensor networks data collection real-world assets physical infrastructure blockchain integration hardware mining device requirements network participation rewards incentives',
      headings: [
        { level: 2, text: 'Infrastructure Overview', id: 'infrastructure-overview' },
        { level: 2, text: 'Hardware Requirements', id: 'hardware-requirements' },
        { level: 2, text: 'Network Participation', id: 'network-participation' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'ai-toolkits',
      title: 'AI Toolkits',
      path: '/docs/ai-toolkits',
      content: 'DeHub AI artificial intelligence toolkits machine learning development tools natural language processing computer vision deep learning neural networks AI models training inference API endpoints SDK software development kit integration examples use cases automation content generation image processing text analysis sentiment analysis recommendation systems',
      headings: [
        { level: 2, text: 'Available Tools', id: 'available-tools' },
        { level: 2, text: 'Integration Guide', id: 'integration-guide' },
        { level: 2, text: 'Use Cases', id: 'use-cases' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'team',
      title: 'Team',
      path: '/docs/team',
      content: 'DeHub team members founders developers advisors company staff leadership management engineering blockchain developers smart contract developers frontend developers backend developers DevOps engineers security experts marketing team community managers business development partnerships',
      headings: [
        { level: 2, text: 'Core Team', id: 'core-team' },
        { level: 2, text: 'Advisors', id: 'advisors' },
        { level: 2, text: 'Development Team', id: 'development-team' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'security',
      title: 'Security',
      path: '/docs/security',
      content: 'DeHub security contract audit Certik bug bounty smart contract safety code review penetration testing security assessment vulnerability disclosure responsible disclosure security best practices multi-signature wallets cold storage hot wallet security encryption protocols audit reports security certificates',
      headings: [
        { level: 2, text: 'Smart Contract Audits', id: 'smart-contract-audits' },
        { level: 2, text: 'Bug Bounty Program', id: 'bug-bounty-program' },
        { level: 2, text: 'Security Measures', id: 'security-measures' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      path: '/docs/roadmap',
      content: 'DeHub roadmap development timeline milestones future plans features releases Q1 Q2 Q3 Q4 quarterly goals annual objectives product development feature rollout beta launch mainnet launch partnerships integrations ecosystem expansion scaling solutions performance improvements user experience enhancements',
      headings: [
        { level: 2, text: 'Current Quarter', id: 'current-quarter' },
        { level: 2, text: 'Upcoming Milestones', id: 'upcoming-milestones' },
        { level: 2, text: 'Long-term Vision', id: 'long-term-vision' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'brand-assets',
      title: 'Brand Assets',
      path: '/docs/brand-assets',
      content: 'DeHub brand assets logo downloads graphics marketing materials brand guidelines visual identity color palette typography fonts icon sets banner images social media assets press kit media kit brand resources marketing resources promotional materials design system style guide',
      headings: [
        { level: 2, text: 'Logo Downloads', id: 'logo-downloads' },
        { level: 2, text: 'Color Palette', id: 'color-palette' },
        { level: 2, text: 'Typography', id: 'typography' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines',
      path: '/docs/brand-guidelines',
      content: 'DeHub brand guidelines style guide logo usage colors fonts design system visual identity brand voice tone of voice messaging guidelines communication standards brand positioning brand values brand personality usage restrictions dos and donts brand compliance',
      headings: [
        { level: 2, text: 'Logo Usage', id: 'logo-usage' },
        { level: 2, text: 'Color Guidelines', id: 'color-guidelines' },
        { level: 2, text: 'Typography Rules', id: 'typography-rules' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'terms',
      title: 'Legal Disclaimer',
      path: '/docs/terms',
      content: 'DeHub legal disclaimer terms conditions liability investment risks regulatory compliance disclaimers warranties limitations liability intellectual property rights user responsibilities acceptable use policy prohibited activities legal jurisdiction dispute resolution arbitration governing law compliance requirements',
      headings: [
        { level: 2, text: 'Disclaimers', id: 'disclaimers' },
        { level: 2, text: 'Liability Limitations', id: 'liability-limitations' },
        { level: 2, text: 'Investment Risks', id: 'investment-risks' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'terms-of-service',
      title: 'Terms of Service',
      path: '/docs/terms-of-service',
      content: 'DeHub terms of service user agreement platform usage rules service availability user accounts registration requirements password security content policies community guidelines moderation enforcement suspension termination refund policy payment terms subscription terms',
      headings: [
        { level: 2, text: 'User Accounts', id: 'user-accounts' },
        { level: 2, text: 'Platform Usage', id: 'platform-usage' },
        { level: 2, text: 'Content Policies', id: 'content-policies' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      path: '/docs/privacy',
      content: 'DeHub privacy policy data protection user information security personal data collection data processing data storage data sharing third-party services cookies tracking analytics user rights data access data deletion GDPR compliance CCPA compliance data retention data security measures encryption',
      headings: [
        { level: 2, text: 'Data Collection', id: 'data-collection' },
        { level: 2, text: 'Data Usage', id: 'data-usage' },
        { level: 2, text: 'User Rights', id: 'user-rights' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'contact',
      title: 'Contact',
      path: '/docs/contact',
      content: 'DeHub contact information support email communication channels customer support technical support business inquiries partnerships media inquiries press contact community support social media channels Discord Telegram Twitter support tickets help desk FAQ frequently asked questions troubleshooting',
      headings: [
        { level: 2, text: 'Support Channels', id: 'support-channels' },
        { level: 2, text: 'Business Inquiries', id: 'business-inquiries' },
        { level: 2, text: 'Community', id: 'community' }
      ],
      category: 'Main',
      type: 'page'
    }
  ]
};

export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return searchIndex.items
    .map(item => {
      let score = 0;
      const searchableText = `${item.title} ${item.content} ${item.headings.map(h => h.text).join(' ')}`.toLowerCase();
      
      // Score based on matches
      searchTerms.forEach(term => {
        if (item.title.toLowerCase().includes(term)) score += 10;
        if (item.content.toLowerCase().includes(term)) score += 5;
        if (item.headings.some(h => h.text.toLowerCase().includes(term))) score += 7;
      });
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}
