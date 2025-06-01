
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ModerationFlowchart = () => {
  const steps = [
    { step: "1", action: "Creator uploads video", color: "bg-purple-500", description: "Content creator uploads new video to platform" },
    { step: "2", action: "Viewer clicks to vote", color: "bg-purple-500", description: "Community member initiates voting process" },
    { step: "3", action: "Moderator check", color: "bg-cyan-500", description: "System checks if user has moderator status" },
    { step: "4a", action: "Video removed (Moderator)", color: "bg-pink-500", description: "Instant removal by verified moderator" },
    { step: "4b", action: "Staking DeHub check", color: "bg-cyan-500", description: "System verifies $DHB token holdings" },
    { step: "5a", action: "Vote unavailable", color: "bg-purple-800", description: "Insufficient tokens to participate" },
    { step: "5b", action: "Over 50m check", color: "bg-cyan-500", description: "Verification of significant stake threshold" },
    { step: "6a", action: "Video removed (High Stake)", color: "bg-pink-500", description: "Instant removal by major stakeholder" },
    { step: "6b", action: "Staking weight calculator", color: "bg-purple-700", description: "Vote weight calculated based on stake" },
    { step: "7", action: "Vote registered", color: "bg-purple-600", description: "Community vote officially recorded" },
    { step: "8", action: "90% cancel rate check", color: "bg-cyan-500", description: "Threshold evaluation after 1000 views" },
    { step: "9a", action: "Video removed (Community)", color: "bg-pink-500", description: "Community consensus removal" },
    { step: "9b", action: "Video remains live", color: "bg-purple-600", description: "Content approved by community" },
    { step: "10", action: "Revenue sharing", color: "bg-purple-500", description: "Bounty and ad revenue distributed to voters" }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Decentralised Moderation Mining Process</CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Community-driven content moderation system with token-weighted voting and automatic revenue sharing
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {steps.map((step, index) => (
            <div key={step.step} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {step.step}
                </div>
                <div>
                  <span className="font-medium">{step.action}</span>
                  <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModerationFlowchart;
