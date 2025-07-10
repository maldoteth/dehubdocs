
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Target, DollarSign, Users, Eye, Handshake, Rocket, Star, TrendingUp } from 'lucide-react';
import { badgeTiers } from './utils/badgeTiers';

const CampaignCreator = () => {
  const [selectedTiers, setSelectedTiers] = useState<string[]>([]);
  const [campaignType, setCampaignType] = useState('');
  const [budget, setBudget] = useState('');

  // Badge tier data with images for UI display
  const badgeImages: Record<string, string> = {
    'No Badge': '',
    'Crab': '/lovable-uploads/60bc125c-8efd-4058-9e12-7ca393df4fce.png',
    'Lobster': '/lovable-uploads/2c7200c2-681e-4499-863b-ea24fdbdb70c.png',
    'Piranha': '/lovable-uploads/38387f75-fd38-4380-9588-1f19f68d8435.png',
    'Tortoise': '/lovable-uploads/fc47a759-390a-4f41-ba96-5bc0066e82b9.png',
    'Cobra': '/lovable-uploads/b3306c99-31b8-4bfc-bc25-f73abc68fc38.png',
    'Octopus': '/lovable-uploads/8fcbb3f6-223d-4e2f-9d82-30082a175491.png',
    'Crocodile': '/lovable-uploads/c84eee0a-97c7-4938-9b9c-c991c802593e.png',
    'Dolphin': '/lovable-uploads/4558c158-75d9-40fc-adfa-41125344a48e.png',
    'Tiger Shark': '/lovable-uploads/6be493f1-51b4-481b-9ca1-340c030b2ef8.png',
    'Killer Whale': '/lovable-uploads/fcc288eb-67d7-49a0-b561-94bb5d1b8896.png',
    'Great White': '/lovable-uploads/dfcc3420-f654-486b-bc94-f84f0209ba5c.png',
    'Blue Whale': '/lovable-uploads/fb9dfd31-d278-49fa-8ec8-1eee9ab74aef.png',
    'Megalodon': '/lovable-uploads/9282e1c6-fa68-4b7c-b3cd-22d860df35af.png'
  };

  // Convert audience numbers to formatted threshold strings
  const getThresholdDisplay = (name: string, audience: number): string => {
    if (name === 'No Badge') return '< 10,000';
    if (audience >= 1000000) return `${(audience / 1000000).toFixed(0)}m+`;
    if (audience >= 1000) return `${(audience / 1000).toFixed(0)}k+`;
    return `${audience.toLocaleString()}+`;
  };

  const handleTierToggle = (tierName: string) => {
    setSelectedTiers(prev => 
      prev.includes(tierName) 
        ? prev.filter(name => name !== tierName)
        : [...prev, tierName]
    );
  };

  const calculateEstimatedReach = () => {
    const baseReach = 10000;
    return selectedTiers.length * baseReach * (selectedTiers.length * 0.5 + 1);
  };

  const calculateEstimatedCost = () => {
    if (!budget) return 0;
    const selectedTierData = badgeTiers.filter(tier => selectedTiers.includes(tier.name));
    const avgCpm = selectedTierData.reduce((sum, tier) => sum + tier.cpm, 0) / selectedTierData.length || 0;
    const budgetNum = parseFloat(budget);
    return (budgetNum / avgCpm * 1000).toFixed(0);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-middle-blue" />
            Create New Campaign
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="campaign-name">Campaign Name</Label>
                <Input id="campaign-name" placeholder="Enter campaign name" />
              </div>
              
              <div>
                <Label htmlFor="campaign-type">Campaign Type</Label>
                <Select value={campaignType} onValueChange={setCampaignType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select campaign type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="awareness">Brand Awareness</SelectItem>
                    <SelectItem value="traffic">Website Traffic</SelectItem>
                    <SelectItem value="conversion">Conversions</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Daily Budget ($)</Label>
                <Input 
                  id="budget" 
                  type="number" 
                  placeholder="Enter daily budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="description">Campaign Description</Label>
                <Textarea id="description" placeholder="Describe your campaign objectives" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-muted/20">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Estimated Performance
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Estimated Reach:</span>
                    <span className="font-semibold">{calculateEstimatedReach().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Impressions:</span>
                    <span className="font-semibold">{calculateEstimatedCost()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selected Tiers:</span>
                    <span className="font-semibold">{selectedTiers.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-middle-blue" />
            POVR Audience Targeting
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Select badge tiers to target users with verified financial capacity
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {badgeTiers.map((tier) => (
                  <div 
                    key={tier.name}
                    className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                      selectedTiers.includes(tier.name) 
                        ? 'border-middle-blue bg-middle-blue/5' 
                        : 'border-gray-200'
                    }`}
                    onClick={() => handleTierToggle(tier.name)}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Checkbox 
                        checked={selectedTiers.includes(tier.name)}
                        onChange={() => handleTierToggle(tier.name)}
                      />
                      {badgeImages[tier.name] ? (
                        <img 
                          src={badgeImages[tier.name]} 
                          alt={tier.name}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                      )}
                      <span className="font-medium text-sm">{tier.name === 'No Badge' ? 'No Badge' : `${tier.name} Badge`}</span>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Holdings:</span>
                        <span>{getThresholdDisplay(tier.name, tier.audience)} $DHB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CPM:</span>
                        <Badge variant="outline" className="text-xs">${tier.cpm.toFixed(2)}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:self-end">
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                <Button variant="outline">Save as Draft</Button>
                <Button className="bg-middle-blue hover:bg-middle-blue/90 text-white">
                  Launch Campaign
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Partnership Promotional Section */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Launch Partnership
            </Badge>
          </div>
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Handshake className="w-6 h-6 text-primary" />
            Partner with DeHub for Our Launch
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Join forces and amplify both our brands with exclusive co-marketing opportunities
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Partnership Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Early access to revolutionary POVR targeting technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Featured placement as exclusive launch partner</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Joint press releases and co-marketing campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Access to our growing verified user community</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Revenue sharing on collaborative campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Promote to a holder base which saw a peak all time high of over $500,000,000 FDV</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Why Partner Now?
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h4 className="font-medium mb-2">First-Mover Advantage</h4>
                  <p className="text-sm text-muted-foreground">
                    Be among the first brands to leverage blockchain-verified audience targeting
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <h4 className="font-medium mb-2">Brand Association</h4>
                  <p className="text-sm text-muted-foreground">
                    Align your brand with cutting-edge Web3 innovation and technology
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <h4 className="font-medium mb-2">Mutual Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Grow together through cross-promotion and shared audiences
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-4 border-t">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={() => window.open('https://forms.google.com/create', '_blank')}
            >
              <Handshake className="w-5 h-5 mr-2" />
              Become a Launch Partner
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Limited partnership slots available for our official launch
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampaignCreator;
