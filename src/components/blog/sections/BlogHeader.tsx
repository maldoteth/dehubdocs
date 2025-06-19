
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const BlogHeader: React.FC = () => {
  return (
    <>
      {/* Construction Notice */}
      <Alert className="bg-amber-50 border-amber-200">
        <AlertCircle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800 font-exo">
          Our new blog is under construction, stay tuned for the official release
        </AlertDescription>
      </Alert>

      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-royal-blue leading-tight font-exo">
          DeHub
          <span className="block bg-gradient-to-r from-royal-blue to-middle-blue bg-clip-text text-transparent">Community Blog</span>
        </h1>
        
        <p className="text-xl text-royal-blue/70 max-w-3xl mx-auto leading-relaxed font-exo">
          Stay updated with the latest news, insights, and stories from the DeHub ecosystem. From announcements to tech guides, everything can be found here.
        </p>
      </div>
    </>
  );
};
