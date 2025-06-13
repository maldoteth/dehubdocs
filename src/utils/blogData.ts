
import { BlogPost, BlogTag } from '@/types/blog';

// Sample blog posts - you can edit these or add new ones
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to the DeHub Community Blog',
    slug: 'welcome-to-dehub-blog',
    excerpt: 'Introducing our new community blog where we\'ll share updates, insights, and stories from the DeHub ecosystem.',
    content: `# Welcome to the DeHub Community Blog

We're excited to launch our new community blog! This is where we'll be sharing:

## What to Expect

- **Platform Updates**: Stay informed about the latest features and improvements
- **Community Highlights**: Celebrating our amazing community members
- **Technical Deep Dives**: Behind-the-scenes looks at our technology
- **Partnership Announcements**: News about exciting collaborations
- **Educational Content**: Guides to help you get the most out of DeHub

## Join the Conversation

We encourage you to engage with our content by sharing your thoughts and questions. Together, we're building something amazing.

Stay tuned for regular updates, and thank you for being part of the DeHub community!`,
    bannerImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Team working together on laptops',
    author: {
      name: 'DeHub Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-06-10T10:00:00Z',
    tags: ['announcement', 'community', 'welcome'],
    readingTime: 2,
    featured: true,
    status: 'published',
    seoTitle: 'Welcome to DeHub Community Blog - Latest Updates & Insights',
    seoDescription: 'Stay updated with DeHub platform news, community highlights, and technical insights from our team.'
  },
  {
    id: '2',
    title: 'UGC Ambassadorship Program Launch - 50 Vacancies Available',
    slug: 'ugc-ambassadorship-program-launch',
    excerpt: 'We\'re launching our User Generated Content ambassadorship program with 50 exciting opportunities for creators.',
    content: `# UGC Ambassadorship Program Launch

We're thrilled to announce the launch of our User Generated Content (UGC) ambassadorship program! This exciting initiative opens up 50 exclusive positions for passionate creators who want to shape the future of decentralized content.

## What We're Looking For

- **Passionate Creators**: Content creators who believe in decentralized platforms
- **Community Leaders**: Individuals who can inspire and guide others
- **Innovation Champions**: Those who aren't afraid to experiment with new features

## Program Benefits

- **Exclusive Access**: Early access to new features and tools
- **Revenue Sharing**: Enhanced monetization opportunities
- **Direct Impact**: Your feedback directly influences our development roadmap
- **Community Recognition**: Official ambassador status and recognition

## How to Apply

Applications are now open and will be reviewed on a rolling basis. Don't miss this opportunity to be part of something revolutionary!

Join us in building the future of content creation.`,
    bannerImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Team collaboration and networking',
    author: {
      name: 'Community Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2025-04-15T14:00:00Z',
    tags: ['ugc', 'ambassadors', 'community', 'creators'],
    readingTime: 3,
    featured: false,
    status: 'published'
  },
  {
    id: '3',
    title: 'DHBScan.com: Track Your Activity Across All DHB Contracts',
    slug: 'dhbscan-launch-track-dhb-activity',
    excerpt: 'Introducing DHBScan.com - your comprehensive dashboard for tracking activity across all DeHub contracts.',
    content: `# DHBScan.com: Your Window Into the DeHub Ecosystem

Today we're proud to introduce **DHBScan.com**, a comprehensive blockchain explorer specifically designed for tracking activity across all DHB contracts.

## Key Features

### **Complete Transaction History**
- View all your DHB transactions in one place
- Track staking rewards and withdrawals
- Monitor token transfers and interactions

### **Real-Time Activity Monitoring**
- Live updates on network activity
- Contract interaction tracking
- Gas fee optimization insights

### **Advanced Analytics**
- Portfolio performance tracking
- Staking yield calculations
- Network participation metrics

## Why We Built This

Transparency is at the heart of everything we do. DHBScan provides our community with unprecedented visibility into the DeHub ecosystem, ensuring you can track every aspect of your participation.

## Getting Started

Visit [dhbscan.com](https://dhbscan.com) and connect your wallet to start exploring your DeHub activity today!`,
    bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Analytics dashboard with charts and graphs',
    author: {
      name: 'Development Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2025-04-01T12:00:00Z',
    tags: ['dhbscan', 'blockchain', 'explorer', 'transparency'],
    readingTime: 4,
    featured: true,
    status: 'published'
  },
  {
    id: '4',
    title: 'Live Streaming Revolution: Real-Time Tips & Unlimited Viewers',
    slug: 'live-streaming-real-time-tips-unlimited-viewers',
    excerpt: 'Our onchain live streaming platform now supports real-time tip animations and theoretically unlimited concurrent viewers.',
    content: `# Live Streaming Revolution: Real-Time Tips & Unlimited Viewers

The future of live streaming is here! We've revolutionized our platform with groundbreaking features that put creators first.

## Real-Time Tip Animations

Watch as tips come to life with instant on-chain animations. Every contribution creates a visual celebration that enhances the streaming experience for both creators and viewers.

## Unlimited Scalability

Built on Livepeer infrastructure, our platform now supports:
- **50,000+** guaranteed concurrent viewers
- **Unlimited capacity** on higher spend tiers
- **Sub-200ms latency** globally through our custom CDN
- **99.99% uptime** across all services

## Creator-First Features

- **Instant Monetization**: Tips are processed immediately on-chain
- **Revenue Transparency**: All earnings are publicly verifiable
- **Community Building**: Enhanced interaction tools for audience engagement

## Technical Excellence

Our custom CDN and Livepeer integration represent months of optimization work, ensuring creators can focus on content while we handle the technical complexity.

Ready to experience the future of live streaming? Start streaming today!`,
    bannerImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Live streaming setup with professional equipment',
    author: {
      name: 'Streaming Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2025-02-20T16:30:00Z',
    tags: ['livestreaming', 'livepeer', 'cdn', 'creators'],
    readingTime: 4,
    featured: false,
    status: 'published'
  },
  {
    id: '5',
    title: 'DePIN Phase 1 Launch: Decentralizing Physical Infrastructure',
    slug: 'depin-phase-1-launch-decentralizing-infrastructure',
    excerpt: 'We\'ve officially launched DePIN Phase 1, taking our first major step into decentralized physical infrastructure networks.',
    content: `# DePIN Phase 1 Launch: Decentralizing Physical Infrastructure

Today marks a historic milestone for DeHub as we officially launch **DePIN Phase 1** - our entry into Decentralized Physical Infrastructure Networks.

## What is DePIN?

DePIN represents the convergence of blockchain technology with real-world infrastructure, creating networks that are:
- **Community Owned**: No single point of control
- **Economically Incentivized**: Participants earn for contributing
- **Globally Scalable**: Growth through network effects
- **Censorship Resistant**: Truly decentralized operation

## Phase 1 Features

### **Node Network Foundation**
- Distributed computing infrastructure
- Peer-to-peer content delivery
- Redundant data storage systems

### **Tokenized Participation**
- Earn DHB tokens for running nodes
- Stake tokens for enhanced rewards
- Governance rights for network participants

### **Security & Reliability**
- Cryptographic verification of all operations
- Multi-layer redundancy systems
- 99.9%+ network uptime guarantee

## The Road Ahead

Phase 1 is just the beginning. Our roadmap includes expanded DePIN capabilities that will revolutionize how decentralized infrastructure operates.

Join the infrastructure revolution. Become a node operator today!`,
    bannerImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Network infrastructure and servers',
    author: {
      name: 'Infrastructure Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-11-15T11:00:00Z',
    tags: ['depin', 'infrastructure', 'nodes', 'decentralization'],
    readingTime: 5,
    featured: true,
    status: 'published'
  },
  {
    id: '6',
    title: 'Last Chad Standing: MMA Battle Royale Teaser Hits 1M+ Views',
    slug: 'last-chad-standing-mma-battle-royale-teaser',
    excerpt: 'Our groundbreaking MMA battle royale concept has captured global attention with over 1 million views on the teaser.',
    content: `# Last Chad Standing: MMA Battle Royale Teaser Hits 1M+ Views

The fighting world is buzzing! Our teaser for **Last Chad Standing** - the world's first-ever MMA battle royale - has exploded across social media with over 1 million views and counting.

## A Revolutionary Concept

Last Chad Standing isn't just another MMA event. It's a complete reimagining of combat sports:

### **Battle Royale Format**
- Multiple fighters enter, one champion emerges
- Dynamic elimination system
- Unpredictable fight dynamics

### **Tokenized Engagement**
- Fans can stake on their favorite fighters
- Real-time betting integrated with blockchain
- NFT collectibles for each fighter

### **Global Entertainment**
- Professional production values
- Celebrity appearances and endorsements
- Interactive viewer participation

## Industry Recognition

Major MMA promoters have taken notice, with several expressing serious interest in partnership opportunities. This validation confirms what we've always known - DeHub is pioneering the future of entertainment.

## What's Next?

The full trailer is in production, and we're finalizing partnerships that will bring Last Chad Standing to audiences worldwide.

Get ready for the fight of the future!`,
    bannerImage: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=600&fit=crop',
    bannerImageAlt: 'MMA octagon with dramatic lighting',
    author: {
      name: 'Entertainment Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-10-20T18:00:00Z',
    tags: ['mma', 'entertainment', 'battle-royale', 'nft'],
    readingTime: 3,
    featured: false,
    status: 'published'
  },
  {
    id: '7',
    title: 'OnChain Tradable Subscriptions: Revolutionizing Creator Monetization',
    slug: 'onchain-tradable-subscriptions-creator-monetization',
    excerpt: 'Introducing the world\'s first tradable subscription system - where fans can buy, sell, and trade access to their favorite creators.',
    content: `# OnChain Tradable Subscriptions: Revolutionizing Creator Monetization

We're thrilled to announce the launch of **OnChain Tradable Subscriptions** - a groundbreaking innovation that transforms how creators monetize their content and how fans engage with their favorite personalities.

## How It Works

### **For Creators**
- Set subscription tiers with unique benefits
- Earn immediate revenue from subscription sales
- Benefit from secondary market trading fees
- Build deeper fan relationships

### **For Fans**
- Purchase subscription NFTs for exclusive access
- Trade subscriptions on the open market
- Invest in rising creators early
- Own verifiable proof of support

## Revolutionary Features

### **True Ownership**
Subscriptions are NFTs, giving fans actual ownership of their access rights.

### **Market Dynamics**
Popular creators' subscriptions can appreciate in value, creating investment opportunities.

### **Creator Control**
Creators maintain full control over benefits and can update offerings in real-time.

### **Transparent Economics**
All transactions are on-chain, ensuring complete transparency for all participants.

## The Future of Fan Engagement

This isn't just about subscriptions - it's about creating a new economy where creators and fans both benefit from success.

Start trading subscriptions today and be part of the creator economy revolution!`,
    bannerImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Digital trading and blockchain concept',
    author: {
      name: 'Product Innovation Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-09-10T13:30:00Z',
    tags: ['subscriptions', 'nft', 'monetization', 'trading'],
    readingTime: 4,
    featured: false,
    status: 'published'
  },
  {
    id: '8',
    title: 'Agency Success: 1,000 Streamers Signed, UK #1 Status Achieved',
    slug: 'agency-success-1000-streamers-uk-number-1',
    excerpt: 'Our talent agency has reached incredible milestones - 1,000 exclusive streamers signed and UK #1 status achieved.',
    content: `# Agency Success: 1,000 Streamers Signed, UK #1 Status Achieved

What started as a vision has become reality. Our talent agency has officially reached **UK #1 status** with over **1,000 live streamers** signed exclusively to our platform.

## The Journey

### **From Vision to Victory**
- Started with co-founders Mike Hales & Indi Cammish
- Built on successful TikTok partnerships with platform executives
- Grew from earning £1k/day to managing 1,000+ creators

### **By the Numbers**
- **1,000+** exclusive streamers signed
- **£1,000/day** average earnings at peak
- **#1 ranking** in the UK market
- **15 countries** with established creator partnerships

## What Makes Us Different

### **Creator-First Approach**
Our streamers earn 90% of ad revenue - the highest rate in the industry.

### **Technology Integration**
Seamless blockchain integration provides creators with:
- Instant payments
- Transparent earnings tracking
- Token-based incentives
- Global accessibility

### **Community Building**
We don't just manage talent - we build communities around creators.

## Looking Forward

With our foundation established, we're expanding internationally and integrating more blockchain-native features that will set new industry standards.

The future of creator management is here, and we're leading the way!`,
    bannerImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Success celebration with team members',
    author: {
      name: 'Agency Leadership',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-08-25T15:00:00Z',
    tags: ['agency', 'streamers', 'uk', 'success'],
    readingTime: 4,
    featured: false,
    status: 'published'
  },
  {
    id: '9',
    title: 'Major App Upgrade: 200% Speed Improvement & UI Overhaul',
    slug: 'major-app-upgrade-speed-improvement-ui-overhaul',
    excerpt: 'We\'ve completed our most significant app upgrade yet, delivering 200% speed improvements and a completely overhauled user interface.',
    content: `# Major App Upgrade: 200% Speed Improvement & UI Overhaul

We're excited to announce the completion of our most ambitious app upgrade to date! After months of development, we've delivered improvements that will transform your DeHub experience.

## Performance Revolution

### **200% Speed Improvement**
- Optimized database queries
- Enhanced caching mechanisms
- Streamlined API responses
- Reduced loading times across all features

### **Backend Overhaul**
- Completely rewritten core infrastructure
- Improved scalability for growing user base
- Enhanced security protocols
- Better error handling and recovery

## User Interface Transformation

### **Modern Design**
- Clean, intuitive interface design
- Improved navigation structure
- Enhanced mobile responsiveness
- Accessibility improvements

### **User Experience**
- Simplified onboarding process
- Faster content discovery
- Streamlined creator tools
- Enhanced social features

## Community Response

The upgrade has received overwhelmingly positive feedback, with **95% of users** reporting satisfaction with the improvements.

## Key Improvements Include:
- Faster video loading and streaming
- Improved search functionality
- Enhanced chat and messaging
- Better token integration
- Smoother navigation

## What's Next?

This upgrade lays the foundation for exciting new features coming in Q4 2024 and beyond.

Experience the difference today - update your app and enjoy the new DeHub!`,
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Software development and app interfaces',
    author: {
      name: 'Development Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-07-15T10:00:00Z',
    tags: ['upgrade', 'performance', 'ui-ux', 'development'],
    readingTime: 3,
    featured: false,
    status: 'published'
  },
  {
    id: '10',
    title: 'SDHB Token Launch on Base L2: Lower Fees, Faster Transactions',
    slug: 'sdhb-token-launch-base-l2-lower-fees',
    excerpt: 'We\'re proud to announce the launch of SDHB on Base L2, offering our community significantly lower transaction fees and faster processing.',
    content: `# SDHB Token Launch on Base L2: Lower Fees, Faster Transactions

Today marks another milestone in our multi-chain strategy with the successful launch of **SDHB on Base L2**. This expansion brings significant benefits to our growing community.

## Why Base L2?

### **Cost Efficiency**
- Transaction fees reduced by up to 95%
- More accessible for smaller transactions
- Enhanced creator earnings through lower gas costs

### **Performance Benefits**
- Sub-second transaction confirmations
- Higher throughput for platform interactions
- Improved user experience across all features

### **Ethereum Compatibility**
- Full EVM compatibility
- Seamless integration with existing tools
- Easy bridging between networks

## Strategic Expansion

The Base L2 launch is part of our broader multi-chain strategy:

1. **BNB Smart Chain**: Established presence with strong liquidity
2. **Ethereum Mainnet**: Maximum security and decentralization
3. **Base L2**: Optimal performance and cost efficiency

## Migration Benefits

### **For Users**
- Lower transaction costs
- Faster interactions
- Same security guarantees

### **For Creators**
- Higher profit margins
- More frequent payouts
- Better monetization efficiency

## Getting Started

Bridge your tokens to Base L2 today and experience the future of efficient blockchain interactions!

Visit our documentation for step-by-step bridging instructions.`,
    bannerImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Blockchain network and cryptocurrency concepts',
    author: {
      name: 'Blockchain Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-05-20T14:00:00Z',
    tags: ['sdhb', 'base-l2', 'blockchain', 'scaling'],
    readingTime: 4,
    featured: false,
    status: 'published'
  },
  {
    id: '11',
    title: 'Dubai Event Success: Expanding Our Middle East Presence',
    slug: 'dubai-event-success-middle-east-expansion',
    excerpt: 'Our Dubai event was a tremendous success, marking a significant milestone in our Middle East expansion strategy.',
    content: `# Dubai Event Success: Expanding Our Middle East Presence

Our recent Dubai event exceeded all expectations, establishing DeHub as a major player in the Middle East's rapidly growing blockchain and creator economy sectors.

## Event Highlights

### **Industry Connections**
- Met with leading Middle East investors
- Established partnerships with regional content creators
- Connected with government blockchain initiatives

### **Community Growth**
- **500+** new community members from the region
- **50+** new creator applications
- **25+** potential partnership discussions

### **Regional Insights**
- Growing demand for decentralized platforms
- Strong interest in creator monetization tools
- Significant opportunity for Arabic content

## Strategic Importance

The Middle East represents a crucial market for DeHub's global expansion:

### **Market Opportunity**
- Rapidly growing creator economy
- High smartphone and internet penetration
- Strong interest in blockchain technology
- Supportive regulatory environment

### **Cultural Alignment**
- Emphasis on community and connection
- Appreciation for innovative technology
- Growing creator and influencer culture

## Next Steps

Following this successful event, we're planning:
- Arabic language support for the platform
- Regional creator partnership programs
- Additional Middle East events and conferences
- Local payment method integrations

## Community Impact

The Dubai event reinforced our commitment to building a truly global platform that serves creators and communities worldwide.

Stay tuned for more exciting developments from our Middle East expansion!`,
    bannerImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Dubai skyline and modern business district',
    author: {
      name: 'Global Expansion Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-04-10T16:30:00Z',
    tags: ['dubai', 'middle-east', 'expansion', 'events'],
    readingTime: 3,
    featured: false,
    status: 'published'
  },
  {
    id: '12',
    title: 'DHB Token Listed on Ethereum Mainnet: Enhanced Security & Decentralization',
    slug: 'dhb-token-ethereum-mainnet-enhanced-security',
    excerpt: 'DHB token is now available on Ethereum mainnet, providing our community with the highest levels of security and decentralization.',
    content: `# DHB Token Listed on Ethereum Mainnet: Enhanced Security & Decentralization

We're proud to announce that **DHB token is now live on Ethereum mainnet**, representing our commitment to providing the most secure and decentralized experience possible.

## Why Ethereum Mainnet?

### **Maximum Security**
- Battle-tested network with years of proven security
- Largest validator network in the blockchain space
- Immutable transaction history and smart contract execution

### **True Decentralization**
- No single point of failure
- Censorship-resistant operations
- Community-owned infrastructure

### **Ecosystem Integration**
- Native compatibility with DeFi protocols
- Access to the largest liquidity pools
- Integration with leading wallet providers

## Migration Process

### **Automatic Bridging**
- Seamless token migration for existing holders
- No action required from users
- Maintained token balances and staking positions

### **Enhanced Features**
- Improved staking mechanisms
- Better governance participation
- Enhanced smart contract functionality

## Strategic Benefits

### **For the Community**
- Higher security guarantees
- Better liquidity access
- Improved DeFi integration opportunities

### **For Developers**
- Access to mature development tools
- Extensive documentation and support
- Proven smart contract standards

## Multi-Chain Strategy

Ethereum mainnet joins our existing presence on:
- **BNB Smart Chain**: Cost-effective transactions
- **Base L2**: Optimal performance (coming Q2 2024)

## Looking Forward

This mainnet launch positions DHB for integration with major DeFi protocols and institutional adoption.

Welcome to the next level of blockchain security and decentralization!`,
    bannerImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Ethereum blockchain and cryptocurrency symbols',
    author: {
      name: 'Blockchain Architecture Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-02-15T12:00:00Z',
    tags: ['ethereum', 'mainnet', 'security', 'decentralization'],
    readingTime: 4,
    featured: false,
    status: 'published'
  },
  {
    id: '13',
    title: 'Understanding DePIN Technology',
    slug: 'understanding-depin-technology',
    excerpt: 'A comprehensive guide to Decentralized Physical Infrastructure Networks and how DeHub is pioneering this space.',
    content: `# Understanding DePIN Technology

Decentralized Physical Infrastructure Networks (DePIN) represent a revolutionary approach to building and maintaining physical infrastructure through decentralized networks.

## What is DePIN?

DePIN combines blockchain technology with real-world infrastructure to create:

- **Decentralized Networks**: No single point of failure
- **Token Incentives**: Rewards for network participation
- **Community Ownership**: Shared governance and benefits
- **Scalable Infrastructure**: Growth through network effects

## DeHub's DePIN Approach

Our platform leverages DePIN principles to:

1. **Distribute Computing Power**: Harness global node network
2. **Ensure Data Security**: Cryptographic protection
3. **Reward Participants**: Token-based incentive system
4. **Scale Efficiently**: Community-driven expansion

## Getting Started

Ready to participate in our DePIN network? Check out our [staking guide](/docs/token/stake) to get started.`,
    bannerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Circuit board representing decentralized technology',
    author: {
      name: 'Tech Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-06-08T14:30:00Z',
    tags: ['depin', 'technology', 'blockchain', 'infrastructure'],
    readingTime: 5,
    featured: false,
    status: 'published',
    seoTitle: 'Understanding DePIN Technology - DeHub Guide',
    seoDescription: 'Learn about Decentralized Physical Infrastructure Networks and how DeHub is pioneering DePIN technology.'
  },
  {
    id: '14',
    title: 'Q2 2024 Platform Updates',
    slug: 'q2-2024-platform-updates',
    excerpt: 'A summary of all the exciting features and improvements we launched in Q2 2024.',
    content: `# Q2 2024 Platform Updates

We've been busy building! Here's everything new in Q2 2024:

## New Features

### Enhanced Security
- Multi-signature wallet support
- Advanced encryption protocols
- Improved node verification

### User Experience
- Redesigned dashboard interface
- Mobile app optimizations
- Faster transaction processing

### Developer Tools
- New API endpoints
- Enhanced documentation
- SDKs for popular frameworks

## Community Growth

- **50,000+** new users joined
- **1,000+** active nodes worldwide
- **25+** new partnerships established

## What's Next?

Stay tuned for Q3 announcements coming soon!`,
    bannerImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    bannerImageAlt: 'Code on computer screen',
    author: {
      name: 'Product Team',
      avatar: '/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png'
    },
    publishedAt: '2024-06-05T16:45:00Z',
    tags: ['updates', 'features', 'q2-2024', 'development'],
    readingTime: 3,
    featured: true,
    status: 'published'
  }
];

// Utility functions
export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getFeaturedPosts = (): BlogPost[] => {
  return getPublishedPosts().filter(post => post.featured);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return getPublishedPosts().filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
};

export const getAllTags = (): BlogTag[] => {
  const tagCounts: { [key: string]: number } = {};
  
  getPublishedPosts().forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return getPublishedPosts().filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatDateTime = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
