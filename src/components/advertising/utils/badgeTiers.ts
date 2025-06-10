
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
  if (campaignDuration === 0 || selectedTiers.length === 0) {
    return {
      totalAudience: 0,
      avgCpm: 0,
      dailyBudget: 0,
      estimatedImpressions: 0,
      estimatedClicks: 0,
      estimatedReach: 0
    };
  }

  const totalAudience = selectedTiers.reduce((sum, tier) => sum + tier.audience, 0);
  const avgCpm = selectedTiers.reduce((sum, tier) => sum + tier.cpm, 0) / selectedTiers.length;
  const dailyBudget = budget / campaignDuration;

  // Calculate theoretical impressions based on budget
  const theoreticalImpressions = (dailyBudget / avgCpm) * 1000 * campaignDuration;
  
  // Realistic frequency cap: assume max 10 impressions per person per day
  const maxDailyFrequency = 10;
  const maxPossibleImpressions = totalAudience * maxDailyFrequency * campaignDuration;
  
  // Use the lower of theoretical or maximum possible impressions
  const estimatedImpressions = Math.min(theoreticalImpressions, maxPossibleImpressions);
  
  // Calculate clicks with 3.5% CTR
  const estimatedClicks = estimatedImpressions * 0.035;
  
  // Calculate reach: start with 60% base rate, increase with campaign duration
  const baseReachRate = 0.6;
  const campaignBonus = Math.min(campaignDuration / 30, 1) * 0.2; // Up to 20% bonus for 30-day campaigns
  const effectiveReachRate = baseReachRate + campaignBonus;
  
  // Reach cannot exceed total audience and should be realistic
  const calculatedReach = estimatedImpressions * effectiveReachRate;
  const estimatedReach = Math.min(totalAudience, calculatedReach);

  return {
    totalAudience,
    avgCpm,
    dailyBudget,
    estimatedImpressions,
    estimatedClicks,
    estimatedReach
  };
};
