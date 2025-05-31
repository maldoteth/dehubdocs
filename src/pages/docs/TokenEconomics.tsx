import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
const TokenEconomics = () => {
  return <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Economics & Emissions</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          The DHB token is now only on BASE and BNB as we concentrate development on BASE and slowly phase out BNB.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">Token Supply</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-700">Total Supply</h4>
                <p className="text-slate-600">8,000,000,000</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Burn at LGE</h4>
                <p className="text-slate-600">3,360,000,000</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Circulating Supply at last LGE</h4>
                <p className="text-slate-600">2,154,403,105</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Final Supply</h4>
                <p className="text-slate-600">1,000,000,000</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">Burn & Tax Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Burn Schedule</h4>
              <p className="text-slate-600">42% on launch. Then periodic and dynamic down to final supply</p>
            </div>
            <Separator />
            <div>
              
              
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Seed or Private Unlocks</h4>
              <p className="text-slate-600">0 on launch as no VCs were involved in building DeHub</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">Dilution/Emission Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Net negative - operational & team wallets are not permitted to liquidate any tokens past rewards and should never go below original balance barring un-staking fees. In theory, we are already at a fully diluted valuation (FDV).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              100% of liquidity raised was locked into pools for traders. No pre sale events or investment where raised to fund development and DeHub launched as FTV with a fully built app on the google play store prior to any token release or fundraise. Only liquidity generation events (LGE) on behalf of the community to facilitate trading occurred. BNB, therefore DeHub can only be acquired via KYCd wallets meaning we did not need extra layers for our own sales.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">Allocations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Team Allocation</h4>
              <p className="text-slate-600 leading-relaxed">
                8% of the total supply is reserved for DeHub contributors. No team wallet can sell below their percentage allocation and only rewards are tradable.
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Operational Allocation</h4>
              <p className="text-slate-600 mb-2">8% of the total supply is allocated for:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Operations & Awareness Raising</li>
                <li>Research & Development</li>
                <li>Partnerships & Licensing</li>
              </ul>
              <p className="text-slate-600 mt-3 leading-relaxed">
                No operational wallet can sell below their percentage allocation and only the rewards are tradable. This in theory means the supply will never dilute beyond its current point and it's safe to assume we are at fully diluted valuation. This also technically means that there was no premine as none can be sold. No funds where raised to build the protocol which was already in beta prior to a token release.
              </p>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Burn Wallet</h4>
              <p className="text-slate-600 leading-relaxed">
                42% of the supply will be burnt on launch to ensure the burn wallet accumulates rewards or airdrops holders are entitled for further reducing the supply automatically. All profits are used to buy back $DHB. This is 100% distributed to stakeholders and the burn wallet in proportion to holdings.
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
              DeHub tokens are strictly for utility purposes in the same way that any in-game or in-app digital tokens or currencies except where as ours operate on-chain, we can offer added utility as well as unprecedented levels of verifiable transparency. The above data is solely compiled for transparency, educational and informative purposes only. DeHub and all affiliates hold no liability for financial losses incurred from purchasing any tokens or NFTs we release. Markets are highly volatile. You could also lose all your money due to any unforseen events such as hacks, competency failures or technical errors. Therefore, you should only ever invest what you can afford to lose.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default TokenEconomics;