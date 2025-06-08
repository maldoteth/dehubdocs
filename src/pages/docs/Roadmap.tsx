

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
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-5">
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
                      <h3 className="font-semibold text-slate-900">Q1 2021</h3>
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                        Completed
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div>• Assembled core development team</div>
                      <div>• Launched first beta app on App Store with 500+ initial testers and 2,000 DAUs before token release</div>
                      <div>• Conducted 50+ user interviews to validate product-market fit</div>
                      <div>• Established basic content moderation framework</div>
                    </div>
                  </div>
                </div>

                {/* Q2 2021 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Launched v1 token</div>
                      <div>• Community governed listing chain, price / market cap.</div>
                      <div>• Established first liquidity pools on Pancake Swap</div>
                      <div>• Built community of 2,000+ early adopters</div>
                      <div>• Implemented basic governance voting mechanism</div>
                      <div>• Smart contract security issue discovered</div>
                    </div>
                  </div>
                </div>

                {/* Q3 2021 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Released v2 with rebrand to DeHub</div>
                      <div>• Started full app rebuild using React Native for better cross-platform support</div>
                      <div>• Airdropped all holders automatically</div>
                      <div>• Addressed security vulnerabilities from v1</div>
                      <div>• Expanded team to 15 members across 3 time zones</div>
                    </div>
                  </div>
                </div>

                {/* Q4 2021 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Released prediction and raffle games</div>
                      <div>• Listed on Gate.io after a near 1000x price surge, with close to $10m in our LP</div>
                      <div>• Discovered listing agent was fraudulent, stole our fundraise and dumped our chart instead of airdropping Gate users, Gate investigated and apologised but could not identify the rogue employee as they lost the records, apparently.</div>
                      <div>• Implemented game mechanics with provably fair randomization</div>
                      <div>• Community grew to 8,000+ active members</div>
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
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Released arcade with 5 initial games including Super Robin Hood and Tomb Runner and predictions</div>
                      <div>• Achieved 5,000+ monthly active gamers</div>
                      <div>• Implemented blockchain-based leaderboards and rewards</div>
                      <div>• Introduced social features allowing friend challenges</div>
                      <div>• Built custom game engine optimized for mobile devices</div>
                    </div>
                  </div>
                </div>

                {/* Q2 2022 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Released stream app supporting 4K content with 99.9% uptime</div>
                      <div>• Produced first tokenised documentary featuring Jorge Masvidal, Brad Pickett & more by Luke Barnatt</div>
                      <div>• Genesis mint for Chads collection</div>
                      <div>• Secured SEC registration with the Philippine Government for real estate, construction and brokerage services</div>
                      <div>• Secured licensing deals with 12 content creators</div>
                      <div>• Implemented advanced video compression reducing bandwidth costs by 60%</div>
                      <div>• Built NFT marketplace with royalty distribution system</div>
                    </div>
                  </div>
                </div>

                {/* Q3 2022 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Incorporated DeLabs LTD with proper legal structure and compliance</div>
                      <div>• Acquired $1,000,000 home for largest crypto raffle ever (15,000+ participants)</div>
                      <div>• Secured power of attorney for multiple islands and sea front strip in Palawan worth over $15,000,000 
                        <span className="block ml-4">in an attempt to tokenise sales but failed due to regulatory challenges from the Philippine SEC</span>
                      </div>
                      <div>• Established partnerships with real estate and legal firms</div>
                      <div>• Created transparent raffle mechanics with on-chain verification</div>
                      <div>• Achieved regulatory compliance in 5 jurisdictions</div>
                    </div>
                  </div>
                </div>

                {/* Q4 2022 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• LP issues forced token relaunch due to contract clog</div>
                      <div>• Migrated 25,000+ token holders to new improved contract</div>
                      <div>• Implemented standard ERC20 tokenomics to avoid future issues</div>
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
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Alpha launch of complete d'app integrating all ecosystem components</div>
                      <div>• Released tokenised uploads with onchain ad revenue sharing (creators earning 90%)</div>
                      <div>• Commenced advanced analytics dashboard for creators</div>
                      <div>• Recommenced trading of DeHub v2 on Gate.io</div>
                    </div>
                  </div>
                </div>

                {/* Q2 2023 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Won most innovative company award at UK's Corporate Livewire, competing against 900+ companies 
                        <span className="block ml-4">in a vote based system backed by Sony, Samsung and other industry giants.</span>
                      </div>
                      <div>• Featured in major tech publications including TechCrunch and VentureBeat</div>
                      <div>• Patent applications commenced for core streaming technology and watch2earn mechanics</div>
                    </div>
                  </div>
                </div>

                {/* Q3 2023 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Announced partner airdrop for BJ (now fan.site), the adult fork of DeHub</div>
                      <div>• Community members successfully launched independent fork with full governance</div>
                      <div>• Facilitated knowledge transfer and technical support to fork team</div>
                      <div>• Demonstrated true decentralization principles in action</div>
                      <div>• Both platforms achieved 100,000+ combined users</div>
                      <div>• Established framework for future community-driven forks</div>
                    </div>
                  </div>
                </div>

                {/* Q4 2023 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Voluntary delisting from Gate.io to prioritize decentralization</div>
                      <div>• Commitment to transparency with all DEX policy implementation</div>
                      <div>• Implemented automated liquidity provision strategies</div>
                      <div>• Published full transparency reports showing all protocol metrics</div>
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
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Listed DHB on Eth mainnet</div>
                      <div>• Raised $1,000,000 for adult fork BJ (now fan.site) from tier-1 investors</div>
                      <div>• Implemented Layer 2 scaling solutions reducing user costs by 90%</div>
                      <div>• Established Base ecosystem partnerships with 15+ protocols</div>
                    </div>
                  </div>
                </div>

                {/* Q2 2024 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Listed $DHB on Base L2</div>
                      <div>• Dubai event expanded Middle East presence</div>
                      <div>• Opened TikTok agency in partnership with TikTok execs directly</div>
                      <div>• Established creator partnerships in 15 countries</div>
                    </div>
                  </div>
                </div>

                {/* Q3 2024 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Completed major app rebrand with 95% positive user feedback</div>
                      <div>• Released trailer for Last Chad Standing (first ever MMA battle royale) with 1M+ views</div>
                      <div>• Redesigned user interface & back end speed by 200%</div>
                    </div>
                  </div>
                </div>

                {/* Q4 2024 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Released onchain tradable subscriptions</div>
                      <div>• Agency grew to UK #1 with 1,000 live streamers signed exclusively</div>
                      <div>• Built automated revenue distribution system for creators</div>
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
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Released onchain live streams with real-time tip verification</div>
                      <div>• Implemented WebRTC infrastructure supporting 250,000+ concurrent viewers</div>
                      <div>• Built custom CDN reducing latency to sub-200ms globally</div>
                      <div>• Achieved 99.99% uptime across all streaming services</div>
                      <div>• DePIN (Decentralized Physical Infrastructure Network) reveal phase 1</div>
                      <div>• Discontinue Ethereum Mainnet support</div>
                    </div>
                  </div>
                </div>

                {/* Q2 2025 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-slate-50/50">
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
                      <div>• Launched UGC ambassadorship program with 50 vacancies</div>
                      <div>• Implemented comprehensive creator education curriculum</div>
                      <div>• Built automated content quality scoring using AI</div>
                      <div>• Established creator mentorship network spanning 25 countries</div>
                      <div>• Released fiat onramp with Stripe integration allowing users of 130+ currencies to buy DHB seamlessly 
                        <span className="block ml-4">in-app and use instantly with free gas</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Q3 2025 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-blue-50/50">
                  <div className="flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Q3 2025</h3>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                        Planned
                      </Badge>
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                      <div>• Release live stream keys so users can stream on multiple apps simultaneously</div>
                      <div>• Launch fiat off-ramp functionality for seamless token-to-cash conversion</div>
                      <div>• DePIN (Decentralized Physical Infrastructure Network) phase 2 release</div>
                      <div>• Launch Solana, Hyperliquid and Sui integrations for in-app use</div>
                      <div>• Deploy comprehensive CRM system for agency management and client tracking</div>
                      <div>• Integrate AI toolkits so users can automate tips or engagement to their favourite creators as well as
                        <span className="block ml-4">financial transactions and guidance</span>
                      </div>
                      <div>• Custom advertising stack with advanced user targeting based on wallet balance & activity</div>
                    </div>
                  </div>
                </div>

                {/* Q4 2025 */}
                <div className="flex items-start space-x-4 p-4 rounded-lg border bg-blue-50/50">
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
                      <div>• Release multi-account access and delegation features for streamlined management</div>
                      <div>• Open source the entire DeHub protocol for community development</div>
                      <div>• Launch comprehensive SDKs enabling third-party developers to build mini apps and games</div>
                      <div>• Establish developer marketplace for community-built applications and integrations</div>
                      <div>• Multi-posting software so users can post to all major web2+3 socials from one place</div>
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
    </div>
  );
};

export default Roadmap;

