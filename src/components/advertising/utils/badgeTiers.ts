
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

export interface TierBreakdown {
  tier: BadgeTier;
  budgetAllocated: number;
  impressions: number;
  reach: number;
}

export const calculateCampaignMetrics = (
  budget: number,
  campaignDuration: number,
  selectedTiers: BadgeTier[]
): CampaignCalculations => {
  // Minimum campaign duration of 1 day
  const effectiveDuration = Math.max(campaignDuration, 1);
  
  if (budget <= 0 || selectedTiers.length === 0) {
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
  const dailyBudget = budget / effectiveDuration;

  // Realistic frequency caps per day
  const maxDailyFrequency = 3; // More realistic: 3 impressions per person per day max
  const maxPossibleImpressions = totalAudience * maxDailyFrequency * effectiveDuration;

  // Distribute budget proportionally across tiers based on audience size
  const totalWeight = selectedTiers.reduce((sum, tier) => sum + tier.audience, 0);
  let totalImpressions = 0;
  let totalReach = 0;

  for (const tier of selectedTiers) {
    const tierWeight = tier.audience / totalWeight;
    const tierBudget = budget * tierWeight;
    
    // Calculate impressions for this tier
    const tierTheoreticalImpressions = (tierBudget / tier.cpm) * 1000;
    const tierMaxImpressions = tier.audience * maxDailyFrequency * effectiveDuration;
    const tierImpressions = Math.min(tierTheoreticalImpressions, tierMaxImpressions);
    
    totalImpressions += tierImpressions;
    
    // Calculate reach for this tier (unique people reached)
    const impressionsPerPerson = tierImpressions / tier.audience;
    const tierReachRate = Math.min(impressionsPerPerson / maxDailyFrequency, 1);
    const tierReach = tier.audience * tierReachRate;
    
    totalReach += tierReach;
  }

  // Ensure totals don't exceed realistic limits
  const finalImpressions = Math.min(totalImpressions, maxPossibleImpressions);
  const finalReach = Math.min(totalReach, totalAudience);

  // More realistic CTR: 1% instead of 3.5%
  const estimatedClicks = finalImpressions * 0.01;

  return {
    totalAudience,
    avgCpm,
    dailyBudget,
    estimatedImpressions: finalImpressions,
    estimatedClicks,
    estimatedReach: finalReach
  };
};

export const calculateTierBreakdowns = (
  budget: number,
  campaignDuration: number,
  selectedTiers: BadgeTier[]
): TierBreakdown[] => {
  const effectiveDuration = Math.max(campaignDuration, 1);
  const maxDailyFrequency = 3;
  
  if (budget <= 0 || selectedTiers.length === 0) {
    return [];
  }

  const totalWeight = selectedTiers.reduce((sum, tier) => sum + tier.audience, 0);
  
  return selectedTiers.map(tier => {
    const tierWeight = tier.audience / totalWeight;
    const tierBudget = budget * tierWeight;
    
    // Calculate impressions for this tier
    const tierTheoreticalImpressions = (tierBudget / tier.cpm) * 1000;
    const tierMaxImpressions = tier.audience * maxDailyFrequency * effectiveDuration;
    const tierImpressions = Math.min(tierTheoreticalImpressions, tierMaxImpressions);
    
    // Calculate reach for this tier
    const impressionsPerPerson = tierImpressions / tier.audience;
    const tierReachRate = Math.min(impressionsPerPerson / maxDailyFrequency, 1);
    const tierReach = tier.audience * tierReachRate;
    
    return {
      tier,
      budgetAllocated: tierBudget,
      impressions: tierImpressions,
      reach: tierReach
    };
  });
};
