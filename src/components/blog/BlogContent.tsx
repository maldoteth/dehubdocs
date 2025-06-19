import React from 'react';
import DOMPurify from 'dompurify';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ExternalLink } from 'lucide-react';

interface BlogContentProps {
  content: string;
}
interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  experience: string[];
  initials: string;
}
const createSanitizedHtml = (htmlString: string) => {
  const sanitized = DOMPurify.sanitize(htmlString, {
    USE_PROFILES: {
      html: true
    },
    ADD_ATTR: ['target']
  });
  return {
    __html: sanitized
  };
};
const parseTeamMembers = (content: string): TeamMember[] => {
  const members: TeamMember[] = [];
  const memberBlocks = content.trim().split('### ').filter(b => b.trim() !== '');
  for (const block of memberBlocks) {
    const lines = block.trim().split('\n').filter(l => l.trim() !== '');
    if (lines.length < 2) continue;
    const header = lines.shift()!.split(' - ');
    const name = header[0]?.trim() ?? 'N/A';
    const role = header[1]?.trim() ?? 'N/A';
    const imageLine = lines.shift()!;
    const imageUrlMatch = imageLine.match(/\((.*?)\)/);
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : '';
    const bioLines: string[] = [];
    const experience: string[] = [];
    let readingBio = true;
    for (const line of lines) {
      if (line.startsWith('**Key Experience:**')) {
        readingBio = false;
        continue;
      }
      if (readingBio) {
        bioLines.push(line);
      } else if (line.startsWith('- ')) {
        experience.push(line.substring(2));
      }
    }
    members.push({
      name,
      role,
      photo: imageUrl,
      bio: bioLines.join(' '),
      experience,
      initials: name.split(' ').map(n => n[0]).join('')
    });
  }
  return members;
};
const renderRegularContent = (text: string) => {
  const processLineForHtml = (lineContent: string) => {
    return lineContent.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-royal-blue">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-middle-blue hover:text-royal-blue underline transition-colors duration-200">$1</a>');
  };
  const blocks = text.split('\n\n');
  return blocks.map((block, index) => {
    block = block.trim();
    if (!block) return null;
    const lines = block.split('\n');
    const firstLine = lines[0].trim();

    // Headers
    if (firstLine.startsWith('# ')) {
      return;
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
        return;
      }
    }

    // Unordered List
    if (lines.every(line => line.trim().startsWith('- ') || line.trim().startsWith('• '))) {
      return <ul key={index} className="list-disc list-inside space-y-2 mb-4 font-exo text-royal-blue/80">
          {lines.map((item, i) => {
          const content = item.trim().slice(2);
          const processedContent = processLineForHtml(content);
          return <li key={i} dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
        })}
        </ul>;
    }

    // Ordered List
    if (lines.every(line => /^\d+\./.test(line.trim()))) {
      return <ol key={index} className="list-decimal list-inside space-y-2 mb-4 font-exo text-royal-blue/80">
          {lines.map((item, i) => {
          const content = item.trim().replace(/^\d+\.\s/, '');
          const processedContent = processLineForHtml(content);
          return <li key={i} dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
        })}
        </ol>;
    }

    // Check if this is the transparency hub post and handle the empty paragraph
    if (block === '' && text.includes('dhbscan.com')) {
      return <div key={index} className="space-y-6 mb-8">
        <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
          The <strong className="font-semibold text-royal-blue">Transparency Hub</strong> at dhbscan.com represents a major milestone in blockchain transparency and community trust. This comprehensive platform provides real-time insights into the DeHub ecosystem across multiple blockchain networks, offering unprecedented visibility into token dynamics and network activity.
        </p>
        
        <h3 className="text-xl font-bold text-royal-blue mb-3 mt-8 font-exo">Multi-Chain Supply Analytics</h3>
        <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
          The platform displays comprehensive supply figures across both Ethereum and Base chains, providing a complete picture of $DHB token distribution. Users can track circulating supply, total supply, and burned tokens in real-time, ensuring complete transparency in tokenomics. The multi-chain view helps investors and community members understand the token's presence across different blockchain ecosystems.
        </p>

        <h3 className="text-xl font-bold text-royal-blue mb-3 mt-8 font-exo">Advanced Chart Analytics & Price History</h3>
        <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
          Interactive charts showcase detailed price history and key project milestones, allowing users to correlate market movements with development achievements. The platform features comprehensive historical data visualization, helping stakeholders make informed decisions based on past performance and milestone achievements. Soon, the platform will expand to show full comparative charts across both FTV (previous token) and DHB, painting the complete evolution story of the DeHub ecosystem.
        </p>

        <h3 className="text-xl font-bold text-royal-blue mb-3 mt-8 font-exo">Real-Time Transfer Monitoring</h3>
        <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
          The transparency hub provides live tracking of the latest token transfers, offering real-time visibility into network activity. Users can monitor transaction flows, identify patterns, and stay updated on significant token movements as they happen. This feature enhances trust by providing complete transparency into token circulation and network usage.
        </p>

        <h3 className="text-xl font-bold text-royal-blue mb-3 mt-8 font-exo">Top Holders Analysis</h3>
        <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
          Detailed holder analytics reveal the distribution of tokens among top addresses, providing insights into token concentration and community participation. The platform displays comprehensive holder statistics, helping users understand the decentralization level and community distribution of $DHB tokens. This transparency builds trust by showing exactly how tokens are distributed across the ecosystem.
        </p>

        <h3 className="text-xl font-bold text-royal-blue mb-3 mt-8 font-exo">Building Trust Through Transparency</h3>
        <p className="text-royal-blue/80 mb-4 leading-relaxed font-exo">
          By providing these comprehensive analytics and real-time data, dhbscan.com establishes a new standard for transparency in the DeFi space. The platform empowers community members with the information they need to make informed decisions and builds long-term trust through complete openness about project metrics and token dynamics.
        </p>
      </div>;
    }

    // Default to paragraph
    const processedContent = processLineForHtml(block.replace(/\n/g, ' '));
    return <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
  });
};

