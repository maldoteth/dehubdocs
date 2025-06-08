
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BadgeFlowchart } from '@/components/BadgeFlowchart';

const Dapp = () => {
  const feeReductions = [
    { badge: "No Badge", threshold: "< 10,000 $DHB", fee: "10.00%", color: "bg-gray-300", image: null },
    { badge: "Crab Badge", threshold: "10,000+ $DHB", fee: "9.31%", color: "bg-orange-500", image: "/lovable-uploads/60bc125c-8efd-4058-9e12-7ca393df4fce.png" },
    { badge: "Lobster Badge", threshold: "25k+ $DHB", fee: "8.62%", color: "bg-red-500", image: "/lovable-uploads/2c7200c2-681e-4499-863b-ea24fdbdb70c.png" },
    { badge: "Piranha Badge", threshold: "50k+ $DHB", fee: "7.93%", color: "bg-purple-500", image: "/lovable-uploads/38387f75-fd38-4380-9588-1f19f68d8435.png" },
    { badge: "Tortoise Badge", threshold: "100k+ $DHB", fee: "7.24%", color: "bg-green-600", image: "/lovable-uploads/fc47a759-390a-4f41-ba96-5bc0066e82b9.png" },
    { badge: "Cobra Badge", threshold: "250k+ $DHB", fee: "6.55%", color: "bg-gray-800", image: "/lovable-uploads/b3306c99-31b8-4bfc-bc25-f73abc68fc38.png" },
    { badge: "Octopus Badge", threshold: "500k+ $DHB", fee: "5.86%", color: "bg-blue-600", image: "/lovable-uploads/8fcbb3f6-223d-4e2f-9d82-30082a175491.png" },
    { badge: "Crocodile Badge", threshold: "1m+ $DHB", fee: "5.17%", color: "bg-green-800", image: "/lovable-uploads/c84eee0a-97c7-4938-9b9c-c991c802593e.png" },
    { badge: "Dolphin Badge", threshold: "2m+ $DHB", fee: "4.48%", color: "bg-cyan-500", image: "/lovable-uploads/4558c158-75d9-40fc-adfa-41125344a48e.png" },
    { badge: "Tiger Shark Badge", threshold: "3m+ $DHB", fee: "3.79%", color: "bg-slate-600", image: "/lovable-uploads/6be493f1-51b4-481b-9ca1-340c030b2ef8.png" },
    { badge: "Killer Whale Badge", threshold: "5m+ $DHB", fee: "3.10%", color: "bg-gray-900", image: "/lovable-uploads/fcc288eb-67d7-49a0-b561-94bb5d1b8896.png" },
    { badge: "Great White Shark Badge", threshold: "10m+ $DHB", fee: "2.41%", color: "bg-blue-800", image: "/lovable-uploads/dfcc3420-f654-486b-bc94-f84f0209ba5c.png" },
    { badge: "Blue Whale Badge", threshold: "25m+ $DHB", fee: "1.72%", color: "bg-indigo-700", image: "/lovable-uploads/7f234add-b739-40e4-b315-e712af2be68d.png" },
    { badge: "Megalodon Badge", threshold: "50m+ $DHB", fee: "1.00%", color: "bg-purple-800", image: "/lovable-uploads/9282e1c6-fa68-4b7c-b3cd-22d860df35af.png" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">DeHub Dapp</h1>
        <p className="text-lg text-muted-foreground">
          The DeHub dapp is the heart of the ecosystem - a comprehensive social platform that combines community interaction, content creation, and tokenized engagement.
        </p>
      </div>

      {/* Community Hub Section */}
      <section id="community-hub">
        <h2 className="text-2xl font-semibold mb-4">Community Hub</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🏠</span>
                Personal Profiles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Create and customize your unique DeHub profile with:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Profile pictures and banners
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Bio and social links
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Achievement badges display
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Activity timeline
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💬</span>
                Community Forums
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Engage in meaningful discussions across various topics:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  General discussions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Technical support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Feature requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Community events
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tokenised Content Section */}
      <section id="tokenised-content">
        <h2 className="text-2xl font-semibold mb-4">Tokenised Content</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📸</span>
                Photo Uploads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Share your visual stories and memories:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  High-resolution image support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Multiple format compatibility
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Metadata preservation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Album organization
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎥</span>
                Video Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Upload and share video content:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  4K video support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Streaming optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Subtitle support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Chapter navigation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📄</span>
                Documents & Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Share written content and documents:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Rich text editor
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Document previews
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Version control
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Collaborative editing
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🪙</span>
              Content Monetization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Turn your content into income through various monetization methods:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Revenue Streams</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Pay-per-view content
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Subscription-based access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Tip-based earnings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Sponsored content
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Creator Benefits</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Direct creator payments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Revenue analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Fan engagement tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Cross-platform promotion
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Fee Tier System Section */}
      <section id="fee-tier-system">
        <h2 className="text-2xl font-semibold mb-4">Fee Tier System</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              Platform Fee Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Platform fees are reduced based on your badge tier. Higher tiers enjoy significantly lower fees for all transactions and content monetization.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg font-semibold">
                <span>Badge Tier</span>
                <span>$DHB Threshold</span>
                <span>Platform Fee</span>
              </div>
              
              <div className="space-y-2">
                {feeReductions.map((tier, index) => (
                  <div key={tier.badge} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                    <div className="flex items-center gap-3">
                      {tier.image ? (
                        <img 
                          src={tier.image} 
                          alt={tier.badge}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      )}
                      <div className="flex flex-col">
                        <span className="font-medium">{tier.badge}</span>
                        <span className="text-sm text-muted-foreground">{tier.threshold}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{tier.fee}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">How Fee Reduction Works</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Standard platform fee: 10%</li>
                <li>• Each badge tier reduces fees by 0.69%</li>
                <li>• Maximum reduction: 9% (down to 1% for Megalodons)</li>
                <li>• Fees apply to all monetized content and transactions</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Social Features Section */}
      <section id="social-features">
        <h2 className="text-2xl font-semibold mb-4">Social Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                Social Interactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Build meaningful connections through:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Follow/unfollow users
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Like and comment on posts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Share content across the platform
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Direct messaging system
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Achievement System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Earn recognition through the badge system:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Token holding milestones
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Community participation rewards
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Content creation achievements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Special event badges
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content Discovery Section */}
      <section id="content-discovery">
        <h2 className="text-2xl font-semibold mb-4">Content Discovery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                Smart Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  AI-powered content recommendations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Advanced filtering options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Tag-based discovery
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📈</span>
                Trending Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Daily trending posts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Weekly highlights
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Category-specific trends
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Personalized Feed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Interest-based curation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Following activity updates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Customizable preferences
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Monetization Section */}
      <section id="monetization">
        <h2 className="text-2xl font-semibold mb-4">Monetization</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💎</span>
                Premium Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Unlock enhanced capabilities:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Priority content placement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Advanced analytics dashboard
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Custom profile themes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Exclusive community access
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                Reward System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Earn tokens through platform activity:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Daily activity bonuses
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Content creation rewards
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Community participation incentives
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Referral program benefits
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section id="privacy-security">
        <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Your data security is our priority:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  End-to-end encryption
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  GDPR compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Secure wallet integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Regular security audits
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                Privacy Controls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Control your privacy settings:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Content visibility settings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Anonymous browsing options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Data export capabilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Account deletion tools
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mobile Experience Section */}
      <section id="mobile-experience">
        <h2 className="text-2xl font-semibold mb-4">Mobile Experience</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Native Apps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  iOS and Android support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Offline content access
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Push notifications
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Optimized Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Fast loading times
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Smooth animations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Battery optimization
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Mobile-First Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Responsive interface
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Touch-optimized controls
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Adaptive layouts
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badge System Visualization */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Badge System Overview</h2>
        <Card>
          <CardHeader>
            <CardTitle>Achievement Progression</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              The DeHub badge system rewards community participation and token holding. Each badge tier unlocks new benefits and reduced platform fees.
            </p>
            <BadgeFlowchart />
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Dapp;
