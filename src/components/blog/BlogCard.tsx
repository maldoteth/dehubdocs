import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/utils/blogUtils';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const generateExcerpt = (content: string, fallback: string) => {
    if (!content) return fallback;
    const lines = content.split('\n');
    for (const line of lines) {
        const trimmedLine = line.trim();
        if (
            trimmedLine === '' ||
            trimmedLine.startsWith('#') ||
            trimmedLine.startsWith('- ') ||
            trimmedLine.startsWith('• ') ||
            /^\d+\./.test(trimmedLine) ||
            trimmedLine.startsWith('![')
        ) {
            continue;
        }
        
        const plainText = trimmedLine
            .replace(/\*\*(.*?)\*\*/g, '$1')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
            
        const maxLength = 150;
        if (plainText.length > maxLength) {
            const truncated = plainText.substring(0, maxLength);
            const lastSpace = truncated.lastIndexOf(' ');
            if (lastSpace > 0) {
                return truncated.substring(0, lastSpace) + '...';
            }
            return truncated + '...';
        }
        return plainText;
    }
    return fallback;
};


const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
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
  } else if (post.slug === 'transparency-hub-dhbscancom-launches-for-contract-activity-tracking---a-dehub-milestone-from-q2-2025') {
    bannerImage = '/lovable-uploads/3b0272d6-6cae-4b9a-a303-5fdf970d17e7.png';
    bannerImageAlt = 'DHBScan Metrics';
  }
  
  const excerpt = generateExcerpt(content, post.excerpt);

  return (
    <article className={`group bg-plain-white rounded-xl border border-sky-blue/20 hover:border-sky-blue/40 transition-all duration-200 hover:shadow-lg overflow-hidden ${featured ? 'lg:col-span-2' : ''}`}>
      <Link to={`/docs/blog/${post.slug}`} className="block">
        <div className="relative">
          <img 
            src={bannerImage} 
            alt={bannerImageAlt}
            className={`w-full object-cover transition-transform duration-200 group-hover:scale-105 ${featured ? 'h-48' : 'h-40'}`}
          />
          {post.featured && (
            <span className="absolute top-4 left-4 bg-gradient-to-r from-royal-blue to-middle-blue text-plain-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          )}
        </div>
        
        <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
          <div className="flex flex-wrap items-center gap-4 text-sm text-royal-blue/70 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
          </div>

          <h2 className={`font-bold text-royal-blue mb-3 group-hover:text-middle-blue transition-colors duration-200 font-exo ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
            {post.title}
          </h2>

          <p className={`text-royal-blue/80 mb-4 font-exo ${featured ? 'text-lg' : 'text-base'}`}>
            {excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <span 
                key={tag}
                className="bg-sky-blue/10 text-royal-blue px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-royal-blue/60 text-sm">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center text-middle-blue group-hover:text-royal-blue transition-colors duration-200 font-semibold">
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
