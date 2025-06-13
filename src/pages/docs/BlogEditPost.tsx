
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { getPostBySlug } from '@/utils/blogData';
import { isAdmin } from '@/utils/adminUtils';
import BlogPostEditor from '@/components/blog/BlogPostEditor';

const BlogEditPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    checkAdminAccess();
    if (slug) {
      const foundPost = getPostBySlug(slug);
      setPost(foundPost || null);
    }
  }, [slug]);

  const checkAdminAccess = async () => {
    const adminStatus = await isAdmin();
    setIsAdminUser(adminStatus);
  };

  const handleSave = (updatedPost: BlogPost) => {
    // In a real app, this would update the database
    // For now, we'll just show a success message
    console.log('Post updated:', updatedPost);
  };

  if (!isAdminUser) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-royal-blue mb-4 font-exo">Access Denied</h1>
        <p className="text-royal-blue/70 font-exo">You don't have permission to edit blog posts.</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-royal-blue mb-4 font-exo">Post Not Found</h1>
        <p className="text-royal-blue/70 font-exo">The blog post you're trying to edit doesn't exist.</p>
      </div>
    );
  }

  return <BlogPostEditor post={post} onSave={handleSave} />;
};

export default BlogEditPost;
