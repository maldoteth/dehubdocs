
import React from 'react';
import { ScrollText, Gamepad2, Users, Shield, Zap, Globe } from 'lucide-react';

const Overview = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          <ScrollText className="w-4 h-4 mr-2" />
          📜 Overview
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900">
          Overview
        </h1>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          An overview of our past, present and future.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            DeHub is a gaming and streaming protocol powered sustainably scaled through our proprietary DePIN infrastructure for content hosting, transcoding, and delivery. We utilise cutting edge advancements in blockchain, AI and open source technology to pioneer the future we want to see as a team of gamers and streamers, solving major problems with legacy media apps such as censorship, demonetisation, deplatforming, P2P payments, algorithm manipulation, true data ownership and earning transparency.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            The entire user journey is fluid by abstracting wallet generation, onboarding and transaction confirmations, ensuring all interactions remain on-chain and publicly verifiable via our public leaderboards while requiring no crypto knowledge or experience.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Our app provides innovative tools for content creation, monetisation, engagement and community building. You can create your own PPV events, launch Watch2Earn experiences, or upload token-gated content—all without the need for banks or KYC. Retain full ownership of your and your subscribers' data, enabling a censorship-resistant and deplatforming-free environment. Join us in powering the network of the future: a user-owned creator economy that rewards participants while eliminating intermediaries.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 my-8">
            <div className="flex items-start space-x-3">
              <Gamepad2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Last Chad Standing - MMA Battle Royale</h3>
                <p className="text-green-700">
                  Our in-house game studio—featuring developers from Ubisoft with credits on iconic titles like GTA and Diablo—is also preparing to launch the world's first MMA Battle Royale in 2025: Last Chad Standing. Several top UFC stars are already confirmed to join this groundbreaking game.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 my-8">
            <div className="flex items-start space-x-3">
              <Zap className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Mini-Game Arcade</h3>
                <p className="text-purple-700 mb-3">
                  Gamers can already dive into our mini-game arcade, packed with custom classics including:
                </p>
                <ul className="text-purple-700 space-y-1 ml-4 list-disc">
                  <li><strong>Street Slayer</strong> - Battle adversaries like SBF and Gary Gensler</li>
                  <li><strong>Whack-A-Schiff</strong> - A mole-whacking game featuring Peter Schiff</li>
                  <li><strong>Gas Guzzler</strong> - Endless driver collecting ETH gas, NOS dispensers, and DeHub coins</li>
                  <li>And more exciting games!</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 my-8">
            <div className="flex items-start space-x-3">
              <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Proven Team & Track Record</h3>
                <p className="text-blue-700">
                  Since 2020, DeHub has been developed by a proven team of top streamers, gamers, developers, and business professionals, each with multi-million-pound businesses and successful exits to their name. Co-founders Mike Hales and Indi Cammish also lead the UK's largest TikTok partner agency, directly employed by TikTok, managing nearly 1,000 exclusively signed streamers—many of whom are preparing to transition into Web3.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Before rebranding, we proudly operated as Futurov (FTV), earning a growing user base on our Web2 streaming app with rave reviews on the Google Play Store.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 mb-8">
            An in-depth overview of our dApps and technical infrastructure follows.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Disclaimer</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              DeHub tokens are strictly for utility purposes in the same way that any in-game or in-app digital tokens or currencies and strictly not an investment. As our token lives on-chain, we can offer added utility as well as unprecedented levels of verifiable transparency. The above data is solely compiled for transparency, educational and informative purposes only. DeHub and all affiliates hold no liability for financial losses incurred from purchasing any tokens or NFTs we release. Markets are highly volatile. You could also lose all your money due to any unforeseen errors such as competency failures, technical error, hacks and so on. Therefore, you should only ever spend what you can afford to lose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
