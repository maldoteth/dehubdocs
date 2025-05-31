
import React from 'react';
import { ScrollText, Gamepad2, Users, Shield, Zap, Globe } from 'lucide-react';
const Overview = () => {
  return <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        
        
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
            DeHub is a next-generation gaming and streaming protocol, sustainably scaled through our proprietary DePIN infrastructure for content hosting, transcoding, and delivery. Built by a team of gamers and streamers, we harness cutting-edge advances in blockchain, AI, and open-source technology to tackle the limitations of legacy media platforms—such as censorship, demonetisation, deplatforming, algorithm manipulation, opaque earnings, and lack of data ownership.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Our seamless user experience abstracts away the complexities of crypto—wallet creation, onboarding, and transaction confirmations—while ensuring that every interaction remains on-chain and publicly verifiable through our leaderboards. No crypto knowledge required.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            DeHub empowers creators with innovative tools for content creation, monetisation, and community building. Host PPV events, launch Watch2Earn experiences, or share token-gated content—all without banks or KYC. Retain full ownership of your content and audience data in a censorship-resistant, creator-first ecosystem.
          </p>

          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Join us in building the network of the future—a user-owned creator economy where value flows directly to those who earn it, free from intermediaries.
          </p>

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
    </div>;
};
export default Overview;
