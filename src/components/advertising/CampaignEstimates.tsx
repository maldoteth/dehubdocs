
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Eye, TrendingUp } from 'lucide-react';
import { CampaignCalculations } from './utils/badgeTiers';

interface CampaignEstimatesProps {
  calculations: CampaignCalculations;
}

const CampaignEstimates = ({ calculations }: CampaignEstimatesProps) => {
  return (
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
  );
};

export default CampaignEstimates;
