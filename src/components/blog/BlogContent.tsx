
import React from 'react';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  // Simple markdown-like rendering
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
        
        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="text-royal-blue/80 mb-2 ml-4 font-exo">{line.slice(2)}</li>;
        }
        if (/^\d+\./.test(line)) {
          return <li key={index} className="text-royal-blue/80 mb-2 ml-4 font-exo">{line.replace(/^\d+\.\s/, '')}</li>;
        }
        
        // Bold text
        const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-royal-blue">$1</strong>');
        
        // Links
        const linkedText = boldText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-middle-blue hover:text-royal-blue underline transition-colors duration-200">$1</a>');
        
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Regular paragraphs
        return (
          <p 
            key={index} 
            className="text-royal-blue/80 mb-4 leading-relaxed font-exo"
            dangerouslySetInnerHTML={{ __html: linkedText }}
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
