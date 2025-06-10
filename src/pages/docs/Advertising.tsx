
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Shield, TrendingUp, Users, Zap, Star, ExternalLink } from 'lucide-react';

const Advertising = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-royal-blue font-exo mb-4">Advertising</h1>
        <p className="text-lg text-royal-blue/80 leading-relaxed">
          Taking digital advertising to new horizons.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-middle-blue" />
            <span>POVR: Proof of View & Rank</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-royal-blue/80">
            Our ad-tech solution is unlike anything else seen across legacy or blockchain markets, and serves a unique purpose within our own app.
          </p>
          
          <p className="text-royal-blue/80">
            "Proof of View" is one dimensional and beyond identification, adds little benefit for users or holders.
          </p>
          
          <p className="text-royal-blue/80">
            What if you could prove viewers were real without wasting block space or gas? What if you could leverage each wallet's financial data, not just for saving costs, but also to maximise ROI for your campaigns? Don't just save more money, make more too!
          </p>
          
          <p className="text-royal-blue/80">
            Our software, with patents pending, does this via an unprecedented 13-tier ranking system combined with our verification badges, which were highlighted in this previous feature spotlight.
          </p>
          
          <p className="text-royal-blue/80 font-semibold">
            We are calling it "proof-of-view-and-rank" or "POVR".
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-middle-blue" />
            <span>How it works</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-royal-blue/80">
            The higher your total holdings, the higher-ranking badge you unlock, the more you earn from ads, the more companies pay to advertise to you.
          </p>
          
          <p className="text-royal-blue/80">
            This way benefits the whole ecosystem and not just a single party. Content creators, consumers, holders & companies advertising on the platform all reap more rewards.
          </p>
          
          <p className="text-royal-blue/80">
            Financial data is the most lucrative, and ours is uniquely combined into one system advertisers can use to target audiences. This isn't even something you can do off-chain, as bank statements are private whereas the blockchain is public.
          </p>
          
          <p className="text-royal-blue/80">
            Being able to target whales and big spenders while also tailoring special deals or discounts for smaller fish in the sea will re-shape how advertising works across the globe. Why wouldn't anyone want this?
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-middle-blue" />
            <span>How does this prevent fraud?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-royal-blue/80">
            Botting becomes less profitable while activity is trackable on-chain, easily connecting bad actors & eventually curating the entire user base. Advertisers target higher ranks, leaving minimal extractable value at the bottom layer, where any remaining fraud remains. On top of that, our decentralised moderation allows more efficient illicit activity detection and prevention.
          </p>
          
          <p className="text-royal-blue/80">
            For more information on our ad revenue sharing, refer to this thread and our whitepaper below. Also, be sure to follow us for all the latest news on app features and updates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Advertising;
