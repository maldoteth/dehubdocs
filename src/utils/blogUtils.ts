
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { sync } from 'glob';
import { BlogPost, BlogTag } from '@/types/blog';

const POSTS_PATH = path.join(process.cwd(), 'src/content/posts');

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    return filename.replace(/\.mdx$/, '');
  });
};

const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/g).length;
  const readingTimeInMinutes = words / wordsPerMinute;
  return Math.ceil(readingTimeInMinutes);
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  try {
    const source = readFileSync(postPath, 'utf-8');
    const { content, data } = matter(source);

    const frontmatter = data as {
      title: string;
      excerpt: string;
      tags: string[];
      featured: boolean;
      publishedAt: string;
      bannerImage: string;
      bannerImageAlt: string;
      seoTitle?: string;
      seoDescription?: string;
    };

    return {
      slug,
      content,
      readingTime: calculateReadingTime(content),
      ...frontmatter,
    };
  } catch (error) {
    console.error(`Error reading or parsing MDX file ${slug}:`, error);
    return null;
  }
};

export const getPublishedPosts = (): BlogPost[] => {
  const slugs = getSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .filter((post) => {
      const isProd = process.env.NODE_ENV === 'production';
      // In prod, show all posts. In dev, show only posts with a past or current publish date.
      return isProd ? true : post.publishedAt <= new Date().toISOString();
    })
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });
};

export const getFeaturedPosts = (): BlogPost[] => {
  return getPublishedPosts().filter((post) => post.featured);
};

export const getAllTags = (): BlogTag[] => {
  const allPosts = getPublishedPosts();
  const tagCount: { [key: string]: number } = {};

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagCount[tag]) {
        tagCount[tag]++;
      } else {
        tagCount[tag] = 1;
      }
    });
  });

  return Object.entries(tagCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};

export const searchPosts = (query: string): BlogPost[] => {
  const allPosts = getPublishedPosts();
  if (!query) {
    return allPosts;
  }

  const lowerCaseQuery = query.toLowerCase();

  return allPosts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(lowerCaseQuery);
    const excerptMatch = post.excerpt.toLowerCase().includes(lowerCaseQuery);
    const contentMatch = post.content.toLowerCase().includes(lowerCaseQuery);
    const tagMatch = post.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery));

    return titleMatch || excerptMatch || contentMatch || tagMatch;
  });
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

export const getPostDetailsWithOverrides = (post: BlogPost): BlogPost => {
  let bannerImage = post.bannerImage;
  let bannerImageAlt = post.bannerImageAlt;

  // Override specific post details here
  if (post.slug === '1-million-dollar-raise-completed') {
    bannerImage = '/lovable-uploads/bdd1dd4c-eb62-44e7-a205-fced995bdf9f.png';
    bannerImageAlt = '$1,000,000 Fundraise';
  } else if (post.slug === 'get-ready-players-final-snapshot-for-last-chad-standing-airdrop---a-dehub-milestone-from-q2-2025') {
    bannerImage = '/lovable-uploads/6d868478-769e-4981-b285-4ca5fa215dc5.png';
    bannerImageAlt = 'Last Chad Standing helicopter';
  } else if (post.slug === 'main-event-ready-last-chad-standing-full-trailer-gains-mma-promoter-attention---a-dehub-milestone-from-q1-2025') {
    bannerImage = '/lovable-uploads/b632bee7-0228-48be-b4ac-7ac0ab5e9994.png';
    bannerImageAlt = 'Last Chad Standing character helmet';
  } else if (post.slug === 'fresh-experience-revamped-app-feed-with-audio-replies--live-talk-spaces---a-dehub-milestone-from-q2-2025') {
    bannerImage = '/lovable-uploads/eeb2e5c9-2347-4865-876e-31f38fe4412a.png';
    bannerImageAlt = 'DeHub Revamped App Feed';
  } else if (post.slug === 'transparency-hub-dhbscancom-launches-for-contract-activity-tracking---a-dehub-milestone-from-q2-2025') {
    bannerImage = '/lovable-uploads/6139f136-7af6-4b12-9d60-85674b30c418.png';
    bannerImageAlt = 'DHBScan.com banner';
  } else if (post.slug === 'join-our-exclusive-ugc-programme-and-earn-rewards') {
    bannerImage = '/lovable-uploads/b632bee7-0228-48be-b4ac-7ac0ab5e9994.png';
    bannerImageAlt = 'DeHub UGC Programme';
  }
  
  return {
    ...post,
    bannerImage,
    bannerImageAlt,
  };
};
