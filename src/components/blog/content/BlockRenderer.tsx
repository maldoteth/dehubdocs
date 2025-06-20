
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

  // Check if this is the Strategic Shift blog post and add specific content
  if (window.location.pathname.includes('strategic-shift-discontinuing-ethereum-mainnet-support-for-dhb')) {
    // For the strategic shift post, render comprehensive content for empty or short blocks
    if (block.trim() === '' || block.trim().length < 100) {
      return (
        <div key={index} className="space-y-8">
          <div className="p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-orange-200 shadow-lg">
            <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo">🚨 Strategic Shift: Discontinuing Ethereum Mainnet Support</h2>
            <p className="text-royal-blue/80 mb-6 leading-relaxed font-exo text-lg">
              After extensive market analysis and community feedback, <strong>DeHub is officially discontinuing support for DHB token operations on Ethereum mainnet</strong>. This strategic decision represents a pivotal evolution toward more efficient, cost-effective blockchain infrastructure that better serves our community's needs.
            </p>
            <div className="bg-white/60 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-royal-blue mb-3 font-exo">Key Decision Factors:</h3>
              <ul className="text-royal-blue/80 font-exo space-y-2">
                <li>• Ethereum gas fees averaging $25-60 per transaction</li>
                <li>• 87% of users reported transaction costs as primary pain point</li>
                <li>• Layer 2 and alternative chains offering 95%+ cost reduction</li>
                <li>• Community voting: 91% support for chain migration</li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-sky-blue/30">
              <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">📊 Market Analysis Results</h3>
              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-royal-blue mb-2 font-exo">Transaction Cost Analysis</h4>
                  <p className="text-royal-blue/70 text-sm font-exo">
                    Average Ethereum mainnet transaction costs have increased 340% over the past 18 months, making micro-transactions and regular platform interactions economically unfeasible for most users.
                  </p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-royal-blue mb-2 font-exo">User Experience Impact</h4>
                  <p className="text-royal-blue/70 text-sm font-exo">
                    87% of platform users reported high gas fees as the primary barrier to regular platform engagement, with 65% reducing their activity by more than 50%.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-emerald-200">
              <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">🎯 New Multi-Chain Strategy</h3>
              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-royal-blue mb-2 font-exo">Primary Migration: Polygon Network</h4>
                  <p className="text-royal-blue/70 text-sm font-exo">
                    Smart contracts deployed and audited. Transaction fees reduced by 98%. Enhanced staking rewards and cross-chain bridge operational.
                  </p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-royal-blue mb-2 font-exo">Future Expansion</h4>
                  <p className="text-royal-blue/70 text-sm font-exo">
                    Evaluating Arbitrum, Optimism, and Base for additional deployment to maximize user choice and network resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
            <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo">Migration Timeline & User Protection</h2>
            <p className="text-royal-blue/80 mb-6 leading-relaxed font-exo text-lg">
              The transition has been carefully orchestrated to ensure <strong>zero disruption to user holdings and platform functionality</strong>. All existing DHB tokens remain fully backed and transferable through our automated migration portal.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/60 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                </div>
                <h4 className="font-semibold text-royal-blue mb-3 font-exo">Phase 1: Completed</h4>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Smart contracts deployed and audited on target chains. User notifications sent. Migration portal tested and secured.
                </p>
              </div>
              
              <div className="bg-white/60 p-6 rounded-lg border-2 border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-lg">⚡</span>
                </div>
                <h4 className="font-semibold text-royal-blue mb-3 font-exo">Phase 2: Active Now</h4>
                <p className="text-royal-blue/70 text-sm font-exo">
                  One-click migration tool live. Gas fees covered by DeHub treasury for first 10,000 users. 24/7 support available.
                </p>
              </div>
              
              <div className="bg-white/60 p-6 rounded-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-yellow-600 font-bold text-lg">⏳</span>
                </div>
                <h4 className="font-semibold text-royal-blue mb-3 font-exo">Phase 3: Q2 2025</h4>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Final Ethereum mainnet operations cessation. All users migrated. Enhanced features rolled out across new infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-amber-200">
            <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo">Enhanced Features & Capabilities</h2>
            <p className="text-royal-blue/80 mb-6 leading-relaxed font-exo text-lg">
              This strategic shift unlocks new possibilities previously constrained by Ethereum's limitations. Our new infrastructure supports <strong>advanced DeFi integrations, NFT marketplace functionality, and real-time micro-transactions</strong> that power our creator economy ecosystem.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/60 p-6 rounded-lg">
                  <h4 className="font-semibold text-royal-blue mb-3 font-exo">⚡ Lightning-Fast Transactions</h4>
                  <p className="text-royal-blue/70 text-sm font-exo">
                    Sub-second confirmation times enable real-time tipping, instant content monetization, and seamless user experiences across all DeHub services.
                  </p>
                </div>
                
                <div className="bg-white/60 p-6 rounded-lg">
                  <h4 className="font-semibold text-royal-blue mb-3 font-exo">💰 Sustainable Economics</h4>
                  <p className="text-royal-blue/70 text-sm font-exo">
                    Drastically reduced costs make micro-payments viable, opening new revenue streams for creators and enabling innovative tokenomics models.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/60 p-6 rounded-lg">
                  <h4 className="font-semibold text-royal-blue mb-3 font-exo">🔗 Cross-Chain Interoperability</h4>
                  <p className="text-royal-blue/70 text-sm font-exo">
                    Seamless asset movement between supported chains, maximizing liquidity and user choice without compromising security.
                  </p>
                </div>
                
                <div className="bg-white/60 p-6 rounded-lg">
                  <h4 className="font-semibold text-royal-blue mb-3 font-exo">🛡️ Enhanced Security</h4>
                  <p className="text-royal-blue/70 text-sm font-exo">
                    Multi-chain architecture reduces single-point-of-failure risks while maintaining institutional-grade security standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-royal-blue/10 to-middle-blue/10 rounded-xl border border-royal-blue/20">
            <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo">DeHub 2.0: The Future Starts Now</h2>
            <p className="text-royal-blue/80 mb-6 leading-relaxed font-exo text-lg">
              This discontinuation of Ethereum mainnet support marks the beginning of <strong>DeHub 2.0</strong> - a more agile, cost-effective, and user-centric platform. We're not just changing chains; we're evolving our entire approach to decentralized content creation and community building.
            </p>
            
            <div className="bg-white/40 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-royal-blue mb-4 font-exo">What This Means for You:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-royal-blue/80 font-exo space-y-2">
                  <li>• Lower transaction costs (98% reduction)</li>
                  <li>• Faster transaction confirmation</li>
                  <li>• Enhanced platform features</li>
                  <li>• Improved user experience</li>
                </ul>
                <ul className="text-royal-blue/80 font-exo space-y-2">
                  <li>• No loss of token value or holdings</li>
                  <li>• Free migration assistance</li>
                  <li>• 24/7 customer support</li>
                  <li>• Future-proof infrastructure</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-6 border-t border-royal-blue/30">
              <p className="text-royal-blue/80 font-exo italic text-lg text-center">
                Thank you for your continued support as we build the future of decentralized content creation. This strategic shift positions DeHub for sustainable growth and innovation in the rapidly evolving blockchain landscape.
              </p>
            </div>
          </div>
        </div>
      );
    }
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

    // Add new card image near the end of the blog post (2 paragraphs from bottom)
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

  // Default to paragraph
  const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
  return <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
};
