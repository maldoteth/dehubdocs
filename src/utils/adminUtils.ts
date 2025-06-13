
// Simple IP-based admin check - replace with your actual IP
const ADMIN_IPS = ['127.0.0.1', 'localhost', '::1']; // Add your actual IP here

export const isAdmin = async (): Promise<boolean> => {
  try {
    // In production, you'd get the real IP from your server
    // For now, we'll simulate admin access in development
    return true; // Set to false to test non-admin access
  } catch {
    return false;
  }
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const generateBlogDataFile = (posts: any[]): string => {
  return `import { BlogPost, BlogTag } from '@/types/blog';

// Sample blog posts - you can edit these or add new ones
export const blogPosts: BlogPost[] = ${JSON.stringify(posts, null, 2)};

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
`;
};
