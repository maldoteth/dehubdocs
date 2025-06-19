import { BlogPost, BlogTag } from '@/types/blog';
import { blogPosts } from '@/data/blogPosts';
import { newPosts, excludedTitles } from '@/data/newPosts';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  // First check newPosts, then blogPosts
  const newPost = newPosts.find(post => post.slug === slug);
  if (newPost) return newPost;
  
  return blogPosts.find(post => post.slug === slug);
};

export const getAllPosts = (): BlogPost[] => {
  const originalPosts = blogPosts.filter(post => !post.draft && !excludedTitles.includes(post.title));
  const combinedPosts = [...originalPosts, ...newPosts];
  
  // Deduplicate by title
  const uniquePosts = Array.from(new Map(combinedPosts.map(post => [post.title, post])).values());
  
  // Apply any special date updates
  const updatedPosts = uniquePosts.map(post => {
    if (post.title === 'Entrepreneurial Spirit: Co-Founders Launch TikTok Agency') {
      return { ...post, publishedAt: '2024-01-09T12:00:00.000Z' };
    }
    if (post.title === 'Back in Action: DeHub V2 Trading Resumes on Gate.io') {
      return { ...post, publishedAt: '2023-02-16T12:00:00.000Z' };
    }
    if (post.title === 'Faster and Sleeker: UI Overhaul and 200% Backend Speed Boost') {
      return {
        ...post,
        title: 'Faster and Sleeker: major app upgrade reveals UI Overhaul and 200% Backend Speed Boost',
        publishedAt: '2024-10-28T12:00:00.000Z',
        bannerImage: '/lovable-uploads/e9632af0-07c2-4ca8-9b82-fc255191358b.png',
        bannerImageAlt: 'Screenshot of the new DeHub application UI'
      };
    }
    if (post.title === 'Revolutionizing Access: On-Chain Tradable Subscriptions Launch') {  
      return { ...post, publishedAt: '2024-10-30T12:00:00.000Z' };
    }
    if (post.slug === 'scaling-new-heights-livepeer-integration-for-50k-concurrent-viewers---a-dehub-milestone-from-q1-2025') {
      return {
        ...post,
        title: 'Scaling New Heights: Livepeer Integration for initially 50k+ Concurrent Viewers With Unlimited Viewer abilities as we scale up.'
      };
    }
    return post;
  });
  
  // Sort by date (newest first)
  return updatedPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getPublishedPosts = (): BlogPost[] => {
  return getAllPosts();
};

export const getLatestPost = (): BlogPost | undefined => {
  const allPosts = getAllPosts();
  return allPosts[0]; // First post after sorting by date (newest)
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
      featured: false
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

  const allPosts = getAllPosts();

  return allPosts.map(post => {
    const override = featuredOverrides.find(o => o.id === post.id);
    return override ? { ...post, ...override } : post;
  }).filter(post => post.featured);
};

export const getAllTags = (): BlogTag[] => {
  const allPosts = getAllPosts();
  const tagCounts: { [key: string]: number } = {};

  allPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};
