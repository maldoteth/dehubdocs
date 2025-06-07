import React from 'react';
import BadgeFlowchart from '../../components/BadgeFlowchart';
import TippingFlowchart from '../../components/TippingFlowchart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Coins, Shield, Users, Settings, Eye, Zap } from 'lucide-react';
const Dapp = () => {
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
            As a streaming d'app, there is only a certain level of censorship resistance that would be deemed acceptable, given the illegal and immoral content that could be uploaded.
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
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            We earn 10% of every bounty, PPV or fee generated in the d'app in any token while users all earn proportionate shares of ad revenue which is funded by the advertisers and sponsors on our website.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-6 font-exo">
            Working in cohesion with our gaming and marketplace d'apps and offering a platform to showcase developments and sell our products, the streaming app upgrade is scheduled for launch December 20th 2022 though bear in mind this is a soft date. In the meantime, enjoy some teasers below of the actually built d'app now officially on test net and dive deeper into the mechanics further down.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Content uploading page</h2>
          
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
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">VOD or live stream engagement page</h2>
          <p className="text-royal-blue/80 leading-relaxed font-exo">
            Every post mints an NFT simultaneously for the creator, of which the holder receives lifetime royalties and ad revenue associated with that video. Creators can therefore choose wether to keep or trade their videos directly on our marketplace.
          </p>
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
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Explore your feed, the leaderboard charts and 24/7 community live chat forum</h2>
          
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
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Badge of Honour</h2>
          <h3 className="text-xl font-medium text-royal-blue mb-3 font-exo">Badge of Honour Model</h3>
          <p className="text-royal-blue/80 leading-relaxed mb-6 font-exo">
            The more you $DHB tokens you hold, the more rewarding it is, simple as that. This includes but is not limited to the Badge of Honour system that unlocks improved cosmetics on your public profile as well as further enhanced, premium features.
          </p>
          
          <BadgeFlowchart />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Token Tipping</h2>
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Our Integrated tipping services across all uploads and live streams only come with a 10% fee, compared to the usual 60% charged by the likes of TikTok and other industry leaders while also having the ability to vote on video cancellations putting the power back into the viewer's hands.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-6 font-exo">
            Tips received for creators and tips given by viewers are logged in separate leaderboards along with viewer counts and subscribers that determine shares in ad revenue. Stakeholders of DeHub tokens receive their proportionate shares of overall protocol profit.
          </p>
          
          <TippingFlowchart />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Decentralised Moderation Mining</h2>
          <h3 className="text-xl font-medium text-royal-blue mb-3 font-exo">Decentralised moderation mining and revenue share model</h3>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Only a few wallets hold over 50m $DHB tokens, of which most are operational wallets, with the remaining being known community members.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Only the core team or significant investors will have the power to instantly remove a video by burning the NFT associated. Subsequently, all the ad revenue generated and any play to earn bounties strapped to the video will be shared with all voting wallets to further deter bad actors and incentivise an engaged community.
          </p>
          
          <p className="text-sm italic text-royal-blue/60 font-exo">
            *Amount of $DHB required for all utility is a dynamic variable, so must be subject to be changed at any time in relation to price. Any changes will be announced publicly on all official channels.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">How to Upload</h2>
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Firstly, ensure you have your wallet and profile set up, with enough gas to upload. Although we built in a converter, using universal file types such as MP4 is still advised for optimum experience.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Once the transaction approves on-chain, your upload will be live.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Before reporting any upload errors to tech@dehub.net, check the blockchain explorer to ensure your transaction confirmed. Any failed transactions will result in the video not being uploaded. No NFT = No Video.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-royal-blue/80 font-exo">
              <strong>Important:</strong> Video titles can't be changed, as they are minted NFTs on-chain. Ensure no typos are present before uploading. Option to burn NFT and remove video is coming soon, or you can burn the NFT yourself currently to remove your own uploads.
            </p>
          </div>
          
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            If you used the wrong cover image, it can be modified simply by clicking on it again.
          </p>
          
          <p className="text-royal-blue/80 leading-relaxed font-exo">
            Categories can be selected by order of most popular, searched through, or added by users individually.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Locked Content</h2>
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Make your upload exclusive for token holders, for amount, simply add the total amount of token holdings required to view your post!
          </p>
          
          <ol className="list-decimal pl-6 space-y-1 text-royal-blue/80 font-exo">
            <li>Flick the toggle on</li>
            <li>Select token of choice</li>
            <li>Select network of choice</li>
            <li>Enter total amount each user much hold to access</li>
            <li>Click upload / mint</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Pay-Per-View (PPV)</h2>
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Charge a one time PPV fee for accessing your upload or live stream. For amount, enter the one time fee you wish to charge each individual viewer. Only a 10% fee is charged on each transaction.
          </p>
          
          <ol className="list-decimal pl-6 space-y-1 text-royal-blue/80 font-exo">
            <li>Flick the toggle on</li>
            <li>Select token of choice</li>
            <li>Select network of choice</li>
            <li>Enter total amount each user must pay to access</li>
            <li>Click upload / mint</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Bounty</h2>
          <p className="text-royal-blue/80 leading-relaxed mb-4 font-exo">
            Strap a bounty to your upload and make it watch2earn to reward your fans and build a community, fast. In the first two boxes, enter the number of viewers and commenters you wish to reward. The amount box is the amount each comment or view will earn. Only a 10% fee is charged for this service.
          </p>
          
          <ol className="list-decimal pl-6 space-y-1 text-royal-blue/80 font-exo">
            <li>Flick the toggle on</li>
            <li>Select token of choice</li>
            <li>Select network of choice</li>
            <li>For first viewers, enter the amount you wish to reward each viewer. For example, the first 100 viewers. X being 100.</li>
            <li>For first comments, enter the amount you wish to reward each commenter. For example, the first 100 comments. X being 100.</li>
            <li>Enter the total amount of DeHub to reward.</li>
            <li>Click upload / mint</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">$DHB Balance</h2>
          <p className="text-royal-blue/80 leading-relaxed font-exo">
            To top up your account, purchase $DHB from our marketplace direct or any partner exchange. You will then need to transfer the tokens over to your DeHub account, with your address found in your profile, beginning with 0x...
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-royal-blue mb-4 font-exo">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-royal-blue/80 font-exo">
            <li>User generated and protocol produced content powered by stakeholder governance.</li>
            <li>Own your data and subscribers. Take your business anywhere you go by exporting email addresses and wallet addresses of your followers at anytime to reward and engage with them on your own terms.</li>
            <li>Lock content behind any token contract giving all projects watch2earn utility and creators further monetisation avenues.</li>
            <li>Sustainable yet rewarding watch and earn through Pay-You-Per-View & bounty strapping self service protocols allowing anyone to fully utilise the protocol.</li>
            <li>Aggregation of top Web2 & Web3 streaming apps.</li>
            <li>Interactive content delivery, training + education.</li>
          </ul>
        </section>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-royal-blue mb-6 font-exo flex items-center gap-3">
          <Video className="w-8 h-8" />
          Livestreaming Platform
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
                {['DHB', 'FLOKI', 'USDC', 'USDT'].map(token => <span key={token} className="px-3 py-1 bg-royal-blue/10 text-royal-blue rounded-full text-sm font-medium font-exo">
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
                <p className="text-sm text-royal-blue/80 font-exo">NestJS manages stream lifecycle, token-gating logic, NFT minting, and tipping systems</p>
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
      </section>
    </div>;
};
export default Dapp;