
import React from 'react';
import BadgeFlowchart from '../../components/BadgeFlowchart';
import TippingFlowchart from '../../components/TippingFlowchart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Coins, Shield, Users, Settings, Eye, Zap, Crown, MessageCircle, Lock, Banknote, TrendingUp, Infinity, Percent, Vote, Scale, CheckCircle2, AlertTriangle, Layers, Network } from 'lucide-react';
const Dapp = () => {
  const feeReductions = [{
    badge: "No Badge",
    threshold: "< 10,000 $DHB",
    fee: "10.00%",
    color: "bg-gray-300",
    image: null
  }, {
    badge: "Crab Badge",
    threshold: "10,000+ $DHB",
    fee: "9.31%",
    color: "bg-orange-500",
    image: "/lovable-uploads/60bc125c-8efd-4058-9e12-7ca393df4fce.png"
  }, {
    badge: "Lobster Badge",
    threshold: "25k+ $DHB",
    fee: "8.62%",
    color: "bg-red-500",
    image: "/lovable-uploads/2c7200c2-681e-4499-863b-ea24fdbdb70c.png"
  }, {
    badge: "Piranha Badge",
    threshold: "50k+ $DHB",
    fee: "7.93%",
    color: "bg-purple-500",
    image: "/lovable-uploads/38387f75-fd38-4380-9588-1f19f68d8435.png"
  }, {
    badge: "Tortoise Badge",
    threshold: "100k+ $DHB",
    fee: "7.24%",
    color: "bg-green-600",
    image: "/lovable-uploads/fc47a759-390a-4f41-ba96-5bc0066e82b9.png"
  }, {
    badge: "Cobra Badge",
    threshold: "250k+ $DHB",
    fee: "6.55%",
    color: "bg-gray-800",
    image: "/lovable-uploads/b3306c99-31b8-4bfc-bc25-f73abc68fc38.png"
  }, {
    badge: "Octopus Badge",
    threshold: "500k+ $DHB",
    fee: "5.86%",
    color: "bg-blue-600",
    image: "/lovable-uploads/8fcbb3f6-223d-4e2f-9d82-30082a175491.png"
  }, {
    badge: "Crocodile Badge",
    threshold: "1m+ $DHB",
    fee: "5.17%",
    color: "bg-green-800",
    image: "/lovable-uploads/c84eee0a-97c7-4938-9b9c-c991c802593e.png"
  }, {
    badge: "Dolphin Badge",
    threshold: "2m+ $DHB",
    fee: "4.48%",
    color: "bg-cyan-500",
    image: "/lovable-uploads/4558c158-75d9-40fc-adfa-41125344a48e.png"
  }, {
    badge: "Tiger Shark Badge",
    threshold: "3m+ $DHB",
    fee: "3.79%",
    color: "bg-slate-600",
    image: "/lovable-uploads/6be493f1-51b4-481b-9ca1-340c030b2ef8.png"
  }, {
    badge: "Killer Whale Badge",
    threshold: "5m+ $DHB",
    fee: "3.10%",
    color: "bg-gray-900",
    image: "/lovable-uploads/fcc288eb-67d7-49a0-b561-94bb5d1b8896.png"
  }, {
    badge: "Great White Shark Badge",
    threshold: "10m+ $DHB",
    fee: "2.41%",
    color: "bg-blue-800",
    image: "/lovable-uploads/dfcc3420-f654-486b-bc94-f84f0209ba5c.png"
  }, {
    badge: "Blue Whale Badge",
    threshold: "25m+ $DHB",
    fee: "1.72%",
    color: "bg-indigo-700",
    image: "/lovable-uploads/bc6b4bb7-aa43-4015-adb0-194568cc0858.png"
  }, {
    badge: "Megalodon Badge",
    threshold: "50m+ $DHB",
    fee: "1.00%",
    color: "bg-purple-800",
    image: "/lovable-uploads/9282e1c6-fa68-4b7c-b3cd-22d860df35af.png"
  }];
  return <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-royal-blue font-exo">A Complete Ecosystem</h1>
        <p className="text-xl text-royal-blue/70 max-w-2xl mx-auto font-exo"></p>
      </div>
      
      <div className="my-6">
        <img src="/lovable-uploads/d06e2852-219e-4946-960f-0830ebb81716.png" alt="DeHub Games streaming platform interface showing video content grid with leaderboard" className="w-full rounded-lg border border-slate-200 shadow-sm" />
      </div>
      
      <div className="space-y-8">
        <section>
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            As a social & streaming app, there is only a certain level of censorship resistance that would be deemed acceptable, given the illegal and immoral content that could be uploaded.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Therefore, we have built an articulate on-chain protocol with decentralised moderation mining as well as instant 2 click watch-to-earn, content locking or PPVs for any token. Every upload automatically mints an NFT stored on IPFS while A.I remove unlawful content and directs adult content to a dedicated 18+ zone.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Our d'app is unique as it empowers creators by enabling full ownership of subscriber data. You can now take your business anywhere you want and reach your audiences no matter what.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Given that data is the new oil, it may be wise to build your core community base here and utilise your existing social media apps to funnel users in to grow your own valuable database and ensure you remain censorship resistant. No matter what happens, never lose touch with your audience, fans, community or customers.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">We earn up to 10% of every bounty, PPV or fee generated in the d'app in any token while users all earn proportionate shares of ad revenue which is funded by the advertisers and sponsors on our website.</p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-6 font-exo">
            Working in cohesion with our gaming and marketplace d'apps and offering a platform to showcase developments and sell our products, the streaming app upgrade is scheduled for launch December 20th 2022 though bear in mind this is a soft date. In the meantime, enjoy some teasers below of the actually built d'app now officially on test net and dive deeper into the mechanics further down.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Upload</h2>
          
          <div className="my-6">
            <img src="/lovable-uploads/c6d5f1cc-f829-445e-8a5d-c5ea9fa4c720.png" alt="Content uploading interface showing video info form and upload preview" className="w-full rounded-lg border border-slate-200 shadow-sm" />
          </div>
          
          <div className="my-6">
            <img src="/lovable-uploads/3f101ce6-83a6-435b-8a41-58668a7fdb53.png" alt="Upload settings interface showing Lock Content, Pay Per View, Watch2Earn, and Add Subscription options" className="w-full rounded-lg border border-slate-200 shadow-sm" />
          </div>

          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            On the above user upload dashboard, notice how simple it is for anyone to instantly upload content and in a few clicks enable the following:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-royal-blue/80 font-exo">
            <li><strong>Watch2earn:</strong> every token now has sustainable watch2earn utility at the click of a button</li>
            <li><strong>Token gated content:</strong> stream or upload content locked behind any token contract viewers must hold</li>
            <li><strong>PPV events:</strong> charge any token for a pay-per-view or live stream</li>
            <li><strong>NFT collectables:</strong> every post mints an NFT that earns the lifetime royalty attached to the video</li>
            <li><strong>Earn:</strong> DeHub tokens via tips through supporters and rise up on the leaderboards for larger shares of ad revenue</li>
            <li><strong>Subscribers:</strong> Upload or stream content exclusively for your subscribers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-royal-blue mb-6 font-exo flex items-center gap-3">
            <Layers className="w-8 h-8" />
            Tokenised Content & Fractionalised Ownership
          </h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200 mb-6">
            <h3 className="text-xl font-semibold text-royal-blue mb-3 font-exo">Revolutionary ERC-1155 Content Tokenisation</h3>
            <p className="text-royal-blue/80 leading-relaxed font-exo">
              Every upload and livestream on DeHub automatically mints an ERC-1155 NFT fractionalised into exactly 1,000 pieces. 
              Creators have complete control over how many fractions to sell or keep, creating a novel monetisation model where 
              fans can invest in content they believe will succeed - essentially "betting" on the future of potential stars through 
              a revolutionary form of fan tokens.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-purple-800 font-exo flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Automatic Fractionalisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-purple-700 space-y-2 font-exo">
                  <li>• Every upload/stream mints ERC-1155 NFT</li>
                  <li>• Automatically split into 1,000 fractions</li>
                  <li>• Instant tokenisation on content creation</li>
                  <li>• No additional setup required</li>
                  <li>• Seamless blockchain integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-blue-800 font-exo flex items-center gap-2">
                  <Coins className="w-4 h-4" />
                  Creator Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-blue-700 space-y-2 font-exo">
                  <li>• Choose how many fractions to sell</li>
                  <li>• Retain control over distribution</li>
                  <li>• Set custom pricing strategies</li>
                  <li>• Decide release timing</li>
                  <li>• Maintain creative ownership</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-800 font-exo flex items-center gap-2">
                  <Infinity className="w-4 h-4" />
                  Eternal Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-green-700 space-y-2 font-exo">
                  <li>• Content earns ad revenue for life</li>
                  <li>• Permissionless residual income</li>
                  <li>• Censorship-resistant earnings</li>
                  <li>• No ongoing value creation required</li>
                  <li>• Passive income for all eternity</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Revolutionary Fan Investment Model</h3>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 mb-6">
              <h4 className="text-xl font-semibold text-royal-blue mb-3 font-exo">Betting on Future Stars</h4>
              <p className="text-royal-blue/80 leading-relaxed font-exo">
                DeHub creates the first platform where fans can financially invest in creators they believe will become successful. 
                By purchasing fractions of content NFTs, supporters become stakeholders in a creator's journey, earning returns 
                when their chosen creators achieve success through ad revenue, tips, and other monetisation streams.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-royal-blue font-exo">
                    <Settings className="w-5 h-5" />
                    How Fractionalisation Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-royal-blue/5 rounded-lg">
                      <h4 className="font-semibold text-royal-blue font-exo mb-2">1. Automatic Minting</h4>
                      <p className="text-sm text-royal-blue/70 font-exo">Every piece of content instantly becomes an ERC-1155 NFT split into exactly 1,000 tradeable fractions.</p>
                    </div>
                    <div className="p-3 bg-royal-blue/5 rounded-lg">
                      <h4 className="font-semibold text-royal-blue font-exo mb-2">2. Creator Decision</h4>
                      <p className="text-sm text-royal-blue/70 font-exo">Creators choose how many of their 1,000 fractions to sell, keep, or distribute to their community.</p>
                    </div>
                    <div className="p-3 bg-royal-blue/5 rounded-lg">
                      <h4 className="font-semibold text-royal-blue font-exo mb-2">3. Fan Investment</h4>
                      <p className="text-sm text-royal-blue/70 font-exo">Supporters purchase fractions, becoming stakeholders who earn proportional returns from all revenue streams.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-royal-blue font-exo">
                    <Users className="w-5 h-5" />
                    Benefits for All Parties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-royal-blue/5 rounded-lg">
                      <h4 className="font-semibold text-royal-blue font-exo mb-2">For Creators</h4>
                      <p className="text-sm text-royal-blue/70 font-exo">Instant monetisation, community funding, aligned incentives, and lifetime passive income from successful content.</p>
                    </div>
                    <div className="p-3 bg-royal-blue/5 rounded-lg">
                      <h4 className="font-semibold text-royal-blue font-exo mb-2">For Fans</h4>
                      <p className="text-sm text-royal-blue/70 font-exo">Financial upside from supporting rising stars, tradeable assets, and direct participation in creator success.</p>
                    </div>
                    <div className="p-3 bg-royal-blue/5 rounded-lg">
                      <h4 className="font-semibold text-royal-blue font-exo mb-2">For Everyone</h4>
                      <p className="text-sm text-royal-blue/70 font-exo">Censorship-resistant, permissionless system that creates value for all participants without platform dependency.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">SocialFi Platform Comparison</h3>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200 mb-6">
              <h4 className="text-xl font-semibold text-royal-blue mb-3 font-exo">The Key Difference: Residual vs. Active Value Creation</h4>
              <p className="text-royal-blue/80 leading-relaxed font-exo">
                Unlike other SocialFi platforms where creators must continuously add value for their tokens, shares, or keys to maintain worth, 
                DeHub content generates residual income for life. Once created, content earns ad revenue permanently - providing passive, 
                permissionless, censorship-resistant income for all eternity without requiring ongoing creator effort.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 bg-white rounded-lg">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-300 p-3 text-left font-semibold text-royal-blue font-exo">Platform</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold text-royal-blue font-exo">Content Model</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold text-royal-blue font-exo">Value Creation Requirement</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold text-royal-blue font-exo">Revenue Model</th>
                    <th className="border border-slate-300 p-3 text-left font-semibold text-royal-blue font-exo">Ownership Structure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-3 font-semibold text-royal-blue font-exo">DeHub</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">ERC-1155 fractionalised into 1,000 pieces per upload</td>
                    <td className="border border-slate-300 p-3 text-green-700 font-exo font-semibold">NONE - Residual income for life</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Eternal ad revenue + tips + PPV</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Creator controls fraction distribution</td>
                  </tr>
                  <tr className="bg-slate-25">
                    <td className="border border-slate-300 p-3 font-semibold text-slate-600 font-exo">Friend.tech</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Social keys for access to creator chats</td>
                    <td className="border border-slate-300 p-3 text-red-700 font-exo font-semibold">Continuous engagement required</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Key trading fees, creator keeps chat revenue</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Creator owns content, users own access keys</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 font-semibold text-slate-600 font-exo">Lens Protocol</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">NFT-based social graph with follows/posts</td>
                    <td className="border border-slate-300 p-3 text-red-700 font-exo font-semibold">Active posting and community building</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Creator retains all content revenue</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Users own their social graph via NFTs</td>
                  </tr>
                  <tr className="bg-slate-25">
                    <td className="border border-slate-300 p-3 font-semibold text-slate-600 font-exo">Zora</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Everything is a token - hyper-speculative social tokens</td>
                    <td className="border border-slate-300 p-3 text-red-700 font-exo font-semibold">Constant hype and speculation maintenance</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Token trading, minting fees, speculation</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Token holders speculate on creator success</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 font-semibold text-slate-600 font-exo">Patreon</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Subscription tiers for creator support</td>
                    <td className="border border-slate-300 p-3 text-red-700 font-exo font-semibold">Regular content delivery to maintain subs</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Creator keeps 90-95%, platform takes 5-10%</td>
                    <td className="border border-slate-300 p-3 text-slate-700 font-exo">Creator owns content, platform controls distribution</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 font-exo">DeHub Unique Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-green-700 space-y-2 font-exo">
                  <li>• <strong>Set and Forget:</strong> Content earns revenue forever without additional work</li>
                  <li>• <strong>Fan Investment:</strong> Supporters financially benefit from creator success</li>
                  <li>• <strong>Automatic Tokenisation:</strong> Every upload becomes a tradeable asset</li>
                  <li>• <strong>Censorship Resistance:</strong> Sustained by shared computing power globally so you live forever onchain</li>
                  <li>• <strong>Creator Control:</strong> Full control over token distribution strategy</li>
                  <li>• <strong>Permissionless:</strong> No platform dependency for earnings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 font-exo">Revolutionary Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-blue-700 space-y-2 font-exo">
                  <li>• <strong>Early Talent Investment:</strong> Discover and invest in rising creators</li>
                  <li>• <strong>Content Portfolio Building:</strong> Diversify across multiple creators</li>
                  <li>• <strong>Creator Funding:</strong> Raise capital for productions through fraction sales</li>
                  <li>• <strong>Fan Loyalty Rewards:</strong> Give fractions to top supporters</li>
                  <li>• <strong>Viral Content Betting:</strong> Speculate on which content will succeed</li>
                  <li>• <strong>Passive Income Streams:</strong> Earn from successful content forever</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200 mt-8">
            <h4 className="font-semibold text-royal-blue font-exo mb-3 flex items-center gap-2">
              <Infinity className="w-5 h-5" />
              The Future of Content Economics
            </h4>
            <p className="text-royal-blue/80 leading-relaxed font-exo">
              DeHub's ERC-1155 fractionalised content model represents the evolution from temporary creator-fan relationships to 
              permanent economic partnerships. By automatically tokenising every upload into 1,000 tradeable fractions, we're creating 
              the first platform where content success directly and permanently benefits everyone involved - creators, fans, and investors - 
              for all eternity, without requiring ongoing effort or platform dependency.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Customise and update your public profile or channel</h2>
          <p className="text-royal-blue/80 leading-relaxed mb-6 font-exo">
            Control what users can or can't see while being able to export your followers' data at any time. This gives you full ownership of your channel and allows you to take your business anywhere with you, no matter what happens.
          </p>
          
          <div className="my-6">
            <img src="/lovable-uploads/05231fa1-3aa1-4ba6-973c-775c8e39c297.png" alt="User profile interface showing customizable profile settings and follower management" className="w-full rounded-lg border border-slate-200 shadow-sm" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Explore The App & Beyond</h2>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Search bars aggregate YouTube and other major streaming app APIs to save you juggling multiple apps, while the explore page also houses our live community chat and dedicated leaderboards for:
          </p>
          
          <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 mb-4 font-exo">
            <li>Most views (MV)</li>
            <li>Most subscribers (MS)</li>
            <li>Biggest earners (BE)</li>
            <li>Biggest spenders (BS)</li>
          </ul>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            That together will determine ad revenue share (RS). The exact algorithm to this is under beta and subject to change depending on revenue generated (RG)
          </p>
          
          <div className="bg-sky-blue/10 p-4 rounded-lg mb-4 border border-sky-blue/20">
            <code className="text-royal-blue font-exo">MV + MS + BE + BS = (RG / RS)</code>
          </div>
          
          <p className="text-royal-blue/80 leading-relaxed font-exo">
            This is the core algorithm, and experimentations in rewards will continue on a trial and error basis until the perfect equilibrium is found.
          </p>
        </section>

        <div className="my-6">
          <img src="/lovable-uploads/e66cc5a1-ea1a-4e5b-8760-490c174f0b24.png" alt="DeHub streaming platform interface showing content feed with trending topics and creator leaderboard" className="w-full rounded-lg border border-slate-200 shadow-sm" />
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Flex Your Badge</h2>
          <h3 className="text-xl font-medium text-royal-blue mb-3 font-exo">Badge of Honour Model</h3>
          <p className="text-royal-blue/80 leading-relaxed mb-6 font-exo">
            The more you $DHB tokens you hold, the more rewarding it is, simple as that. This includes but is not limited to the Badge of Honour system that unlocks improved cosmetics on your public profile as well as further enhanced, premium features.
          </p>
          
          <BadgeFlowchart />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Tip Your Favourites</h2>
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Our Integrated tipping services across all uploads and live streams only come with a 10% fee, compared to the usual 60% charged by the likes of TikTok and other industry leaders while also having the ability to vote on video cancellations putting the power back into the viewer's hands.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-6 font-exo">
            Tips received for creators and tips given by viewers are logged in separate leaderboards along with viewer counts and subscribers that determine shares in ad revenue. Stakeholders of DeHub tokens receive their proportionate shares of overall protocol profit.
          </p>
          
          <TippingFlowchart />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Mine Through Content Moderation</h2>
          <h3 className="text-xl font-medium text-royal-blue mb-3 font-exo">Decentralised moderation mining and revenue share model</h3>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Only a few wallets hold over 50m $DHB tokens, of which most are operational wallets, with the remaining being known community members.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Only the core team or top tier badge holders will have the power to instantly remove a video by burning the NFT associated. Subsequently, all the ad revenue generated and any play to earn bounties strapped to the video will be shared with all voting wallets to further deter bad actors and incentivise an engaged community.
          </p>
          
          <p className="italic text-royal-blue/60 font-exo text-base text-sidebar-primary text-left py-0 my-[30px]">The Amount of $DHB required for all utility is a dynamic variable, so must be subject to be changed at any time in relation to price. Any changes will be announced publicly on all official channels.</p>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 mb-6">
            <h3 className="text-xl font-semibold text-royal-blue mb-3 font-exo">Governance + Moderation System Design</h3>
            <p className="text-royal-blue/80 leading-relaxed font-exo">
              Our comprehensive governance and moderation system creates a fair, transparent, and community-driven platform 
              that prevents centralized censorship while maintaining quality standards through economic incentives and advanced mechanisms.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo">Token Utility Design</h4>
              <p className="text-royal-blue/80 leading-relaxed mb-3 font-exo">By default, our native governance token $DHB enables the following roles:</p>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-4">
                <li>Moderation staking</li>
                <li>Voting on content disputes and platform rules</li>
                <li>Curation and promotion of content</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800 font-medium font-exo">
                  <strong>Key Principle:</strong> More tokens = more influence, but influence ≠ unchecked power.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo">Quadratic Voting</h4>
              <p className="text-royal-blue/80 leading-relaxed mb-3 font-exo">
                To reduce whale dominance:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-4">
                <li>Use quadratic voting for key moderation decisions.</li>
                <li>Example: Voting power = √(tokens staked)</li>
                <li>So, staking 100 tokens = 10 votes, 10,000 tokens = 100 votes (not 10,000 votes).</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo">Moderation Staking Pools</h4>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-4">
                <li>Users can stake tokens to become moderators.</li>
                <li>Each flagged piece of content enters a moderation queue.</li>
                <li>Stakers vote on the outcome (ban, warn, ignore, etc).</li>
                <li>Correct votes (as per final outcome) earn rewards; wrong votes may result in slashing.</li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <p className="text-green-800 font-medium font-exo">
                  <strong>Incentive:</strong> Stake = skin in the game. Higher-quality moderation = higher rewards.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo">Delegated Moderation (for scaling)</h4>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-4">
                <li>Users can delegate their votes to trusted curators or moderation pools (think: staking to a validator in PoS).</li>
                <li>Curators/moderators can be swapped anytime.</li>
                <li>This allows passive users to participate in governance while rewarding active ones.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo">Content Tiering via Curation Markets</h4>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-4">
                <li>Users stake tokens to "curate" or promote content.</li>
                <li>The market decides what rises (token-weighted attention), not an algorithm.</li>
                <li>If bad content is boosted and flagged, curators may be slashed.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo">DAO-Based Appeals</h4>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-4">
                <li>Content creators can appeal moderation decisions via DAO proposals.</li>
                <li>Token holders vote (again with quadratic logic).</li>
                <li>Helps prevent abuse by moderation cartels or brigading.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo">Progressive Access Control</h4>
              <p className="text-royal-blue/80 leading-relaxed mb-3 font-exo">
                Instead of "1 token = 1 power", implement progressive caps:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-4">
                <li>Your influence decays beyond certain staking thresholds.</li>
                <li>Encourages wider distribution of token holdings.</li>
                <li>Could use sigmoid functions or bonding curves.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo">Incentive Flywheel</h4>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-4">
                <li>Watchers earn tiny token rewards for passive viewing (engagement mining).</li>
                <li>Curators earn more if their promoted content performs well.</li>
                <li>Moderators earn based on accuracy.</li>
                <li>Governance participants (voters on proposals) get small boosts for activity.</li>
              </ul>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                <p className="text-purple-800 font-medium font-exo">
                  This creates a circular economy that rewards all participation types.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo flex items-center gap-2">
                <Shield className="w-5 h-5" />
                🔐 Anti-Manipulation Measures
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-6">
                <li>Sybil resistance: Require staking + reputation for key votes.</li>
                <li>Multi-signature council fallback: In case of DAO malfunction (only for emergencies).</li>
                <li>Transparent moderation history: Every decision logged on-chain.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-royal-blue mb-4 font-exo flex items-center gap-2">
                <Settings className="w-5 h-5" />
                🏗️ Stack (for actual implementation)
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-royal-blue/80 font-exo mb-6">
                <li><strong>Blockchain:</strong> Base</li>
                <li><strong>Storage:</strong> IPFS + Filecoin / Arweave for content</li>
                <li><strong>DAO Framework:</strong> Safe + Zodiac modules / Tally / DAOhaus</li>
                <li><strong>Token Management:</strong> ERC-20 + soulbound rep tokens (ERC-1155)</li>
                <li><strong>Frontend:</strong> Next.js + WalletConnect + The Graph for indexing</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Architecture</h3>
            <div className="my-6">
              <img src="/lovable-uploads/a083bba0-a7c6-4c03-9a01-2402717f9f20.png" alt="Decentralized Streaming App Architecture showing interconnected components including Delegation Layer, Token, Users, Moderation Staking Pools, Content Curation Market, Quadratic Voting Engine, Governance Interface, DAO Appeals System, Reputation System, Frontend UI, Smart Contracts, and IPFS/Arweave storage" className="w-full rounded-lg border border-slate-200 shadow-sm" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-royal-blue mb-6 font-exo flex items-center gap-3">
            <Video className="w-8 h-8" />
            Live Streaming
          </h2>
          
          <div className="bg-gradient-to-r from-royal-blue/10 to-sky-blue/10 p-6 rounded-lg border border-royal-blue/20 mb-6">
            <h3 className="text-xl font-semibold text-royal-blue mb-3 font-exo">Platform Overview</h3>
            <p className="text-royal-blue/80 leading-relaxed font-exo">
              Our livestreaming platform leverages Livepeer for video streaming infrastructure, powered by a NestJS backend and Next.js frontend. 
              Every livestream is fully integrated into the on-chain ecosystem, offering creators unprecedented control and monetization opportunities 
              while providing viewers with engaging, token-enabled experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-royal-blue font-exo">
                  <Zap className="w-5 h-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-royal-blue/80 font-exo">
                  <li>• NFT-backed livestreams minted on BNB or Base chain</li>
                  <li>• Integrated tipping with visual effects and tiers</li>
                  <li>• Token-gated access for exclusive content</li>
                  <li>• Pay-per-view and bounty reward systems</li>
                  <li>• Real-time chat and engagement metrics</li>
                  <li>• Support for OBS/Streamlabs integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-royal-blue font-exo">
                  <Coins className="w-5 h-5" />
                  Supported Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['DHB', 'FLOKI', 'USDC', 'USDT', 'BNB', 'ETH', 'PEPE', 'DOGE'].map(token => <span key={token} className="px-3 py-1 bg-royal-blue/10 text-royal-blue rounded-full text-sm font-medium font-exo">
                      {token}
                    </span>)}
                </div>
                <p className="text-sm text-royal-blue/70 mt-3 font-exo">
                  All tipping, token-gating, and bounty systems support these tokens
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Livestream Features</h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-green-800 font-exo flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Stream Creation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-green-700 space-y-1 font-exo">
                    <li>• Instant NFT minting</li>
                    <li>• On-chain registration</li>
                    <li>• Customizable settings</li>
                    <li>• Multi-network support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-blue-800 font-exo flex items-center gap-2">
                    <Coins className="w-4 h-4" />
                    Tipping System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-blue-700 space-y-1 font-exo">
                    <li>• Visual effects & tiers</li>
                    <li>• Custom minimum amounts</li>
                    <li>• Message attachments</li>
                    <li>• Real-time rewards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-purple-800 font-exo flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Token Gating
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-purple-700 space-y-1 font-exo">
                    <li>• Balance-based access</li>
                    <li>• Exclusive content</li>
                    <li>• Multi-token support</li>
                    <li>• Instant verification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-orange-800 font-exo flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    PPV & Bounties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-orange-700 space-y-1 font-exo">
                    <li>• One-time payments</li>
                    <li>• Viewer rewards</li>
                    <li>• First-come basis</li>
                    <li>• Custom distributions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-royal-blue font-exo">
                  <Settings className="w-5 h-5" />
                  Streaming Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-royal-blue/5 rounded-lg">
                    <h4 className="font-semibold text-royal-blue font-exo">Web Streaming</h4>
                    <p className="text-sm text-royal-blue/70 font-exo">Go live directly from your browser using your webcam</p>
                  </div>
                  <div className="p-3 bg-royal-blue/5 rounded-lg">
                    <h4 className="font-semibold text-royal-blue font-exo">External Streaming</h4>
                    <p className="text-sm text-royal-blue/70 font-exo">Use OBS, Streamlabs, or other software with custom stream keys and server URLs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-royal-blue font-exo">
                  <Eye className="w-5 h-5" />
                  Analytics & Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-royal-blue/80 font-exo">Live Viewers</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded font-exo">Real-time</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-royal-blue/80 font-exo">Tips Received</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded font-exo">Multi-token</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-royal-blue/80 font-exo">Stream Likes</span>
                    <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded font-exo">Engagement</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-royal-blue/80 font-exo">Chat Activity</span>
                    <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded font-exo">Interactive</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 border-sky-blue/30 bg-gradient-to-r from-sky-blue/10 to-royal-blue/10">
            <CardHeader>
              <CardTitle className="text-royal-blue font-exo">Technical Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-3 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-royal-blue font-exo">Backend</h4>
                  <p className="text-sm text-royal-blue/80 font-exo">Next.JS manages stream lifecycle, token-gating logic, NFT minting, and tipping systems</p>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-royal-blue font-exo">Frontend</h4>
                  <p className="text-sm text-royal-blue/80 font-exo">Next.js provides responsive UI/UX for streaming, chat, tipping, and stream management</p>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <h4 className="font-semibold text-royal-blue font-exo">Streaming</h4>
                  <p className="text-sm text-royal-blue/80 font-exo">Livepeer handles video ingestion, delivery, and generates custom stream keys for external apps</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-royal-blue mb-6 font-exo flex items-center gap-3">
              <Crown className="w-8 h-8" />
              Subscriptions
            </h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200 mb-6">
              <h3 className="text-xl font-semibold text-royal-blue mb-3 font-exo">Revolutionary On-Chain Subscriptions</h3>
              <p className="text-royal-blue/80 leading-relaxed font-exo">
                DeHub is the first protocol to release fully on-chain subscriptions, transforming how creators monetize their content 
                and build communities. Our subscription system combines the benefits of traditional creator subscriptions with the power 
                of blockchain technology, creating tradeable subscription NFTs and unprecedented creator-subscriber relationships.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-purple-800 font-exo flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Creator Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-purple-700 space-y-2 font-exo">
                    <li>• Set custom pricing for each tier</li>
                    <li>• Define unique perks and benefits</li>
                    <li>• Control subscription availability</li>
                    <li>• Manage tier-specific content access</li>
                    <li>• Track subscriber analytics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-blue-800 font-exo flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    NFT Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-blue-700 space-y-2 font-exo">
                    <li>• Automatic NFT minting on purchase</li>
                    <li>• Tradeable subscription assets</li>
                    <li>• Secondary market liquidity</li>
                    <li>• Proof of subscription ownership</li>
                    <li>• Collectible subscription history</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-green-800 font-exo flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Exclusive Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-green-700 space-y-2 font-exo">
                    <li>• Subscriber-only content uploads</li>
                    <li>• Tier-based access control</li>
                    <li>• Private group chats</li>
                    <li>• Early access privileges</li>
                    <li>• Premium community features</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">How It Works</h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-royal-blue font-exo">
                      <Settings className="w-5 h-5" />
                      For Creators
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-royal-blue/5 rounded-lg">
                        <h4 className="font-semibold text-royal-blue font-exo mb-2">Tier Creation</h4>
                        <p className="text-sm text-royal-blue/70 font-exo">Create multiple subscription tiers with custom pricing, limited availability, and unique perks tailored to different audience segments.</p>
                      </div>
                      <div className="p-3 bg-royal-blue/5 rounded-lg">
                        <h4 className="font-semibold text-royal-blue font-exo mb-2">Content Management</h4>
                        <p className="text-sm text-royal-blue/70 font-exo">Upload subscriber-exclusive content, organize tier-specific materials, and manage access permissions with granular control.</p>
                      </div>
                      <div className="p-3 bg-royal-blue/5 rounded-lg">
                        <h4 className="font-semibold text-royal-blue font-exo mb-2">Community Building</h4>
                        <p className="text-sm text-royal-blue/70 font-exo">Create dedicated group chats for different subscription tiers, fostering closer relationships with your most loyal supporters.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-royal-blue font-exo">
                      <Users className="w-5 h-5" />
                      For Subscribers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-royal-blue/5 rounded-lg">
                        <h4 className="font-semibold text-royal-blue font-exo mb-2">NFT Ownership</h4>
                        <p className="text-sm text-royal-blue/70 font-exo">Receive a unique NFT upon subscription purchase that serves as proof of access and can be traded on secondary markets.</p>
                      </div>
                      <div className="p-3 bg-royal-blue/5 rounded-lg">
                        <h4 className="font-semibold text-royal-blue font-exo mb-2">Exclusive Access</h4>
                        <p className="text-sm text-royal-blue/70 font-exo">Gain access to premium content, private community chats, and special perks based on your subscription tier level.</p>
                      </div>
                      <div className="p-3 bg-royal-blue/5 rounded-lg">
                        <h4 className="font-semibold text-royal-blue font-exo mb-2">Tradeable Assets</h4>
                        <p className="text-sm text-royal-blue/70 font-exo">Trade your subscription NFTs on secondary markets, potentially profiting from popular creator subscriptions or rare tier access.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Community Features</h3>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-indigo-200 bg-indigo-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-indigo-800 font-exo flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Tier-Based Chats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-indigo-700 font-exo">
                      Create separate group chats for different subscription tiers, allowing for exclusive discussions and closer community interaction based on support level.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-pink-200 bg-pink-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-pink-800 font-exo flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      Premium Perks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-pink-700 font-exo">
                      Offer exclusive perks like early access to content, private livestreams, personalized messages, merchandise discounts, and special recognition.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-amber-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-amber-800 font-exo flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Subscriber Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-amber-700 font-exo">
                      Track subscription metrics, engagement rates, tier performance, and community growth with comprehensive analytics and insights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="mt-6 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-royal-blue font-exo">Subscription Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-royal-blue font-exo mb-2">For Creators</h4>
                    <ul className="text-sm text-royal-blue/80 space-y-1 font-exo">
                      <li>• Predictable recurring revenue stream</li>
                      <li>• Stronger community engagement</li>
                      <li>• Premium content monetization</li>
                      <li>• Direct subscriber relationships</li>
                      <li>• NFT royalties from secondary sales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-blue font-exo mb-2">For Subscribers</h4>
                    <ul className="text-sm text-royal-blue/80 space-y-1 font-exo">
                      <li>• Exclusive content and community access</li>
                      <li>• Tradeable subscription assets</li>
                      <li>• Direct creator interaction</li>
                      <li>• Investment potential through NFT trading</li>
                      <li>• Supporting favorite creators directly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-royal-blue mb-6 font-exo flex items-center gap-3">
              <Percent className="w-8 h-8" />
              Fee Tier System
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 mb-6">
              <h3 className="text-xl font-semibold text-royal-blue mb-3 font-exo">Badge-Based Fee Reduction</h3>
              <p className="text-royal-blue/80 leading-relaxed font-exo">
                Our revolutionary fee structure rewards $DHB token holders with significantly reduced platform fees. 
                Starting at a standard 10% fee, each badge tier earned through increased $DHB holdings reduces fees by 0.69%, 
                ultimately reaching just 1% for Megalodon badge holders - a 99% fee reduction for our most dedicated community members.
              </p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-royal-blue font-exo flex items-center gap-2">
                  <Percent className="w-5 h-5" />
                  Platform Fee Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {feeReductions.map((tier, index) => <div key={tier.badge} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                      <div className="flex items-center gap-3">
                        {tier.image ? <img src={tier.image} alt={tier.badge} className="w-8 h-8 object-contain" /> : <div className="w-8 h-8 rounded-full bg-gray-300"></div>}
                        <div className="flex flex-col">
                          <span className="font-medium">{tier.badge}</span>
                          <span className="text-sm text-muted-foreground">{tier.threshold}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-royal-blue">{tier.fee}</span>
                        <span className="text-sm text-muted-foreground ml-1">fee</span>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 font-exo">Fee Calculation Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-green-700 space-y-2 font-exo">
                    <li>• Linear 0.69% reduction per badge tier</li>
                    <li>• Maximum 99% fee reduction for Megalodons</li>
                    <li>• Applies to certain platform services</li>
                    <li>• Instant activation upon badge qualification</li>
                    <li>• Encourages long-term $DHB holding</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 font-exo">Affected Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-blue-700 space-y-2 font-exo">
                    <li>• Tipping and donations</li>
                    <li>• Pay-per-view purchases</li>
                    <li>• Bounty distributions</li>
                    <li>• Subscription payments</li>
                    <li>• Tokenised upload trading</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200 mt-6">
              <h4 className="font-semibold text-royal-blue font-exo mb-3">Example Savings</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-3 bg-white/50 rounded-lg">
                  <h5 className="font-medium text-royal-blue font-exo">$1,000 Transaction</h5>
                  <p className="text-sm text-royal-blue/70 font-exo">Standard: $100 fee</p>
                  <p className="text-sm text-royal-blue/70 font-exo">Megalodon: $10 fee</p>
                  <p className="text-sm font-semibold text-green-700 font-exo">Saves: $90</p>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <h5 className="font-medium text-royal-blue font-exo">$10,000 Transaction</h5>
                  <p className="text-sm text-royal-blue/70 font-exo">Standard: $1,000 fee</p>
                  <p className="text-sm text-royal-blue/70 font-exo">Megalodon: $100 fee</p>
                  <p className="text-sm font-semibold text-green-700 font-exo">Saves: $900</p>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <h5 className="font-medium text-royal-blue font-exo">$100,000 Transaction</h5>
                  <p className="text-sm text-royal-blue/70 font-exo">Standard: $10,000 fee</p>
                  <p className="text-sm text-royal-blue/70 font-exo">Megalodon: $1,000 fee</p>
                  <p className="text-sm font-semibold text-green-700 font-exo">Saves: $9,000</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mt-6 rounded-r-lg">
              <h4 className="font-semibold text-amber-800 font-exo mb-3 flex items-center gap-2">
                <Banknote className="w-5 h-5" />
                Important Fee Disclaimer
              </h4>
              <p className="text-amber-800/90 leading-relaxed font-exo">
                Fees only apply to certain services such as tips, subscriptions, pay-per-views, and watch2earn bounties. 
                Users can send tokens to other users for free across the app and make use of our abstraction tools to do it 
                with no wallet address or private key management required.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>;
};
export default Dapp;
