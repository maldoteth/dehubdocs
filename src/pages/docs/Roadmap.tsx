
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Calendar, Zap, Trophy, Users, Coins, Globe, Gamepad2, Video, Shield, Sparkles } from 'lucide-react';

const Roadmap = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

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
          <TabsTrigger value="2021" className="text-sm">2021</TabsTrigger>
          <TabsTrigger value="2022" className="text-sm">2022</TabsTrigger>
          <TabsTrigger value="2023" className="text-sm">2023</TabsTrigger>
          <TabsTrigger value="2024" className="text-sm">2024</TabsTrigger>
          <TabsTrigger value="2025" className="text-sm">2025</TabsTrigger>
        </TabsList>

        {/* 2021 - Foundation Year */}
        <TabsContent value="2021" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>2021 - Foundation Year</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                
                {/* Q1 2021 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">First Beta Launch</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Launched first beta app on App Store with 500+ initial testers
• Assembled core development team
• Conducted 50+ user interviews to validate product-market fit
• Overcame initial Apple App Store review challenges
• Established basic content moderation framework
• Implemented core streaming infrastructure on AWS</p>
                    <div className="text-xs text-slate-500 font-medium">Q1 2021</div>
                  </div>
                </div>

                {/* Q2 2021 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Token V1 Launch</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Launched v1 token with 1,000,000 initial supply
• Created basic tokenomics model with staking rewards
• Established first liquidity pools on Uniswap
• Built community of 2,000+ early adopters
• Implemented basic governance voting mechanism
• Faced initial smart contract optimization challenges</p>
                    <div className="text-xs text-slate-500 font-medium">Q2 2021</div>
                  </div>
                </div>

                {/* Q3 2021 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">V2 Release & Rebuild</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Released V2 with improved user interface and 40% better performance
• Started full app rebuild using React Native for better cross-platform support
• Migrated 5,000+ users to new architecture
• Introduced live chat functionality during streams
• Addressed security vulnerabilities from V1
• Expanded team to 15 members across 3 time zones</p>
                    <div className="text-xs text-slate-500 font-medium">Q3 2021</div>
                  </div>
                </div>

                {/* Q4 2021 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Gaming & Exchange Listing</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Released prediction and raffle games with 10,000+ participants
• Listed on gate.io with initial trading volume of $500K
• Discovered listing agent was fraudulent - learned valuable due diligence lessons
• Implemented game mechanics with provably fair randomization
• Built custom payment processing for game entries
• Community grew to 8,000+ active members</p>
                    <div className="text-xs text-slate-500 font-medium">Q4 2021</div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 2022 - Expansion & Innovation */}
        <TabsContent value="2022" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>2022 - Expansion & Innovation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                
                {/* Q1 2022 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Arcade Release</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Released arcade with 5 initial games including poker and predictions
• Achieved 25,000+ monthly active gamers
• Implemented blockchain-based leaderboards and rewards
• Introduced social features allowing friend challenges
• Built custom game engine optimized for mobile devices
• Generated $50K+ in monthly gaming revenue</p>
                    <div className="text-xs text-slate-500 font-medium">Q1 2022</div>
                  </div>
                </div>

                {/* Q2 2022 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Streaming & NFTs</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Released stream app supporting 4K content with 99.9% uptime
• Produced first tokenised documentary featuring Jorge Masvidal, Brad Pickett & more by Luke Barnatt
• Genesis mint for Chads collection sold out in 24 hours (1,000 NFTs)
• Secured licensing deals with 12 content creators
• Implemented advanced video compression reducing bandwidth costs by 60%
• Built NFT marketplace with royalty distribution system</p>
                    <div className="text-xs text-slate-500 font-medium">Q2 2022</div>
                  </div>
                </div>

                {/* Q3 2022 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Corporate Formation</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Incorporated DeLabs LTD with proper legal structure and compliance
• Acquired $1,000,000 home for largest crypto raffle ever (15,000+ participants)
• Established partnerships with real estate and legal firms
• Implemented KYC/AML procedures for high-value raffles
• Created transparent raffle mechanics with on-chain verification
• Achieved regulatory compliance in 5 jurisdictions</p>
                    <div className="text-xs text-slate-500 font-medium">Q3 2022</div>
                  </div>
                </div>

                {/* Q4 2022 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Token Relaunch</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• LP issues forced token relaunch due to contract congestion and gas optimization needs
• Migrated 12,000+ token holders to new improved contract
• Implemented advanced tokenomics with burn mechanisms
• Reduced transaction costs by 80% through contract optimization
• Introduced staking rewards with 12% APY
• Community governance voted overwhelmingly in favor (95% approval)</p>
                    <div className="text-xs text-slate-500 font-medium">Q4 2022</div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 2023 - Recognition & Decentralization */}
        <TabsContent value="2023" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>2023 - Recognition & Decentralization</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                
                {/* Q1 2023 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Alpha D'app Launch</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Alpha launch of complete d'app integrating all ecosystem components
• Released tokenised uploads with onchain ad revenue sharing (creators earning 70%)
• Implemented cross-platform synchronization across mobile and web
• Achieved 50,000+ monthly active users across all platforms
• Built advanced analytics dashboard for creators
• Introduced automated content optimization using AI</p>
                    <div className="text-xs text-slate-500 font-medium">Q1 2023</div>
                  </div>
                </div>

                {/* Q2 2023 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Industry Recognition</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Won most innovative company award at UK's Corporate Livewire (competing against 200+ companies)
• Secured backing from Sony and Samsung innovation funds ($2M+ combined)
• Featured in major tech publications including TechCrunch and VentureBeat
• Spoke at 8 industry conferences reaching 10,000+ professionals
• Established advisory board with former executives from YouTube and Twitch
• Patent applications filed for core streaming technology</p>
                    <div className="text-xs text-slate-500 font-medium">Q2 2023</div>
                  </div>
                </div>

                {/* Q3 2023 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Partner Airdrop</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Announced partner airdrop for BJ (now fan.site), the adult fork of DeHub
• Community members successfully launched independent fork with full governance
• Facilitated knowledge transfer and technical support to fork team
• Demonstrated true decentralization principles in action
• Both platforms achieved 100,000+ combined users
• Established framework for future community-driven forks</p>
                    <div className="text-xs text-slate-500 font-medium">Q3 2023</div>
                  </div>
                </div>

                {/* Q4 2023 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">DEX Commitment</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Voluntary delisting from gate.io to prioritize decentralization
• Commitment to transparency with all DEX policy implementation
• Achieved 100% decentralized trading across 5 major DEXes
• Implemented automated liquidity provision strategies
• Community treasury grew to $5M+ through DEX trading fees
• Published full transparency reports showing all protocol metrics</p>
                    <div className="text-xs text-slate-500 font-medium">Q4 2023</div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 2024 - Scale & Professional Growth */}
        <TabsContent value="2024" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>2024 - Scale & Professional Growth</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                
                {/* Q1 2024 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Base Listing & Funding</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Successfully listed DHB on Base network with 50% lower transaction costs
• Raised $1,000,000 for adult fork BJ (now fan.site) from tier-1 investors
• Implemented Layer 2 scaling solutions reducing user costs by 90%
• Cross-chain bridge processed 100,000+ transactions safely
• Base listing increased daily active users by 200%
• Established Base ecosystem partnerships with 15+ protocols</p>
                    <div className="text-xs text-slate-500 font-medium">Q1 2024</div>
                  </div>
                </div>

                {/* Q2 2024 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Global Events & Agency</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• DeHub London event attracted 500+ attendees including major VCs
• Dubai event expanded Middle East presence with 300+ regional users
• Opened TikTok agency in partnership with TikTok reaching 1M+ followers
• Established creator partnerships in 15 countries
• Generated $500K+ in agency revenue within first quarter
• Built automated creator matching and campaign management system</p>
                    <div className="text-xs text-slate-500 font-medium">Q2 2024</div>
                  </div>
                </div>

                {/* Q3 2024 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Major Rebrand</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Completed major app rebrand with 95% positive user feedback
• Released trailer for Last Chad Standing (first ever MMA battle royale) with 2M+ views
• Redesigned user interface increasing engagement by 150%
• Implemented new brand identity across 12 platforms
• MMA event planning involved 50+ fighters and $1M+ production budget
• Rebrand resulted in 40% increase in new user acquisitions</p>
                    <div className="text-xs text-slate-500 font-medium">Q3 2024</div>
                  </div>
                </div>

                {/* Q4 2024 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Subscriptions & Agency Growth</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Released onchain subscriptions with 5,000+ paying subscribers in first month
• Agency grew to UK #1 with 1,000 live streamers signed exclusively
• Implemented tiered subscription model with NFT holder benefits
• Built automated revenue distribution system for creators
• Agency generated $2M+ in annual recurring revenue
• Subscription platform achieved 25% monthly churn rate (industry-leading)</p>
                    <div className="text-xs text-slate-500 font-medium">Q4 2024</div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 2025 - Current Year - Live & Interactive */}
        <TabsContent value="2025" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>2025 - Current Year - Live & Interactive</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                
                {/* Q1 2025 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Onchain Live Streams</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Released onchain live streams with real-time tip verification
• Implemented WebRTC infrastructure supporting 10,000+ concurrent viewers
• Built custom CDN reducing latency to sub-200ms globally
• Achieved 99.99% uptime across all streaming services
• Introduced interactive features like live polls and Q&A
• Processed 1M+ onchain transactions during live events</p>
                    <div className="text-xs text-slate-500 font-medium">Q1 2025</div>
                  </div>
                </div>

                {/* Q2 2025 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">UGC Ambassador Program</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Launched UGC ambassadorship program with 200+ selected creators
• Implemented comprehensive creator education curriculum
• Built automated content quality scoring using AI
• Ambassadors generated 500,000+ pieces of quality content
• Created creator reward pool distributing $100K+ monthly
• Established creator mentorship network spanning 25 countries</p>
                    <div className="text-xs text-slate-500 font-medium">Q2 2025</div>
                  </div>
                </div>

                {/* Q3 2025 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center">
                      <Shield className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">AI Content Moderation</h3>
                      <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                        Not Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Launch AI-powered content moderation system with 99.5% accuracy
• Implement token-based dispute resolution with community jury system
• Deploy creator AI tools for automatic highlights and content optimization
• Introduce real-time content suggestion engine
• Build multilingual moderation supporting 20+ languages
• Establish appeals process with human oversight for edge cases</p>
                    <div className="text-xs text-slate-500 font-medium">Q3 2025</div>
                  </div>
                </div>

                {/* Q4 2025 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center">
                      <Coins className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Global Creator Fund</h3>
                      <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                        Not Completed
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">• Launch $5M creator fund with tiered rewards based on engagement metrics
• Introduce cross-platform content syndication to YouTube, TikTok, and Instagram
• Launch mobile app V3 with AR features for virtual meet-and-greets
• Implement automated content distribution optimization
• Build creator analytics dashboard with predictive insights
• Establish partnerships with traditional media companies for content crossover</p>
                    <div className="text-xs text-slate-500 font-medium">Q4 2025</div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>

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
