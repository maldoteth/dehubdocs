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
          description: '• Launched first beta app on App Store',
          icon: <Sparkles className="w-4 h-4" />,
          category: 'Product'
        },
        {
          quarter: 'Q2 2021',
          status: 'completed',
          title: 'Token V1 Launch',
          description: '• Launched v1 token',
          icon: <Coins className="w-4 h-4" />,
          category: 'Token'
        },
        {
          quarter: 'Q3 2021',
          status: 'completed',
          title: 'V2 Release & Rebuild',
          description: '• Released V2 and started full app rebuild',
          icon: <Zap className="w-4 h-4" />,
          category: 'Product'
        },
        {
          quarter: 'Q4 2021',
          status: 'completed',
          title: 'Gaming & Exchange Listing',
          description: '• Released prediction and raffle games\n• Listed on gate.io (later discovered listing agent scam)',
          icon: <Gamepad2 className="w-4 h-4" />,
          category: 'Gaming'
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
          description: '• Released arcade with first games',
          icon: <Gamepad2 className="w-4 h-4" />,
          category: 'Gaming'
        },
        {
          quarter: 'Q2 2022',
          status: 'completed',
          title: 'Streaming & NFTs',
          description: '• Released stream app for licensed content\n• First tokenised documentary featuring Jorge Masvidal, Brad Pickett & more by Luke Barnatt\n• Genesis mint for Chads',
          icon: <Video className="w-4 h-4" />,
          category: 'Content'
        },
        {
          quarter: 'Q3 2022',
          status: 'completed',
          title: 'Corporate Formation',
          description: '• Incorporated DeLabs LTD\n• Acquired $1,000,000 home for largest crypto raffle ever',
          icon: <Trophy className="w-4 h-4" />,
          category: 'Business'
        },
        {
          quarter: 'Q4 2022',
          status: 'completed',
          title: 'Token Relaunch',
          description: '• LP issues forced token relaunch due to contract congestion',
          icon: <Coins className="w-4 h-4" />,
          category: 'Token'
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
          description: '• Alpha launch of final complete d\'app with all ecosystem in one place\n• Released tokenised uploads with onchain ad rev share',
          icon: <Zap className="w-4 h-4" />,
          category: 'Product'
        },
        {
          quarter: 'Q2 2023',
          status: 'completed',
          title: 'Industry Recognition',
          description: '• Won most innovative company award at UK\'s Corporate Livewire\n• Backed by Sony and Samsung',
          icon: <Trophy className="w-4 h-4" />,
          category: 'Achievement'
        },
        {
          quarter: 'Q3 2023',
          status: 'completed',
          title: 'Partner Airdrop',
          description: '• Announced partner airdrop for BJ, the adult fork of DeHub lead by community members',
          icon: <Users className="w-4 h-4" />,
          category: 'Partnership'
        },
        {
          quarter: 'Q4 2023',
          status: 'completed',
          title: 'DEX Commitment',
          description: '• Voluntary delisting from gate.io\n• Commitment to decentralisation & transparency with all DEX policy',
          icon: <Shield className="w-4 h-4" />,
          category: 'Governance'
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
          description: '• Base listing for DHB\n• $1,000,000 raise for adult fork BJ (now fan.site)',
          icon: <Coins className="w-4 h-4" />,
          category: 'Token'
        },
        {
          quarter: 'Q2 2024',
          status: 'completed',
          title: 'Global Events & Agency',
          description: '• DeHub London & Dubai Events\n• Team opened TikTok agency in partnership with TikTok',
          icon: <Globe className="w-4 h-4" />,
          category: 'Business'
        },
        {
          quarter: 'Q3 2024',
          status: 'completed',
          title: 'Major Rebrand',
          description: '• Major app rebrand reveal\n• Trailer for Last Chad Standing (first ever MMA battle royale) released',
          icon: <Video className="w-4 h-4" />,
          category: 'Product'
        },
        {
          quarter: 'Q4 2024',
          status: 'completed',
          title: 'Subscriptions & Agency Growth',
          description: '• Released onchain subscriptions\n• Agency grew to UK #1 with 1000 live streamers signed exclusively',
          icon: <Users className="w-4 h-4" />,
          category: 'Business'
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
          description: '• Released onchain live streams functionality',
          icon: <Video className="w-4 h-4" />,
          category: 'Product'
        },
        {
          quarter: 'Q2 2025',
          status: 'completed',
          title: 'UGC Ambassador Program',
          description: '• Revealed UGC ambassadorship program',
          icon: <Users className="w-4 h-4" />,
          category: 'Community'
        },
        {
          quarter: 'Q3 2025',
          status: 'upcoming',
          title: 'AI Content Moderation',
          description: '• Launch AI-powered content moderation system with token-based dispute resolution\n• Implement creator AI tools for automatic highlights and content optimization',
          icon: <Shield className="w-4 h-4" />,
          category: 'AI/Tech'
        },
        {
          quarter: 'Q4 2025',
          status: 'upcoming',
          title: 'Global Creator Fund',
          description: '• Launch $5M creator fund with tiered rewards system\n• Introduce cross-platform content syndication\n• Launch mobile app V3 with AR features',
          icon: <Coins className="w-4 h-4" />,
          category: 'Creator Economy'
        }
      ]
    },
    '2026': {
      title: 'Governance & Global Expansion',
      items: [
        {
          quarter: 'Q1 2026',
          status: 'planned',
          title: 'DAO Governance Launch',
          description: '• Official launch of token governance protocol with fair voting logic\n• Begin quarterly community-driven protocol upgrades',
          icon: <Shield className="w-4 h-4" />,
          category: 'Governance'
        },
        {
          quarter: 'Q2 2026',
          status: 'planned',
          title: 'Enterprise Partnerships',
          description: '• Partner with major sports leagues for exclusive content\n• Launch white-label solutions for other platforms',
          icon: <Globe className="w-4 h-4" />,
          category: 'Business'
        },
        {
          quarter: 'Q3 2026',
          status: 'planned',
          title: 'Metaverse Integration',
          description: '• Launch virtual worlds integration for live events\n• Introduce 3D avatar system and virtual meet-ups',
          icon: <Gamepad2 className="w-4 h-4" />,
          category: 'Metaverse'
        },
        {
          quarter: 'Q4 2026',
          status: 'planned',
          title: 'DePIN Network Launch',
          description: '• Launch decentralized infrastructure network\n• Begin community-owned content delivery network rollout',
          icon: <Zap className="w-4 h-4" />,
          category: 'DePIN'
        }
      ]
    },
    '2027': {
      title: 'Mass Adoption & Innovation',
      items: [
        {
          quarter: 'Q1 2027',
          status: 'planned',
          title: 'Global Expansion',
          description: '• Launch in 50+ countries with localized content and compliance\n• Introduce multi-language AI translation for live streams',
          icon: <Globe className="w-4 h-4" />,
          category: 'Global'
        },
        {
          quarter: 'Q2 2027',
          status: 'planned',
          title: 'Advanced Gaming Suite',
          description: '• Launch full gaming ecosystem with play-to-earn mechanics\n• Introduce esports tournaments with million-dollar prize pools',
          icon: <Gamepad2 className="w-4 h-4" />,
          category: 'Gaming'
        },
        {
          quarter: 'Q3 2027',
          status: 'planned',
          title: 'Creator Economy 2.0',
          description: '• Launch advanced creator tools with AI-powered analytics\n• Introduce automated revenue optimization and predictive content suggestions',
          icon: <Users className="w-4 h-4" />,
          category: 'Creator Tools'
        },
        {
          quarter: 'Q4 2027',
          status: 'planned',
          title: 'Institutional Integration',
          description: '• Partner with traditional media companies for hybrid content distribution\n• Launch enterprise blockchain solutions',
          icon: <Trophy className="w-4 h-4" />,
          category: 'Enterprise'
        }
      ]
    },
    '2028': {
      title: 'Next Generation Platform',
      items: [
        {
          quarter: 'Q1 2028',
          status: 'planned',
          title: 'Web3 Social Network',
          description: '• Launch full social network with onchain social graph\n• Introduce reputation system and trust networks',
          icon: <Users className="w-4 h-4" />,
          category: 'Social'
        },
        {
          quarter: 'Q2 2028',
          status: 'planned',
          title: 'AI-Native Features',
          description: '• Launch AI agents for content creation and community management\n• Introduce personalized AI assistants for creators',
          icon: <Sparkles className="w-4 h-4" />,
          category: 'AI'
        },
        {
          quarter: 'Q3 2028',
          status: 'planned',
          title: 'Ecosystem Maturity',
          description: '• Achieve 10M+ monthly active users\n• Launch graduate program for creators to traditional media',
          icon: <Trophy className="w-4 h-4" />,
          category: 'Milestone'
        },
        {
          quarter: 'Q4 2028',
          status: 'planned',
          title: 'Platform Evolution',
          description: '• Begin development of next-generation platform architecture\n• Research quantum-resistant security implementations',
          icon: <Zap className="w-4 h-4" />,
          category: 'Innovation'
        }
      ]
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planned':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Product': 'bg-purple-100 text-purple-800',
      'Token': 'bg-yellow-100 text-yellow-800',
      'Gaming': 'bg-red-100 text-red-800',
      'Content': 'bg-blue-100 text-blue-800',
      'Business': 'bg-green-100 text-green-800',
      'Achievement': 'bg-orange-100 text-orange-800',
      'Partnership': 'bg-pink-100 text-pink-800',
      'Governance': 'bg-indigo-100 text-indigo-800',
      'Community': 'bg-teal-100 text-teal-800',
      'AI/Tech': 'bg-cyan-100 text-cyan-800',
      'Creator Economy': 'bg-emerald-100 text-emerald-800',
      'Metaverse': 'bg-violet-100 text-violet-800',
      'DePIN': 'bg-lime-100 text-lime-800',
      'Global': 'bg-sky-100 text-sky-800',
      'Creator Tools': 'bg-rose-100 text-rose-800',
      'Enterprise': 'bg-amber-100 text-amber-800',
      'Social': 'bg-fuchsia-100 text-fuchsia-800',
      'AI': 'bg-slate-100 text-slate-800',
      'Milestone': 'bg-stone-100 text-stone-800',
      'Innovation': 'bg-zinc-100 text-zinc-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
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
                          <div className="flex space-x-2">
                            <Badge variant="outline" className={getCategoryColor(item.category)}>
                              {item.category}
                            </Badge>
                            <Badge variant="outline" className={getStatusColor(item.status)}>
                              {item.status}
                            </Badge>
                          </div>
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
