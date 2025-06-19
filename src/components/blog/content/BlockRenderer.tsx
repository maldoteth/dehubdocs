
import React from 'react';
import { createSanitizedHtml, processLineForHtml } from './contentUtils';

interface BlockRendererProps {
  block: string;
  index: number;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ block, index }) => {
  block = block.trim();
  if (!block) return null;
  
  const lines = block.split('\n');
  const firstLine = lines[0].trim();

  // Headers
  if (firstLine.startsWith('# ')) {
    return null;
  }
  if (firstLine.startsWith('## ')) {
    return null;
  }
  if (firstLine.startsWith('#### ')) {
    const heading = <h4 key={`${index}-h`} className="text-lg font-bold text-royal-blue mb-2 mt-6 font-exo">{firstLine.slice(5)}</h4>;
    const remainingLines = lines.slice(1).join('\n').trim();
    if (remainingLines) {
      const processedContent = processLineForHtml(remainingLines.replace(/\n/g, ' '));
      const paragraph = <p key={`${index}-p`} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
      return [heading, paragraph];
    }
    return heading;
  }
  if (firstLine.startsWith('### ')) {
    const heading = <h3 key={`${index}-h`} className="text-xl font-bold text-royal-blue mb-3 mt-8 font-exo">{firstLine.slice(4)}</h3>;
    const remainingLines = lines.slice(1).join('\n').trim();
    if (remainingLines) {
      const processedContent = processLineForHtml(remainingLines.replace(/\n/g, ' '));
      const paragraph = <p key={`${index}-p`} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
      return [heading, paragraph];
    }
    return heading;
  }

  // Image tag
  if (firstLine.startsWith('![')) {
    const match = firstLine.match(/!\[(.*?)\]\((.*?)\)/);
    if (match) {
      const altAndStyle = match[1];
      const src = match[2];
      const parts = altAndStyle.split('|');
      const alt = parts[0].trim();
      const style = parts.length > 1 ? parts[1].trim() : 'default';
      if (style === 'avatar') {
        return <img key={index} src={src} alt={alt} className="w-24 h-24 rounded-full object-cover my-6 mx-auto block shadow-md" />;
      }
      return null;
    }
  }

  // Unordered List
  if (lines.every(line => line.trim().startsWith('- ') || line.trim().startsWith('• '))) {
    return (
      <ul key={index} className="list-disc list-inside space-y-2 mb-4 font-exo text-royal-blue/80">
        {lines.map((item, i) => {
          const content = item.trim().slice(2);
          const processedContent = processLineForHtml(content);
          return <li key={i} dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
        })}
      </ul>
    );
  }

  // Ordered List
  if (lines.every(line => /^\d+\./.test(line.trim()))) {
    return (
      <ol key={index} className="list-decimal list-inside space-y-2 mb-4 font-exo text-royal-blue/80">
        {lines.map((item, i) => {
          const content = item.trim().replace(/^\d+\.\s/, '');
          const processedContent = processLineForHtml(content);
          return <li key={i} dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
        })}
      </ol>
    );
  }

  // Default to paragraph
  const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
  return <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
};
