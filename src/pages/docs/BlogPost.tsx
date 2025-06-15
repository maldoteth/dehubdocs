
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, formatDate } from '@/utils/blogUtils';
import SEO from '@/components/SEO';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { BlogPostBody } from '@/components/blog/BlogPostBody';
import { BlogPostFooter } from '@/components/blog/BlogPostFooter';
import { raffleContent } from '@/data/raffleContent';
import { getNewPostBySlug } from '@/data/newPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  let post = slug ? getNewPostBySlug(slug) || getPostBySlug(slug) : null;

  if (post && (post.title === 'Worldwide Creators: Partnerships Spanning 15 Countries' || post.title === 'Leveling Up: Major App Upgrade Earns 95% Positive Feedback' || post.title === 'Smarter Liquidity: Automated Liquidity Provision on DEXs' || post.title === 'Open and Clear: DEX Policy Implementation and Transparency Commitment')) {
    post = null;
  } else if (post && post.title === 'Entrepreneurial Spirit: Co-Founders Launch TikTok Agency') {
    post = { ...post, publishedAt: '2024-01-09T12:00:00.000Z' };
  } else if (post && post.title === 'Faster and Sleeker: major app upgrade reveals UI Overhaul and 200% Backend Speed Boost') {
    post = {
      ...post,
      title: 'Faster and Sleeker: major app upgrade reveals UI Overhaul and 200% Backend Speed Boost',
      publishedAt: '2024-10-28T12:00:00.000Z',
      bannerImage: '/lovable-uploads/e9632af0-07c2-4ca8-9b82-fc255191358b.png',
      bannerImageAlt: 'Screenshot of the new DeHub application UI',
      content: `### Introducing the new DeHub App:

#### ✅ New Features Shipped

- Full re-write of back and front end
- New upload process / progress bar
- Feed for photos and text posts
- Tokenised subscriptions
- Creator gated group chats
- Paid and free DMs
- Own custom CDN
- SEO share links
- Endless scroll

#### 🗓 Upcoming (estimates)

- Full Base integration - November
- DePIN - December/Q1
- Fiat Gateway - December/Q1
- Analytics - January/Q1
- CRM - January/Q1
- Live Streaming - February
- Tokenised usernames - March`,
    };
  } else if (post && post.title === 'Revolutionizing Access: On-Chain Tradable Subscriptions Launch') {
    post = { ...post, publishedAt: '2024-10-30T12:00:00.000Z' };
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-royal-blue mb-4 font-exo">Blog Post Not Found</h1>
        <p className="text-royal-blue/70 mb-6 font-exo">The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/docs/blog" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-royal-blue to-middle-blue text-plain-white font-semibold rounded-lg hover:from-royal-blue/90 hover:to-middle-blue/90 transition-all duration-200 font-exo"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const isRafflePost = post.slug === 'dream-big-the-1m-home-crypto-raffle-by-dehub---a-dehub-milestone-from-q3-2022';
  
  const raffleBanner = '/lovable-uploads/729af303-1246-44ed-a598-005275581b6c.png';

  const shareUrl = `${window.location.origin}/docs/blog/${post.slug}`;

  const displayDate =
    post.title === 'Dream Big: The $1M Home Crypto Raffle by DeHub'
      ? 'July 11, 2022'
      : formatDate(post.publishedAt);
  
  const bannerImage = isRafflePost ? raffleBanner : post.bannerImage;
  const content = isRafflePost ? raffleContent : post.content;

  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        image={bannerImage}
        url={`/docs/blog/${post.slug}`}
        type="article"
        publishedTime={post.publishedAt}
        authorName={post.author.name}
        tags={post.tags}
      />
      <div className="max-w-4xl mx-auto">

        <article>
          <BlogPostHeader post={post} displayDate={displayDate} shareUrl={shareUrl} />
          <BlogPostBody bannerImage={bannerImage} bannerImageAlt={post.bannerImageAlt} content={content} />
          <BlogPostFooter shareUrl={shareUrl} postTitle={post.title} />
        </article>
      </div>
    </>
  );
};

export default BlogPost;
