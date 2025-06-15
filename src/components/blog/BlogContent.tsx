import React from 'react';
import DOMPurify from 'dompurify';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
    if (firstLine.startsWith('### ')) {
      return <h3 key={index} className="text-xl font-bold text-royal-blue mb-3 mt-4 font-exo">{firstLine.slice(4)}</h3>;
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
  return <div className="prose prose-lg max-w-none">
    {renderContent()}
  </div>;
};
export default BlogContent;