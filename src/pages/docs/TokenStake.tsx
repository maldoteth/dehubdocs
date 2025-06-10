import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Coins, Lock, TrendingUp, Users, Zap, Shield, ExternalLink } from 'lucide-react';
const TokenStake = () => {
  return <div className="space-y-8">
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <h1 className="text-4xl font-bold text-royal-blue font-exo">Stake</h1>
          <a href="https://dehub.net/staking" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-middle-blue hover:text-royal-blue transition-colors text-sm font-medium bg-sky-blue/10 px-3 py-1 rounded-lg hover:bg-sky-blue/20">
            <span>Stake Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p className="text-lg text-royal-blue/80 leading-relaxed">
          Stake to access different club tiers the enhanced features across all d'apps and provide your computing power or storage space from with little as a mobile to mine your share of protocol revenue.
        </p>
        <p className="text-lg text-royal-blue/80 leading-relaxed mt-4">As further allocations will now be dynamic, dependant on protocol fees, designations will be subject to requirements at any given moment ensuring the protocol needs are at the forefront at all times. The staking protocol is also being upgraded currently with release on Base soon.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-middle-blue" />
            <span>Technicals</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-royal-blue/80 mb-4">
            Joining clubs also unlocks the below badges that are displayed on your dehub.io profile, comments, uploads and live chat communications.
          </p>
          <p className="text-royal-blue/80">
            Beyond the perks for the amount of $DHB staked, there are also three pre-defined tiers determined by stake duration which define user rewards.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Tier 1</span>
              <Badge variant="secondary">25% Rewards</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-royal-blue/80">Stake 1 to 2 quarters, and share 25% of rewards</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Tier 2</span>
              <Badge variant="secondary">25% Rewards</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-royal-blue/80">Stake 3 to 4 quarters, and share 25% of rewards</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Tier 3</span>
              <Badge variant="default" className="bg-middle-blue">50% Rewards</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-royal-blue/80">Stake 5+ quarters, and share 50% of rewards</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-middle-blue" />
            <span>Staking User Flow</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-royal-blue/80">
            <li>• Users stake $DHB tokens in staking pool, and choose one of 3 tiers to stake in a reward period. Users can't stake multiple tiers in the same reward period.</li>
            <li>• Users can see their current shares on the tier which they have chosen to stake and total unlocked amount, as well as the token unlock date.</li>
            <li>• Prior to the unlock date, the users can unstake only 88% of their staked tokens. Once they reach the unlock date, they can choose to unstake or restake free of fees.</li>
            <li>• When users unstake, they receive back their original $DHB token allocation.</li>
            <li>• Users can automatically restake or manually restake. Restaking starts from the time users confirm the `Restake` button. When restaking, users can change their original tier.</li>
            <li>• DeHub team funds reward anytime, users get reward immediately.</li>
            <li>• Users can claim their rewards anytime without unstaking if they have any to.</li>
            <li>• Users can increase their staked amount in the current reward period, but this is only available for Tier 3 stakers.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-middle-blue" />
            <span>Reward Calculation</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-royal-blue/80">
            DeHub team funds reward at variable times dependant on protocol fees, with announcements to the community.
          </p>
          <p className="text-royal-blue/80">
            Users might get rewards immediately from staking, or they might have to wait for injections depending on when they staked.
          </p>
          
          <div className="bg-sky-blue/10 p-4 rounded-lg">
            <h4 className="font-semibold text-royal-blue mb-2">Calculation Formula:</h4>
            <div className="space-y-2 text-sm text-royal-blue/80 font-mono">
              <p>Locking percent = 100% * (Now - Staking start time) / Staking period</p>
              <p>Staking amount = Current locked amount * Locking percent</p>
              <p>Staking share of user = 100% * Staking amount</p>
              <p>Rewards = Staking share * Funded rewards * Tier percent</p>
            </div>
          </div>

          <div className="bg-middle-blue/10 p-4 rounded-lg">
            <h4 className="font-semibold text-royal-blue mb-2">Example:</h4>
            <p className="text-sm text-royal-blue/80">
              User A, B, C stakes 1000 $DHB tokens on different tiers. Reward 1, 2, 3 indicates the times that 5000 $DHB tokens were injected as rewards by the DeHub team.
            </p>
            <ul className="text-sm text-royal-blue/80 mt-2 space-y-1">
              <li>• User A staked on Tier 1 for 1 quarter</li>
              <li>• User B staked on Tier 2 for 3 quarters after first rewarding</li>
              <li>• User C staked on Tier 3 for 5 quarters after first rewarding</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-middle-blue" />
            <span>Restake Rules</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-royal-blue/80">
            Users can choose either automatic or manual restaking, during harvest. For automatic restaking, simply click the restake button and watch as the magic unfolds on chain. For the manual process, simply unstake, play about with your metamask for a while then follow the original staking process.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 mb-2">Important Notes:</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Restaking means unstake all the unlocked/locked tokens and stake again</li>
              <li>• Users can use the automatic restake button before they reach the unlock date yet this comes at a 12% fee, outside of harvest dates</li>
              <li>• When automatically restake, users can change locking period</li>
              <li>• If users force to restake locked tokens manually, only 88% of total amount will stake in the pool and 12% will be transferred to the dev wallet</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Coins className="w-5 h-5 text-middle-blue" />
            <span>How to Stake</span>
          </CardTitle>
          <CardDescription>
            The steps are very simple and consist of minimal clicks or technical requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-sky-blue/10 rounded-lg">
              <div className="w-8 h-8 bg-middle-blue text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
              <p className="font-semibold text-royal-blue">Connect Wallet</p>
            </div>
            <div className="text-center p-4 bg-sky-blue/10 rounded-lg">
              <div className="w-8 h-8 bg-middle-blue text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
              <p className="font-semibold text-royal-blue">Click "Stake" Button</p>
            </div>
            <div className="text-center p-4 bg-sky-blue/10 rounded-lg">
              <div className="w-8 h-8 bg-middle-blue text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
              <p className="font-semibold text-royal-blue">Input Amount & Duration</p>
            </div>
            <div className="text-center p-4 bg-sky-blue/10 rounded-lg">
              <div className="w-8 h-8 bg-middle-blue text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
              <p className="font-semibold text-royal-blue">Confirm Transaction</p>
            </div>
          </div>
          <p className="text-sm text-royal-blue/60 mt-4">
            Note: during the first transaction you will have to approve the staking contract first. This will happen only once.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How Staking Rewards are Generated</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-royal-blue/80 mb-4">
            Staking rewards are generated from all fees taken by the network's streams of revenue as well as a base allocation from initial injection.
          </p>
          
          <h4 className="font-semibold text-royal-blue mb-3">Fee Sources:</h4>
          <ul className="space-y-2 text-royal-blue/80">
            <li>• Fees from in app services like subscriptions, PPV, Watch2Earn, paid DMs and more.</li>
            <li>• DeHub premium, ad free usage & access to AI toolkits</li>
            <li>• Token & NFT primary sales & secondary trading fees.</li>
            <li>• Advertising across video, lives & scroll feeds</li>
            <li>• Partner launches and airdrops.</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-amber-800">
            <Shield className="w-5 h-5" />
            <span>Disclaimer</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-amber-700 leading-relaxed">
            DeHub tokens are strictly for utility purposes in the same way that any in-game or in-app digital tokens or currencies and strictly not an investment. As our token lives on-chain, we can offer added utility as well as unprecedented levels of verifiable transparency. The above data is solely compiled for transparency, educational and informative purposes only. DeHub and all affiliates hold no liability for financial losses incurred from purchasing any tokens or NFTs we release. Markets are highly volatile, especially ones in their infancy like ours. You could also lose all your money due to a hack, competency failure or technical error. Therefore, you should only ever spend what you can afford to lose.
          </p>
        </CardContent>
      </Card>
    </div>;
};
export default TokenStake;