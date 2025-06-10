
export interface BadgeTier {
  name: string;
  cpm: number;
  audience: number;
}

export const badgeTiers: BadgeTier[] = [
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

export interface CampaignCalculations {
  totalAudience: number;
  avgCpm: number;
  dailyBudget: number;
  estimatedImpressions: number;
  estimatedClicks: number;
  estimatedReach: number;
}

export const calculateCampaignMetrics = (
  budget: number,
  campaignDuration: number,
  selectedTiers: BadgeTier[]
): CampaignCalculations => {
  const calculations: CampaignCalculations = {
    totalAudience: selectedTiers.reduce((sum, tier) => sum + tier.audience, 0),
    avgCpm: selectedTiers.reduce((sum, tier) => sum + tier.cpm, 0) / selectedTiers.length,
    dailyBudget: budget / campaignDuration,
    estimatedImpressions: 0,
    estimatedClicks: 0,
    estimatedReach: 0
  };

  calculations.estimatedImpressions = (calculations.dailyBudget / calculations.avgCpm) * 1000 * campaignDuration;
  calculations.estimatedClicks = calculations.estimatedImpressions * 0.035; // 3.5% CTR
  
  // Fixed reach calculation: reach grows with campaign duration and is not artificially capped
  // Base reach is 60% of impressions, but scales better with longer campaigns
  const baseReachRate = 0.6;
  const campaignBonus = Math.min(campaignDuration / 30, 1) * 0.2; // Up to 20% bonus for 30-day campaigns
  const effectiveReachRate = baseReachRate + campaignBonus;
  
  // Calculate reach but don't exceed total available audience
  const calculatedReach = calculations.estimatedImpressions * effectiveReachRate;
  calculations.estimatedReach = Math.min(calculations.totalAudience, calculatedReach);

  return calculations;
};
