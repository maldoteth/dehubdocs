
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

export const DAppHeader = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4 bg-gradient-to-r from-sky-blue to-middle-blue text-white border-none">
          DApps & Applications
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal-blue to-middle-blue bg-clip-text text-transparent">
          DeHub DApps
        </h1>
        <p className="text-xl text-royal-blue/80 max-w-3xl mx-auto leading-relaxed">
          Discover the power of decentralized applications built on the DeHub ecosystem. 
          From content creation to social networking, our DApps revolutionize how you interact with digital platforms.
        </p>
      </div>

      <Card className="bg-gradient-to-br from-sky-blue/5 to-middle-blue/5 border-sky-blue/20">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-royal-blue">
                Transform Your Digital Presence
              </h2>
              <p className="text-royal-blue/80 leading-relaxed">
                DeHub DApps provide a comprehensive suite of tools designed to enhance your content creation, 
                social media management, and digital marketing efforts. Built on blockchain technology, 
                our applications offer transparency, security, and unprecedented control over your digital assets.
              </p>
            </div>
            <div className="flex justify-center">
              <OptimizedImage
                src="/lovable-uploads/40022385-7894-4cb4-a6f9-403a0d9e4e5e.png"
                alt="DeHub DApp Interface"
                className="rounded-lg shadow-lg max-w-full h-auto"
                width={400}
                height={300}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
