import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  DollarSign, 
  Users, 
  MessageCircle, 
  Star, 
  Shield, 
  Zap, 
  Globe, 
  Crown, 
  Heart,
  Bot,
  TrendingUp,
  BarChart3,
  Languages,
  Lightbulb,
  Workflow,
  Brain
} from "lucide-react";

const Dapp = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DeHub dApp Overview
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of decentralized content creation and social interaction with DeHub's comprehensive Web3 platform.
          </p>
        </div>

        {/* Core Features */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Content Creation & Sharing */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Upload className="h-5 w-5 text-blue-500" /> Content Creation & Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Upload, share, and discover a wide range of content, from posts to videos.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Monetization */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-500" /> Monetization
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Earn rewards through various monetization options, including tips and subscriptions.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Community Interaction */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-500" /> Community Interaction
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Connect with creators and fans through comments, likes, and direct messages.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Direct Messaging */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-orange-500" /> Direct Messaging
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Engage in private conversations with your favorite creators and friends.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Tipping */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" /> Tipping
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Show your appreciation by sending tips to support the content you love.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-500" /> Security
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Benefit from robust security measures to protect your data and privacy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web3 Integration */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" /> Web3 Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Seamlessly connect your wallet and interact with decentralized technologies.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Global Accessibility */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-500" /> Global Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Access DeHub from anywhere in the world and connect with a diverse community.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Exclusive Content */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Crown className="h-5 w-5 text-purple-500" /> Exclusive Content
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Unlock premium content and experiences through subscriptions and special offers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Focus */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Community Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Creator Support */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-blue-500" /> Creator Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Empowering creators with tools and resources to thrive on the platform.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Fan Engagement */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-500" /> Fan Engagement
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Fostering meaningful interactions between creators and their audience.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Collaborative Environment */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-500" /> Collaborative Environment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  Encouraging collaboration and co-creation among community members.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fee Tier System */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Fee Tier System</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            DeHub operates with a transparent fee tier system designed to reward active participants and contributors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Tier 1 */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-center">Tier 1</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Entry-level tier with standard platform access and basic features.
                </CardDescription>
                <ul className="list-disc list-inside mt-4">
                  <li>Standard transaction fees</li>
                  <li>Access to basic features</li>
                  <li>Community support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Tier 2 */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden border-2 border-blue-500">
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-center">Tier 2</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Mid-level tier with reduced fees and enhanced features for active users.
                </CardDescription>
                <ul className="list-disc list-inside mt-4">
                  <li>Reduced transaction fees</li>
                  <li>Enhanced features</li>
                  <li>Priority support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Tier 3 */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden border-2 border-green-500">
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-center">Tier 3</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Top-level tier with the lowest fees and exclusive benefits for top contributors.
                </CardDescription>
                <ul className="list-disc list-inside mt-4">
                  <li>Lowest transaction fees</li>
                  <li>Exclusive benefits</li>
                  <li>Dedicated support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Toolkits Section */}
        <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Bot className="h-16 w-16 text-blue-600" />
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
                  <Brain className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🤖 AI Toolkits
            </CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              DeHub users will soon have their very own uncensored AI assistant and comprehensive toolkit suite directly in-app. 
              Revolutionize your content creation and engagement with cutting-edge artificial intelligence.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* AI Assistant Image */}
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/44b65acf-4984-4b70-a31d-d380adbb9288.png" 
                alt="DeHub AI Assistant Interface" 
                className="rounded-lg shadow-lg max-w-full h-auto border border-border/50"
              />
            </div>

            {/* Core Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-6 w-6 text-yellow-500" />
                    <CardTitle className="text-xl">Content Creation & Optimization</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Generate engaging post ideas and captions tailored to your audience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Perfect your content with AI-powered editing and enhancement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Create compelling video scripts and storylines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Generate thumbnail designs and visual concepts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Optimize content for maximum engagement and reach</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Workflow className="h-6 w-6 text-purple-500" />
                    <CardTitle className="text-xl">Smart Automation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Automate engagement with intelligent commenting and liking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Set up smart tipping based on content performance metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Schedule optimal posting times for maximum visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Auto-respond to messages with personalized replies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span>Manage subscriber interactions efficiently</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-green-200 dark:border-green-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-6 w-6 text-green-500" />
                    <CardTitle className="text-xl">Finance & Payment Intelligence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Track earnings across all revenue streams in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Optimize pricing strategies with AI recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Automate payment processing and distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Generate detailed financial reports and tax summaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Predict revenue trends and growth opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-orange-500" />
                    <CardTitle className="text-xl">Analytics & Performance Monitoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Monitor engagement rates and audience growth patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Track trending topics and viral content opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Analyze competitor performance and market trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Generate comprehensive performance reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">•</span>
                      <span>Receive actionable insights for content improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Global Features */}
            <Card className="border border-cyan-200 dark:border-cyan-800 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/30 dark:to-blue-950/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Languages className="h-6 w-6 text-cyan-500" />
                  <CardTitle className="text-xl">Global Communication Suite</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Translation & Localization</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Real-time translation for 100+ languages</li>
                      <li>• Cultural context adaptation for global audiences</li>
                      <li>• Auto-generate localized content variations</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Content Clarification</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Simplify complex topics for broader appeal</li>
                      <li>• Enhance readability and comprehension</li>
                      <li>• Adapt tone for different demographics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Features */}
            <div className="bg-gradient-to-r from-violet-100 to-pink-100 dark:from-violet-950/50 dark:to-pink-950/50 rounded-lg p-6 border border-violet-200 dark:border-violet-800">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-violet-600" />
                Advanced AI Capabilities
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-violet-700 dark:text-violet-300">Predictive Analytics</h4>
                  <p className="text-xs text-muted-foreground">
                    Forecast trends, optimal posting times, and content performance before you publish.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-pink-700 dark:text-pink-300">Sentiment Analysis</h4>
                  <p className="text-xs text-muted-foreground">
                    Understand audience emotions and reactions to tailor your content strategy.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-300">Personalization Engine</h4>
                  <p className="text-xs text-muted-foreground">
                    Customize content recommendations for each individual follower automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="text-center space-y-4 pt-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                <Bot className="h-5 w-5" />
                The future is automated; the future is on DeHub.
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Experience unprecedented creative freedom with AI that understands your vision, amplifies your voice, 
                and helps you build meaningful connections with your global audience.
              </p>
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                Coming Soon - Beta Access Available
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Explore our development roadmap and upcoming features for DeHub.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Q3 2024 */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-center">Q3 2024</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Key milestones and features planned for the third quarter of 2024.
                </CardDescription>
                <ul className="list-disc list-inside mt-4">
                  <li>Mobile app launch</li>
                  <li>Enhanced analytics dashboard</li>
                  <li>Creator fund program</li>
                </ul>
              </CardContent>
            </Card>

            {/* Q4 2024 */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden border-2 border-blue-500">
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-center">Q4 2024</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Key milestones and features planned for the fourth quarter of 2024.
                </CardDescription>
                <ul className="list-disc list-inside mt-4">
                  <li>Web3 integration</li>
                  <li>Global accessibility</li>
                  <li>Exclusive content</li>
                </ul>
              </CardContent>
            </Card>

            {/* Q1 2025 */}
            <Card className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden border-2 border-green-500">
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-center">Q1 2025</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Key milestones and features planned for the first quarter of 2025.
                </CardDescription>
                <ul className="list-disc list-inside mt-4">
                  <li>AI-powered tools</li>
                  <li>Community expansion</li>
                  <li>Partnership programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-semibold mb-4">Join the DeHub Community Today!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of decentralized content creation and social interaction.
          </p>
          <Button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            Get Started Now
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Dapp;
