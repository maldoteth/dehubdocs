import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
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
            trimmedLine.toLowerCase().startsWith('<h') || // Skip HTML headings
            trimmedLine.startsWith('- ') ||
            trimmedLine.startsWith('• ') ||
            /^\d+\./.test(trimmedLine) ||
            trimmedLine.startsWith('![')
        ) {
            continue;
        }
        
        // Strip HTML tags and markdown
        const plainText = trimmedLine
            .replace(/<[^>]+>/g, '') 
            .replace(/\*\*(.*?)\*\*/g, '$1')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
            .trim();

        if (plainText === '') {
            continue; // Skip if line becomes empty after stripping tags
        }
            
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
  const excerpt = generateExcerpt(post.content, post.excerpt);

  const displayDate =
    post.title === 'Dream Big: The $1M Home Crypto Raffle by DeHub'
      ? 'July 11, 2022'
      : formatDate(post.publishedAt);

  const isRafflePost = post.slug === 'dream-big-the-1m-home-crypto-raffle-by-dehub---a-dehub-milestone-from-q3-2022';
  const raffleBanner = '/lovable-uploads/729af303-1246-44ed-a598-005275581b6c.png';

  return (
    <article className={`group bg-plain-white rounded-xl border border-sky-blue/20 hover:border-sky-blue/40 transition-all duration-200 hover:shadow-lg overflow-hidden ${featured ? 'lg:col-span-2' : ''}`}>
      <Link to={`/docs/blog/${post.slug}`} className="block">
        <div className="relative">
          <img 
            src={isRafflePost ? raffleBanner : post.bannerImage} 
            alt={post.bannerImageAlt}
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
              <span>{displayDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
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
