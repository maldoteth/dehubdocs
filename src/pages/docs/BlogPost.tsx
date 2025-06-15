
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, formatDate } from '@/utils/blogUtils';
import SEO from '@/components/SEO';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { BlogPostBody } from '@/components/blog/BlogPostBody';
import { BlogPostFooter } from '@/components/blog/BlogPostFooter';
import { raffleContent } from '@/data/raffleContent';
import { BlogPost as BlogPostType } from '@/types/blog';

const newPostData: BlogPostType = {
  id: 'base-pool-going-live-soon',
  title: 'Base pool going live soon!',
  slug: 'base-pool-going-live-soon',
  excerpt: 'Get ready DeHubbers! We are thrilled to announce that we will be deploying on Uniswap on the Base network imminently. Find out how to bridge your tokens for free!',
  content: `
    <h2 class="text-2xl font-bold mb-4 font-exo">The Next Chapter: DeHub is Launching on Base!</h2>
    <p class="mb-4 text-lg text-royal-blue/80">Get ready, DeHubbers! The moment many of you have been waiting for is almost here. We are thrilled to announce that DeHub will be deploying on Uniswap on the Base network imminently.</p>
    <p class="mb-4 text-royal-blue/80">This strategic move marks a significant milestone for our project, opening up a world of possibilities within Base's fast, low-cost, and developer-friendly Ethereum L2 ecosystem. We're excited to bring more liquidity, accessibility, and utility to the DeHub token and our community.</p>
    
    <h3 class="text-xl font-bold mt-8 mb-4 font-exo">Official Base Contract</h3>
    <p class="mb-4 text-royal-blue/80">For everyone wanting to get prepared, here is the official DeHub token contract address on the Base network:</p>
    <div class="bg-sky-blue/10 p-4 rounded-lg my-4 overflow-x-auto border border-sky-blue/20">
      <a href="https://basescan.org/token/0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c" target="_blank" rel="noopener noreferrer" class="text-sm font-mono text-middle-blue break-all hover:underline">0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c</a>
    </div>
    <p class="mb-4 text-royal-blue/80">We encourage you to add this to your wallet and verify it on <a href="https://basescan.org/token/0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c" target="_blank" rel="noopener noreferrer" class="text-middle-blue hover:underline font-semibold">Basescan</a>.</p>
    
    <h3 class="text-xl font-bold mt-8 mb-4 font-exo">Bridge to Base for FREE!</h3>
    <p class="mb-4 text-royal-blue/80">To celebrate our launch and make your transition seamless, we've established a simple and free bridging mechanism. You can migrate your tokens from other networks to Base effortlessly.</p>
    <p class="mb-4 text-royal-blue/80">Simply send your tokens to this dedicated bridging address:</p>
    <div class="bg-sky-blue/10 p-4 rounded-lg my-4 overflow-x-auto border border-sky-blue/20">
      <code class="text-sm font-mono text-middle-blue break-all">0x11D79aE9a0F8a8f9Fcf5BE71e403ed203EC2394d</code>
    </div>
    <p class="mb-4 text-royal-blue/80">Tokens sent to this address will be automatically burned on the origin chain and re-minted for you on the Base network. No fees, no hassle.</p>

    <p class="mt-8 font-semibold text-royal-blue">This is just the beginning. Stay tuned for the official announcement when the Uniswap pool goes live. We're incredibly excited for this next chapter and couldn't have done it without our amazing community!</p>
  `,
  bannerImage: '/lovable-uploads/2ad39b99-84df-44cf-9521-ddac621b4874.png',
  bannerImageAlt: 'DeHub launching on Base network announcement banner',
  author: {
    name: 'DeHub Team',
  },
  publishedAt: '2024-05-09T12:00:00.000Z',
  tags: ['Announcement', 'Base', 'DeFi', 'Uniswap'],
  readingTime: 2,
  featured: true,
  status: 'published',
  seoTitle: 'DeHub is Launching on Base! Uniswap Pool Going Live Soon',
  seoDescription: 'DeHub is expanding to the Base network! Get ready for our Uniswap pool launch. Learn about the new contract and how to bridge your tokens for free.',
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = slug === newPostData.slug
    ? newPostData
    : slug ? getPostBySlug(slug) : null;

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
      : post.title === 'Faster and Sleeker: UI Overhaul and 200% Backend Speed Boost'
      ? 'July 23, 2024'
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
      />
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/docs/blog" 
          className="inline-flex items-center text-middle-blue hover:text-royal-blue transition-colors duration-200 mb-8 font-exo"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

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
