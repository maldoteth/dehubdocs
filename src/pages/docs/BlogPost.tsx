import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { getPostBySlug, formatDate } from '@/utils/blogUtils';
import BlogContent from '@/components/blog/BlogContent';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import { OptimizedImage } from '@/components/OptimizedImage';
import { BlogPost as BlogPostType } from '@/types/blog';

const newPostData: BlogPostType = {
  id: 'temp-base-pool-post',
  slug: 'base-pool-going-live-soon',
  title: 'Base pool going live soon!',
  excerpt: 'Get ready, DeHubbers. We\'ll be deploying on Uniswap imminently to bring DeHub to the Base network!',
  content: `### The Next Chapter for DeHub: We're Coming to Base!

Get ready, DeHubbers! The moment many of you have been waiting for is almost here. We are thrilled to announce that we'll be deploying the DeHub token on the Base network via Uniswap imminently. This marks a significant milestone in our journey, expanding the DeHub ecosystem and providing our community with faster, cheaper transactions.

### Why Base?

Base, an Ethereum Layer 2 incubated by Coinbase, offers the security and scalability we need to grow. By launching on Base, we're tapping into a vibrant and rapidly expanding ecosystem, opening up new avenues for liquidity, partnerships, and dApp integrations.

### Your Guide to Getting Started on Base

We want to make this transition as smooth as possible for everyone. Here’s everything you need to know.

#### Official Base Contract Address

**This is the only official contract address for the DeHub token on Base.** Please save it and always verify before interacting with it to protect yourself from scams.

- **Base Contract:** [\`0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c\`](https://basescan.org/token/0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c)

#### Bridge to Base for Free!

For our existing token holders, we've set up a seamless and **free** one-way bridge to move your tokens to Base.

1.  **Simply send your tokens** to the official burn address:
    \`0x11D79aE9a0F8a8f9Fcf5BE71e403ed203EC2394d\`

2.  **What happens next?** Your tokens sent to this address will be automatically burned on their original chain and re-minted 1:1 for you on the Base network. Your new tokens will appear in the same wallet address on Base.

### What's Next?

The Uniswap liquidity pool will go live shortly after we finalize the deployment. We'll announce the exact time across all our social media channels, so make sure you're following us!

This is a huge step for DeHub, and we couldn't have done it without your incredible support.

Let's build the future, on Base.

The DeHub Team`,
  publishedAt: '2024-05-09T12:00:00.000Z',
  readingTime: 2,
  tags: ['Base', 'DeFi', 'Uniswap', 'Bridge'],
  featured: false,
  bannerImage: '/lovable-uploads/eeb2e5c9-2347-4865-876e-31f38fe4412a.png',
  bannerImageAlt: 'DeHub token on Base network announcement',
  seoTitle: 'DeHub is Coming to Base Network via Uniswap!',
  seoDescription: 'Big news! DeHub is deploying on Base network soon. Find out about the new contract address and how to bridge your tokens for free.'
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const post = slug === newPostData.slug ? newPostData : (slug ? getPostBySlug(slug) : null);

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
  const raffleContent = `6 Bed 3 Bath Home, Waterlooville.
A rare opportunity to own the only 6-bedroom home currently for sale in an affluent and highly sought after South Hampshire village. Enjoy easy access to the A3, local amenities and a superb school catchment area. The ground floor offers a cloakroom, WC, kitchen/breakfast room, dining room, conservatory & large garden with fruit-bearing grape vines and an external bedroom. It further benefits from 5 bedrooms, an en-suite & family bathroom to the 1st floor. There is a double driveway & private access to large public fields. There is nothing close to it on the market for miles, so do not miss out on your chance to own it for just $11.

### Specifications

- Lounge 20' 1" x 12' 6" ( 6.12m x 3.81m )
- Dining Room 32' 1" x 16' 20" ( 8.58m x 5.28m )
- Kitchen / Breakfast Room 17' 9" x 8' 10" ( 5.41m x 2.69m )
- Water Closet / WC 5' x 3.5' ( 1.52m x 1.06m )
- Bedroom 1 14' 5" x 12' 6" ( 4.39m x 3.81m )
- En-Suite Bathroom 10' x 7' ( 3.05m x 2.13m )
- Bedroom 2 13' 1" x 12' 6" ( 3.99m x 3.81m )
- Bedroom 3 15' 1" x 10' 2" ( 4.60m x 3.10m )
- Bedroom 4 13' x 9' 9" ( 3.80m x 3.10m )
- Bedroom 5+6 13' 1" x 9' 5" ( 3.99m x 2.87m )
- Family Bathroom 10' x 5' 9" ( 3.05m x 1.76m )

### Terms

Raffles conducted on public blockchains are verifiably random. Winners can receive the prize or a cash equivalent paid out in cryptocurrency stablecoins. Raffles are conducted in compliance with regulations and best practices set out by the [UK gambling commission](https://www.gamblingcommission.gov.uk/). Blockchain raffles are the future of high value prize draws due to their property of guaranteed immutability.

**Raffle Draw Date & Time:** Live stream draw on selling out.

**Price Per Raffle Ticket:** $11.00 USDT

**Number of tickets:** 100,000. All tickets are priced equally. No discounts for buying bundles of tickets.

**Registered Raffle Promoters:** DeLabs LTD, Office 4, 219 Kensington High Street, Kensington, London, W8 6BD

**Property Owners:** DeLabs LTD

### Technical Support

Gambling Awareness Helpline
`;

  const shareUrl = `${window.location.origin}/docs/blog/${post.slug}`;
  
  const handleShare = (platform: string) => {
    let url = '';
    const title = encodeURIComponent(post.title);
    const shareUrlEncoded = encodeURIComponent(shareUrl);
    
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${title}&url=${shareUrlEncoded}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrlEncoded}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrlEncoded}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link Copied",
          description: "Blog post link copied to clipboard"
        });
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  const displayDate =
    post.title === 'Dream Big: The $1M Home Crypto Raffle by DeHub'
      ? 'July 11, 2022'
      : post.title === 'Faster and Sleeker: UI Overhaul and 200% Backend Speed Boost'
      ? 'July 23, 2024'
      : post.title === 'Base pool going live soon!'
      ? 'May 9, 2024'
      : formatDate(post.publishedAt);

  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        image={isRafflePost ? raffleBanner : post.bannerImage}
        url={`/docs/blog/${post.slug}`}
        type="article"
        publishedTime={post.publishedAt}
      />
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <Link 
          to="/docs/blog" 
          className="inline-flex items-center text-middle-blue hover:text-royal-blue transition-colors duration-200 mb-8 font-exo"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            {post.featured && (
              <span className="inline-block bg-gradient-to-r from-royal-blue to-middle-blue text-plain-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Featured Post
              </span>
            )}
            
            <h1 className="text-4xl lg:text-5xl font-bold text-royal-blue mb-6 leading-tight font-exo">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-royal-blue/70 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="font-exo">{displayDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-exo">{post.readingTime} min read</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="bg-sky-blue/10 text-royal-blue px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-royal-blue/70 font-semibold font-exo">Share:</span>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 rounded-lg bg-sky-blue/10 text-royal-blue hover:bg-sky-blue/20 transition-colors duration-200"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 rounded-lg bg-sky-blue/10 text-royal-blue hover:bg-sky-blue/20 transition-colors duration-200"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 rounded-lg bg-sky-blue/10 text-royal-blue hover:bg-sky-blue/20 transition-colors duration-200"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="p-2 rounded-lg bg-sky-blue/10 text-royal-blue hover:bg-sky-blue/20 transition-colors duration-200"
                aria-label="Copy link"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Banner Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <OptimizedImage 
              src={isRafflePost ? raffleBanner : post.bannerImage} 
              alt={post.bannerImageAlt}
              className="w-full h-64 lg:h-96 object-cover"
              loading="eager"
            />
          </div>

          {/* Article Content */}
          <div className="mb-12">
            <BlogContent content={isRafflePost ? raffleContent : post.content} />
          </div>

          {/* Article Footer */}
          <footer className="border-t border-sky-blue/20 pt-8">
            <div className="text-center">
              <p className="text-royal-blue/70 mb-4 font-exo">
                Enjoyed this article? Share it with your network!
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleShare('twitter')}
                  className="px-6 py-3 bg-gradient-to-r from-sky-blue to-middle-blue text-plain-white rounded-lg hover:from-sky-blue/90 hover:to-middle-blue/90 transition-all duration-200 font-exo"
                >
                  Share on Twitter
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="px-6 py-3 border border-sky-blue text-royal-blue rounded-lg hover:bg-sky-blue/10 transition-all duration-200 font-exo"
                >
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
