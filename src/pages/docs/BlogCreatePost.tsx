
import React, { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { blogPosts } from '@/utils/blogData';
import { isAdmin } from '@/utils/adminUtils';
import BlogPostEditor from '@/components/blog/BlogPostEditor';

const BlogCreatePost = () => {
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    const adminStatus = await isAdmin();
    setIsAdminUser(adminStatus);
  };

  const handleSave = (post: BlogPost) => {
    // In a real app, this would save to database
    // For now, we'll just show a success message
    console.log('New post created:', post);
  };

  if (!isAdminUser) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-royal-blue mb-4 font-exo">Access Denied</h1>
        <p className="text-royal-blue/70 font-exo">You don't have permission to create blog posts.</p>
      </div>
    );
  }

  return <BlogPostEditor onSave={handleSave} />;
};

export default BlogCreatePost;
