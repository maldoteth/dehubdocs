
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ExternalLink } from 'lucide-react';

interface PostSpecificSectionsProps {
  content: string;
}

export const PostSpecificSections: React.FC<PostSpecificSectionsProps> = ({ content }) => {
  const isCoinbasePost = content.includes('buy $DHB on Coinbase') || content.includes('Coinbase team');
  const isDhbscanPost = content.includes('dhbscan.com') || window.location.pathname.includes('transparency-hub-dhbscancom');
  
  return (
    <>
      {isDhbscanPost && (
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-sky-blue/20">
          <h4 className="text-lg font-bold text-royal-blue mb-3 font-exo">Key Features:</h4>
          <ol className="list-decimal list-inside space-y-2 text-royal-blue/80 font-exo">
            <li>Shows supply figures across both chains</li>
            <li>Shows chart, price history & milestones - soon to show full chart across FTV & DHB to paint the full story</li>
            <li>Shows latest transfers & top holders</li>
          </ol>
          <div className="mt-4 pt-3 border-t border-sky-blue/30">
            <a 
              href="https://dhbscan.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-middle-blue hover:text-royal-blue transition-colors duration-200 underline font-semibold"
            >
              Visit dhbscan.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
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
    </>
  );
};
