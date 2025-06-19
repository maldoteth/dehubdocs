
import React from 'react';
import { createSanitizedHtml, processLineForHtml } from './contentUtils';

interface ContentRendererProps {
  text: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ text }) => {
  const blocks = text.split('\n\n');
  
  return (
    <>
      {blocks.map((block, index) => {
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
      })}
      
      {/* Add Livepeer-specific content */}
      {window.location.pathname.includes('livepeer') && (
        <>
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-sky-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">The Power of Decentralized Video Infrastructure</h3>
            
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              In today's digital landscape, video streaming has become the backbone of online communication, entertainment, and business operations. However, traditional centralized streaming infrastructure comes with significant limitations: high costs, single points of failure, geographic restrictions, and lack of transparency. This is where <strong>Livepeer</strong> revolutionizes the industry through decentralized video infrastructure.
            </p>

            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              Livepeer operates as a decentralized network of video transcoding nodes, distributed globally and maintained by a community of operators. This approach delivers several critical advantages over centralized alternatives like traditional CDNs or proprietary streaming services.
            </p>

            <h4 className="text-lg font-bold text-royal-blue mb-3 mt-6 font-exo">Why Decentralized Infrastructure Matters</h4>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Cost Efficiency at Scale</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Decentralized networks eliminate the need for expensive data centers and reduce operational overhead. By distributing processing across numerous nodes, costs decrease significantly while maintaining high-quality service delivery.
                </p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Global Redundancy & Reliability</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Unlike centralized systems with single points of failure, decentralized infrastructure ensures continuous operation even if individual nodes go offline. This distributed approach provides unmatched reliability for critical streaming applications.
                </p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Censorship Resistance</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Decentralized networks cannot be easily shut down or censored by single authorities, ensuring content creators maintain control over their distribution channels and audience access.
                </p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-lg">
                <h5 className="font-semibold text-royal-blue mb-2 font-exo">Transparent & Open Ecosystem</h5>
                <p className="text-royal-blue/70 text-sm font-exo">
                  All network operations, pricing, and performance metrics are transparent and verifiable on-chain, creating trust and accountability that centralized platforms cannot match.
                </p>
              </div>
            </div>

            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              For DeHub, integrating with Livepeer represents a strategic alignment with our core principles of decentralization while providing immediate access to proven, scalable video infrastructure. This partnership enables us to support <strong>50,000+ concurrent viewers initially</strong>, with unlimited scaling potential as our user base grows.
            </p>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-sky-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Strategic Vision: From Partnership to DePIN Leadership</h3>
            
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              While our integration with Livepeer provides immediate technical capabilities and proven decentralized infrastructure, our long-term vision extends far beyond this partnership. DeHub is actively developing our own <strong>Decentralized Physical Infrastructure Network (DePIN)</strong> that will eventually encompass video streaming, data storage, computational resources, and networking capabilities.
            </p>

            <h4 className="text-lg font-bold text-royal-blue mb-3 mt-6 font-exo">The Future of DeHub DePIN</h4>
            
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              Our proprietary DePIN infrastructure is designed to create a comprehensive ecosystem where community members can contribute computational resources, storage capacity, and bandwidth in exchange for DHB token rewards. This approach will enable:
            </p>

            <ul className="list-disc list-inside space-y-2 text-royal-blue/80 font-exo mb-6">
              <li><strong>Community Ownership:</strong> Users become stakeholders in the infrastructure they use daily</li>
              <li><strong>Token Utility:</strong> DHB tokens power all network operations and reward contribution</li>
              <li><strong>Vertical Integration:</strong> Complete control over our technology stack and user experience</li>
              <li><strong>Cost Optimization:</strong> Direct community participation eliminates intermediary costs</li>
              <li><strong>Innovation Freedom:</strong> Ability to implement cutting-edge features without third-party limitations</li>
            </ul>

            <div className="p-4 bg-white/30 rounded-lg border-l-4 border-royal-blue mb-6">
              <p className="text-royal-blue/90 font-exo text-sm">
                <strong>Strategic Flexibility:</strong> Even as we develop our own DePIN infrastructure, we maintain an open approach to partnerships. If Livepeer continues to provide exceptional cost efficiency and performance, we may choose to maintain this integration alongside our proprietary solutions, creating a hybrid model that maximizes both performance and decentralization.
              </p>
            </div>

            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              This measured approach allows us to leverage proven technologies today while building the infrastructure of tomorrow. Our users benefit from immediate access to high-quality streaming capabilities, while our development team focuses on creating the next generation of decentralized infrastructure that will power the future of social media and content creation.
            </p>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-r from-royal-blue/10 to-middle-blue/10 rounded-lg border border-royal-blue/20">
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-exo">Technical Excellence Meets Decentralized Values</h3>
            
            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              The integration with Livepeer showcases how DeHub consistently chooses solutions that align with our commitment to decentralization, community empowerment, and technical excellence. Rather than relying on centralized cloud providers that concentrate power and profits in the hands of tech giants, we partner with protocols that distribute both.
            </p>

            <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
              This decision reflects our broader philosophy: every technical choice should advance the cause of decentralization while delivering superior user experiences. As we continue building DeHub into the premier decentralized social platform, partnerships like this demonstrate our commitment to walking the walk, not just talking about decentralization.
            </p>

            <div className="pt-4 border-t border-royal-blue/30">
              <p className="text-royal-blue/80 font-exo text-sm italic">
                Join us as we scale new heights in decentralized infrastructure, bringing the future of social media to life through innovative partnerships and our own cutting-edge DePIN development.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
