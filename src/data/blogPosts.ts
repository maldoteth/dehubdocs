
import { BlogPost, BlogAuthor } from '@/types/blog';

// Authors
const authors: Record<string, BlogAuthor> = {
  admin: {
    name: 'DeHub Team',
    avatar: '/lovable-uploads/68257c55-c4a8-4aef-9df6-e6cb7c25b28e.png',
    bio: 'The official DeHub development team'
  }
};

// Helper function to create a blog post
const createPost = (
  quarter: string,
  year: number,
  month: number,
  day: number,
  excerpt: string,
  title: string,
  tags: string[] = ['Updates'],
  featured: boolean = false
): BlogPost => ({
  id: `${quarter.toLowerCase().replace(' ', '-')}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  title,
  slug: `${quarter.toLowerCase().replace(' ', '-')}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  excerpt,
  content: `# ${title}\n\n${excerpt}`,
  publishedAt: new Date(year, month, day).toISOString(),
  author: authors.admin,
  tags,
  featured,
  bannerImage: '/lovable-uploads/68257c55-c4a8-4aef-9df6-e6cb7c25b28e.png',
  bannerImageAlt: 'DeHub Platform Update'
});

// Blog posts data
export const blogPosts: BlogPost[] = [
  // Q4 2024
  createPost("Q4 2024", 2024, 11, 15, "Comprehensive analytics dashboard for creators and advertisers launched", "Analytics Dashboard Launch", ["Analytics", "Dashboard"]),
  createPost("Q4 2024", 2024, 11, 10, "Enhanced moderation tools with AI-powered content filtering", "AI Moderation Tools", ["Moderation", "AI"]),
  createPost("Q4 2024", 2024, 11, 5, "New subscription tiers with additional creator benefits", "Enhanced Subscription Tiers", ["Subscriptions", "Creators"]),
  createPost("Q4 2024", 2024, 10, 30, "Major performance improvements and bug fixes", "Performance Update V2.8", ["Performance", "Updates"]),
  createPost("Q4 2024", 2024, 10, 25, "Advanced creator tools including scheduling and automation", "Creator Tools Suite", ["Tools", "Creators"]),
  createPost("Q4 2024", 2024, 10, 20, "Integration with major social media platforms", "Social Media Integration", ["Integration", "Social"]),
  createPost("Q4 2024", 2024, 10, 15, "New payment methods and fiat gateway improvements", "Payment Gateway Update", ["Payments", "Gateway"]),
  createPost("Q4 2024", 2024, 10, 10, "Enhanced search functionality with AI-powered recommendations", "Smart Search Release", ["Search", "AI"]),
  createPost("Q4 2024", 2024, 10, 5, "Mobile app performance optimizations", "Mobile Optimization", ["Mobile", "Performance"]),
  createPost("Q4 2024", 2024, 10, 1, "Community governance features launch", "Governance Launch", ["Governance", "Community"]),

  // Q3 2024  
  createPost("Q3 2024", 2024, 8, 25, "Advanced content monetization tools for creators", "Monetization Tools Launch", ["Monetization", "Tools"]),
  createPost("Q3 2024", 2024, 8, 20, "Enhanced security features and two-factor authentication", "Security Enhancements", ["Security", "Authentication"]),
  createPost("Q3 2024", 2024, 8, 15, "New creator onboarding process with guided tutorials", "Creator Onboarding", ["Onboarding", "Creators"]),
  createPost("Q3 2024", 2024, 8, 10, "API improvements for third-party integrations", "API Updates V3.0", ["API", "Integration"]),
  createPost("Q3 2024", 2024, 8, 5, "Community features including forums and discussion boards", "Community Features", ["Community", "Forums"]),
  createPost("Q3 2024", 2024, 8, 1, "Enhanced content discovery algorithms", "Content Discovery", ["Discovery", "Algorithms"]),
  createPost("Q3 2024", 2024, 7, 25, "New subscription management dashboard", "Subscription Dashboard", ["Subscriptions", "Dashboard"]),
  createPost("Q3 2024", 2024, 7, 20, "Advanced analytics for content performance", "Content Analytics", ["Analytics", "Content"]),
  createPost("Q3 2024", 2024, 7, 15, "Integration with blockchain networks for payments", "Blockchain Integration", ["Blockchain", "Payments"]),
  createPost("Q3 2024", 2024, 7, 10, "Enhanced user profile customization options", "Profile Customization", ["Profiles", "Customization"]),
  createPost("Q3 2024", 2024, 7, 5, "New notification system with granular controls", "Notification System", ["Notifications", "System"]),
  createPost("Q3 2024", 2024, 7, 1, "Performance optimizations for large-scale content", "Performance Boost", ["Performance", "Optimization"]),

  // Q2 2024
  createPost("Q2 2024", 2024, 5, 25, "Advanced content scheduling and publishing tools", "Content Scheduling", ["Scheduling", "Tools"]),
  createPost("Q2 2024", 2024, 5, 20, "Enhanced mobile app with new features", "Mobile App Update", ["Mobile", "Updates"]),
  createPost("Q2 2024", 2024, 5, 15, "New creator collaboration features", "Creator Collaboration", ["Collaboration", "Creators"]),
  createPost("Q2 2024", 2024, 5, 10, "Advanced search and filtering capabilities", "Search Enhancement", ["Search", "Features"]),
  createPost("Q2 2024", 2024, 5, 5, "Integration with popular streaming platforms", "Streaming Integration", ["Streaming", "Integration"]),
  createPost("Q2 2024", 2024, 5, 1, "Enhanced content moderation tools", "Moderation Update", ["Moderation", "Tools"]),
  createPost("Q2 2024", 2024, 4, 25, "New revenue sharing model for creators", "Revenue Sharing", ["Revenue", "Creators"]),
  createPost("Q2 2024", 2024, 4, 20, "Advanced user engagement metrics", "Engagement Metrics", ["Metrics", "Engagement"]),
  createPost("Q2 2024", 2024, 4, 15, "Enhanced security protocols and data protection", "Security Update", ["Security", "Privacy"]),
  createPost("Q2 2024", 2024, 4, 10, "New community guidelines and policies", "Community Guidelines", ["Guidelines", "Community"]),
  createPost("Q2 2024", 2024, 4, 5, "Integration with decentralized storage solutions", "Decentralized Storage", ["Storage", "Decentralization"]),
  createPost("Q2 2024", 2024, 4, 1, "Enhanced content discovery and recommendation engine", "Recommendation Engine", ["Discovery", "AI"]),

  // Q1 2024
  createPost("Q1 2024", 2024, 2, 25, "New user interface design and improved user experience", "UI/UX Redesign", ["Design", "UX"]),
  createPost("Q1 2024", 2024, 2, 20, "Advanced creator monetization options", "Creator Monetization", ["Monetization", "Creators"]),
  createPost("Q1 2024", 2024, 2, 15, "Enhanced content management system", "CMS Enhancement", ["CMS", "Management"]),
  createPost("Q1 2024", 2024, 2, 10, "New subscription tiers and pricing models", "Subscription Tiers", ["Subscriptions", "Pricing"]),
  createPost("Q1 2024", 2024, 2, 5, "Integration with major payment processors", "Payment Integration", ["Payments", "Integration"]),
  createPost("Q1 2024", 2024, 2, 1, "Enhanced platform security and user privacy", "Security Enhancement", ["Security", "Privacy"]),
  createPost("Q1 2024", 2024, 1, 25, "New content creation tools and editor", "Content Tools", ["Tools", "Creation"]),
  createPost("Q1 2024", 2024, 1, 20, "Advanced analytics dashboard for creators", "Creator Analytics", ["Analytics", "Creators"]),
  createPost("Q1 2024", 2024, 1, 15, "Enhanced mobile application with new features", "Mobile Enhancement", ["Mobile", "Features"]),
  createPost("Q1 2024", 2024, 1, 10, "New community features and social interactions", "Social Features", ["Social", "Community"]),
  createPost("Q1 2024", 2024, 1, 5, "Platform performance optimizations", "Performance Update", ["Performance", "Optimization"]),
  createPost("Q1 2024", 2024, 1, 1, "Major platform update with enhanced capabilities", "Platform Update", ["Updates", "Platform"]),

  // Q4 2023
  createPost("Q4 2023", 2023, 11, 25, "Advanced content recommendation algorithms", "Content Recommendations", ["Algorithms", "Content"]),
  createPost("Q4 2023", 2023, 11, 20, "Enhanced creator dashboard with new metrics", "Creator Dashboard", ["Dashboard", "Creators"]),
  createPost("Q4 2023", 2023, 11, 15, "New subscription management features", "Subscription Management", ["Subscriptions", "Management"]),
  createPost("Q4 2023", 2023, 11, 10, "Advanced search functionality with filters", "Advanced Search", ["Search", "Filters"]),
  createPost("Q4 2023", 2023, 11, 5, "Enhanced user profile customization", "Profile Enhancement", ["Profiles", "Customization"]),
  createPost("Q4 2023", 2023, 11, 1, "New content monetization strategies", "Monetization Strategies", ["Monetization", "Strategy"]),
  createPost("Q4 2023", 2023, 10, 25, "Platform integration with blockchain networks", "Blockchain Integration", ["Blockchain", "Integration"]),
  createPost("Q4 2023", 2023, 10, 20, "Enhanced content moderation and safety features", "Safety Features", ["Safety", "Moderation"]),
  createPost("Q4 2023", 2023, 10, 15, "New creator collaboration tools", "Collaboration Tools", ["Collaboration", "Tools"]),
  createPost("Q4 2023", 2023, 10, 10, "Advanced analytics and reporting capabilities", "Analytics Reporting", ["Analytics", "Reporting"]),
  createPost("Q4 2023", 2023, 10, 5, "Enhanced mobile app performance", "Mobile Performance", ["Mobile", "Performance"]),
  createPost("Q4 2023", 2023, 10, 1, "New user onboarding experience", "User Onboarding", ["Onboarding", "UX"]),

  // Q3 2023
  createPost("Q3 2023", 2023, 8, 25, "Advanced content scheduling features", "Content Scheduling", ["Scheduling", "Content"]),
  createPost("Q3 2023", 2023, 8, 20, "Enhanced creator revenue tracking", "Revenue Tracking", ["Revenue", "Tracking"]),
  createPost("Q3 2023", 2023, 8, 15, "New community engagement tools", "Engagement Tools", ["Engagement", "Community"]),
  createPost("Q3 2023", 2023, 8, 10, "Advanced content discovery mechanisms", "Content Discovery", ["Discovery", "Content"]),
  createPost("Q3 2023", 2023, 8, 5, "Enhanced platform security measures", "Security Measures", ["Security", "Platform"]),
  createPost("Q3 2023", 2023, 8, 1, "New subscription tier benefits", "Subscription Benefits", ["Subscriptions", "Benefits"]),
  createPost("Q3 2023", 2023, 7, 25, "Advanced creator tools and utilities", "Creator Utilities", ["Tools", "Creators"]),
  createPost("Q3 2023", 2023, 7, 20, "Enhanced content management workflows", "Content Workflows", ["Workflows", "Management"]),
  createPost("Q3 2023", 2023, 7, 15, "New payment processing improvements", "Payment Processing", ["Payments", "Processing"]),
  createPost("Q3 2023", 2023, 7, 10, "Advanced user interaction features", "User Interactions", ["Interactions", "Users"]),
  createPost("Q3 2023", 2023, 7, 5, "Enhanced platform scalability", "Platform Scalability", ["Scalability", "Performance"]),
  createPost("Q3 2023", 2023, 7, 1, "New content creation workflows", "Creation Workflows", ["Workflows", "Creation"]),

  // Q2 2023
  createPost("Q2 2023", 2023, 5, 25, "Advanced subscription management tools", "Subscription Tools", ["Subscriptions", "Tools"]),
  createPost("Q2 2023", 2023, 5, 20, "Enhanced creator monetization features", "Creator Monetization", ["Monetization", "Features"]),
  createPost("Q2 2023", 2023, 5, 15, "New community building features", "Community Building", ["Community", "Features"]),
  createPost("Q2 2023", 2023, 5, 10, "Advanced content analytics dashboard", "Content Analytics", ["Analytics", "Dashboard"]),
  createPost("Q2 2023", 2023, 5, 5, "Enhanced mobile user experience", "Mobile UX", ["Mobile", "UX"]),
  createPost("Q2 2023", 2023, 5, 1, "New creator support programs", "Creator Support", ["Support", "Creators"]),
  createPost("Q2 2023", 2023, 4, 25, "Advanced content recommendation system", "Recommendation System", ["Recommendations", "System"]),
  createPost("Q2 2023", 2023, 4, 20, "Enhanced platform performance optimizations", "Performance Optimizations", ["Performance", "Optimization"]),
  createPost("Q2 2023", 2023, 4, 15, "New user engagement metrics", "Engagement Metrics", ["Engagement", "Metrics"]),
  createPost("Q2 2023", 2023, 4, 10, "Advanced content moderation algorithms", "Moderation Algorithms", ["Moderation", "Algorithms"]),
  createPost("Q2 2023", 2023, 4, 5, "Enhanced creator collaboration features", "Creator Collaboration", ["Collaboration", "Features"]),
  createPost("Q2 2023", 2023, 4, 1, "New subscription pricing models", "Pricing Models", ["Pricing", "Subscriptions"]),

  // Q1 2023
  createPost("Q1 2023", 2023, 2, 25, "Advanced creator dashboard analytics", "Dashboard Analytics", ["Dashboard", "Analytics"]),
  createPost("Q1 2023", 2023, 2, 20, "Enhanced content discovery algorithms", "Discovery Algorithms", ["Discovery", "Algorithms"]),
  createPost("Q1 2023", 2023, 2, 15, "New community interaction features", "Community Interactions", ["Community", "Interactions"]),
  createPost("Q1 2023", 2023, 2, 10, "Advanced subscription tier management", "Tier Management", ["Tiers", "Management"]),
  createPost("Q1 2023", 2023, 2, 5, "Enhanced platform security protocols", "Security Protocols", ["Security", "Protocols"]),
  createPost("Q1 2023", 2023, 2, 1, "New creator monetization opportunities", "Monetization Opportunities", ["Monetization", "Opportunities"]),
  createPost("Q1 2023", 2023, 1, 25, "Advanced content management features", "Content Management", ["Management", "Content"]),
  createPost("Q1 2023", 2023, 1, 20, "Enhanced user profile features", "Profile Features", ["Profiles", "Features"]),
  createPost("Q1 2023", 2023, 1, 15, "New payment integration capabilities", "Payment Integration", ["Payments", "Integration"]),
  createPost("Q1 2023", 2023, 1, 10, "Advanced creator tools suite", "Creator Tools", ["Tools", "Suite"]),
  createPost("Q1 2023", 2023, 1, 5, "Enhanced mobile application features", "Mobile Features", ["Mobile", "Application"]),
  createPost("Q1 2023", 2023, 1, 1, "Platform foundation and core features", "Platform Foundation", ["Foundation", "Core"]),

  // Q4 2022
  createPost("Q4 2022", 2022, 11, 25, "Advanced content creation tools", "Content Creation", ["Creation", "Tools"]),
  createPost("Q4 2022", 2022, 11, 20, "Enhanced creator support systems", "Creator Support", ["Support", "Systems"]),
  createPost("Q4 2022", 2022, 11, 15, "New subscription model implementation", "Subscription Model", ["Subscriptions", "Model"]),
  createPost("Q4 2022", 2022, 11, 10, "Advanced user engagement features", "User Engagement", ["Engagement", "Users"]),
  createPost("Q4 2022", 2022, 11, 5, "Enhanced platform performance", "Platform Performance", ["Performance", "Platform"]),
  createPost("Q4 2022", 2022, 11, 1, "New community features launch", "Community Launch", ["Community", "Launch"]),
  createPost("Q4 2022", 2022, 10, 25, "Advanced monetization strategies", "Monetization Launch", ["Monetization", "Strategy"]),
  createPost("Q4 2022", 2022, 10, 20, "Enhanced content discovery", "Content Discovery", ["Discovery", "Enhancement"]),
  createPost("Q4 2022", 2022, 10, 15, "New creator dashboard features", "Creator Dashboard", ["Dashboard", "Features"]),
  createPost("Q4 2022", 2022, 10, 10, "Advanced analytics implementation", "Analytics Implementation", ["Analytics", "Implementation"]),
  createPost("Q4 2022", 2022, 10, 5, "Enhanced security features", "Security Enhancement", ["Security", "Enhancement"]),
  createPost("Q4 2022", 2022, 10, 1, "Platform scalability improvements", "Scalability Improvements", ["Scalability", "Improvements"]),

  // Q3 2022
  createPost("Q3 2022", 2022, 8, 25, "Advanced creator tools development", "Creator Tools Development", ["Tools", "Development"]),
  createPost("Q3 2022", 2022, 8, 20, "Enhanced mobile application", "Mobile Application", ["Mobile", "Enhancement"]),
  createPost("Q3 2022", 2022, 8, 15, "New user onboarding system", "Onboarding System", ["Onboarding", "System"]),
  createPost("Q3 2022", 2022, 8, 10, "Advanced content management", "Content Management", ["Content", "Management"]),
  createPost("Q3 2022", 2022, 8, 5, "Enhanced user experience design", "UX Design", ["UX", "Design"]),
  createPost("Q3 2022", 2022, 8, 1, "New subscription features", "Subscription Features", ["Subscriptions", "Features"]),
  createPost("Q3 2022", 2022, 7, 25, "Advanced platform architecture", "Platform Architecture", ["Architecture", "Platform"]),
  createPost("Q3 2022", 2022, 7, 20, "Enhanced creator monetization", "Creator Monetization", ["Monetization", "Enhancement"]),
  createPost("Q3 2022", 2022, 7, 15, "New community engagement tools", "Community Tools", ["Community", "Tools"]),
  createPost("Q3 2022", 2022, 7, 10, "Advanced content algorithms", "Content Algorithms", ["Algorithms", "Content"]),
  createPost("Q3 2022", 2022, 7, 5, "Enhanced platform security", "Platform Security", ["Security", "Platform"]),
  createPost("Q3 2022", 2022, 7, 1, "New user interaction features", "User Interactions", ["Interactions", "Features"]),

  // Q2 2022
  createPost("Q2 2022", 2022, 5, 25, "Advanced subscription management", "Subscription Management", ["Management", "Subscriptions"]),
  createPost("Q2 2022", 2022, 5, 20, "Enhanced creator dashboard", "Creator Dashboard", ["Dashboard", "Enhancement"]),
  createPost("Q2 2022", 2022, 5, 15, "New content creation features", "Content Creation", ["Creation", "Features"]),
  createPost("Q2 2022", 2022, 5, 10, "Advanced user analytics", "User Analytics", ["Analytics", "Users"]),
  createPost("Q2 2022", 2022, 5, 5, "Enhanced mobile performance", "Mobile Performance", ["Mobile", "Performance"]),
  createPost("Q2 2022", 2022, 5, 1, "New creator support tools", "Creator Support", ["Support", "Tools"]),
  createPost("Q2 2022", 2022, 4, 25, "Advanced content discovery", "Content Discovery", ["Discovery", "Advanced"]),
  createPost("Q2 2022", 2022, 4, 20, "Enhanced platform stability", "Platform Stability", ["Stability", "Platform"]),
  createPost("Q2 2022", 2022, 4, 15, "New monetization features", "Monetization Features", ["Monetization", "New"]),
  createPost("Q2 2022", 2022, 4, 10, "Advanced user engagement", "User Engagement", ["Engagement", "Advanced"]),
  createPost("Q2 2022", 2022, 4, 5, "Enhanced content moderation", "Content Moderation", ["Moderation", "Enhanced"]),
  createPost("Q2 2022", 2022, 4, 1, "New community features", "Community Features", ["Community", "New"]),

  // Q1 2022
  createPost("Q1 2022", 2022, 2, 25, "Advanced creator tools", "Creator Tools Advanced", ["Tools", "Advanced"]),
  createPost("Q1 2022", 2022, 2, 20, "Enhanced subscription system", "Subscription System", ["System", "Enhanced"]),
  createPost("Q1 2022", 2022, 2, 15, "New user interface design", "UI Design", ["Design", "Interface"]),
  createPost("Q1 2022", 2022, 2, 10, "Advanced content management", "Content Management Advanced", ["Management", "Advanced"]),
  createPost("Q1 2022", 2022, 2, 5, "Enhanced creator monetization", "Creator Monetization Enhanced", ["Monetization", "Enhanced"]),
  createPost("Q1 2022", 2022, 2, 1, "New platform features", "Platform Features", ["Platform", "New"]),
  createPost("Q1 2022", 2022, 1, 25, "Advanced analytics dashboard", "Analytics Dashboard Advanced", ["Analytics", "Advanced"]),
  createPost("Q1 2022", 2022, 1, 20, "Enhanced mobile experience", "Mobile Experience", ["Mobile", "Enhanced"]),
  createPost("Q1 2022", 2022, 1, 15, "New creator onboarding", "Creator Onboarding New", ["Onboarding", "New"]),
  createPost("Q1 2022", 2022, 1, 10, "Advanced content algorithms", "Content Algorithms Advanced", ["Algorithms", "Advanced"]),
  createPost("Q1 2022", 2022, 1, 5, "Enhanced platform performance", "Platform Performance Enhanced", ["Performance", "Enhanced"]),
  createPost("Q1 2022", 2022, 1, 1, "Platform beta launch", "Beta Launch", ["Launch", "Beta"], true),
];

// Helper functions
export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => new Date(post.publishedAt) <= new Date());
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

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
