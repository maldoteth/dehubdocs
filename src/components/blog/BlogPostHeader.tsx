
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { ShareButtons } from './ShareButtons';
import BackButton from './BackButton';

interface BlogPostHeaderProps {
  post: BlogPost;
  displayDate: string;
  shareUrl: string;
}

export const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post, displayDate, shareUrl }) => {
  return (
    <header className="mb-8">
      <BackButton />
      
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

      <div className="mb-8">
        <ShareButtons shareUrl={shareUrl} postTitle={post.title} />
      </div>
    </header>
  );
};
