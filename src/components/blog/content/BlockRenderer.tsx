
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

  // Check if this is the live streaming blog post and add specific content
  if (window.location.pathname.includes('interactive-streaming-on-chain-live-streams-with-animated-tips')) {
    // If this is an empty paragraph, populate it with live streaming content
    if (block.trim() === '' || block.trim().length < 50) {
      return (
        <div key={index} className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-sky-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Live Streaming on DeHub</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              DeHub's live streaming feature allows you to broadcast in real-time to your followers and the wider community. Whether you're sharing gaming sessions, tutorials, or casual conversations, our streaming platform provides all the tools you need for professional-quality broadcasts.
            </p>
            
            <h4 className="text-lg font-semibold text-royal-blue mb-3 font-exo">Key Features:</h4>
            <ul className="text-royal-blue/80 mb-4 font-exo space-y-2">
              <li>• <strong>High-Quality Video:</strong> Stream in up to 1080p resolution with adaptive bitrate</li>
              <li>• <strong>Real-Time Chat:</strong> Interactive chat with moderation tools</li>
              <li>• <strong>Screen Sharing:</strong> Share your screen for presentations or tutorials</li>
              <li>• <strong>Multi-Platform:</strong> Stream simultaneously to multiple platforms</li>
              <li>• <strong>Recording:</strong> Automatically save your streams for later viewing</li>
            </ul>

            <h4 className="text-lg font-semibold text-royal-blue mb-3 font-exo">Getting Started:</h4>
            <ol className="text-royal-blue/80 mb-4 font-exo space-y-2">
              <li>1. Navigate to the streaming section in your DeHub dashboard</li>
              <li>2. Configure your camera and microphone settings</li>
              <li>3. Set your stream title and description</li>
              <li>4. Choose your streaming quality and privacy settings</li>
              <li>5. Click "Go Live" to start broadcasting</li>
            </ol>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-sky-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Tip Your Favorites</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              Support your favorite streamers and content creators with DHB tips! Tipping is a direct way to show appreciation and help creators monetize their content on the DeHub platform.
            </p>

            <h4 className="text-lg font-semibold text-royal-blue mb-3 font-exo">How Tipping Works:</h4>
            <ul className="text-royal-blue/80 mb-4 font-exo space-y-2">
              <li>• <strong>Easy DHB Tips:</strong> Send tips using your DHB token balance</li>
              <li>• <strong>Real-Time Notifications:</strong> Streamers receive instant notifications of tips</li>
              <li>• <strong>Custom Messages:</strong> Include personal messages with your tips</li>
              <li>• <strong>Animated Effects:</strong> Tips trigger visual animations during live streams</li>
              <li>• <strong>Creator Revenue:</strong> 95% of tips go directly to the creator</li>
            </ul>

            <h4 className="text-lg font-semibold text-royal-blue mb-3 font-exo">Tip Amounts & Effects:</h4>
            <div className="space-y-2 text-royal-blue/80 font-exo">
              <p>• <strong>1-10 DHB:</strong> Sparkle effects and subtle animations</p>
              <p>• <strong>11-50 DHB:</strong> Colorful particle effects and sound alerts</p>
              <p>• <strong>51-100 DHB:</strong> Screen-wide celebrations with custom emotes</p>
              <p>• <strong>100+ DHB:</strong> Spectacular fireworks and premium animations</p>
            </div>
          </div>
        </div>
      );
    }
  }

  // Default to paragraph
  const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
  return <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
};
