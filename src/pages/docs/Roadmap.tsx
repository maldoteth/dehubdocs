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
  return <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">DeHub Roadmap</h1>
        <p className="text-lg text-slate-600 leading-relaxed">From humble beginnings to a complete platform - our journey through the ups </p>
      </div>

      <Tabs value={selectedYear} onValueChange={setSelectedYear} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="2021" className="text-sm">21</TabsTrigger>
          <TabsTrigger value="2022" className="text-sm">22</TabsTrigger>
          <TabsTrigger value="2023" className="text-sm">23</TabsTrigger>
          <TabsTrigger value="2024" className="text-sm">24</TabsTrigger>
          <TabsTrigger value="2025" className="text-sm">25</TabsTrigger>
          <TabsTrigger value="2026" className="text-sm">26</TabsTrigger>
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
                <div id="q1-2021" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q1 2021</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Assembled core development team</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Launched first beta app on App Store with 500+ initial testers and 2,000 DAUs before token release</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Conducted 50+ user interviews to validate product-market fit</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Established basic content moderation framework</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q2 2021 */}
                <div id="q2-2021" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q2 2021</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Launched v1 token</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Community governed listing chain, price / market cap.</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Established first liquidity pools on Pancake Swap</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Built community of 2,000+ early adopters</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Implemented basic governance voting mechanism</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Smart contract security issue discovered</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q3 2021 */}
                <div id="q3-2021" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q3 2021</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Rebranded to DeHub</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Started full app rebuild using React Native for better cross-platform support</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Airdropped all holders automatically</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Addressed security vulnerabilities from v1 with full Certik Audit</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Expanded team to 15 members across 3 time zones</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q4 2021 */}
                <div id="q4-2021" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q4 2021</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Released prediction and raffle games</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Listed on Gate.io after a near 1000x price surge, with close to $10m in our LP</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Discovered listing agent was fraudulent, stole our fundraise and dumped our chart instead of airdropping Gate users, Gate investigated and apologised but could not identify the rogue employee as they lost the records, apparently.</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Implemented game mechanics with provably fair randomization</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Community grew to 8,000+ active members</span>
                      </div>
                    </div>
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
                <div id="q1-2022" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q1 2022</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Released arcade with 5 initial games including Super Robin Hood and Tomb Runner and predictions</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Achieved 5,000+ monthly active gamers</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Implemented blockchain-based leaderboards and rewards</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Introduced social features allowing friend challenges</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Built custom game engine optimized for mobile devices</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q2 2022 */}
                <div id="q2-2022" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q2 2022</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Released stream app supporting 4K content with 99.9% uptime</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Produced first tokenised documentary featuring Jorge Masvidal, Brad Pickett & more by Luke Barnatt</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Genesis mint for Chads collection</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Secured SEC registration with the Philippine Government for real estate, construction and brokerage services</span>
                      </div>
                      
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Implemented advanced video compression reducing bandwidth costs by 60%</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Built NFT marketplace with royalty distribution system</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q3 2022 */}
                <div id="q3-2022" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q3 2022</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Incorporated DeLabs LTD with proper legal structure and compliance</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Acquired $1,000,000 home for largest crypto raffle ever (15,000+ participants)</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Secured power of attorney for multiple islands and sea front strip in Palawan worth over $15,000,000 in an attempt to tokenise sales but failed due to regulatory challenges from the Philippine SEC</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Established partnerships with real estate and legal firms</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Created transparent raffle mechanics with on-chain verification</span>
                      </div>
                      
                    </div>
                  </div>
                </div>

                {/* Q4 2022 */}
                <div id="q4-2022" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q4 2022</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Contract tax triggers malfunctioned, freezing the token and our LP, forced to relaunch v2</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Migrated 25,000+ token holders to new improved contract</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Implemented standard ERC20 tokenomics to avoid future issues</span>
                      </div>
                    </div>
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
                <div id="q1-2023" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q1 2023</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Alpha launch of complete d'app integrating all ecosystem components</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Released tokenised uploads with onchain ad revenue sharing (creators earning 90%)</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Commenced advanced analytics dashboard for creators</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Recommenced trading of DeHub v2 on Gate.io</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q2 2023 */}
                <div id="q2-2023" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q2 2023</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Won most innovative company award at UK's Corporate Livewire, competing against 900+ companies in a vote based system backed by Sony, Samsung and other industry giants.</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Featured in major tech publications including TechCrunch and VentureBeat</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Patent applications commenced for core streaming technology and watch2earn mechanics</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q3 2023 */}
                <div id="q3-2023" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q3 2023</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Announced partner airdrop for BJ (now fan.site), the adult fork of DeHub</span>
                      </div>
                      
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Facilitated knowledge transfer and technical support to fork team</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Demonstrated true decentralization principles in action</span>
                      </div>
                      
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Established framework for future community-driven forks</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q4 2023 */}
                <div id="q4-2023" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q4 2023</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Voluntary delisting from Gate.io to prioritize decentralization</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Commitment to transparency with all DEX policy implementation</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Implemented automated liquidity provision strategies</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Published full transparency reports showing all protocol metrics</span>
                      </div>
                    </div>
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
                <div id="q1-2024" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q1 2024</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Listed DHB on Eth mainnet</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Raised $1,000,000 for adult fork BJ (now fan.site)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q2 2024 */}
                <div id="q2-2024" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q2 2024</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Listed SDHB on Base L2</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Dubai event expanded Middle East presence</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Co-Founders Mike Hales &amp; Indi Cammish Opened TikTok agency in partnership with TikTok execs directly after successful year topping UK stream charts earning 1k a day</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Established creator partnerships in 15 countries</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q3 2024 */}
                <div id="q3-2024" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q3 2024</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Completed major app rebrand with 95% positive user feedback</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Released trailer for Last Chad Standing (first ever MMA battle royale) with 1M+ views</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Redesigned user interface & back end speed by 200%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q4 2024 */}
                <div id="q4-2024" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q4 2024</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Released onchain tradable subscriptions</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Agency grew to UK #1 with 1,000 live streamers signed exclusively</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Built automated revenue distribution system for creators</span>
                      </div>
                    </div>
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
                <div id="q1-2025" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q1 2025</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Released onchain live streams with real-time tip verification</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Implemented Livepeer infrastructure supporting 50,000+ concurrent viewers with the ability of unlimited (in theory) on higher spend tiers.</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Built custom CDN reducing latency to sub-200ms globally</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Achieved 99.99% uptime across all streaming services</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>DePIN (Decentralized Physical Infrastructure Network) reveal phase 1</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Discontinue Ethereum Mainnet support</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Completed messaging system with paid or free DMs and unlockable chat content</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q2 2025 */}
                <div id="q2-2025" className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q2 2025</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Launched UGC ambassadorship program with 50 vacancies</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Implemented comprehensive creator education curriculum</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Released dhbscan.com for users to track activity across all DHB contracts</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Revamped main app feed, revealed audio replies and live talk spaces </span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Final snapshot for Last Chad Standing game airdrop, for both holders and stakers</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q3 2025 */}
                <div id="q3-2025" className="flex items-start space-x-4 p-4 rounded-lg border bg-blue-50/50">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q3 2025</h3>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                        Pending
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Release live stream keys so users can stream on multiple apps simultaneously ✅</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Released fiat onramp with Stripe integration allowing users of 130+ currencies to buy DHB seamlessly in-app and use instantly with free gas ✅</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Launch fiat off-ramp functionality for seamless token-to-cash conversion</span>
                      </div>
                      
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Begin Solana, Hyperliquid and Sui integrations for in-app use</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Integrate AI toolkits so users can automate tips or engagement to their favourite creators as well as financial transactions and guidance</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Custom advertising stack with advanced user targeting based on wallet balance & activity</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>DePIN phase 2</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q4 2025 */}
                <div id="q4-2025" className="flex items-start space-x-4 p-4 rounded-lg border bg-blue-50/50">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q4 2025</h3>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                        Planned
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>App store re-listings</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Release multi-account access and delegation features for streamlined management</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Deploy comprehensive CRM system for agency management and client tracking</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Open source the entire DeHub protocol for community development</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Launch comprehensive SDKs enabling third-party developers to build mini apps and games</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Establish developer marketplace for community-built applications and integrations</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Multi-posting software so users can post to all major web2+3 socials from one place</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Last Chad Standing release schedule begins</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 2026 */}
        <TabsContent value="2026" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>2026 - Future Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-gray-50/50">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">2026 and Beyond</h3>
                      <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                        Planned
                      </Badge>
                    </div>
                    <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Leading licensing partners, latest blockbusters and major PPVs</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Commercial integrations with existing streaming and home entertainment brands</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Aggregation of All APIs of current web2+3 Streaming Platforms</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Windows, MAC OS, TV & game console apps</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>V/AR profile hub & consumer data metrics</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Educational AI integrations for personalized learning pathways</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Advanced creator monetization through smart contracts and automated royalty distribution</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Global content marketplace with instant cross-chain settlements</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Integration with IoT devices and smart home systems for seamless content delivery</span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span>Blockchain-based content verification and anti-piracy measures</span>
                      </div>
                    </div>
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
    </div>;
};
export default Roadmap;
