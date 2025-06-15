
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

  if (post.slug === '1-million-dollar-raise-completed') {
    bannerImage = '/lovable-uploads/bdd1dd4c-eb62-44e7-a205-fced995bdf9f.png';
    bannerImageAlt = '$1,000,000 Fundraise';
  } else if (post.slug === 'get-ready-players-final-snapshot-for-last-chad-standing-airdrop---a-dehub-milestone-from-q2-2025') {
    bannerImage = '/lovable-uploads/6d868478-769e-4981-b285-4ca5fa215dc5.png';
    bannerImageAlt = 'Last Chad Standing helicopter';
    content = `🚨 The Final Call 🚨

The last snapshot for the @LCS_game airdrops will be taken in under a week!

Deadline: 04/01/25 at 00:00 UTC

To ensure you qualify, hold or stake before the deadline and until your airdrop is complete.

Further details regarding the game launch, first-round raises and game token are releasing imminently.`;
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
              <span>{formatDate(post.publishedAt)}</span>
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
