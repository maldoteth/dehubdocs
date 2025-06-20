
import React from 'react';
import { StrategicShiftContent } from './posts/StrategicShiftContent';
import { InteractiveStreamingContent } from './posts/InteractiveStreamingContent';
import { DeHubCardContent } from './posts/DeHubCardContent';

interface PostSpecificContentRouterProps {
  slug: string;
  block: string;
  index: number;
}

export const PostSpecificContentRouter: React.FC<PostSpecificContentRouterProps> = ({ slug, block, index }) => {
  // Strategic Shift post
  if (slug === 'strategic-shift-discontinuing-ethernet-mainnet-support-for-dhb') {
    return <StrategicShiftContent block={block} index={index} />;
  }
  
  // Interactive Streaming post
  if (slug === 'interactive-streaming-on-chain-live-streams-with-animated-tips') {
    return <InteractiveStreamingContent block={block} index={index} />;
  }
  
  // DeHub Card post
  if (slug === 'off-ramp-service-revealed-dehub-card-coming-soon') {
    return <DeHubCardContent block={block} index={index} />;
  }
  
  return null;
};
