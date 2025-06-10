
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Bomb, Anchor } from 'lucide-react';
import { superpowers } from '@/data/dappData';

export const DAppSuperpowers = () => {
  const icons = [Zap, Bomb, Target, Anchor];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-royal-blue">
          Superpowers
        </h2>
        <p className="text-royal-blue/80 max-w-2xl mx-auto">
          Unlock advanced capabilities that give you a competitive edge in the digital landscape. 
          These powerful tools are designed to amplify your content's reach and impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {superpowers.map((power, index) => {
          const IconComponent = icons[index];
          
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow border-sky-blue/20 group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-blue to-middle-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-royal-blue text-xl">{power.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-royal-blue/70 leading-relaxed">{power.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-r from-sky-blue/10 to-middle-blue/10 border-sky-blue/30">
        <CardContent className="p-8 text-center">
          <Zap className="w-16 h-16 mx-auto mb-4 text-middle-blue" />
          <h3 className="text-2xl font-bold text-royal-blue mb-4">
            Ready to Unleash Your Superpowers?
          </h3>
          <p className="text-royal-blue/80 mb-6 max-w-2xl mx-auto">
            These advanced tools are available to verified creators and premium users. 
            Upgrade your account to access the full suite of superpowers and dominate your niche.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
