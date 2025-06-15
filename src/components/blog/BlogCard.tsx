
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/utils/blogUtils';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const placeholderImages = [
    'photo-1488590528505-98d2b5aba04b', 'photo-1518770660439-4636190af475',
    'photo-1461749280684-dccba630e2f6', 'photo-1486312338219-ce68d2c6f44d',
    'photo-1485827404703-89b55fcc595e', 'photo-1526374965328-7f61d4dc18c5',
    'photo-1531297484001-80022131f5a1', 'photo-1487058792275-0ad4aaf24ca7',
    'photo-1519389950473-47ba0277781c', 'photo-1460925895917-afdab827c52f',
    'photo-1498050108023-c5249f4df085', 'photo-1483058712412-4245e9b90334',
];

const getUnsplashImageUrl = (photoId: string) => `https://images.unsplash.com/${photoId}?w=800&h=400&fit=crop&q=80`;

const getUniqueImageByPostId = (postId: string) => {
    let hash = 0;
    if (postId.length === 0) return getUnsplashImageUrl(placeholderImages[0]);
    for (let i = 0; i < postId.length; i++) {
        const char = postId.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    const index = Math.abs(hash) % placeholderImages.length;
    return getUnsplashImageUrl(placeholderImages[index]);
};

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
  const imageUrl = getUniqueImageByPostId(post.id);
  const excerpt = generateExcerpt(post.content, post.excerpt);

  return (
    <article className={`group bg-plain-white rounded-xl border border-sky-blue/20 hover:border-sky-blue/40 transition-all duration-200 hover:shadow-lg overflow-hidden ${featured ? 'lg:col-span-2' : ''}`}>
      <Link to={`/docs/blog/${post.slug}`} className="block">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={post.title}
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
