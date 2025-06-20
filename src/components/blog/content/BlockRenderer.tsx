
import React from 'react';
import { GenericBlockRenderer } from './GenericBlockRenderer';
import { PostSpecificContentRouter } from './PostSpecificContentRouter';

interface BlockRendererProps {
  block: string;
  index: number;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ block, index }) => {
  // Get the current post slug from the URL
  const currentSlug = window.location.pathname.split('/').pop() || '';
  
  // First, try to render post-specific content
  const specificContent = PostSpecificContentRouter({ slug: currentSlug, block, index });
  if (specificContent) {
    return specificContent;
  }
  
  // Fall back to generic content rendering
  return <GenericBlockRenderer block={block} index={index} />;
};
