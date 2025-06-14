
import React from 'react';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  // Enhanced markdown-like rendering
  const renderContent = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
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
            const alt = match[1];
            const src = match[2];
            return <img key={index} src={src} alt={alt} className="my-6 rounded-lg shadow-md mx-auto" />;
          }
        }
        
        // Lists - handle both - and • bullets
        if (line.startsWith('- ') || line.startsWith('• ')) {
          const listContent = line.startsWith('- ') ? line.slice(2) : line.slice(2);
          // Process the list content for bold formatting
          const processedContent = listContent
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-royal-blue">$1</strong>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-middle-blue hover:text-royal-blue underline transition-colors duration-200">$1</a>');
          
          return (
            <li 
              key={index} 
              className="text-royal-blue/80 mb-2 ml-4 font-exo list-disc"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          );
        }
        if (/^\d+\./.test(line)) {
          const listContent = line.replace(/^\d+\.\s/, '');
          const processedContent = listContent
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-royal-blue">$1</strong>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-middle-blue hover:text-royal-blue underline transition-colors duration-200">$1</a>');
          
          return (
            <li 
              key={index} 
              className="text-royal-blue/80 mb-2 ml-4 font-exo list-decimal"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          );
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Regular paragraphs - process for bold and links
        let processedLine = line
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-royal-blue">$1</strong>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-middle-blue hover:text-royal-blue underline transition-colors duration-200">$1</a>');
        
        return (
          <p 
            key={index} 
            className="text-royal-blue/80 mb-4 leading-relaxed font-exo"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      });
  };

  return (
    <div className="prose prose-lg max-w-none">
      {renderContent(content)}
    </div>
  );
};

export default BlogContent;
