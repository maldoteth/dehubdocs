import { BlogPost, BlogTag } from '@/types/blog';
import { blogPosts } from '@/data/blogPosts';

// Utility functions for blog operations
export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.status === 'published')
    .map(post => ({ ...post, slug: post.id.toString() }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.featured && post.status === 'published')
    .map(post => ({ ...post, slug: post.id.toString() }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const postId = parseInt(slug, 10);

  // Only try to find by ID if the slug is a valid number string (e.g. "123", not "123-abc")
  if (!isNaN(postId) && String(postId) === slug) {
    const post = blogPosts.find(p => parseInt(p.id, 10) === postId && p.status === 'published');
    if (post) {
      return { ...post, slug: post.id };
    }
  }

  // If not found by ID, or if slug wasn't a plain number, try finding by text slug as a fallback
  const postBySlug = blogPosts.find(p => p.slug === slug && p.status === 'published');
  if (postBySlug) {
    return { ...postBySlug, slug: postBySlug.id };
  }

  return undefined;
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
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
