
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { badgeTiers } from './utils/badgeTiers';

interface CampaignInputsProps {
  budget: number;
  setBudget: (budget: number) => void;
  campaignDuration: number;
  setCampaignDuration: (duration: number) => void;
  targetTiers: [number, number];
  setTargetTiers: (tiers: [number, number]) => void;
}

const CampaignInputs = ({
  budget,
  setBudget,
  campaignDuration,
  setCampaignDuration,
  targetTiers,
  setTargetTiers
}: CampaignInputsProps) => {
  const selectedTiers = badgeTiers.slice(targetTiers[0], targetTiers[1] + 1);

  return (
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
  );
};

export default CampaignInputs;
