import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
export const BlogHeader: React.FC = () => {
  return <>
      {/* Construction Notice */}
      

      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground leading-tight font-exo">
          DeHub
          <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">Community Blog</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-exo">
          Stay updated with the latest news, insights, and stories from the DeHub ecosystem. From announcements to tech guides, everything can be found here.
        </p>
      </div>
    </>;
};