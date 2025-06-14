import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { getPostBySlug, formatDate } from '@/utils/blogUtils';
import BlogContent from '@/components/blog/BlogContent';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-royal-blue mb-4 font-exo">Blog Post Not Found</h1>
        <p className="text-royal-blue/70 mb-6 font-exo">The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/docs/blog" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-royal-blue to-middle-blue text-plain-white font-semibold rounded-lg hover:from-royal-blue/90 hover:to-middle-blue/90 transition-all duration-200 font-exo"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/docs/blog/${post.slug}`;
  
  const handleShare = (platform: string) => {
    let url = '';
    const title = encodeURIComponent(post.title);
    const shareUrlEncoded = encodeURIComponent(shareUrl);
    
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${title}&url=${shareUrlEncoded}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrlEncoded}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrlEncoded}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link Copied",
          description: "Blog post link copied to clipboard"
        });
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Navigation */}
      <Link 
        to="/docs/blog" 
        className="inline-flex items-center text-middle-blue hover:text-royal-blue transition-colors duration-200 mb-8 font-exo"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <article>
        <header className="mb-8">
          {post.featured && (
            <span className="inline-block bg-gradient-to-r from-royal-blue to-middle-blue text-plain-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Featured Post
            </span>
          )}
          
          <h1 className="text-4xl lg:text-5xl font-bold text-royal-blue mb-6 leading-tight font-exo">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-royal-blue/70 mb-6">
            <div className="flex items-center gap-2">
              {post.author.avatar && (
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span className="font-exo">{post.author.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="font-exo">{formatDate(post.publishedAt)}</span>
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

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-royal-blue/70 font-semibold font-exo">Share:</span>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-lg bg-sky-blue/10 text-royal-blue hover:bg-sky-blue/20 transition-colors duration-200"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-lg bg-sky-blue/10 text-royal-blue hover:bg-sky-blue/20 transition-colors duration-200"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-lg bg-sky-blue/10 text-royal-blue hover:bg-sky-blue/20 transition-colors duration-200"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="p-2 rounded-lg bg-sky-blue/10 text-royal-blue hover:bg-sky-blue/20 transition-colors duration-200"
              aria-label="Copy link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Banner Image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img 
            src={post.bannerImage} 
            alt={post.bannerImageAlt}
            className="w-full h-64 lg:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="mb-12">
          <BlogContent content={post.content} />
        </div>

        {/* Article Footer */}
        <footer className="border-t border-sky-blue/20 pt-8">
          <div className="text-center">
            <p className="text-royal-blue/70 mb-4 font-exo">
              Enjoyed this article? Share it with your network!
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleShare('twitter')}
                className="px-6 py-3 bg-gradient-to-r from-sky-blue to-middle-blue text-plain-white rounded-lg hover:from-sky-blue/90 hover:to-middle-blue/90 transition-all duration-200 font-exo"
              >
                Share on Twitter
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="px-6 py-3 border border-sky-blue text-royal-blue rounded-lg hover:bg-sky-blue/10 transition-all duration-200 font-exo"
              >
                Share on LinkedIn
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
