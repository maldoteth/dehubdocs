import { BlogPost } from '@/types/blog';
import { coinbaseDHBPost } from './posts/coinbaseDHBPost';
import { wrapUp2022Post } from './posts/wrapUp2022Post';
import { dubaiEventPost } from './posts/dubaiEventPost';
import { awardWinningInnovationPost } from './posts/awardWinningInnovationPost';
import { tokenisedUploadsPost } from './posts/tokenisedUploadsPost';
import { novumPrincipiumPost } from './posts/novumPrincipiumPost';

export const newPosts: BlogPost[] = [
  {
    id: 'strategic-shift-discontinuing-ethereum-mainnet-support-for-dhb-2025',
    title: 'Strategic Shift: Discontinuing Ethereum Mainnet Support for DHB',
    slug: 'strategic-shift-discontinuing-ethereum-mainnet-support-for-dhb',
    excerpt: 'DHB is making a strategic pivot from Ethereum L1 to focus on Base and Solana, aligning with the Layer 2-centric future of crypto.',
    content: ``,
    bannerImage: '/lovable-uploads/9ed8acb0-971f-4550-b5f6-c94270d5ab79.png',
    bannerImageAlt: 'Strategic shift to Layer 2 and high-performance chains',
    author: {
      name: 'DeHub Team',
      avatar: '/lovable-uploads/27f35ad7-f229-495b-baf1-478d75e25c62.png'
    },
    publishedAt: '2025-01-15T10:00:00Z',
    tags: ['Strategy', 'Ethereum', 'Layer 2', 'Base', 'Solana'],
    readingTime: 6,
    featured: true,
    status: 'published',
    seoTitle: 'DHB Strategic Shift: Moving from Ethereum L1 to Base and Solana',
    seoDescription: 'Learn about DHB\'s strategic decision to discontinue Ethereum mainnet support and focus on Base Layer 2 and Solana for better performance and user experience.'
  },
  {
    id: 'interactive-streaming-on-chain-live-streams-with-animated-tips-2024',
    title: 'Interactive Streaming: On-Chain Live Streams with Animated Tips',
    slug: 'interactive-streaming-on-chain-live-streams-with-animated-tips',
    excerpt: 'Experience the future of live streaming with DeHub\'s interactive platform featuring real-time DHB token tipping and animated reactions.',
    content: ``,
    bannerImage: '/lovable-uploads/c84eee0a-97c7-4938-9b9c-c991c802593e.png',
    bannerImageAlt: 'Interactive live streaming platform with animated tips',
    author: {
      name: 'DeHub Team',
      avatar: '/lovable-uploads/27f35ad7-f229-495b-baf1-478d75e25c62.png'
    },
    publishedAt: '2024-11-20T14:30:00Z',
    tags: ['Streaming', 'Interactive', 'Tips', 'Live', 'DHB'],
    readingTime: 4,
    featured: true,
    status: 'published',
    seoTitle: 'Interactive Live Streaming with On-Chain Tips and Animations',
    seoDescription: 'Discover DeHub\'s revolutionary live streaming platform with real-time DHB token tipping, animated reactions, and decentralized infrastructure.'
  },
  {
    id: 'off-ramp-service-revealed-dehub-card-coming-soon-2024',
    title: 'Off-Ramp Service Revealed: DeHub Card Coming Soon',
    slug: 'off-ramp-service-revealed-dehub-card-coming-soon',
    excerpt: 'Introducing the DeHub Card - your gateway to seamless crypto-to-fiat transactions with premium design and global acceptance.',
    content: `We're excited to announce the upcoming launch of the **DeHub Card** - a revolutionary crypto payment solution that bridges the gap between digital assets and traditional commerce.

## 🌟 Premium Design Meets Functionality

The DeHub Card features a sleek, modern design crafted for the crypto-native user. Available in multiple premium finishes, each card represents more than just a payment method - it's a statement of your commitment to the decentralized future.

💳 Each card is designed with crypto users in mind, featuring:

- **Instant crypto-to-fiat conversion** at the point of sale
- **Global acceptance** at millions of merchants worldwide  
- **Real-time transaction notifications** via our mobile app
- **Advanced security features** including multi-signature protection
- **Rewards program** with DHB token cashback on every purchase

## 🚀 Seamless Integration

The DeHub Card integrates directly with your DeHub wallet, allowing you to spend your crypto holdings anywhere traditional cards are accepted. No more complicated exchanges or waiting periods - just instant, seamless transactions.

### Key Features:
- Support for major cryptocurrencies including DHB, ETH, BTC, and stablecoins
- Competitive exchange rates with transparent fee structure  
- Mobile app control with spending limits and merchant categories
- 24/7 customer support for cardholders
- Premium metal card construction with contactless technology

## 🌍 Global Reach, Local Impact

Whether you're traveling internationally or shopping locally, the DeHub Card works everywhere. Our partnership with major payment networks ensures universal acceptance while maintaining the security and transparency that crypto users demand.

This is just the beginning of our comprehensive financial services ecosystem. The DeHub Card represents our commitment to making crypto adoption effortless and accessible for everyone.

Stay tuned for launch details and be among the first to experience the future of crypto payments. **The revolution starts with your wallet.**`,
    bannerImage: '/lovable-uploads/82928389-9659-4117-8bbe-351a68241694.png',
    bannerImageAlt: 'DeHub Card premium crypto payment solution',
    author: {
      name: 'DeHub Team',
      avatar: '/lovable-uploads/27f35ad7-f229-495b-baf1-478d75e25c62.png'
    },
    publishedAt: '2024-10-15T09:00:00Z',
    tags: ['Card', 'Payment', 'Crypto', 'Off-ramp', 'DeFi'],
    readingTime: 3,
    featured: true,
    status: 'published',
    seoTitle: 'DeHub Card: Premium Crypto Payment Solution Coming Soon',
    seoDescription: 'Discover the DeHub Card - a revolutionary crypto payment solution with instant crypto-to-fiat conversion, global acceptance, and premium design.'
  },
  coinbaseDHBPost,
  wrapUp2022Post,
  dubaiEventPost,
  awardWinningInnovationPost,
  tokenisedUploadsPost,
  novumPrincipiumPost
];

export const getNewPostBySlug = (slug: string): BlogPost | null => {
  return newPosts.find(post => post.slug === slug) || null;
};

export const excludedTitles = [
  'DeHub Quarterly Report Q3 2022',
  'DeHub Community Update September',
  'DeHub Protocol Governance Proposal',
  'DeHub DeFi Integration Update'
];
