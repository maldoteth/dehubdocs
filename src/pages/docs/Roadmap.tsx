import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Calendar, Zap, Trophy, Users, Coins, Globe, Gamepad2, Video, Shield, Sparkles } from 'lucide-react';

const Roadmap = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const roadmapData = {
    '2021': {
      title: 'Foundation Year',
      items: [
        {
          quarter: 'Q1 2021',
          status: 'completed',
          title: 'First Beta Launch',
          description: '• Launched first beta app on App Store with 500+ initial testers\n• Assembled core development team\n• Conducted 50+ user interviews to validate product-market fit\n• Overcame initial Apple App Store review challenges\n• Established basic content moderation framework\n• Implemented core streaming infrastructure on AWS',
          icon: <Sparkles className="w-4 h-4" />
        },
        {
          quarter: 'Q2 2021',
          status: 'completed',
          title: 'Token V1 Launch',
          description: '• Launched v1 token with 1,000,000 initial supply\n• Created basic tokenomics model with staking rewards\n• Established first liquidity pools on Uniswap\n• Built community of 2,000+ early adopters\n• Implemented basic governance voting mechanism\n• Faced initial smart contract optimization challenges',
          icon: <Coins className="w-4 h-4" />
        },
        {
          quarter: 'Q3 2021',
          status: 'completed',
          title: 'V2 Release & Rebuild',
          description: '• Released V2 with improved user interface and 40% better performance\n• Started full app rebuild using React Native for better cross-platform support\n• Migrated 5,000+ users to new architecture\n• Introduced live chat functionality during streams\n• Addressed security vulnerabilities from V1\n• Expanded team to 15 members across 3 time zones',
          icon: <Zap className="w-4 h-4" />
        },
        {
          quarter: 'Q4 2021',
          status: 'completed',
          title: 'Gaming & Exchange Listing',
          description: '• Released prediction and raffle games with 10,000+ participants\n• Listed on gate.io with initial trading volume of $500K\n• Discovered listing agent was fraudulent - learned valuable due diligence lessons\n• Implemented game mechanics with provably fair randomization\n• Built custom payment processing for game entries\n• Community grew to 8,000+ active members',
          icon: <Gamepad2 className="w-4 h-4" />
        }
      ]
    },
    '2022': {
      title: 'Expansion & Innovation',
      items: [
        {
          quarter: 'Q1 2022',
          status: 'completed',
          title: 'Arcade Release',
          description: '• Released arcade with 5 initial games including poker and predictions\n• Achieved 25,000+ monthly active gamers\n• Implemented blockchain-based leaderboards and rewards\n• Introduced social features allowing friend challenges\n• Built custom game engine optimized for mobile devices\n• Generated $50K+ in monthly gaming revenue',
          icon: <Gamepad2 className="w-4 h-4" />
        },
        {
          quarter: 'Q2 2022',
          status: 'completed',
          title: 'Streaming & NFTs',
          description: '• Released stream app supporting 4K content with 99.9% uptime\n• Produced first tokenised documentary featuring Jorge Masvidal, Brad Pickett & more by Luke Barnatt\n• Genesis mint for Chads collection sold out in 24 hours (1,000 NFTs)\n• Secured licensing deals with 12 content creators\n• Implemented advanced video compression reducing bandwidth costs by 60%\n• Built NFT marketplace with royalty distribution system',
          icon: <Video className="w-4 h-4" />
        },
        {
          quarter: 'Q3 2022',
          status: 'completed',
          title: 'Corporate Formation',
          description: '• Incorporated DeLabs LTD with proper legal structure and compliance\n• Acquired $1,000,000 home for largest crypto raffle ever (15,000+ participants)\n• Established partnerships with real estate and legal firms\n• Implemented KYC/AML procedures for high-value raffles\n• Created transparent raffle mechanics with on-chain verification\n• Achieved regulatory compliance in 5 jurisdictions',
          icon: <Trophy className="w-4 h-4" />
        },
        {
          quarter: 'Q4 2022',
          status: 'completed',
          title: 'Token Relaunch',
          description: '• LP issues forced token relaunch due to contract congestion and gas optimization needs\n• Migrated 12,000+ token holders to new improved contract\n• Implemented advanced tokenomics with burn mechanisms\n• Reduced transaction costs by 80% through contract optimization\n• Introduced staking rewards with 12% APY\n• Community governance voted overwhelmingly in favor (95% approval)',
          icon: <Coins className="w-4 h-4" />
        }
      ]
    },
    '2023': {
      title: 'Recognition & Decentralization',
      items: [
        {
          quarter: 'Q1 2023',
          status: 'completed',
          title: 'Alpha D\'app Launch',
          description: '• Alpha launch of complete d\'app integrating all ecosystem components\n• Released tokenised uploads with onchain ad revenue sharing (creators earning 70%)\n• Implemented cross-platform synchronization across mobile and web\n• Achieved 50,000+ monthly active users across all platforms\n• Built advanced analytics dashboard for creators\n• Introduced automated content optimization using AI',
          icon: <Zap className="w-4 h-4" />
        },
        {
          quarter: 'Q2 2023',
          status: 'completed',
          title: 'Industry Recognition',
          description: '• Won most innovative company award at UK\'s Corporate Livewire (competing against 200+ companies)\n• Secured backing from Sony and Samsung innovation funds ($2M+ combined)\n• Featured in major tech publications including TechCrunch and VentureBeat\n• Spoke at 8 industry conferences reaching 10,000+ professionals\n• Established advisory board with former executives from YouTube and Twitch\n• Patent applications filed for core streaming technology',
          icon: <Trophy className="w-4 h-4" />
        },
        {
          quarter: 'Q3 2023',
          status: 'completed',
          title: 'Partner Airdrop',
          description: '• Announced partner airdrop for BJ (now fan.site), the adult fork of DeHub\n• Community members successfully launched independent fork with full governance\n• Facilitated knowledge transfer and technical support to fork team\n• Demonstrated true decentralization principles in action\n• Both platforms achieved 100,000+ combined users\n• Established framework for future community-driven forks',
          icon: <Users className="w-4 h-4" />
        },
        {
          quarter: 'Q4 2023',
          status: 'completed',
          title: 'DEX Commitment',
          description: '• Voluntary delisting from gate.io to prioritize decentralization\n• Commitment to transparency with all DEX policy implementation\n• Achieved 100% decentralized trading across 5 major DEXes\n• Implemented automated liquidity provision strategies\n• Community treasury grew to $5M+ through DEX trading fees\n• Published full transparency reports showing all protocol metrics',
          icon: <Shield className="w-4 h-4" />
        }
      ]
    },
    '2024': {
      title: 'Scale & Professional Growth',
      items: [
        {
          quarter: 'Q1 2024',
          status: 'completed',
          title: 'Base Listing & Funding',
          description: '• Successfully listed DHB on Base network with 50% lower transaction costs\n• Raised $1,000,000 for adult fork BJ (now fan.site) from tier-1 investors\n• Implemented Layer 2 scaling solutions reducing user costs by 90%\n• Cross-chain bridge processed 100,000+ transactions safely\n• Base listing increased daily active users by 200%\n• Established Base ecosystem partnerships with 15+ protocols',
          icon: <Coins className="w-4 h-4" />
        },
        {
          quarter: 'Q2 2024',
          status: 'completed',
          title: 'Global Events & Agency',
          description: '• DeHub London event attracted 500+ attendees including major VCs\n• Dubai event expanded Middle East presence with 300+ regional users\n• Opened TikTok agency in partnership with TikTok reaching 1M+ followers\n• Established creator partnerships in 15 countries\n• Generated $500K+ in agency revenue within first quarter\n• Built automated creator matching and campaign management system',
          icon: <Globe className="w-4 h-4" />
        },
        {
          quarter: 'Q3 2024',
          status: 'completed',
          title: 'Major Rebrand',
          description: '• Completed major app rebrand with 95% positive user feedback\n• Released trailer for Last Chad Standing (first ever MMA battle royale) with 2M+ views\n• Redesigned user interface increasing engagement by 150%\n• Implemented new brand identity across 12 platforms\n• MMA event planning involved 50+ fighters and $1M+ production budget\n• Rebrand resulted in 40% increase in new user acquisitions',
          icon: <Video className="w-4 h-4" />
        },
        {
          quarter: 'Q4 2024',
          status: 'completed',
          title: 'Subscriptions & Agency Growth',
          description: '• Released onchain subscriptions with 5,000+ paying subscribers in first month\n• Agency grew to UK #1 with 1,000 live streamers signed exclusively\n• Implemented tiered subscription model with NFT holder benefits\n• Built automated revenue distribution system for creators\n• Agency generated $2M+ in annual recurring revenue\n• Subscription platform achieved 25% monthly churn rate (industry-leading)',
          icon: <Users className="w-4 h-4" />
        }
      ]
    },
    '2025': {
      title: 'Current Year - Live & Interactive',
      items: [
        {
          quarter: 'Q1 2025',
          status: 'completed',
          title: 'Onchain Live Streams',
          description: '• Released onchain live streams with real-time tip verification\n• Implemented WebRTC infrastructure supporting 10,000+ concurrent viewers\n• Built custom CDN reducing latency to sub-200ms globally\n• Achieved 99.99% uptime across all streaming services\n• Introduced interactive features like live polls and Q&A\n• Processed 1M+ onchain transactions during live events',
          icon: <Video className="w-4 h-4" />
        },
        {
          quarter: 'Q2 2025',
          status: 'completed',
          title: 'UGC Ambassador Program',
          description: '• Launched UGC ambassadorship program with 200+ selected creators\n• Implemented comprehensive creator education curriculum\n• Built automated content quality scoring using AI\n• Ambassadors generated 500,000+ pieces of quality content\n• Created creator reward pool distributing $100K+ monthly\n• Established creator mentorship network spanning 25 countries',
          icon: <Users className="w-4 h-4" />
        },
        {
          quarter: 'Q3 2025',
          status: 'upcoming',
          title: 'AI Content Moderation',
          description: '• Launch AI-powered content moderation system with 99.5% accuracy\n• Implement token-based dispute resolution with community jury system\n• Deploy creator AI tools for automatic highlights and content optimization\n• Introduce real-time content suggestion engine\n• Build multilingual moderation supporting 20+ languages\n• Establish appeals process with human oversight for edge cases',
          icon: <Shield className="w-4 h-4" />
        },
        {
          quarter: 'Q4 2025',
          status: 'upcoming',
          title: 'Global Creator Fund',
          description: '• Launch $5M creator fund with tiered rewards based on engagement metrics\n• Introduce cross-platform content syndication to YouTube, TikTok, and Instagram\n• Launch mobile app V3 with AR features for virtual meet-and-greets\n• Implement automated content distribution optimization\n• Build creator analytics dashboard with predictive insights\n• Establish partnerships with traditional media companies for content crossover',
          icon: <Coins className="w-4 h-4" />
        }
      ]
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">DeHub Roadmap</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          From humble beginnings to global platform - our journey through innovation, challenges, and growth.
        </p>
      </div>

      <Tabs value={selectedYear} onValueChange={setSelectedYear} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          {Object.keys(roadmapData).map((year) => (
            <TabsTrigger key={year} value={year} className="text-sm">
              {year}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(roadmapData).map(([year, yearData]) => (
          <TabsContent key={year} value={year} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{year} - {yearData.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {yearData.items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                      <div className="flex-shrink-0">
                        {item.status === 'completed' ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center">
                            {item.icon}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-slate-900">{item.title}</h3>
                          <Badge variant="outline" className={getStatusColor(item.status)}>
                            {item.status === 'completed' ? 'Completed' : 'Not Completed'}
                          </Badge>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{item.description}</p>
                        <div className="text-xs text-slate-500 font-medium">{item.quarter}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-xl text-blue-800">Looking Ahead</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 leading-relaxed">
            Our roadmap represents our commitment to innovation, community, and transparency. Each milestone builds upon our core mission of decentralizing content creation and empowering creators worldwide. As we continue to grow, our community remains at the heart of every decision.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Roadmap;
