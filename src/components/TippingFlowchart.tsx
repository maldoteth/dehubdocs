
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const TippingFlowchart = () => {
  const tippingTiers = [
    { amount: "$1-5", effect: "Basic Animation", color: "bg-green-500", description: "Simple sparkle effects and basic sound" },
    { amount: "$6-10", effect: "Enhanced Effects", color: "bg-blue-500", description: "Colorful particles and enhanced audio" },
    { amount: "$11-25", effect: "Special Graphics", color: "bg-purple-500", description: "Custom graphics and themed animations" },
    { amount: "$26-50", effect: "Premium Celebration", color: "bg-orange-500", description: "Screen-wide effects with custom music" },
    { amount: "$51-100", effect: "Epic Display", color: "bg-red-500", description: "Full-screen takeover with branded elements" },
    { amount: "$101-250", effect: "Legendary Show", color: "bg-pink-500", description: "Multi-layered effects with viewer interaction" },
    { amount: "$251-500", effect: "Ultimate Spectacle", color: "bg-indigo-600", description: "Platform-wide notifications and special badges" },
    { amount: "$501+", effect: "Mythic Experience", color: "bg-gray-900", description: "Custom animations, hall of fame entry, exclusive perks" }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Tipping Rewards System</CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Visual effects and rewards based on tip amounts - higher tips unlock more exciting visual celebrations
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {tippingTiers.map((tier, index) => (
            <div key={tier.amount} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-8 rounded ${tier.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {tier.amount}
                </div>
                <div>
                  <span className="font-medium">{tier.effect}</span>
                  <p className="text-xs text-muted-foreground mt-1">{tier.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-700">
            <strong>How it works:</strong> When viewers tip streamers, different visual effects and celebrations are triggered based on the tip amount. Higher tips create more spectacular on-screen effects, encouraging larger contributions and creating an engaging experience for both tippers and viewers.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TippingFlowchart;
