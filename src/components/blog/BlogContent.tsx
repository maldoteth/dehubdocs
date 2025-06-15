
import React from 'react';
import DOMPurify from 'dompurify';
interface BlogContentProps {
  content: string;
}
const BlogContent: React.FC<BlogContentProps> = ({
  content
}) => {
  const createSanitizedHtml = (htmlString: string) => {
    const sanitized = DOMPurify.sanitize(htmlString, {
      USE_PROFILES: {
        html: true
      },
      ADD_ATTR: ['target'] // Allow target attribute for links
    });
    return {
      __html: sanitized
    };
  };

  // Enhanced markdown-like rendering
  const renderContent = (text: string) => {
    const processLineForHtml = (lineContent: string) => {
      return lineContent.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-royal-blue">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-middle-blue hover:text-royal-blue underline transition-colors duration-200">$1</a>');
    };
    return text.split('\n').map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-royal-blue mb-6 mt-8 font-exo">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-royal-blue mb-4 mt-6 font-exo">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-royal-blue mb-3 mt-4 font-exo">{line.slice(4)}</h3>;
      }

      // Image tag
      if (line.startsWith('![')) {
        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          const altAndStyle = match[1];
          const src = match[2];

          const parts = altAndStyle.split('|');
          const alt = parts[0].trim();
          const style = parts.length > 1 ? parts[1].trim() : 'default';

          if (style === 'avatar') {
            return (
              <img
                key={index}
                src={src}
                alt={alt}
                className="w-24 h-24 rounded-full object-cover my-6 mx-auto block shadow-md"
              />
            );
          }

          return <img key={index} src={src} alt={alt} className="my-6 rounded-lg shadow-md" />;
        }
      }

      // Lists - handle both - and • bullets
      if (line.startsWith('- ') || line.startsWith('• ')) {
        const listContent = line.startsWith('- ') ? line.slice(2) : line.slice(2);
        const processedContent = processLineForHtml(listContent);
        return <li key={index} className="text-royal-blue/80 mb-2 ml-4 font-exo list-disc" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
      }
      if (/^\d+\./.test(line)) {
        const listContent = line.replace(/^\d+\.\s/, '');
        const processedContent = processLineForHtml(listContent);
        return <li key={index} className="text-royal-blue/80 mb-2 ml-4 font-exo list-decimal" dangerouslySetInnerHTML={createSanitizedHtml(processedContent)} />;
      }

      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // Regular paragraphs - process for bold and links
      const processedLine = processLineForHtml(line);
      return <p key={index} className="text-royal-blue/80 mb-4 leading-relaxed font-exo" dangerouslySetInnerHTML={createSanitizedHtml(processedLine)} />;
    });
  };
  return <div className="prose prose-lg max-w-none">
      {renderContent(content)}
    </div>;
};
export default BlogContent;
