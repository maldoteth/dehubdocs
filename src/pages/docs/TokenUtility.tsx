
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const TokenUtility = () => {
  const benefits = [
    "Access games, content, events & enhanced features across all current & future d'apps",
    "Transact freely, globally and instantly with no gas fees on our permissionless deposit contract",
    "Tip creators & reward viewers by strapping bounties to published or token locked content",
    "Purchase products, digital collectables, assets and services on our Phygital NFT Marketplace",
    "Propose & vote on protocol decisions, content productions, cancellations & more",
    "Stake to earn real yield from your share of protocol revenue buy backs & x-2-earn rewards",
    "Secure the network & your stake in it by staking tokens while accessing enhanced rights",
    "Mine via dispute management, content moderation & Hub Improvement Proposals (HIPS)",
    "Further utility to be added dependant on development & regulatory advancements"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Utility / Holder Benefits</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">What's in it for you?</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800">Token Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-600 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="text-xl text-amber-800">Disclaimer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-amber-700 leading-relaxed text-sm">
            DeHub tokens are strictly for utility purposes in the same way that any in-game or in-app digital tokens or currencies and strictly not an investment. As our token lives on-chain, we can offer added utility as well as unprecedented levels of verifiable transparency. The above data is solely compiled for transparency, educational and informative purposes only. DeHub and all affiliates hold no liability for financial losses incurred from purchasing any tokens or NFTs we release. Markets are highly volatile. You could also lose all your money due to any unforeseen errors such as competency failures, technical error, hacks and so on. Therefore, you should only ever spend what you can afford to lose.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TokenUtility;
