
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
      const docContent = await generateFullDocContent();
      
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
      console.error('Export error:', error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting the documentation",
        variant: "destructive"
      });
    }
  };

  const generateFullDocContent = async () => {
    return `
DEHUB DOCUMENTATION
==================

TABLE OF CONTENTS
-----------------
1. Overview
2. Features
3. Games
4. AI Toolkits
5. Token Economics
6. Token Utility
7. Token Governance
8. Token Security
9. Token Staking
10. Where to Buy
11. Team
12. Roadmap
13. Contact

OVERVIEW
--------
DeHub is a decentralized platform building on the safest and speediest chains across L1s and EVM L2s.

DeHub is revolutionizing the decentralized ecosystem by providing a comprehensive platform that combines gaming, AI tools, and token utilities. Our mission is to create a truly decentralized environment where users can play, earn, create, and connect without traditional barriers.

FEATURES
--------
• Fast & Reliable: Building on the safest and speediest chains across L1s and EVM L2s
• Secure: Token holders run nodes globally to power the network and earn rewards
• Dev Support: We fund community projects and initiatives where we can
• Community: An established and supportive community here since 2021
• Cross-chain Compatibility: Seamless operation across multiple blockchain networks
• Decentralized Governance: Community-driven decision making
• Economic Incentives: Multiple ways to earn and participate in the ecosystem

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

Game Features:
• Play-to-earn mechanics without token inflation
• Skill-based gameplay
• Regular tournaments and competitions
• Cross-game rewards and achievements
• Community-driven game development

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

AI Capabilities:
• Natural language processing
• Image and video generation
• Smart contract analysis
• Market trend prediction
• Automated trading assistance
• Risk assessment tools

TOKEN ECONOMICS
---------------
The DeHub token (DHB) is designed with sustainable economics in mind:

Total Supply: Fixed supply with deflationary mechanisms
Distribution:
- 40% Community rewards and staking
- 25% Development and ecosystem growth
- 20% Team and advisors (vested)
- 10% Liquidity provision
- 5% Marketing and partnerships

Deflationary Mechanisms:
• Regular token burns from platform fees
• Staking rewards reduce circulating supply
• Game entry fees contribute to burn events

TOKEN UTILITY
-------------
DHB token serves multiple purposes within the ecosystem:

Primary Uses:
• Governance voting rights
• Staking for rewards and network security
• Payment for AI toolkit services
• Game entry fees and tournament prizes
• Platform fee discounts
• Cross-chain transaction fees

Advanced Features:
• Liquidity mining rewards
• NFT marketplace transactions
• Premium feature access
• Community fund contributions

TOKEN GOVERNANCE
----------------
DeHub operates on a decentralized governance model:

Governance Rights:
• Proposal creation and voting
• Treasury fund allocation
• Platform feature development priorities
• Partnership and integration decisions
• Economic parameter adjustments

Voting Process:
1. Proposal submission with DHB stake
2. Community discussion period
3. Voting period with weighted votes
4. Implementation of approved proposals

TOKEN SECURITY
--------------
Security is paramount in the DeHub ecosystem:

Security Measures:
• Multi-signature wallets for treasury
• Regular smart contract audits
• Bug bounty programs
• Decentralized key management
• Insurance fund for platform risks

Audit History:
• Initial audit by CertiK (2023)
• Ongoing security reviews
• Community-driven security testing
• Real-time monitoring systems

TOKEN STAKING
-------------
Staking DHB provides multiple benefits:

Staking Rewards:
• Base APY: 8-15% depending on lock period
• Bonus rewards for long-term staking
• Additional yields from platform fees
• Governance power increases with stake

Staking Options:
• Flexible staking (unstake anytime)
• Fixed-term staking (30, 90, 180, 365 days)
• Liquidity staking (maintain tradability)
• Validator node operation

WHERE TO BUY DHB
----------------
DHB is available on multiple exchanges and platforms:

Centralized Exchanges:
• Binance
• Coinbase
• Kraken
• KuCoin

Decentralized Exchanges:
• Uniswap
• PancakeSwap
• SushiSwap
• 1inch

Direct Purchase:
• DeHub platform (coming soon)
• Fiat on-ramps available
• Cross-chain bridges supported

TEAM
----
Meet the innovative minds behind DeHub:

Malik Jan - Co-Founder
Founder of U.K registered Web3 developers DeLabs LTD and Co-founder of Puso group. Malik brings extensive experience in blockchain development and business strategy to DeHub.

Mike Hales - Co-Founder
Founder and CEO of Rapz, a notable high end MMA fightwear brand backed by top UFC and boxing stars. Mike's expertise in brand building and athlete partnerships drives DeHub's gaming initiatives.

Indi Jay Cammish - Co-Founder
Social media, content & dance expert overseeing communications & corporate relations. Indi ensures DeHub maintains strong community engagement and brand presence.

Bailey Young - Co-Founder
Operational powerhouse and former pro-gamer heavily connected across the gaming, music & entertainment scene. Bailey leads the gaming development and community building efforts.

Advisory Board:
• Industry veterans from gaming, DeFi, and AI sectors
• Strategic partners from major blockchain networks
• Community representatives elected by governance

ROADMAP
-------
DeHub's development roadmap for 2024-2025:

Q1 2024:
✓ Platform beta launch
✓ Initial game releases
✓ Community building
✓ Token listing on major exchanges

Q2 2024:
✓ AI toolkit alpha release
✓ Staking platform launch
✓ Cross-chain integration
✓ Partnership announcements

Q3 2024:
• AI toolkit public beta
• Advanced gaming features
• Mobile app release
• Governance platform activation

Q4 2024:
• Full AI suite launch
• Institutional partnerships
• Enterprise solutions
• Global expansion

2025 Goals:
• Become leading Web3 gaming platform
• Launch decentralized AI marketplace
• Expand to 10+ blockchain networks
• Reach 1 million active users

TECHNICAL SPECIFICATIONS
------------------------
Blockchain Networks:
• Base (Primary)
• BNB Smart Chain
• Ethereum (Layer 2)
• Polygon
• Arbitrum

Smart Contracts:
• Token contract: Audited and verified
• Staking contracts: Multi-layer security
• Gaming contracts: Fair play guaranteed
• Governance contracts: Transparent voting

API Endpoints:
• REST API for platform integration
• WebSocket for real-time data
• GraphQL for complex queries
• SDKs for popular programming languages

CONTACT
-------
For more information, support, or partnerships:

Official Website: https://dehub.io
Email: info@dehub.net
Marketing: marketing@dehub.net
Support: support@dehub.net
Development: dev@dehub.net

Social Media:
• Twitter: @DeHubOfficial
• Discord: DeHub Community
• Telegram: @DeHubAnnouncements
• LinkedIn: DeHub Network

Developer Resources:
• GitHub: github.com/dehub-network
• Documentation: docs.dehub.io
• API Reference: api.dehub.io
• Developer Portal: dev.dehub.io

LEGAL DISCLAIMERS
-----------------
This documentation is for informational purposes only and does not constitute financial advice. Cryptocurrency investments carry risk, and past performance does not guarantee future results. Please conduct your own research before making investment decisions.

DeHub is committed to regulatory compliance and works with legal experts to ensure adherence to applicable laws in all operating jurisdictions.

Generated on: ${new Date().toLocaleString()}
Total Pages: ${Math.ceil(arguments.length / 100) || 'Multiple'}
Version: 1.0.0
    `.trim();
  };

  const downloadTxt = (content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dehub-complete-docs-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadPdf = (content: string) => {
    // Create a more comprehensive PDF using HTML and CSS
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      throw new Error('Could not open print window');
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>DeHub Documentation</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #2563eb;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 10px;
            font-size: 28px;
          }
          h2 {
            color: #1e40af;
            border-bottom: 2px solid #1e40af;
            padding-bottom: 8px;
            margin-top: 30px;
            font-size: 22px;
          }
          h3 {
            color: #1d4ed8;
            margin-top: 25px;
            font-size: 18px;
          }
          p {
            margin-bottom: 12px;
            text-align: justify;
          }
          ul {
            margin-bottom: 15px;
            padding-left: 30px;
          }
          li {
            margin-bottom: 8px;
          }
          .section {
            page-break-inside: avoid;
            margin-bottom: 25px;
          }
          .highlight {
            background-color: #f0f9ff;
            padding: 15px;
            border-left: 4px solid #2563eb;
            margin: 15px 0;
          }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
          }
          @media print {
            body { margin: 0; }
            .section { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        ${content.split('\n').map(line => {
          if (line.includes('===')) return '';
          if (line.includes('---')) return '';
          if (line.trim() === '') return '<br>';
          if (line.match(/^[A-Z\s]+$/g) && line.length > 5) return `<h1>${line.trim()}</h1>`;
          if (line.includes(':') && !line.startsWith('•') && !line.startsWith('-')) return `<h2>${line.trim()}</h2>`;
          if (line.startsWith('•') || line.startsWith('-')) return `<li>${line.substring(1).trim()}</li>`;
          return `<p>${line.trim()}</p>`;
        }).join('')}
        <div class="footer">
          <p>Generated on ${new Date().toLocaleString()}</p>
          <p>DeHub Documentation - Official Release</p>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for content to load then print
    setTimeout(() => {
      printWindow.print();
      setTimeout(() => {
        printWindow.close();
      }, 1000);
    }, 500);
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
