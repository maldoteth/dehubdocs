
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, File } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ExportButtonProps {
  format: 'pdf' | 'txt';
  className?: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({ format, className }) => {
  const { toast } = useToast();

  const exportContent = async () => {
    try {
      // Get all documentation content
      const docContent = await generateDocContent();
      
      if (format === 'txt') {
        downloadTxt(docContent);
      } else {
        downloadPdf(docContent);
      }
      
      toast({
        title: "Export Successful",
        description: `Documentation exported as ${format.toUpperCase()}`
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "There was an error exporting the documentation",
        variant: "destructive"
      });
    }
  };

  const generateDocContent = async () => {
    return `
DEHUB DOCUMENTATION
==================

OVERVIEW
--------
DeHub is a decentralized platform building on the safest and speediest chains across L1s and EVM L2s.

FEATURES
--------
• Fast & Reliable: Building on the safest and speediest chains across L1s and EVM L2s
• Secure: Token holders run nodes globally to power the network and earn rewards
• Dev Support: We fund community projects and initiatives where we can
• Community: An established and supportive community here since 2021

GAMES
-----
Sustainable play and win to earn with no dilution or inflation.

Upcoming Releases:
- Last Chad Standing: Hyper realistic and gory battle royale featuring top UFC stars

Released Titles:
- Whack A Schifff: Whack Peter Schiff on the head to rack up points
- Gas Guzzler: Keep your ETH gas topped up while collecting dehub coins
- Rocket Blaster: Avoid laser beams on your 100km mission back to the moon
- Street Slayer: Rid the streets of the greedy banking mafia

AI TOOLKITS
-----------
DeHub users will soon have their own uncensored AI assistant and full toolkit suite directly in-app.

Features include:
- Content Creation: Help create & perfect content with AI-powered assistance
- Automated Engagement: Automate engagement and tipping based on preferences
- Finance Management: Aid with finance management and payments
- Performance Analytics: Track, analyse, and monitor performance & trends
- Global Translation: Translate and clarify content for a global audience
- Content Analysis: Get context on or explain posts with AI-powered analysis

TEAM
----
Meet the innovative minds behind DeHub:

Malik Jan - Co-Founder
Founder of U.K registered Web3 developers DeLabs LTD and Co-founder of Puso group.

Mike Hales - Co-Founder
Founder and CEO of Rapz, a notable high end MMA fightwear brand backed by top UFC and boxing stars.

Indi Jay Cammish - Co-Founder
Social media, content & dance expert overseeing communications & corporate relations.

Bailey Young - Co-Founder
Operational powerhouse and former pro-gamer heavily connected across the gaming, music & entertainment scene.

CONTACT
-------
For more information, visit our official channels and documentation.

Generated on: ${new Date().toLocaleString()}
    `.trim();
  };

  const downloadTxt = (content: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dehub-docs-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadPdf = (content: string) => {
    // Simple PDF generation using HTML canvas and basic formatting
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size for A4-like dimensions
    canvas.width = 595;
    canvas.height = 842;
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#000000';
    ctx.font = '12px Arial';
    
    const lines = content.split('\n');
    let y = 40;
    const lineHeight = 16;
    const margin = 40;
    const maxWidth = canvas.width - (margin * 2);
    
    lines.forEach(line => {
      if (y > canvas.height - 40) return; // Stop if we reach bottom
      
      if (line.trim() === '') {
        y += lineHeight / 2;
        return;
      }
      
      // Handle headers
      if (line.includes('===') || line.includes('---')) {
        ctx.font = 'bold 14px Arial';
      } else if (line.startsWith('•')) {
        ctx.font = '11px Arial';
      } else {
        ctx.font = '12px Arial';
      }
      
      // Word wrap for long lines
      const words = line.split(' ');
      let currentLine = '';
      
      words.forEach(word => {
        const testLine = currentLine + word + ' ';
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && currentLine !== '') {
          ctx.fillText(currentLine, margin, y);
          currentLine = word + ' ';
          y += lineHeight;
        } else {
          currentLine = testLine;
        }
      });
      
      if (currentLine.trim()) {
        ctx.fillText(currentLine, margin, y);
        y += lineHeight;
      }
    });
    
    // Convert canvas to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `dehub-docs-${new Date().toISOString().split('T')[0]}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    });
  };

  return (
    <Button 
      onClick={exportContent}
      variant="outline"
      className={`inline-flex items-center space-x-2 ${className}`}
    >
      {format === 'pdf' ? <File className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
      <span>Export {format.toUpperCase()}</span>
      <Download className="w-4 h-4" />
    </Button>
  );
};

export default ExportButton;
