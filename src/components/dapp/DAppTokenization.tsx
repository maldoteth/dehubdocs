
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Users, TrendingUp, Shield } from 'lucide-react';

export const DAppTokenization = () => {
  const benefits = [
    {
      icon: Coins,
      title: "Fractional Ownership",
      description: "Split your content into tradeable tokens, allowing multiple investors to own shares"
    },
    {
      icon: Users,
      title: "Community Investment",
      description: "Enable your audience to invest in your success and share in the profits"
    },
    {
      icon: TrendingUp,
      title: "Value Appreciation",
      description: "As your content gains popularity, token values can increase automatically"
    },
    {
      icon: Shield,
      title: "Secure Ownership",
      description: "Blockchain technology ensures transparent and immutable ownership records"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-royal-blue">
          Tokenization & Fractional Ownership
        </h2>
        <p className="text-royal-blue/80 max-w-2xl mx-auto">
          Transform your content into digital assets through tokenization. 
          Enable fractional ownership and create new revenue streams.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow border-sky-blue/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-sky-blue to-middle-blue rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-royal-blue">{benefit.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-royal-blue/70">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-sky-blue/5 to-middle-blue/5 border-sky-blue/20">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-royal-blue">
              How Tokenization Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center mx-auto text-white font-bold">
                  1
                </div>
                <h4 className="font-semibold text-royal-blue">Upload Content</h4>
                <p className="text-sm text-royal-blue/70">Submit your digital content to the platform</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-middle-blue rounded-full flex items-center justify-center mx-auto text-white font-bold">
                  2
                </div>
                <h4 className="font-semibold text-royal-blue">Create Tokens</h4>
                <p className="text-sm text-royal-blue/70">Convert your content into tradeable digital tokens</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center mx-auto text-white font-bold">
                  3
                </div>
                <h4 className="font-semibold text-royal-blue">Start Earning</h4>
                <p className="text-sm text-royal-blue/70">Receive payments as tokens are bought and traded</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
