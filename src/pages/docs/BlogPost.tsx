
import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, formatDate } from '@/utils/blogUtils';
import SEO from '@/components/SEO';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { BlogPostBody } from '@/components/blog/BlogPostBody';
import { BlogPostFooter } from '@/components/blog/BlogPostFooter';
import { raffleContent } from '@/data/raffleContent';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = slug ? getPostBySlug(slug) : null;

  useLayoutEffect(() => {
    // Always scroll to top when loading a blog post directly
    window.scrollTo(0, 0);
  }, [slug]);

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

  const isRafflePost = post.slug === 'dream-big-the-1m-home-crypto-raffle-by-dehub---a-dehub-milestone-from-q3-2022';
  
  const raffleBanner = '/lovable-uploads/729af303-1246-44ed-a598-005275581b6c.png';
  const shareUrl = `${window.location.origin}/docs/blog/${post.slug}`;

  const displayDate = isRafflePost ? 'July 11, 2022' : formatDate(post.publishedAt);
  const bannerImage = isRafflePost ? raffleBanner : post.bannerImage;
  const content = isRafflePost ? raffleContent : post.content;

  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        image={bannerImage}
        url={`/docs/blog/${post.slug}`}
        type="article"
        publishedTime={post.publishedAt}
        authorName={post.author.name}
        tags={post.tags}
      />
      <div className="max-w-4xl mx-auto">
        <article>
          <BlogPostHeader post={post} displayDate={displayDate} shareUrl={shareUrl} />
          <BlogPostBody bannerImage={bannerImage} bannerImageAlt={post.bannerImageAlt} content={content} />
          <BlogPostFooter shareUrl={shareUrl} postTitle={post.title} />
        </article>
      </div>
    </>
  );
};

export default BlogPost;
