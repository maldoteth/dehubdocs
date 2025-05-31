
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const BadgeFlowchart = () => {
  const badges = [
    { threshold: "10,000", badge: "Crab Badge", color: "bg-orange-500" },
    { threshold: "25k", badge: "Lobster Badge", color: "bg-red-500" },
    { threshold: "50k", badge: "Piranha Badge", color: "bg-purple-500" },
    { threshold: "100k", badge: "Tortoise Badge", color: "bg-green-600" },
    { threshold: "250k", badge: "Cobra Badge", color: "bg-gray-800" },
    { threshold: "500k", badge: "Octopus Badge", color: "bg-blue-600" },
    { threshold: "1m", badge: "Crocodile Badge", color: "bg-green-800" },
    { threshold: "2m", badge: "Dolphin Badge", color: "bg-cyan-500" },
    { threshold: "3m", badge: "Tiger Shark Badge", color: "bg-slate-600" },
    { threshold: "5m", badge: "Killer Whale Badge", color: "bg-gray-900" },
    { threshold: "10m", badge: "Great White Shark Badge", color: "bg-blue-800" },
    { threshold: "25m", badge: "Blue Whale Badge", color: "bg-indigo-700" },
    { threshold: "50m", badge: "Megalodon Badge", color: "bg-purple-800" }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Badge of Honour System</CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Badge system based on $DHB token holdings - higher holdings unlock exclusive badges and enhanced features
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {badges.map((badge, index) => (
            <div key={badge.threshold} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${badge.color}`}></div>
                <span className="font-medium">{badge.badge}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-mono text-muted-foreground">
                  {badge.threshold}+ $DHB
                </span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/10">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span className="font-medium text-muted-foreground">No Badge</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-mono text-muted-foreground">
                &lt; 10,000 $DHB
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BadgeFlowchart;
