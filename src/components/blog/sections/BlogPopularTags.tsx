
import React from 'react';
import { BlogTag } from '@/types/blog';

interface BlogPopularTagsProps {
  allTags: BlogTag[];
  setSelectedTag: (tag: string) => void;
  shouldShow: boolean;
}

export const BlogPopularTags: React.FC<BlogPopularTagsProps> = ({
  allTags,
  setSelectedTag,
  shouldShow
}) => {
  if (!shouldShow) return null;

  return (
    <section className="bg-plain-white rounded-2xl border border-sky-blue/20 p-8">
      <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo">Popular Tags</h2>
      <div className="flex flex-wrap gap-3">
        {allTags.slice(0, 10).map(tag => (
          <button
            key={tag.name}
            onClick={() => setSelectedTag(tag.name)}
            className="bg-sky-blue/10 text-royal-blue px-4 py-2 rounded-full text-sm font-medium hover:bg-sky-blue/20 transition-colors duration-200 font-exo"
          >
            {tag.name} ({tag.count})
          </button>
        ))}
      </div>
    </section>
  );
};
