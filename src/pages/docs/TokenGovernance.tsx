
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Vote, Users, Shield } from 'lucide-react';

const TokenGovernance = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Governance</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Fixing token governance with a novel solution
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800 flex items-center space-x-2">
            <Vote className="w-5 h-5 text-blue-500" />
            <span>Fair Voting Logic</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 leading-relaxed">
            DeHub is introducing a fairer voting logic where by stakeholder weight is multiplied by limited amounts ensuring no single entity can control the protocol while larger investors are still rewarded proportionally. We have also incorporated new game theory whereby each vote requires the voter to burn X amount of $DHB, currently set at 50. This further disincentives bad actors or manipulation while incentivising engagement which should enourage more users to vote on each poll.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-red-500" />
              <span>Preventing Whale Manipulation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Our novel voting logic ensures no single entity can control the protocol while still rewarding larger investors proportionally.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span>Encouraging Engagement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              The burn requirement for voting incentivizes meaningful participation and discourages frivolous or malicious voting.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800">Solving Governance Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 leading-relaxed mb-4">
            Currently, the two most notorious reasons for token governance's poor reputation is whale manipulation & lack of engagement from the wider holder base. The above voting logic and game theory offers a novel solution to these globally recognised issues and we hope to prove the token governance skeptics wrong.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium">
              DeHub's governance protocol is set to launch officially in early 2026.
            </p>
            <p className="text-blue-700 mt-2">Stay tuned for more...</p>
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

export default TokenGovernance;
