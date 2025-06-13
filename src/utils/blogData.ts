
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
    id: '3',
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
