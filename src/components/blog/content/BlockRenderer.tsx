
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

  // Check if this is the Ethereum Mainnet discontinuation blog post
  if (window.location.pathname.includes('strategic-shift-discontinuing-ethereum-mainnet-support-for-dhb')) {
    // If this is an empty paragraph, populate it with the blog content
    if (block.trim() === '' || block.trim().length < 50) {
      return (
        <div key={index} className="space-y-8">
          <div className="text-center py-4">
            <p className="text-royal-blue/60 font-exo italic text-sm">February 1, 2025 · 6‑minute read</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-royal-blue mb-4 font-exo">🚀 Why we're pivoting from Ethereum L1</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              Ethereum thought leaders—including the Ethereum Foundation and Vitalik Buterin—have been clear: scaling <strong>must</strong> happen via Layer 2, not by bloating the base chain. Vitalik has emphasized that modern rollups now <strong>scale Ethereum by ~17×</strong> while slashing fees by a similar margin, and that "layer‑2‑centric ecosystems" are essential for a pluralistic, decentralized future (<a href="https://time.com/6147486/ethereum-book-cryptopians/" target="_blank" rel="noopener noreferrer" className="text-middle-blue hover:text-royal-blue underline">time.com</a>, <a href="https://vitalik.eth.limo/general/2025/01/23/l1l2future.html" target="_blank" rel="noopener noreferrer" className="text-middle-blue hover:text-royal-blue underline">vitalik.eth.limo</a>). His 2025 roadmap reinforces that continued investment in L2 is crucial, both technically and socially.
            </p>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              From an app development POV, this is a green light: focus on <strong>fastest, cheapest, most vibrant networks</strong>—especially Coinbase's <strong>Base</strong>, the dominant L2 that processes ~40% of all Ethereum Layer 2 activity (<a href="https://vitalik.eth.limo/general/2025/01/23/l1l2future.html" target="_blank" rel="noopener noreferrer" className="text-middle-blue hover:text-royal-blue underline">vitalik.eth.limo</a>).
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-royal-blue mb-4 font-exo">🎯 DHB's consumer-first approach: Why Base makes sense</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              As a consumer-facing product, DHB must run where users already are—where transactions are near-instant, gas fees are negligible, and wallet friction is minimal. Base checks all these boxes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 font-exo text-royal-blue/80">
              <li><strong>Speed & Cost</strong>: upgrades targeting 🎯200 ms confirmations and sub‑$0.01 fees (<a href="https://www.mitrade.com/insights/news/live-news/article-3-841878-20250525" target="_blank" rel="noopener noreferrer" className="text-middle-blue hover:text-royal-blue underline">mitrade.com</a>)</li>
              <li><strong>Mass Adoption</strong>: ~4.6 million weekly active addresses—{'>'}50% of overall L2 usage (<a href="https://cryptoslate.com/coinbase-backed-base-unveils-upgrades-to-beat-solana-performance-by-double/" target="_blank" rel="noopener noreferrer" className="text-middle-blue hover:text-royal-blue underline">cryptoslate.com</a>)</li>
              <li><strong>Coinbase Ecosystem</strong>: users see Base and its tokens directly in their Coinbase wallets and can onboard instantly (<a href="https://thedefiant.io/news/defi/coinbase-to-integrate-base-dexs-on-its-main-app" target="_blank" rel="noopener noreferrer" className="text-middle-blue hover:text-royal-blue underline">thedefiant.io</a>)</li>
            </ul>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              This natural ecosystem synergy makes Base the logical primary chain for DHB.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-royal-blue mb-4 font-exo">🌊 Solana: next on our radar</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              Although Base is our initial focus, we're keeping <strong>Solana</strong> squarely on the roadmap. Its high-throughput, low-latency design complements Base's strengths, and a recent <strong>listing on Coinbase</strong> opens more seamless integration paths. Solana's vibrant DeFi and NFT ecosystems—combined with Coinbase's support—make it a powerful second leg for DHB's multi-chain ambitions.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-royal-blue mb-4 font-exo">💸 Fueling growth: more LP, investment & campaigns ahead</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              With a realigned chain strategy, we're doubling down on:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4 font-exo text-royal-blue/80">
              <li><strong>Liquidity provisioning</strong>: partnering with leading AMMs on Base (e.g. Uniswap v4, Sushi) to bootstrap organic depth.</li>
              <li><strong>Capital injection</strong>: deploying treasury funds and leveraging Coinbase Ventures to support incentives and token unlocks.</li>
              <li><strong>User acquisition</strong>: launching targeted campaigns—DEX onboarding rewards, wallet connection bonuses, cross-chain bridge credits—to boost both DAU and volume.</li>
              <li><strong>Developer engagement</strong>: hackathons, grants, and tool integrations to build on Base (and later Solana) via DHB-native SDKs.</li>
            </ol>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-royal-blue mb-4 font-exo">🔭 Looking forward</h3>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              By <strong>discontinuing Ethereum Mainnet support</strong>, we're enabling DHB to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 font-exo text-royal-blue/80">
              <li><strong>Focus on performance</strong> – fastest and cheapest network with zero L1 baggage</li>
              <li><strong>Ride the L2 wave</strong>—following the ecosystem's leader (Base) and trusted roadmap pushed by Vitalik and others</li>
              <li><strong>Stay flexible</strong>—ready to add Solana and beyond where user value is proven</li>
            </ul>
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              This is more than a technical shift—it's a strategic step to align DHB with the future of consumer crypto. We're excited to scale smarter, faster, and more cost‑effectively. The next chapter starts on Base… stay tuned.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-royal-blue/10 to-middle-blue/10 rounded-lg border border-royal-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-royal-blue/20">
                    <th className="text-left p-3 font-bold text-royal-blue font-exo">Reason</th>
                    <th className="text-left p-3 font-bold text-royal-blue font-exo">Benefit</th>
                  </tr>
                </thead>
                <tbody className="text-royal-blue/80 font-exo">
                  <tr className="border-b border-royal-blue/10">
                    <td className="p-3">L2 is Ethereum's scaling future</td>
                    <td className="p-3">Backed by Vitalik & Ethereum Foundation</td>
                  </tr>
                  <tr className="border-b border-royal-blue/10">
                    <td className="p-3">Base offers speed, cost, and users</td>
                    <td className="p-3">Leading L2 with Coinbase ecosystem</td>
                  </tr>
                  <tr className="border-b border-royal-blue/10">
                    <td className="p-3">Solana integration planned</td>
                    <td className="p-3">Broader performance & DeFi reach</td>
                  </tr>
                  <tr>
                    <td className="p-3">Investment + campaigns</td>
                    <td className="p-3">Ensures liquidity, users & growth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center py-6">
            <p className="text-royal-blue font-exo font-semibold text-lg">
              Let's build the next-gen of consumer crypto—on the right chains, right now.
            </p>
          </div>
        </div>
      );
    }
  }

  // Default to paragraph
  const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
  return <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
};
