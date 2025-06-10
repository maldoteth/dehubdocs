
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, Star, Crown, Gem } from 'lucide-react';
import { feeReductions } from '@/data/dappData';

export const DAppBadgeSystem = () => {
  const tierIcons = {
    Bronze: Award,
    Silver: Star,
    Gold: Crown,
    Platinum: Gem
  };

  const tierColors = {
    Bronze: "bg-amber-600",
    Silver: "bg-gray-400", 
    Gold: "bg-yellow-500",
    Platinum: "bg-purple-600"
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-royal-blue">
          Badge System & Fee Reductions
        </h2>
        <p className="text-royal-blue/80 max-w-2xl mx-auto">
          Earn badges through platform engagement and enjoy reduced fees based on your achievement level.
        </p>
      </div>

      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-royal-blue flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>Fee Reduction Table</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Badge Name</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Fee Reduction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeReductions.map((item, index) => {
                const TierIcon = tierIcons[item.tier as keyof typeof tierIcons];
                const tierColor = tierColors[item.tier as keyof typeof tierColors];
                
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.badge}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`${tierColor} text-white border-none`}>
                        <TierIcon className="w-3 h-3 mr-1" />
                        {item.tier}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-green-600">{item.reduction}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-4 gap-4">
        {Object.entries(tierColors).map(([tier, color]) => {
          const TierIcon = tierIcons[tier as keyof typeof tierIcons];
          const badges = feeReductions.filter(item => item.tier === tier);
          
          return (
            <Card key={tier} className="text-center border-sky-blue/20">
              <CardHeader>
                <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mx-auto`}>
                  <TierIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-royal-blue">{tier} Tier</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-royal-blue/70 mb-2">
                  {badges.length} badges available
                </p>
                <p className="font-semibold text-green-600">
                  Up to {badges[0]?.reduction} reduction
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
