
import { BlogPost, BlogTag } from '@/types/blog';
import { blogPosts } from '@/data/blogPosts';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => !post.draft);
};

export const getFeaturedPosts = (): BlogPost[] => {
  const featuredOverrides: Partial<BlogPost>[] = [
    {
      id: 'confirmed-dhb-will-be-tradable-on-coinbase-soon',
      featured: true
    },
    {
      id: '1m-raise-completed',
      featured: true
    },
    {
      id: 'off-ramp-service-revealed-dehub-card-coming-soon',
      featured: false
    },
    {
      id: 'scaling-new-heights-livepeer-integration-2025',
      featured: false
    },
    {
      id: 'revolutionizing-access-subscriptions-2024',
      featured: true
    },
    {
      id: 'ui-overhaul-backend-boost-2024',
      featured: true
    },
    {
      id: 'feature-spotlight-ad-tech',
      featured: false
    },
    {
      id: 'mvp-app-released-listed-on-google-play-store',
      featured: false
    },
    {
      id: '1-year-review-a-quick-look-back',
      featured: false
    }
  ];

  const publishedPosts = getPublishedPosts();

  return publishedPosts.map(post => {
    const override = featuredOverrides.find(o => o.id === post.id);
    return override ? { ...post, ...override } : post;
  }).filter(post => post.featured);
};

export const getAllTags = (): BlogTag[] => {
  const publishedPosts = getPublishedPosts();
  const tagCounts: { [key: string]: number } = {};

  publishedPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};
