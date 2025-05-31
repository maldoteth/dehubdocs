
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Bug } from 'lucide-react';

const TokenSecurity = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Security</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Contract security measures and protocols
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800">Contract Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border">
              <Shield className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-700 mb-1">Audit</h4>
                <p className="text-slate-600">
                  <a 
                    href="https://skynet.certik.com/projects/dehub?__cf_chl_rt_tk=N_M44mFcDWKtLmLVGNEC1rDps5hWVdQyhr3m1jLOTNM-1748707726-1.0.1.1-dfgolPAmeQ8KnvRDO3y0pFse0jC2Q1ro5bKRvE5WJPo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Certik
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border">
              <Bug className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-700 mb-1">Bug Bounty</h4>
                <p className="text-slate-600">
                  <a 
                    href="mailto:tech@dehub.net" 
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    tech@dehub.net
                  </a>
                </p>
              </div>
            </div>
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

export default TokenSecurity;
