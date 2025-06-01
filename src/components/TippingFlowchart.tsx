
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const TippingFlowchart = () => {
  const tippingTiers = [
    { amount: "1-10", effect: "Sparks", color: "bg-green-500", description: "Basic sparkle effects and simple animations" },
    { amount: "11-50", effect: "Confetti", color: "bg-blue-500", description: "Colorful confetti burst across the screen" },
    { amount: "51-100", effect: "Fireworks", color: "bg-purple-500", description: "Animated firework display with sound effects" },
    { amount: "101-500", effect: "Hearts", color: "bg-pink-500", description: "Floating heart animations with music" },
    { amount: "501-1000", effect: "Lightning", color: "bg-yellow-500", description: "Electric lightning effects across the screen" },
    { amount: "1001-5000", effect: "Galaxy", color: "bg-indigo-500", description: "Cosmic galaxy animation with space themes" },
    { amount: "5001-10000", effect: "Dragon", color: "bg-red-500", description: "Mythical dragon animation with epic effects" },
    { amount: "10001+", effect: "Ultimate", color: "bg-gray-900", description: "Maximum tier with custom premium effects" }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">DHB Token Tipping Rewards System</CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Visual effects and rewards based on DHB token tip amounts - higher tips unlock more exciting visual celebrations
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {tippingTiers.map((tier, index) => (
            <div key={tier.amount} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
              <div className="flex items-center gap-3">
                <div className={`w-16 h-8 rounded ${tier.color} flex items-center justify-center text-white text-xs font-bold`}>
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
            <strong>How it works:</strong> When viewers tip streamers with DHB tokens, different visual effects and celebrations are triggered based on the tip amount. Higher DHB token tips create more spectacular on-screen effects, encouraging larger contributions and creating an engaging experience for both tippers and viewers.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TippingFlowchart;
