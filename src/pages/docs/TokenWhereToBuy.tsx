
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const TokenWhereToBuy = () => {
  const exchanges = [
    { name: "Uniswap", network: "Base", url: "https://app.uniswap.org/explore/tokens/base/0xd20ab1015f6a2de4a6fddebab270113f689c2f7c" },
    { name: "Pancakeswap / Marketplace", network: "BNB", url: "https://pancakeswap.finance/swap?inputCurrency=0x680d3113caf77b61b510f332d5ef4cf5b41a761d&outputCurrency=0x55d398326f99059ff775485246999027b3197955&ref=coingecko&user=Coingecko&discount=0&perps=false" }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Where to Buy</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800">DEXs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exchanges.map((exchange, index) => (
              <a 
                key={index} 
                href={exchange.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <div>
                  <h4 className="font-semibold text-slate-700">{exchange.network}</h4>
                  <p className="text-slate-600">{exchange.name}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400" />
              </a>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 leading-relaxed">
              $DHB will only ever be officially tradable on decentralised exchanges (DEXs) that enforce our tokenomics and ensure every single transactions is on-chain, as it should be.
            </p>
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

export default TokenWhereToBuy;
