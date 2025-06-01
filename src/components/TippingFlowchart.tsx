
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const TippingFlowchart = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">Tipping Rewards Flowchart</CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Visual effects and rewards based on tip amounts - higher tips unlock more exciting visual celebrations
        </p>
      </CardHeader>
      <CardContent>
        <div className="my-6">
          <img 
            src="/lovable-uploads/ee49bfc9-a2fc-48ef-a91b-ea357ecba6c6.png" 
            alt="Tipping rewards flowchart showing different visual effects and celebrations based on tip amounts" 
            className="w-full rounded-lg border border-slate-200 shadow-sm"
          />
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
