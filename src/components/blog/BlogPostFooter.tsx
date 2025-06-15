
import React from 'react';
import { ShareButtons } from './ShareButtons';

interface BlogPostFooterProps {
    shareUrl: string;
    postTitle: string;
}

export const BlogPostFooter: React.FC<BlogPostFooterProps> = ({ shareUrl, postTitle }) => {
    return (
        <footer className="border-t border-sky-blue/20 pt-8">
            <div className="text-center">
                <p className="text-royal-blue/70 mb-4 font-exo">
                    Enjoyed this article? Share it with your network!
                </p>
                <ShareButtons shareUrl={shareUrl} postTitle={postTitle} variant="text" />
            </div>
        </footer>
    )
}
