
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BadgeTier, CampaignCalculations } from './utils/badgeTiers';

interface BadgeTiersBreakdownProps {
  selectedTiers: BadgeTier[];
  calculations: CampaignCalculations;
}

const BadgeTiersBreakdown = ({ selectedTiers, calculations }: BadgeTiersBreakdownProps) => {
  return (
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
  );
};

export default BadgeTiersBreakdown;
