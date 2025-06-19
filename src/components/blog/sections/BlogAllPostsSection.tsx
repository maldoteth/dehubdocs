
import React from 'react';
import { Calendar } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import BlogCard from '@/components/blog/BlogCard';

interface BlogAllPostsSectionProps {
  filteredPosts: BlogPost[];
  searchQuery: string;
  selectedTag: string;
}

export const BlogAllPostsSection: React.FC<BlogAllPostsSectionProps> = ({
  filteredPosts,
  searchQuery,
  selectedTag
}) => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-royal-blue" />
        <h2 className="text-2xl font-bold text-royal-blue font-exo">
          {searchQuery || selectedTag ? 'Search Results' : 'Latest Posts'}
        </h2>
        {(searchQuery || selectedTag) && (
          <span className="text-royal-blue/60 font-exo">
            ({filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''})
          </span>
        )}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-plain-white rounded-xl border border-sky-blue/20">
          <h3 className="text-xl font-semibold text-royal-blue mb-2 font-exo">No Posts Found</h3>
          <p className="text-royal-blue/70 font-exo">
            {searchQuery || selectedTag ? 'Try adjusting your search criteria or browse all posts.' : 'Check back soon for new content!'}
          </p>
        </div>
      )}
    </section>
  );
};
