
import { useState, useMemo, useLayoutEffect } from 'react';
import { getPublishedPosts, getFeaturedPosts } from '@/utils/blogUtils';
import { BlogPost, BlogTag } from '@/types/blog';
import { newPosts } from '@/data/newPosts';

export const useBlogData = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  useLayoutEffect(() => {
    // Restore scroll position synchronously before paint
    const scrollPosition = sessionStorage.getItem('blogScrollPosition');
    if (scrollPosition) {
      const scrollValue = parseInt(scrollPosition, 10);
      window.scrollTo(0, scrollValue);
      // Clean up after successful restoration
      sessionStorage.removeItem('blogScrollPosition');
    }
  }, []);

  const originalPosts = useMemo(() => {
    return getPublishedPosts();
  }, []);

  const allPosts = useMemo(() => {
    // Simple combination - no complex deduplication or exclusions
    const combinedPosts = [...newPosts, ...originalPosts];
    
    return combinedPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [originalPosts]);

  const featuredPosts = useMemo(() => {
    // Simple featured posts - no complex logic
    const oldFeatured = getFeaturedPosts();
    const newFeatured = newPosts.filter(p => p.featured);
    const combined = [...newFeatured, ...oldFeatured];
    
    return combined.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, []);

  const allTags = useMemo((): BlogTag[] => {
    const tagCounts: { [key: string]: number } = {};
    allPosts.forEach(post => {
      post.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    let posts = allPosts;
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(lowercasedQuery) || 
        post.excerpt.toLowerCase().includes(lowercasedQuery)
      );
    }
    if (selectedTag) {
      posts = posts.filter(post => 
        post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }
    return posts;
  }, [searchQuery, selectedTag, allPosts]);

  return {
    searchQuery,
    setSearchQuery,
    selectedTag,
    setSelectedTag,
    allPosts,
    featuredPosts,
    allTags,
    filteredPosts
  };
};
