
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Video, 
  Users, 
  Coins, 
  Play, 
  Heart, 
  MessageCircle, 
  Share2, 
  Star, 
  Crown, 
  Zap, 
  TrendingUp, 
  Shield, 
  Globe,
  Bot,
  Sparkles,
  BarChart3,
  DollarSign,
  Languages,
  Target,
  Brain,
  Lightbulb,
  Wand2,
  Clock,
  Eye,
  PieChart,
  LineChart,
  Calculator,
  Wallet,
  CreditCard,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Settings,
  Filter,
  Search,
  RefreshCw,
  Camera,
  Edit3,
  Megaphone,
  Calendar,
  Bell,
  Trophy,
  Vote
} from 'lucide-react';

const Dapp = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">DeHub dApp</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          The DeHub decentralized application is a comprehensive platform that combines social media, content creation, gaming, and cryptocurrency in one seamless experience. Built on blockchain technology, it empowers creators and users to earn, engage, and build communities in the Web3 ecosystem.
        </p>
      </div>

      {/* Overview Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Video className="w-6 h-6 text-blue-600" />
            <span>Platform Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            DeHub represents the next evolution of social media platforms, where every interaction has value and users are rewarded for their participation. Our dApp integrates multiple features into a unified ecosystem that benefits both creators and their audiences.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">For Creators</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Monetize content through tips, subscriptions, and NFTs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>Build loyal communities with reward mechanisms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>Maintain content ownership and control</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-purple-500" />
                  <span>Reach global audiences without restrictions</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">For Users</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <Coins className="w-4 h-4 text-yellow-500" />
                  <span>Earn rewards for engagement and participation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Connect with like-minded communities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Play className="w-4 h-4 text-red-500" />
                  <span>Access exclusive content and experiences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span>Support favorite creators directly</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-500" />
            <span>Key Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Video className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Content Streaming</h3>
                  <p className="text-sm text-slate-600 mt-1">High-quality video streaming with integrated monetization tools and real-time audience interaction.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Coins className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Cryptocurrency Integration</h3>
                  <p className="text-sm text-slate-600 mt-1">Native DHB token integration for tips, subscriptions, and platform rewards with seamless wallet connectivity.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Social Features</h3>
                  <p className="text-sm text-slate-600 mt-1">Advanced social networking with communities, messaging, and collaborative content creation tools.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Play className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Gaming Integration</h3>
                  <p className="text-sm text-slate-600 mt-1">Built-in arcade games with leaderboards, tournaments, and play-to-earn mechanics.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Crown className="w-5 h-5 text-gold mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Premium Subscriptions</h3>
                  <p className="text-sm text-slate-600 mt-1">Tiered subscription model offering exclusive content, features, and community access.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Decentralized Security</h3>
                  <p className="text-sm text-slate-600 mt-1">Blockchain-based security ensuring content ownership, transparent transactions, and user privacy.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monetization Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Coins className="w-6 h-6 text-yellow-500" />
            <span>Monetization Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border rounded-lg">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Tipping System</h3>
              <p className="text-sm text-slate-600">Real-time cryptocurrency tips with instant notifications and customizable tip amounts.</p>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Crown className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Subscriptions</h3>
              <p className="text-sm text-slate-600">Recurring subscription model with exclusive content access and community privileges.</p>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Zap className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Premium Content</h3>
              <p className="text-sm text-slate-600">Pay-per-view content with advanced DRM protection and flexible pricing options.</p>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-800 mb-3">Revenue Sharing Model</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-600 mb-2"><strong>Creators earn:</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• 90% of direct tips and donations</li>
                  <li>• 85% of subscription revenue</li>
                  <li>• 80% of premium content sales</li>
                  <li>• 75% of advertising revenue share</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2"><strong>Platform benefits:</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Infrastructure and hosting</li>
                  <li>• Payment processing</li>
                  <li>• Content delivery network</li>
                  <li>• Community moderation tools</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Creation Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Video className="w-6 h-6 text-purple-500" />
            <span>Content Creation Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Live Streaming</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center space-x-2">
                    <Video className="w-4 h-4 text-red-500" />
                    <span>4K video quality with adaptive bitrate streaming</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-blue-500" />
                    <span>Real-time chat with emoji reactions and moderation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>Multi-host streaming for collaborative content</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Share2 className="w-4 h-4 text-green-500" />
                    <span>Cross-platform sharing and embedding tools</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Content Management</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center space-x-2">
                    <Play className="w-4 h-4 text-red-500" />
                    <span>Video library with categorization and tagging</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span>Analytics dashboard with detailed metrics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span>Content protection with watermarking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-purple-500" />
                    <span>Multi-language support and subtitles</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-3">Professional Creator Features</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <BarChart3 className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">Advanced Analytics</p>
                  <p className="text-xs text-slate-600">Detailed performance metrics and audience insights</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">Content Scheduling</p>
                  <p className="text-xs text-slate-600">Plan and automate content publishing</p>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">Community Management</p>
                  <p className="text-xs text-slate-600">Tools for managing followers and subscribers</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gaming Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="w-6 h-6 text-green-500" />
            <span>Gaming & Entertainment</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            DeHub's integrated gaming platform offers a unique blend of entertainment and earning opportunities, featuring skill-based games, tournaments, and community challenges.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Available Games</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Arcade Games</p>
                    <p className="text-sm text-slate-600">Classic and modern arcade-style games</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Prediction Markets</p>
                    <p className="text-sm text-slate-600">Forecast outcomes and earn rewards</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Skill Challenges</p>
                    <p className="text-sm text-slate-600">Compete in skill-based competitions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Play-to-Earn Features</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <Coins className="w-4 h-4 text-yellow-500" />
                  <span>Earn DHB tokens for gameplay achievements</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-gold" />
                  <span>Tournament prizes and leaderboard rewards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Community challenges with shared rewards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-purple-500" />
                  <span>Achievement system with milestone bonuses</span>
                </li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Fair Play Guarantee:</strong> All games use provably fair algorithms and blockchain-verified randomness to ensure transparent and fair gameplay for all users.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-blue-500" />
            <span>Community & Social Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Social Networking</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                  <span>Direct messaging with multimedia support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span>Community groups and forums</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Share2 className="w-4 h-4 text-green-500" />
                  <span>Content sharing and collaboration tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>Follow system with notification preferences</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Engagement Tools</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Reaction system with custom emojis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Crown className="w-4 h-4 text-gold" />
                  <span>User reputation and badge system</span>
                </li>
                <li className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>Trending content discovery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span>Global and local community feeds</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-800 mb-3">Community Governance</h3>
            <p className="text-slate-600 mb-4">
              DeHub operates on a decentralized governance model where community members can propose and vote on platform improvements, content policies, and feature developments.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <Vote className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-700">Proposal System</p>
                <p className="text-xs text-slate-600">Submit and vote on platform changes</p>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-700">Community Councils</p>
                <p className="text-xs text-slate-600">Elected representatives for governance</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-700">Moderation</p>
                <p className="text-xs text-slate-600">Community-driven content moderation</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Tiers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Crown className="w-6 h-6 text-gold" />
            <span>Subscription Tiers</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            DeHub offers flexible subscription options designed to cater to different user needs and engagement levels, from casual users to professional content creators.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Tier */}
            <div className="border rounded-lg p-6 bg-slate-50">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Free</h3>
                <p className="text-2xl font-bold text-slate-900">$0<span className="text-sm font-normal text-slate-600">/month</span></p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Basic content viewing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Limited game access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Community participation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Basic tipping features</span>
                </li>
              </ul>
            </div>
            
            {/* Premium Tier */}
            <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                Most Popular
              </Badge>
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Premium</h3>
                <p className="text-2xl font-bold text-slate-900">$9.99<span className="text-sm font-normal text-slate-600">/month</span></p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>All free features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Premium content access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Advanced gaming features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Higher earning rates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Priority customer support</span>
                </li>
              </ul>
            </div>
            
            {/* Creator Tier */}
            <div className="border rounded-lg p-6 bg-purple-50">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Creator Pro</h3>
                <p className="text-2xl font-bold text-slate-900">$29.99<span className="text-sm font-normal text-slate-600">/month</span></p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>All premium features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Content monetization tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Custom branding options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Dedicated support manager</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-800 mb-3">Enterprise Solutions</h3>
            <p className="text-slate-600 mb-4">
              For businesses, organizations, and high-volume creators, we offer custom enterprise solutions with dedicated infrastructure, advanced APIs, and personalized support.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• White-label platform options</li>
                <li>• Custom integration support</li>
                <li>• Dedicated server resources</li>
                <li>• Advanced security features</li>
              </ul>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• 24/7 priority support</li>
                <li>• Custom analytics dashboards</li>
                <li>• API access and SDKs</li>
                <li>• Compliance and audit support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Messages Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            <span>Messages</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            DeHub's advanced messaging system provides secure, encrypted communication between users while offering unique monetization opportunities and privacy controls that set it apart from traditional social platforms.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Core Messaging Features</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">Direct & Group Messaging</p>
                    <p className="text-sm">Send private messages to any user or create group chats with multiple participants. Support for text, images, videos, and voice messages.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">End-to-End Encryption</p>
                    <p className="text-sm">All messages are encrypted and secure - only you and your contacts can read them. Complete privacy guaranteed with blockchain-verified security.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">Paid Direct Messages</p>
                    <p className="text-sm">Send paid DMs that appear at the top of recipients' message lists, perfect for important communications or promotional content.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Advanced Privacy Controls</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <Bell className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">Do Not Disturb Modes</p>
                    <p className="text-sm">Comprehensive privacy settings to block unwanted messages, set availability status, and control who can contact you.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">User Blocking & Filtering</p>
                    <p className="text-sm">Advanced blocking features with keyword filters, automated spam detection, and customizable message filtering rules.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-indigo-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-800">Message Status Controls</p>
                    <p className="text-sm">Control read receipts, typing indicators, and online status visibility for complete communication privacy.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-800 mb-4">Monetized Content Sharing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Paywall Protected Media</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Share photos, videos, and other content locked behind customizable paywalls. Recipients can view previews but must pay to access full content.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Custom pricing per message</li>
                  <li>• Preview thumbnails available</li>
                  <li>• Instant cryptocurrency payments</li>
                  <li>• Revenue tracking and analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Premium Message Features</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Enhanced messaging capabilities for creators and professionals to monetize their communications and provide value to subscribers.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Exclusive subscriber-only messages</li>
                  <li>• Timed access to content</li>
                  <li>• Bulk messaging to followers</li>
                  <li>• Message engagement analytics</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              Security & Trust Features
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-slate-700 mb-1">Message Verification</p>
                <p className="text-xs text-slate-600">Blockchain verification ensures message authenticity and prevents tampering</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 mb-1">Identity Verification</p>
                <p className="text-xs text-slate-600">Optional identity verification badges for trusted communications</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 mb-1">Audit Trail</p>
                <p className="text-xs text-slate-600">Complete message history with cryptographic proof of delivery and reading</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fee Tier System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-green-500" />
            <span>Fee Tier System</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            DeHub implements a dynamic fee structure that rewards active participation and long-term commitment while ensuring sustainable platform operations.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg bg-bronze-50">
              <div className="w-12 h-12 bg-bronze-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-bronze-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Bronze Tier</h3>
              <p className="text-xs text-slate-600 mb-2">0-1,000 DHB held</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• Standard transaction fees</li>
                <li>• Basic support</li>
                <li>• Limited premium features</li>
              </ul>
            </div>
            
            <div className="text-center p-4 border rounded-lg bg-silver-50">
              <div className="w-12 h-12 bg-silver-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-silver-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Silver Tier</h3>
              <p className="text-xs text-slate-600 mb-2">1,001-10,000 DHB held</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• 25% reduced fees</li>
                <li>• Priority support</li>
                <li>• Enhanced features access</li>
              </ul>
            </div>
            
            <div className="text-center p-4 border-2 border-gold rounded-lg bg-gold-50">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Crown className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Gold Tier</h3>
              <p className="text-xs text-slate-600 mb-2">10,001-100,000 DHB held</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• 50% reduced fees</li>
                <li>• VIP support</li>
                <li>• Premium features included</li>
              </ul>
            </div>
            
            <div className="text-center p-4 border-2 border-purple-500 rounded-lg bg-purple-50">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Diamond Tier</h3>
              <p className="text-xs text-slate-600 mb-2">100,000+ DHB held</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• 75% reduced fees</li>
                <li>• Dedicated manager</li>
                <li>• All features unlocked</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-800 mb-3">Additional Benefits by Tier</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Platform Benefits</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Increased daily earning limits</li>
                  <li>• Higher referral commission rates</li>
                  <li>• Early access to new features</li>
                  <li>• Exclusive community access</li>
                  <li>• Enhanced analytics dashboards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Gaming Benefits</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Increased tournament entry limits</li>
                  <li>• Higher reward multipliers</li>
                  <li>• Exclusive game modes</li>
                  <li>• Priority matchmaking</li>
                  <li>• Special achievement rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Toolkits Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="w-6 h-6 text-purple-500" />
            <span>AI Toolkits</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center mb-6">
            <img 
              src="/lovable-uploads/baaad013-6b5f-46e1-b66b-2a2bc5ec184e.png" 
              alt="DeHub AI Interface" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              🤖 <strong>DeHub users will soon have their very own uncensored AI assistant and full toolkit suite directly in-app.</strong>
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our revolutionary AI integration represents the future of content creation and platform automation. Designed specifically for creators, influencers, and content professionals, DeHub's AI toolkit will transform how users interact with their audience, manage their content, and grow their presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                Content Creation & Enhancement
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <Edit3 className="w-4 h-4 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Intelligent Content Creation</p>
                    <p className="text-sm">AI-powered writing assistance for posts, captions, descriptions, and video scripts. Generate engaging content ideas based on trending topics and audience preferences.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Camera className="w-4 h-4 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Visual Content Optimization</p>
                    <p className="text-sm">Automatic image enhancement, thumbnail generation, and video editing suggestions. AI-powered filters and effects tailored to your brand aesthetic.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Wand2 className="w-4 h-4 text-purple-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Style Consistency</p>
                    <p className="text-sm">Maintain consistent brand voice and visual style across all content. AI learns your preferences and suggests improvements to match your established aesthetic.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                <Target className="w-5 h-5 text-green-500 mr-2" />
                Automated Engagement & Growth
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <Heart className="w-4 h-4 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Smart Engagement Automation</p>
                    <p className="text-sm">Automatically like, comment, and tip content that aligns with your interests and engagement strategy. Customizable interaction patterns and authenticity filters.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Coins className="w-4 h-4 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Intelligent Tipping System</p>
                    <p className="text-sm">AI-driven tipping automation based on content quality, creator relationships, and engagement metrics. Maximize your tipping impact while staying within budget.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Audience Growth Optimization</p>
                    <p className="text-sm">Identify and connect with potential followers based on content preferences, engagement patterns, and community interactions. Organic growth strategies powered by AI.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-500 mr-2" />
              Finance Management & Analytics
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-slate-800 flex items-center">
                  <Wallet className="w-4 h-4 text-blue-500 mr-2" />
                  Payment Intelligence
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Automated payment processing and reconciliation</li>
                  <li>• Smart contract execution for recurring payments</li>
                  <li>• Multi-currency conversion and optimization</li>
                  <li>• Tax calculation and reporting assistance</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-800 flex items-center">
                  <PieChart className="w-4 h-4 text-purple-500 mr-2" />
                  Revenue Analytics
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Real-time earnings tracking and forecasting</li>
                  <li>• Revenue stream analysis and optimization</li>
                  <li>• Subscriber value and lifetime calculations</li>
                  <li>• Performance benchmarking against peers</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-800 flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                  Investment Insights
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• DHB token investment recommendations</li>
                  <li>• Portfolio diversification suggestions</li>
                  <li>• Market trend analysis and alerts</li>
                  <li>• Risk assessment and management tools</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                <LineChart className="w-5 h-5 text-blue-500 mr-2" />
                Performance Monitoring & Trends
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <Eye className="w-4 h-4 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Real-time Analytics Dashboard</p>
                    <p className="text-sm">Comprehensive performance tracking with views, engagement rates, subscriber growth, and revenue metrics. AI-powered insights and actionable recommendations.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="w-4 h-4 text-purple-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Predictive Trend Analysis</p>
                    <p className="text-sm">Identify emerging trends before they peak. AI analyzes global content patterns, audience behavior, and market movements to provide early trend alerts.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-4 h-4 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Competitive Intelligence</p>
                    <p className="text-sm">Monitor competitor performance, content strategies, and audience engagement. Benchmark your growth against similar creators in your niche.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                <Languages className="w-5 h-5 text-orange-500 mr-2" />
                Global Reach & Communication
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <Globe className="w-4 h-4 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Multi-Language Content Translation</p>
                    <p className="text-sm">Instantly translate content, comments, and messages into over 100 languages. AI preserves context, tone, and cultural nuances for authentic communication.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MessageCircle className="w-4 h-4 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Cultural Adaptation</p>
                    <p className="text-sm">Adapt content for different cultural contexts and regional preferences. AI suggests modifications to ensure content resonates with global audiences.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-purple-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Global Community Building</p>
                    <p className="text-sm">Identify and connect with international audiences. AI helps bridge language barriers and cultural differences to build truly global communities.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <Brain className="w-5 h-5 text-purple-500 mr-2" />
              Advanced AI Capabilities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-slate-800">Machine Learning Personalization</h4>
                <p className="text-sm text-slate-600 mb-2">
                  The AI continuously learns from your preferences, audience behavior, and successful content patterns to provide increasingly personalized recommendations and automation.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Adaptive content scheduling based on audience activity</li>
                  <li>• Personalized growth strategies</li>
                  <li>• Custom automation workflows</li>
                  <li>• Intelligent A/B testing for optimization</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-800">Uncensored AI Assistant</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Unlike mainstream AI assistants, DeHub's AI operates without content restrictions, providing honest, unfiltered assistance for creators in all niches and industries.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• No content censorship or topic restrictions</li>
                  <li>• Adult content optimization capabilities</li>
                  <li>• Political and controversial topic assistance</li>
                  <li>• Complete creative freedom support</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-purple-50 p-8 rounded-lg border border-purple-200">
            <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">The Future is Automated</h3>
            <p className="text-lg text-purple-700 font-medium mb-4">The Future is on DeHub</p>
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
              As we move into an era where artificial intelligence becomes increasingly integrated into our daily workflows, 
              DeHub positions itself at the forefront of this revolution. Our AI toolkit doesn't just automate tasks—it 
              amplifies creativity, enhances human connection, and empowers creators to focus on what they do best: creating 
              amazing content and building meaningful communities.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-slate-500">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Coming Soon
              </span>
              <span className="flex items-center">
                <Bell className="w-4 h-4 mr-1" />
                Early Access Available
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Specifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-6 h-6 text-slate-500" />
            <span>Technical Specifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Platform Architecture</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>React Native mobile application</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Progressive Web App (PWA) support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Ethereum and Binance Smart Chain integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>IPFS distributed storage for content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>WebRTC for peer-to-peer streaming</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Security Features</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>End-to-end encryption for messages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Multi-signature wallet security</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Biometric authentication support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Smart contract audits and verification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>GDPR and privacy compliance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-800 mb-3">Performance Metrics</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">99.9%</p>
                <p className="text-sm text-slate-600">Uptime SLA</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">&lt;100ms</p>
                <p className="text-sm text-slate-600">API Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">4K</p>
                <p className="text-sm text-slate-600">Max Video Quality</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">Global</p>
                <p className="text-sm text-slate-600">CDN Coverage</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            <span>Getting Started</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            Ready to join the DeHub revolution? Getting started is simple and takes just a few minutes. Follow these steps to begin your journey in the decentralized content ecosystem.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg bg-blue-50">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Download & Install</h3>
              <p className="text-sm text-slate-600">
                Download the DeHub app from the App Store or Google Play, or access the web version directly through your browser.
              </p>
            </div>
            
            <div className="text-center p-6 border rounded-lg bg-green-50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Create Account</h3>
              <p className="text-sm text-slate-600">
                Sign up with your email or connect your existing wallet. Complete profile setup and verify your identity if desired.
              </p>
            </div>
            
            <div className="text-center p-6 border rounded-lg bg-purple-50">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Start Earning</h3>
              <p className="text-sm text-slate-600">
                Begin creating content, engaging with the community, or playing games to start earning DHB tokens immediately.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-slate-800 mb-3">New User Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <Coins className="w-4 h-4 text-yellow-500" />
                  <span>Welcome bonus of 100 DHB tokens</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>7-day premium features trial</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Priority community support</span>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>Curated content recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-gold" />
                  <span>Access to beginner tournaments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-green-500" />
                  <span>Multi-language onboarding support</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dapp;