const BlogContent: React.FC<BlogContentProps> = ({
  content
}) => {
  const renderContent = () => {
    if (content.includes('[TEAM_SECTION_START]')) {
      const parts = content.split('[TEAM_SECTION_START]');
      const before = renderRegularContent(parts[0]);
      const teamAndAfter = parts[1].split('[TEAM_SECTION_END]');
      const teamContent = teamAndAfter[0];
      const after = teamAndAfter.length > 1 ? renderRegularContent(teamAndAfter[1]) : [];
      const teamMembers = parseTeamMembers(teamContent);
      const renderedTeam = <div key="team-section" className="not-prose grid gap-8 md:grid-cols-2 my-8">
          {teamMembers.map((member, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col bg-white border-sky-blue/20">
              <CardHeader className="text-center space-y-4 pb-4">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src={member.photo} alt={member.name} className="object-cover" />
                  <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold text-royal-blue">{member.name}</CardTitle>
                  <p className="text-middle-blue font-semibold">{member.role}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6 flex-grow flex flex-col">
                <p className="text-royal-blue/80 text-sm leading-relaxed">{member.bio}</p>
                {member.experience.length > 0 && <div className="space-y-3 pt-4 border-t border-sky-blue/20 mt-auto">
                    <h4 className="font-bold text-royal-blue text-base">Key Experience</h4>
                    <ul className="space-y-2">
                      {member.experience.map((exp, idx) => <li key={idx} className="text-sm text-royal-blue/70 flex leading-relaxed">
                          <span className="text-middle-blue mr-2 mt-1 text-sm">•</span>
                          <span className="flex-1">{exp}</span>
                        </li>)}
                    </ul>
                  </div>}
              </CardContent>
            </Card>)}
        </div>;
      return [...before, renderedTeam, ...after];
    }
    return renderRegularContent(content);
  };
  
  // Check if this is the Coinbase blog post
  const isCoinbasePost = content.includes('buy $DHB on Coinbase') || content.includes('Coinbase team');
  
  return <div className="prose prose-lg max-w-none">
    {renderContent()}
    {isCoinbasePost && (
      <div className="mt-8 pt-4 border-t border-sky-blue/20">
        <HoverCard>
          <HoverCardTrigger asChild>
            <button className="inline-flex items-center gap-2 text-middle-blue hover:text-royal-blue transition-colors duration-200 underline">
              Reference Link
              <ExternalLink className="w-4 h-4" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Coinbase Official Announcement</h4>
              <p className="text-sm text-muted-foreground">
                Official tweet from Coinbase about Base DEX integration
              </p>
              <a 
                href="https://x.com/coinbase/status/1933274988041080859" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                View on X (Twitter) →
              </a>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    )}
  </div>;
};

export default BlogContent;
