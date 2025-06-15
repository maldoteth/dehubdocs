
import React from 'react';
import { Calendar, Clock, Eye, Heart } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { ShareButtons } from './ShareButtons';

interface BlogPostHeaderProps {
  post: BlogPost;
  displayDate: string;
  shareUrl: string;
  views: number;
  likes: number;
  isLiked: boolean;
  onLike: () => void;
}

export const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post, displayDate, shareUrl, views, likes, isLiked, onLike }) => {
  return (
    <header className="mb-8">
      {post.featured && (
        <span className="inline-block bg-gradient-to-r from-royal-blue to-middle-blue text-plain-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Featured Post
        </span>
      )}
      
      <h1 className="text-4xl lg:text-5xl font-bold text-royal-blue mb-6 leading-tight font-exo">
        {post.title}
      </h1>
      
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 text-royal-blue/70 mb-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span className="font-exo">{displayDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className="font-exo">{post.readingTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span className="font-exo">{views.toLocaleString()} views</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
              onClick={onLike}
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 border bg-plain-white hover:bg-sky-blue/10 border-sky-blue/20"
          >
              <Heart className={`w-5 h-5 transition-all ${isLiked ? 'text-red-500 fill-current' : 'text-royal-blue/70'}`} />
              <span className={`font-semibold font-exo ${isLiked ? 'text-red-500' : 'text-royal-blue/70'}`}>
                  {likes.toLocaleString()}
              </span>
          </button>
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

      <div className="mb-8">
        <ShareButtons shareUrl={shareUrl} postTitle={post.title} />
      </div>
    </header>
  );
};
