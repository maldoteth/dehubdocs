
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, DollarSign, Target, Plus, Eye } from 'lucide-react';
import CampaignCreator from '@/components/advertising/CampaignCreator';
import CampaignAnalytics from '@/components/advertising/CampaignAnalytics';
import BudgetCalculator from '@/components/advertising/BudgetCalculator';

const AdvertiserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const activeCampaigns = [
    { id: 1, name: 'Q4 Token Launch', status: 'Active', spend: '$2,450', impressions: '125K', ctr: '3.2%' },
    { id: 2, name: 'DeFi Protocol Beta', status: 'Active', spend: '$1,850', impressions: '89K', ctr: '4.1%' },
    { id: 3, name: 'NFT Collection Drop', status: 'Paused', spend: '$950', impressions: '45K', ctr: '2.8%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-royal-blue font-exo mb-2">Advertiser Dashboard</h1>
          <p className="text-royal-blue/80">Manage your POVR-powered advertising campaigns</p>
        </div>
        <Button 
          className="bg-middle-blue hover:bg-middle-blue/90 text-white"
          onClick={() => setActiveTab('create')}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spend</p>
                <p className="text-2xl font-bold text-royal-blue">$5,250</p>
              </div>
              <DollarSign className="w-8 h-8 text-middle-blue" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Impressions</p>
                <p className="text-2xl font-bold text-royal-blue">259K</p>
              </div>
              <Eye className="w-8 h-8 text-middle-blue" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg CTR</p>
                <p className="text-2xl font-bold text-royal-blue">3.4%</p>
              </div>
              <Target className="w-8 h-8 text-middle-blue" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">ROAS</p>
                <p className="text-2xl font-bold text-royal-blue">4.2x</p>
              </div>
              <TrendingUp className="w-8 h-8 text-middle-blue" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="create">Create Campaign</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="calculator">Budget Calculator</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeCampaigns.map((campaign) => (
                  <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold text-royal-blue">{campaign.name}</h3>
                      <p className="text-sm text-muted-foreground">Status: {campaign.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{campaign.spend}</p>
                      <p className="text-sm text-muted-foreground">{campaign.impressions} impressions • {campaign.ctr} CTR</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create">
          <CampaignCreator />
        </TabsContent>

        <TabsContent value="analytics">
          <CampaignAnalytics />
        </TabsContent>

        <TabsContent value="calculator">
          <BudgetCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvertiserDashboard;
