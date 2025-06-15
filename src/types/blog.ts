
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  bannerImage: string;
  bannerImageAlt: string;
  publishedAt: string; // ISO date string for manual control
  tags: string[];
  readingTime: number; // in minutes
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogTag {
  name: string;
  count: number;
}
