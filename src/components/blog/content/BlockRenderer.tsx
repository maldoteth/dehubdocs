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
          <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-sky-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Revolutionary Live Streaming Experience</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              DeHub's live streaming platform transforms traditional broadcasting into an <strong>interactive, monetized experience</strong> where creators and audiences engage through real-time tipping, animated reactions, and blockchain-powered rewards. Our streaming infrastructure supports unlimited concurrent viewers while maintaining the personal connection that makes live content special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-r from-green-50 to-cyan-50 rounded-lg border border-sky-blue/20">
              <h4 className="text-lg font-bold text-royal-blue mb-3 font-exo">🎬 Professional Streaming Tools</h4>
              <ul className="text-royal-blue/80 text-sm font-exo space-y-2">
                <li>• 4K streaming support with adaptive bitrate</li>
                <li>• Multi-camera angle switching</li>
                <li>• Screen sharing and presentation mode</li>
                <li>• Real-time chat moderation tools</li>
                <li>• Stream recording and highlights</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-sky-blue/20">
              <h4 className="text-lg font-bold text-royal-blue mb-3 font-exo">💰 Monetization Features</h4>
              <ul className="text-royal-blue/80 text-sm font-exo space-y-2">
                <li>• Real-time DHB token tipping</li>
                <li>• Animated tip notifications</li>
                <li>• Subscriber-only streams</li>
                <li>• Pay-per-view premium content</li>
                <li>• Revenue sharing with moderators</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-sky-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Interactive Engagement System</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              Our streaming platform features <strong>animated tip reactions</strong> that appear in real-time during broadcasts. When viewers send DHB tips, custom animations overlay the stream, creating visual excitement and encouraging further engagement. Tip amounts trigger different animation styles - from subtle sparkles for small tips to dramatic fireworks for large donations.
            </p>
            
            <div className="space-y-3">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Smart Tip Animations</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Dynamic visual effects scale with tip amounts: 1-10 DHB triggers particle effects, 11-50 DHB creates screen-wide animations, 50+ DHB launches spectacular celebrations that dominate the stream.
                </p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Custom Emote Integration</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Creators can upload custom emotes and animations that activate with specific tip amounts, creating personalized experiences that strengthen community bonds and brand identity.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-sky-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Decentralized Infrastructure Benefits</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              Built on decentralized video infrastructure, our streaming platform offers <strong>unprecedented reliability and cost efficiency</strong>. Unlike centralized platforms that can experience downtime or impose arbitrary restrictions, DeHub's distributed network ensures your stream stays live and your content remains accessible globally.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Global CDN Distribution</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Streams automatically route through the nearest decentralized nodes, ensuring minimal latency and maximum quality for viewers worldwide.
                </p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Censorship Resistance</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Decentralized infrastructure means no single authority can shut down your stream, protecting creator freedom and audience access.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-royal-blue/10 to-middle-blue/10 rounded-lg border border-royal-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Advanced Analytics & Community Building</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              Every stream generates detailed analytics about viewer engagement, tip patterns, peak viewing times, and audience demographics. This data helps creators optimize their content strategy while our community tools facilitate deeper connections between streamers and their most dedicated supporters.
            </p>
            
            <div className="pt-4 border-t border-royal-blue/30">
              <p className="text-royal-blue/80 font-exo text-sm italic">
                Experience the future of live streaming where every moment is interactive, every tip is celebrated, and every creator has the tools to build a thriving community around their passion.
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  // Check if this is the DeHub Card blog post and add silver card image after Card Variants
  if (window.location.pathname.includes('off-ramp-service-revealed-dehub-card-coming-soon')) {
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
  }

  // Check if this is the TikTok agency blog post and add content
  if (window.location.pathname.includes('leading-the-way-dehub-agency-becomes-uk-1-with-1000-streamers')) {
    // If this is an empty paragraph, populate it with TikTok agency content
    if (block.trim() === '' || block.trim().length < 50) {
      return (
        <div key={index} className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-sky-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">The Rise of Team First Class Agency</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              <strong>Mike Hales and Indi Jay Cammish</strong> have successfully grown their TikTok partner agency to an impressive <strong>1000 live streamers</strong>, establishing themselves as a powerhouse in the UK streaming landscape. Their journey from startup to industry leader showcases the incredible potential of the creator economy and the power of strategic partnership with major platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-sky-blue/20">
              <h4 className="text-lg font-bold text-royal-blue mb-3 font-exo">🎮 Diverse Creator Portfolio</h4>
              <p className="text-royal-blue/80 text-sm font-exo mb-3">
                From top-tier gamers dominating the esports scene to charming dog accounts that capture hearts worldwide, the team have it all. This diverse portfolio demonstrates their ability to identify and nurture talent across every niche and demographic.
              </p>
              <ul className="text-royal-blue/80 text-sm font-exo space-y-1">
                <li>• Professional gaming streamers</li>
                <li>• Lifestyle and entertainment creators</li>
                <li>• Pet and animal content specialists</li>
                <li>• Educational and tutorial creators</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-sky-blue/20">
              <h4 className="text-lg font-bold text-royal-blue mb-3 font-exo">🏆 Official TikTok Partnership</h4>
              <p className="text-royal-blue/80 text-sm font-exo mb-3">
                Working directly with TikTok executives as part of the in-house agency programme, Team First Class Agency operates as an official partner. This prestigious status reflects their proven track record and professional excellence.
              </p>
              <ul className="text-royal-blue/80 text-sm font-exo space-y-1">
                <li>• Direct collaboration with TikTok executives</li>
                <li>• Part of official in-house agency programme</li>
                <li>• Verified partner status</li>
                <li>• Access to exclusive platform features</li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-sky-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">UK's Leading Agency Success Story</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              Established as a true powerhouse in the UK, Team First Class Agency has redefined what it means to be a creator management company. Their success isn't just measured in numbers, but in the quality of support, guidance, and opportunities they provide to their extensive network of 1000 streamers.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Strategic Growth</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  From humble beginnings to managing 1000+ creators, their strategic approach to talent acquisition and development has set new industry standards.
                </p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Creator Success</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Each streamer in their network benefits from professional support, brand partnerships, and monetization strategies that maximize their potential.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-royal-blue/10 to-middle-blue/10 rounded-lg border border-royal-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Pride in Our Co-Founders</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              As DeHub, we could not be prouder of our co-founders Mike Hales and Indi Jay Cammish. Their achievement in building Team First Class Agency into the UK's premier TikTok partner agency represents the entrepreneurial spirit and innovation that drives our entire ecosystem.
            </p>
            
            <div className="pt-4 border-t border-royal-blue/30">
              <h4 className="font-semibold text-royal-blue mb-3 font-exo">Follow Their Journey</h4>
              <p className="text-royal-blue/80 font-exo text-sm mb-4">
                Stay updated with Team First Class Agency's continued success and connect with their amazing community of creators.
              </p>
              <a 
                href="https://www.tiktok.com/@teamfirstclassagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-royal-blue to-middle-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 font-exo"
              >
                Follow @teamfirstclassagency on TikTok
              </a>
            </div>
          </div>
        </div>
      );
    }

    // Add TikTok Live Fest image after mentioning the agency's growth or achievements
    if (block.includes('1000 streamers') || block.includes('UK #1') || block.includes('leading agency')) {
      const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
      return [
        <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />,
        <div key={`${index}-tiktok-image`} className="my-8 rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/34eb0642-c35f-435e-9e5d-515f77c8ef21.png" 
            alt="TikTok Live Fest event showcasing DeHub's presence in the streaming industry" 
            className="w-full h-auto object-cover"
          />
        </div>
      ];
    }
  }

  // Default to paragraph
  const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
  return <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
};
