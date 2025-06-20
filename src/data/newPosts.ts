
import { BlogPost } from '@/types/blog';
import { novumPrincipiumPost } from './posts/novumPrincipiumPost';

// Independent new posts - each post is completely self-contained
export const newPosts: BlogPost[] = [
  novumPrincipiumPost,
  // Add other independent posts here as needed
];

// No more excludedTitles - each post is independent
export const excludedTitles: string[] = [];
