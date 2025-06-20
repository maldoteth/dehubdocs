import { BlogPost } from '@/types/blog';
import { tradableSubscriptionsPost } from './tradableSubscriptionsPost';
import { fasterAndSleekerPost } from './fasterAndSleekerPost';
import { scalingNewHeightsPost } from './scalingNewHeightsPost';
import { confirmedDHBListingPost } from './confirmedDHBListingPost';
import { novumPrincipiumPost } from './posts/novumPrincipiumPost';

export const excludedTitles = [
  'Dream Big: The $1M Home Crypto Raffle by DeHub'
];

export const newPosts: BlogPost[] = [
  tradableSubscriptionsPost,
  fasterAndSleekerPost,
  scalingNewHeightsPost,
  confirmedDHBListingPost,
  novumPrincipiumPost
];

export const getNewPostBySlug = (slug: string): BlogPost | null => {
  const post = newPosts.find((post) => post.slug === slug);
  return post || null;
};
