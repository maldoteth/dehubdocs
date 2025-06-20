
import React from 'react';
import { createSanitizedHtml, processLineForHtml } from './contentUtils';
import { HeaderRenderer } from './renderers/HeaderRenderer';
import { ImageRenderer } from './renderers/ImageRenderer';
import { ListRenderer } from './renderers/ListRenderer';
import { PostSpecificRenderer } from './renderers/PostSpecificRenderer';

interface BlockRendererProps {
  block: string;
  index: number;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ block, index }) => {
  block = block.trim();
  if (!block) return null;
  
  const lines = block.split('\n');
  const firstLine = lines[0].trim();

  // Try header rendering first
  const headerResult = HeaderRenderer({ 
    firstLine, 
    remainingLines: lines.slice(1).join('\n').trim(), 
    index 
  });
  if (headerResult) return headerResult;

  // Try image rendering
  const imageResult = ImageRenderer({ firstLine, index });
  if (imageResult) return imageResult;

  // Try list rendering
  const listResult = ListRenderer({ lines, index });
  if (listResult) return listResult;

  // Try post-specific content rendering
  const postSpecificResult = PostSpecificRenderer({ block, index });
  if (postSpecificResult) return postSpecificResult;

  // Default to paragraph
  const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
  return <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
};
