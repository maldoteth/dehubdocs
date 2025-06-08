
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
      content: 'Welcome to DeHub documentation. Find everything you need to know about our platform, token, and ecosystem.',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'overview',
      title: 'Overview',
      path: '/docs/overview',
      content: 'DeHub overview and introduction to our platform and ecosystem.',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'dapps',
      title: 'Dapp',
      path: '/docs/dapps',
      content: 'DeHub dapp decentralized applications blockchain ecosystem user experience content creators monetization',
      headings: [
        { level: 2, text: 'Overview', id: 'overview' },
        { level: 2, text: 'Features', id: 'features' },
        { level: 2, text: 'Getting Started', id: 'getting-started' }
      ],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'games',
      title: 'Games',
      path: '/docs/games',
      content: 'DeHub games gaming ecosystem blockchain play-to-earn rewards entertainment',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'token-economics',
      title: 'Economics & Emissions',
      path: '/docs/token/economics',
      content: 'DeHub token economics emissions distribution tokenomics supply inflation deflation rewards staking',
      headings: [],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'token-utility',
      title: 'Utility / Holder Benefits',
      path: '/docs/token/utility',
      content: 'DeHub token utility holder benefits access games content events features transactions tips creators marketplace governance staking mining',
      headings: [],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'token-where-to-buy',
      title: 'Where to Buy',
      path: '/docs/token/where-to-buy',
      content: 'Where to buy DeHub tokens exchanges trading platforms purchasing guide',
      headings: [],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'token-governance',
      title: 'Governance',
      path: '/docs/token/governance',
      content: 'DeHub governance voting democracy fair voting logic whale manipulation stakeholder weight protocol decisions burn mechanism engagement',
      headings: [],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'token-stake',
      title: 'Stake',
      path: '/docs/token/stake',
      content: 'DeHub staking rewards yield earn stake tokens protocol revenue network security',
      headings: [],
      category: 'Token',
      type: 'page'
    },
    {
      id: 'depin',
      title: 'DePIN',
      path: '/docs/depin',
      content: 'DeHub DePIN decentralized physical infrastructure network hardware devices computing resources',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'ai-toolkits',
      title: 'AI Toolkits',
      path: '/docs/ai-toolkits',
      content: 'DeHub AI artificial intelligence toolkits machine learning development tools',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'team',
      title: 'Team',
      path: '/docs/team',
      content: 'DeHub team members founders developers advisors company staff',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'security',
      title: 'Security',
      path: '/docs/security',
      content: 'DeHub security contract audit Certik bug bounty smart contract safety',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      path: '/docs/roadmap',
      content: 'DeHub roadmap development timeline milestones future plans features releases',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'brand-assets',
      title: 'Brand Assets',
      path: '/docs/brand-assets',
      content: 'DeHub brand assets logo downloads graphics marketing materials brand guidelines',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines',
      path: '/docs/brand-guidelines',
      content: 'DeHub brand guidelines style guide logo usage colors fonts design system',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'terms',
      title: 'Legal Disclaimer',
      path: '/docs/terms',
      content: 'DeHub legal disclaimer terms conditions liability investment risks',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'terms-of-service',
      title: 'Terms of Service',
      path: '/docs/terms-of-service',
      content: 'DeHub terms of service user agreement platform usage rules',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      path: '/docs/privacy',
      content: 'DeHub privacy policy data protection user information security',
      headings: [],
      category: 'Main',
      type: 'page'
    },
    {
      id: 'contact',
      title: 'Contact',
      path: '/docs/contact',
      content: 'DeHub contact information support email communication channels',
      headings: [],
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
