
import React from 'react';
import { useParams } from 'react-router-dom';
import { OptimizedImage } from '@/components/OptimizedImage';
import BlogContent from '@/components/blog/BlogContent';

interface BlogPostBodyProps {
    bannerImage: string;
    bannerImageAlt: string;
    content: string;
}

export const BlogPostBody: React.FC<BlogPostBodyProps> = ({ bannerImage, bannerImageAlt, content }) => {
    const { slug } = useParams<{ slug: string }>();
    const isFullImagePost = slug === 'bnb-pool-update-recovery-876-bnb-stuck-2022-pool' || slug === '1-million-dollar-raise-completed' || slug === '1-year-review-a-quick-look-back';
    
    return (
        <>
            <div className="mb-8 rounded-xl overflow-hidden">
                <OptimizedImage 
                  src={bannerImage} 
                  alt={bannerImageAlt}
                  className={`w-full ${isFullImagePost ? 'h-auto' : 'h-64 lg:h-96'} ${isFullImagePost ? 'object-contain' : 'object-cover object-center'}`}
                  loading="eager"
                />
            </div>
            <div className="mb-12">
                <BlogContent content={content} />
            </div>
        </>
    )
}
