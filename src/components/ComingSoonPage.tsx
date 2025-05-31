
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import AnimatedBuildingBlocks from './AnimatedBuildingBlocks';

interface ComingSoonPageProps {
  title: string;
  description?: string;
  additionalNote?: React.ReactNode;
}

const ComingSoonPage = ({ title, description, additionalNote }: ComingSoonPageProps) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-2xl w-full mx-4 border-sky-blue/20 bg-gradient-to-br from-white to-sky-blue/5">
        <CardContent className="p-8 text-center space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-sky-blue/10 text-royal-blue rounded-full text-sm font-medium">
            <Clock className="w-4 h-4 mr-2" />
            Coming Soon
          </div>
          
          <h1 className="text-3xl font-bold text-royal-blue font-exo">
            {title}
          </h1>
          
          <AnimatedBuildingBlocks />
          
          <div className="space-y-3">
            <p className="text-royal-blue/70 font-exo text-lg">
              {description || "This section is currently under construction."}
            </p>
            <p className="text-royal-blue/60 font-exo">
              We're building something amazing! Check back soon for updates.
            </p>
            {additionalNote && (
              <div className="pt-4 border-t border-sky-blue/20">
                {additionalNote}
              </div>
            )}
          </div>
          
          <div className="flex justify-center space-x-2 pt-4">
            <div className="w-2 h-2 bg-sky-blue rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-middle-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-royal-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComingSoonPage;
