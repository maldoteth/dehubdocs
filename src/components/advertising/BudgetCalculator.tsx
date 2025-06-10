import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp, Users, Eye } from 'lucide-react';

const BudgetCalculator = () => {
  const [budget, setBudget] = useState(1000);
  const [targetTiers, setTargetTiers] = useState([0, 0]); // Changed from [2, 8] to [0, 0]
  const [campaignDuration, setCampaignDuration] = useState(0); // Changed from 7 to 0

  const badgeTiers = [
    { name: 'No Badge', cpm: 2.50, audience: 500000 },
    { name: 'Crab', cpm: 5.00, audience: 100000 },
    { name: 'Lobster', cpm: 7.50, audience: 50000 },
    { name: 'Piranha', cpm: 10.00, audience: 25000 },
    { name: 'Tortoise', cpm: 12.50, audience: 15000 },
    { name: 'Cobra', cpm: 15.00, audience: 8000 },
    { name: 'Octopus', cpm: 17.50, audience: 4000 },
    { name: 'Crocodile', cpm: 20.00, audience: 2000 },
    { name: 'Dolphin', cpm: 22.50, audience: 1000 },
    { name: 'Tiger Shark', cpm: 25.00, audience: 500 },
    { name: 'Killer Whale', cpm: 27.50, audience: 250 },
    { name: 'Great White', cpm: 30.00, audience: 100 },
    { name: 'Blue Whale', cpm: 32.50, audience: 50 },
    { name: 'Megalodon', cpm: 35.00, audience: 25 }
  ];

  const selectedTiers = badgeTiers.slice(targetTiers[0], targetTiers[1] + 1);
  
  const calculations = {
    totalAudience: selectedTiers.reduce((sum, tier) => sum + tier.audience, 0),
    avgCpm: selectedTiers.reduce((sum, tier) => sum + tier.cpm, 0) / selectedTiers.length,
    dailyBudget: budget / campaignDuration,
    estimatedImpressions: 0,
    estimatedClicks: 0,
    estimatedReach: 0
  };

  calculations.estimatedImpressions = (calculations.dailyBudget / calculations.avgCpm) * 1000 * campaignDuration;
  calculations.estimatedClicks = calculations.estimatedImpressions * 0.035; // 3.5% CTR
  calculations.estimatedReach = Math.min(calculations.totalAudience, calculations.estimatedImpressions * 0.8);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-middle-blue" />
            Campaign Budget Calculator
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Plan your POVR advertising campaign with real-time cost estimates
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <Label htmlFor="budget">Total Campaign Budget ($)</Label>
                <Input
                  id="budget"
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Campaign Duration (days)</Label>
                <div className="mt-2 px-2">
                  <Slider
                    value={[campaignDuration]}
                    onValueChange={(value) => setCampaignDuration(value[0])}
                    max={30}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>0 days</span>
                    <span className="font-semibold">{campaignDuration} days</span>
                    <span>30 days</span>
                  </div>
                </div>
              </div>

              <div>
                <Label>Target Badge Tiers (Range)</Label>
                <div className="mt-2 px-2">
                  <Slider
                    value={targetTiers}
                    onValueChange={(value) => setTargetTiers([Math.min(value[0], value[1]), Math.max(value[0], value[1])])}
                    max={13}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>{badgeTiers[targetTiers[0]]?.name || 'No Badge'}</span>
                    <span className="font-semibold">
                      {selectedTiers.length} tiers selected
                    </span>
                    <span>{badgeTiers[targetTiers[1]]?.name || 'No Badge'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-muted/20">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Campaign Estimates
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Daily Budget:</span>
                    <Badge variant="outline" className="font-mono">
                      ${calculations.dailyBudget.toFixed(2)}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average CPM:</span>
                    <Badge variant="outline" className="font-mono">
                      ${calculations.avgCpm.toFixed(2)}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Audience:</span>
                    <span className="font-semibold">
                      {calculations.totalAudience.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Est. Impressions:</span>
                    <span className="font-semibold">
                      {Math.round(calculations.estimatedImpressions).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Est. Clicks:</span>
                    <span className="font-semibold">
                      {Math.round(calculations.estimatedClicks).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Est. Reach:</span>
                    <span className="font-semibold">
                      {Math.round(calculations.estimatedReach).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg bg-gradient-to-br from-middle-blue/5 to-royal-blue/5">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  POVR Advantage
                </h4>
                <p className="text-xs text-muted-foreground">
                  Targeting verified holders reduces fraud by 85% and increases conversion rates by 3.2x compared to traditional advertising platforms.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Selected Badge Tiers Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedTiers.map((tier, index) => (
              <div key={tier.name} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm">{tier.name} Badge</h3>
                  <Badge variant="outline" className="text-xs">
                    ${tier.cpm} CPM
                  </Badge>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Audience Size:</span>
                    <span>{tier.audience.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Est. Daily Impressions:</span>
                    <span>
                      {Math.round((calculations.dailyBudget / tier.cpm) * 1000).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetCalculator;
