
import React from 'react';
import { OptimizedImage } from '@/components/OptimizedImage';
import BlogContent from '@/components/blog/BlogContent';

interface BlogPostBodyProps {
    bannerImage: string;
    bannerImageAlt: string;
    content: string;
}

export const BlogPostBody: React.FC<BlogPostBodyProps> = ({ bannerImage, bannerImageAlt, content }) => {
    return (
        <>
            <div className="mb-8 rounded-xl overflow-hidden">
                <OptimizedImage 
                  src={bannerImage} 
                  alt={bannerImageAlt}
                  className="w-full h-64 lg:h-96 object-cover object-top"
                  loading="eager"
                />
            </div>
            <div className="mb-12">
                <BlogContent content={content} />
            </div>
        </>
    )
}
