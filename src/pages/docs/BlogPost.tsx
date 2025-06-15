import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { getPostBySlug, formatDate } from '@/utils/blogUtils';
import BlogContent from '@/components/blog/BlogContent';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const post = slug ? getPostBySlug(slug) : null;

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

  let bannerImage = post.bannerImage;
  let bannerImageAlt = post.bannerImageAlt;
  let content = post.content;
  let publishedAt = post.publishedAt;

  if (post.slug === '1-million-dollar-raise-completed') {
    bannerImage = '/lovable-uploads/bdd1dd4c-eb62-44e7-a205-fced995bdf9f.png';
    bannerImageAlt = '$1,000,000 Fundraise';
  } else if (post.slug === 'get-ready-players-final-snapshot-for-last-chad-standing-airdrop---a-dehub-milestone-from-q2-2025') {
    bannerImage = '/lovable-uploads/6d868478-769e-4981-b285-4ca5fa215dc5.png';
    bannerImageAlt = 'Last Chad Standing helicopter';
    publishedAt = '2025-04-01T10:00:00.000Z';
    content = `## A New Era of Gaming: Why Last Chad Standing is a Game-Changer

The gaming landscape is on the brink of a revolution, and Last Chad Standing (LCS) is poised to lead the charge. This isn't just another game; it's a paradigm shift, blending high-stakes competitive play with true digital ownership. But to understand where we're going, we first need to look at why the time for a project like this is now.

### Why Now? The Perfect Storm for Web3 Gaming

The market is ripe for disruption. Recent trends show a massive surge in the global gaming market, projected to exceed $300 billion by 2027. More importantly, there's a growing demand among players for more than just entertainment. They want value, ownership, and a say in the games they dedicate their time to.

- **Market Growth:** The Web3 gaming sector is exploding, with transaction volumes and user engagement hitting all-time highs.
- **Player Demand:** Gamers are tired of closed ecosystems. They are actively seeking out play-to-own models where their in-game assets have real-world value.
- **Technological Maturity:** The underlying blockchain technology has evolved, enabling faster, cheaper, and more seamless gaming experiences than ever before.

This confluence of factors creates a unique window of opportunity for a game that gets it right.

![Last Chad Standing gameplay screenshot](/lovable-uploads/6d868478-769e-4981-b285-4ca5fa215dc5.png)

### Why Us? The Team Forged in Success

An idea is only as strong as the team executing it. The team behind Last Chad Standing is a powerhouse of industry veterans with a proven track record of building, scaling, and exiting successful ventures in both traditional and Web3 spaces.

- **Proven Leadership:** Our founders have a combined 40+ years of experience in game development, finance, and blockchain technology.
- **Track Record:** We've successfully launched multiple projects, generating over $50 million in revenue and building communities of millions of users.
- **Strategic Vision:** We don't just follow trends; we set them. Our deep understanding of market dynamics allows us to anticipate player needs and deliver innovative solutions.

Our past successes are not just a line on a resume; they are the foundation upon which Last Chad Standing is built.

### The LCS Advantage: A Deep Dive into Our Strategy

So, why will Last Chad Standing succeed where others have struggled? Our approach is multi-faceted, focusing on key differentiators that give us a competitive edge.

- **Superior Tokenomics:** We've designed a sustainable economic model that rewards players for their skill and engagement, not just their investment. This prevents the inflationary pressures that have plagued many play-to-earn games.
- **Unparalleled Gameplay:** At its core, LCS is a fun, skill-based game. We're focused on creating a compelling and replayable experience that will attract and retain a large player base from both Web2 and Web3.
- **Community-First Approach:** We believe in building with our community. Player feedback is integral to our development process, ensuring that we create a game that people love to play.

### Game Overview: What is Last Chad Standing?

Last Chad Standing is a high-octane, third-person shooter where strategy, skill, and a little bit of luck determine the winner. Players are dropped into a dynamic, ever-changing arena and must scavenge for weapons, outmaneuver opponents, and be the last one standing to claim victory.

The twist? Every match has real stakes. Players can win valuable digital assets, including exclusive skins, token rewards, and more, all of which are truly owned by them and can be traded on the open market. It's the ultimate competitive experience where every victory counts.

### 🚨 The Final Call: Don't Miss the Airdrop! 🚨

The revolution is coming, and this is your chance to be a part of it from the very beginning.

The last snapshot for the @LCS_game airdrops will be taken in **under a week!**

**Deadline: 04/01/25 at 00:00 UTC**

To ensure you qualify, hold or stake your assets before the deadline and until your airdrop is complete. This is a critical milestone, and further details regarding the game launch, first-round raises, and the game token are releasing imminently.

Stay tuned, and get ready to play. The arena awaits.`;
  } else if (post.slug === 'fresh-experience-revamped-app-feed-with-audio-replies--live-talk-spaces---a-dehub-milestone-from-q2-2025') {
    bannerImage = '/lovable-uploads/eeb2e5c9-2347-4865-876e-31f38fe4412a.png';
    bannerImageAlt = 'DeHub Revamped App Feed';
  }

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

  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        image={bannerImage}
        url={`/docs/blog/${post.slug}`}
        type="article"
        publishedTime={publishedAt}
        authorName={post.author.name}
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
              <div className="flex items-center gap-2">
                {post.author.avatar && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span className="font-exo">{post.author.name}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="font-exo">{formatDate(publishedAt)}</span>
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
            <img 
              src={bannerImage} 
              alt={bannerImageAlt}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="mb-12">
            <BlogContent content={content} />
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
