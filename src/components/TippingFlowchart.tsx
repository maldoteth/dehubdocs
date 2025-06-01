
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const TippingFlowchart = () => {
  const tippingTiers = [
    { 
      threshold: "1-1,000", 
      effect: "Sparks", 
      description: "Spark effects appear on stream"
    },
    { 
      threshold: "1,001-10,000", 
      effect: "Confetti", 
      description: "Confetti animation plays"
    },
    { 
      threshold: "10,001-25,000", 
      effect: "Fireworks", 
      description: "Fireworks animation displays"
    },
    { 
      threshold: "25,001-50,000", 
      effect: "Hearts", 
      description: "Heart animations appear"
    },
    { 
      threshold: "50,001-100,000", 
      effect: "Stars", 
      description: "Star effects play"
    },
    { 
      threshold: "100,001-250,000", 
      effect: "Flowers", 
      description: "Flower animations display"
    },
    { 
      threshold: "250,001-500,000", 
      effect: "Diamonds", 
      description: "Diamond effects appear"
    },
    { 
      threshold: "500,001-1,000,000", 
      effect: "Crown", 
      description: "Crown animation plays"
    },
    { 
      threshold: "1,000,001+", 
      effect: "Ultimate", 
      description: "All effects combined with special celebration"
    }
  ];

  const getColorForTier = (index: number) => {
    const colors = [
      "bg-yellow-400",
      "bg-green-500", 
      "bg-blue-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-orange-500",
      "bg-gradient-to-r from-purple-500 to-pink-500"
    ];
    return colors[index] || "bg-gray-500";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Tipping Animation System</CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Different tip amounts trigger different visual effects and animations on stream
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {tippingTiers.map((tier, index) => (
            <div key={tier.threshold} className="flex items-center justify-between p-4 rounded-lg border bg-muted/20">
              <div className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full ${getColorForTier(index)}`}></div>
                <div>
                  <span className="font-medium text-sm">{tier.effect}</span>
                  <p className="text-xs text-muted-foreground mt-1">{tier.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-mono font-semibold">
                  {tier.threshold} $DHB
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TippingFlowchart;
