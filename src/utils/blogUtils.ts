
import { BlogPost } from '@/types/blog';
import { publishedBlogPosts, featuredBlogPosts } from '@/data/allBlogPosts';

export const getPublishedPosts = (): BlogPost[] => {
  return publishedBlogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getFeaturedPosts = (): BlogPost[] => {
  return featuredBlogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  return publishedBlogPosts.find(post => post.slug === slug) || null;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });
};

export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};
