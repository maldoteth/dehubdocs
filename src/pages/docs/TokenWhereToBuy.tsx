import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Zap, Shield, CreditCard, Clock } from 'lucide-react';
const TokenWhereToBuy = () => {
  const exchanges = [{
    name: "Uniswap",
    network: "Base",
    url: "https://app.uniswap.org/explore/tokens/base/0xd20ab1015f6a2de4a6fddebab270113f689c2f7c"
  }, {
    name: "Pancakeswap",
    network: "BNB",
    url: "https://pancakeswap.finance/swap?inputCurrency=0x680d3113caf77b61b510f332d5ef4cf5b41a761d&outputCurrency=0x55d398326f99059ff775485246999027b3197955&ref=coingecko&user=Coingecko&discount=0&perps=false"
  }];
  return <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Where to Buy</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800">DEXs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exchanges.map((exchange, index) => <a key={index} href={exchange.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border hover:bg-slate-100 transition-colors cursor-pointer">
                <div>
                  <h4 className="font-semibold text-slate-700">{exchange.network}</h4>
                  <p className="text-slate-600">{exchange.name}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400" />
              </a>)}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 leading-relaxed">$DHB will only ever be officially tradable on decentralised exchanges (DEXs) that ensure every single transactions is publicly verifiable on-chain, as it should be.</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800">CEXs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <a href="https://www.coinbase.com/en-es/trade-crypto/dex" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border hover:bg-slate-100 transition-colors cursor-pointer">
              <div>
                <h4 className="font-semibold text-slate-700">Coinbase</h4>
                <p className="text-slate-600">Centralized DEX Integration</p>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400" />
            </a>

            <a href="https://www.mexc.com/dex/trade?pair_ca=0xebDeacaf03Ba54Eb18128FD1FD042bc747af9295&chain_id=8453&token_ca=0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c&from=search" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border hover:bg-slate-100 transition-colors cursor-pointer">
              <div>
                <h4 className="font-semibold text-slate-700">MEXC</h4>
                <p className="text-slate-600">Centralized DEX Integration</p>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400" />
            </a>

            <a href="https://www.okx.com/cedefi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border hover:bg-slate-100 transition-colors cursor-pointer">
              <div>
                <h4 className="font-semibold text-slate-700">OKX CeDeFi</h4>
                <p className="text-slate-600">Centralized DeFi Integration</p>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400" />
            </a>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
            Direct
            <CreditCard className="w-5 h-5" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <a href="https://play.google.com/store/apps/details?id=io.dehub.mobile&hl" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border hover:bg-slate-100 transition-colors cursor-pointer">
              <div>
                <h4 className="font-semibold text-slate-700">Direct Purchase In-App</h4>
                <p className="text-slate-600">Buy directly with Stripe via the DeHub app</p>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400" />
            </a>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-green-800">DeHub Token</h4>
                </div>
                <p className="text-green-700 text-sm">
                  Tokens are used for subscribing to creators, tipping streamers or unlocking content. The more you hold, the lower your fees are and the more superpowers you unlock like timeline trend boosts and verification badges.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Instant Payments</h4>
                </div>
                <p className="text-blue-700 text-sm">
                  Using stripe, you can buy tokens instantly and seamlessly into whatever account you're logged into. DeHub makes tokens simple and for all. If you need more support, just pop up in our 24/7 live community chat and ask for admin support.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-purple-800">Secure Gateway</h4>
                </div>
                <p className="text-purple-700 text-sm">
                  All payment details are encrypted and processed securely by Stripe, we can't access or store your sensitive information or card details giving you ultimate peace of mind.
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
    </div>;
};
export default TokenWhereToBuy;