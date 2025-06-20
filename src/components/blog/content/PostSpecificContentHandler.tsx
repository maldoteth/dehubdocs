
import React from 'react';
import { StrategicShiftContent } from './posts/StrategicShiftContent';
import { InteractiveStreamingContent } from './posts/InteractiveStreamingContent';
import { DeHubCardContent } from './posts/DeHubCardContent';

interface PostSpecificContentHandlerProps {
  block: string;
  index: number;
}

export const PostSpecificContentHandler: React.FC<PostSpecificContentHandlerProps> = ({ block, index }) => {
  const pathname = window.location.pathname;

  // Strategic Shift blog post
  if (pathname.includes('strategic-shift-discontinuing-ethereum-mainnet-support-for-dhb')) {
    return <StrategicShiftContent block={block} index={index} />;
  }

  // Interactive Streaming blog post
  if (pathname.includes('interactive-streaming-on-chain-live-streams-with-animated-tips')) {
    return <InteractiveStreamingContent block={block} index={index} />;
  }

  // DeHub Card blog post
  if (pathname.includes('off-ramp-service-revealed-dehub-card-coming-soon')) {
    return <DeHubCardContent block={block} index={index} />;
  }

  return null;
};
