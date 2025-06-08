
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TrendingUp, Coins, Settings, Users, Shield, Zap, Eye, Infinity } from 'lucide-react';
import BadgeFlowchart from '@/components/BadgeFlowchart';
import TippingFlowchart from '@/components/TippingFlowchart';
import ModerationFlowchart from '@/components/ModerationFlowchart';

const Dapp = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-royal-blue mb-4">DeHub DApp</h1>
        <p className="text-lg text-royal-blue/80 leading-relaxed">
          The DeHub DApp is a comprehensive decentralized application that brings together content creation, 
          social networking, and blockchain technology in one seamless platform.
        </p>
      </div>

      <Separator className="bg-sky-blue/30" />

      {/* Upload Section */}
      <section id="upload" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Upload</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-middle-blue" />
                <span>Content Types</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-royal-blue/80">
                <li>• Videos (MP4, AVI, MOV)</li>
                <li>• Images (JPG, PNG, GIF)</li>
                <li>• Audio (MP3, WAV)</li>
                <li>• Documents (PDF, TXT)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-middle-blue" />
                <span>Monetization</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-royal-blue/80">
                <li>• Set content prices</li>
                <li>• Subscription models</li>
                <li>• Pay-per-view options</li>
                <li>• Free content support</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-middle-blue" />
                <span>Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-royal-blue/80">
                <li>• IPFS distributed storage</li>
                <li>• Blockchain verification</li>
                <li>• Content encryption</li>
                <li>• Ownership protection</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Tokenised Content Section */}
      <section id="tokenised-content" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Tokenised Content & Fractionalised Ownership</h2>
        </div>
        
        <div className="bg-gradient-to-br from-sky-blue/10 to-middle-blue/10 p-6 rounded-lg border border-sky-blue/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-royal-blue">Content Tokenization</h3>
              <ul className="space-y-2 text-royal-blue/80">
                <li>• Transform content into NFTs</li>
                <li>• Unique blockchain certificates</li>
                <li>• Provable ownership records</li>
                <li>• Transferable digital assets</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-royal-blue">Fractional Ownership</h3>
              <ul className="space-y-2 text-royal-blue/80">
                <li>• Split content ownership</li>
                <li>• Multiple stakeholder profits</li>
                <li>• Democratic content decisions</li>
                <li>• Shared revenue streams</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-middle-blue" />
                <span>Smart Contracts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-royal-blue/80 mb-4">
                Automated revenue distribution and ownership management through blockchain smart contracts.
              </p>
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Automated Payments</Badge>
                <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Transparent Rules</Badge>
                <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Immutable Contracts</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-middle-blue" />
                <span>Community Ownership</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-royal-blue/80 mb-4">
                Enable community participation in content ownership and decision-making processes.
              </p>
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Voting Rights</Badge>
                <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Profit Sharing</Badge>
                <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Governance</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Profile Customization Section */}
      <section id="profile-customization" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Profile Customization</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Personal Branding</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-royal-blue mb-2">Visual Identity</h4>
                    <ul className="space-y-1 text-royal-blue/80 text-sm">
                      <li>• Custom profile pictures and banners</li>
                      <li>• Color scheme personalization</li>
                      <li>• Theme customization options</li>
                      <li>• Layout preference settings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Content Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-royal-blue mb-2">Portfolio Management</h4>
                    <ul className="space-y-1 text-royal-blue/80 text-sm">
                      <li>• Content categorization</li>
                      <li>• Featured content sections</li>
                      <li>• Custom playlists and collections</li>
                      <li>• Analytics dashboard integration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Explore Page Section */}
      <section id="explore-page" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Explore Page</h2>
        </div>

        <div className="bg-gradient-to-br from-sky-blue/10 to-middle-blue/10 p-6 rounded-lg border border-sky-blue/20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-royal-blue">Content Discovery</h3>
              <ul className="space-y-2 text-royal-blue/80 text-sm">
                <li>• Trending content algorithms</li>
                <li>• Personalized recommendations</li>
                <li>• Category-based browsing</li>
                <li>• Advanced search filters</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-royal-blue">Creator Spotlight</h3>
              <ul className="space-y-2 text-royal-blue/80 text-sm">
                <li>• Featured creator profiles</li>
                <li>• Rising star showcases</li>
                <li>• Community picks</li>
                <li>• Editor's choice highlights</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-royal-blue">Social Features</h3>
              <ul className="space-y-2 text-royal-blue/80 text-sm">
                <li>• Community interactions</li>
                <li>• Social sharing options</li>
                <li>• Collaborative projects</li>
                <li>• User-generated challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Badge of Honor Section */}
      <section id="badge-of-honor" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Badge of Honor</h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-royal-blue/80 leading-relaxed">
            The Badge of Honor system recognizes and rewards valuable community contributions, 
            creating a reputation-based ecosystem that promotes quality content and positive interactions.
          </p>

          <div className="bg-plain-white/50 backdrop-blur-sm border border-sky-blue/20 rounded-lg p-6">
            <BadgeFlowchart />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Achievement Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-middle-blue rounded-full"></div>
                    <span className="text-royal-blue/80">Content Creator Excellence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-middle-blue rounded-full"></div>
                    <span className="text-royal-blue/80">Community Engagement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-middle-blue rounded-full"></div>
                    <span className="text-royal-blue/80">Platform Advocacy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-middle-blue rounded-full"></div>
                    <span className="text-royal-blue/80">Technical Contributions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Badge Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-middle-blue rounded-full"></div>
                    <span className="text-royal-blue/80">Enhanced profile visibility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-middle-blue rounded-full"></div>
                    <span className="text-royal-blue/80">Priority content promotion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-middle-blue rounded-full"></div>
                    <span className="text-royal-blue/80">Exclusive community access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-middle-blue rounded-full"></div>
                    <span className="text-royal-blue/80">Token rewards and bonuses</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Tipping Services Section */}
      <section id="tipping-services" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Tipping Services</h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-royal-blue/80 leading-relaxed">
            Enable direct creator support through our comprehensive tipping system, fostering a sustainable 
            creator economy built on community appreciation and value exchange.
          </p>

          <div className="bg-plain-white/50 backdrop-blur-sm border border-sky-blue/20 rounded-lg p-6">
            <TippingFlowchart />
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-middle-blue" />
                  <span>Instant Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-blue/80 text-sm">
                  Quick one-click tipping with predefined amounts for seamless creator support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-middle-blue" />
                  <span>Custom Amounts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-blue/80 text-sm">
                  Flexible tipping with custom amounts to match your appreciation level.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-middle-blue" />
                  <span>Secure Transactions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-blue/80 text-sm">
                  Blockchain-secured transactions ensuring safe and transparent value transfer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-middle-blue" />
                  <span>Community Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-blue/80 text-sm">
                  Collective tipping goals for community projects and creator milestones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Moderation Mining Section */}
      <section id="moderation-mining" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Moderation Mining</h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-royal-blue/80 leading-relaxed">
            Revolutionize content moderation through community-driven governance, where users are rewarded 
            for maintaining platform quality and safety standards.
          </p>

          <div className="bg-plain-white/50 backdrop-blur-sm border border-sky-blue/20 rounded-lg p-6">
            <ModerationFlowchart />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-middle-blue" />
                  <span>Decentralized Governance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-royal-blue/80 text-sm">
                    Community-driven content moderation with transparent voting mechanisms.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-middle-blue rounded-full"></div>
                      <span className="text-royal-blue/80 text-sm">Consensus-based decisions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-middle-blue rounded-full"></div>
                      <span className="text-royal-blue/80 text-sm">Democratic content policies</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-middle-blue" />
                  <span>Quality Assurance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-royal-blue/80 text-sm">
                    Multi-layer review system ensuring high-quality content standards.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-middle-blue rounded-full"></div>
                      <span className="text-royal-blue/80 text-sm">Peer review processes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-middle-blue rounded-full"></div>
                      <span className="text-royal-blue/80 text-sm">Automated flagging systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-middle-blue rounded-full"></div>
                      <span className="text-royal-blue/80 text-sm">Community reporting tools</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-middle-blue rounded-full"></div>
                      <span className="text-royal-blue/80 text-sm">Appeal and review mechanisms</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Live Streaming Section */}
      <section id="live-streaming" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Live Streaming</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Interactive Broadcasting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-royal-blue/80">
                  Engage your audience in real-time with high-quality streaming capabilities and interactive features.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">HD Quality</Badge>
                  <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Low Latency</Badge>
                  <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Multi-Platform</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Monetization Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-royal-blue/80">
                  Multiple revenue streams during live broadcasts including tips, subscriptions, and pay-per-view.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Live Tips</Badge>
                  <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Subscriber Only</Badge>
                  <Badge variant="secondary" className="bg-sky-blue/20 text-royal-blue">Paid Events</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Subscriptions Section */}
      <section id="subscriptions" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Subscriptions</h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-royal-blue/80 leading-relaxed">
            Build sustainable creator-audience relationships through flexible subscription models that provide 
            recurring revenue and exclusive content access.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-middle-blue" />
                  <span>Flexible Tiers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-blue/80 text-sm mb-3">
                  Create multiple subscription levels with varying benefits and pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-middle-blue" />
                  <span>Recurring Revenue</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-blue/80 text-sm mb-3">
                  Predictable income streams through automated monthly or yearly payments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-middle-blue" />
                  <span>Exclusive Access</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-blue/80 text-sm mb-3">
                  Subscriber-only content, early access, and premium community features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Messaging Section */}
      <section id="messaging" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Messaging</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-middle-blue" />
                <span>Direct Communication</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-royal-blue/80 text-sm">
                  Secure, encrypted messaging between creators and their audience.
                </p>
                <ul className="space-y-1 text-royal-blue/80 text-sm">
                  <li>• End-to-end encryption</li>
                  <li>• File sharing capabilities</li>
                  <li>• Group messaging support</li>
                  <li>• Message scheduling</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-middle-blue" />
                <span>Smart Filtering</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-royal-blue/80 text-sm">
                  Advanced filtering and management tools for high-volume creators.
                </p>
                <ul className="space-y-1 text-royal-blue/80 text-sm">
                  <li>• Automated spam detection</li>
                  <li>• Priority message sorting</li>
                  <li>• Custom response templates</li>
                  <li>• Subscriber tier filtering</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-sky-blue/30" />

      {/* Fee Tier System Section */}
      <section id="fee-tier-system" className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-8 bg-middle-blue rounded-full"></div>
          <h2 className="text-3xl font-bold text-royal-blue">Fee Tier System</h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-royal-blue/80 leading-relaxed">
            Dynamic fee structure that rewards active participation and long-term platform commitment, 
            ensuring fair and sustainable economics for all users.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-middle-blue" />
                  <span>Dynamic Pricing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-royal-blue/80 text-sm">
                    Transaction fees adjust based on user activity, platform loyalty, and token holdings.
                  </p>
                  <ul className="space-y-1 text-royal-blue/80 text-sm">
                    <li>• Activity-based discounts</li>
                    <li>• Token holder benefits</li>
                    <li>• Volume-based reductions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-middle-blue" />
                  <span>Transparent Structure</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-royal-blue/80 text-sm">
                    Clear, predictable fee structure with real-time calculations and no hidden charges.
                  </p>
                  <ul className="space-y-1 text-royal-blue/80 text-sm">
                    <li>• Real-time fee preview</li>
                    <li>• Detailed breakdowns</li>
                    <li>• Historical fee tracking</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="border-sky-blue/20 bg-plain-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Fee Tiers Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-royal-blue/80">Bronze (0-100 transactions)</span>
                      <span className="font-semibold text-royal-blue">3.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-royal-blue/80">Silver (101-500 transactions)</span>
                      <span className="font-semibold text-royal-blue">2.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-royal-blue/80">Gold (501+ transactions)</span>
                      <span className="font-semibold text-royal-blue">2.0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-royal-blue/80">Diamond (Token holders)</span>
                      <span className="font-semibold text-royal-blue">1.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dapp;
