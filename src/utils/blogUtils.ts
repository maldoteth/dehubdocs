
import { BlogPost } from '@/types/blog';
import { allBlogPosts } from '@/data/allBlogPosts';

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts.filter(post => post.visible !== false);
}

export function getPublishedPosts(): BlogPost[] {
  return getAllBlogPosts().filter(post => 
    post.status !== 'draft' && post.visible !== false
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return getPublishedPosts().filter(post => 
    post.featured && post.visible !== false
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find(post => post.slug === slug);
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const relatedPosts = getPublishedPosts()
    .filter(post => 
      post.id !== currentPost.id && 
      post.tags.some(tag => currentPost.tags.includes(tag)) &&
      post.visible !== false
    )
    .sort((a, b) => {
      const aMatchingTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bMatchingTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bMatchingTags - aMatchingTags;
    });

  return relatedPosts.slice(0, limit);
}
