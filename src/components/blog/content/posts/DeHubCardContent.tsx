
import React from 'react';
import { createSanitizedHtml, processLineForHtml } from '../contentUtils';

interface DeHubCardContentProps {
  block: string;
  index: number;
}

export const DeHubCardContent: React.FC<DeHubCardContentProps> = ({ block, index }) => {
  // Add silver card image after "💳 Each card is designed with crypto users in mind" paragraph
  if (block.includes('💳 Each card is designed with crypto users in mind')) {
    const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
    return [
      <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />,
      <div key={`${index}-card-image`} className="my-8 rounded-xl overflow-hidden">
        <img 
          src="/lovable-uploads/82928389-9659-4117-8bbe-351a68241694.png" 
          alt="DeHub Card in premium silver finish showcasing modern crypto payment solution" 
          className="w-full h-auto object-cover"
        />
      </div>
    ];
  }

  // Add new card image near the end of the blog post
  if (block.includes('This is just the beginning of our comprehensive financial services ecosystem')) {
    const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
    return [
      <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />,
      <div key={`${index}-card-stack-image`} className="my-8 rounded-xl overflow-hidden">
        <img 
          src="/lovable-uploads/dd33f339-f2d6-46ac-9e87-98b96f3060ca.png" 
          alt="Stack of DeHub Cards showing multiple card variants in elegant presentation" 
          className="w-full h-auto object-cover"
        />
      </div>
    ];
  }
  
  return null;
};
