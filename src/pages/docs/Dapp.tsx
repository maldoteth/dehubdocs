
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Layers, Settings, Shield, Video, Eye, MessageCircle, Percent, Banknote } from "lucide-react";
import BadgeFlowchart from "@/components/BadgeFlowchart";
import TippingFlowchart from "@/components/TippingFlowchart";
import { OptimizedImage } from "@/components/OptimizedImage";

const Dapp = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">DeHub DApp</h1>
        <p className="text-xl text-gray-600">
          Welcome to the DeHub decentralized application - the future of content creation and community engagement.
        </p>
      </div>

      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Layers className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">DeHub DApp</h2>
              <p className="text-gray-600">Revolutionizing content creation through decentralization</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            DeHub is more than just a platform - it's a revolutionary ecosystem that empowers creators, 
            rewards genuine engagement, and builds sustainable communities through blockchain technology. 
            Experience true ownership of your content and direct monetization without intermediaries.
          </p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Decentralized Content</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                True ownership of your content with immutable blockchain storage. 
                No censorship, no takedowns, complete creative freedom.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Smart Rewards</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Earn tokens for quality content and genuine engagement. 
                Our AI-powered system rewards authentic interactions.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Video className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Multi-Media Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Share videos, images, text, and interactive content. 
                Support for all major formats with seamless streaming.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Creation */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Content Creation</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Create Without Limits</h3>
                <p className="text-gray-600 leading-relaxed">
                  DeHub provides creators with powerful tools to produce, edit, and share content across multiple formats. 
                  From short-form videos to long-form articles, live streams to interactive polls - express yourself freely.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Built-in editing tools and filters
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    High-quality video and image support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Real-time collaboration features
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Advanced privacy controls
                  </li>
                </ul>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/4558c158-75d9-40fc-adfa-41125344a48e.png"
                  alt="Content Creation Interface"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Badge System */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Achievement Badge System</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Earn badges and recognition for your contributions to the DeHub community. 
                Our comprehensive achievement system rewards various activities and milestones.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <BadgeFlowchart />
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Available Badges</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">Dynamic</div>
                  <div className="text-sm text-gray-600">Real-time Updates</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">NFT</div>
                  <div className="text-sm text-gray-600">Tradeable Assets</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tipping System */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Smart Tipping System</h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Support your favorite creators with our innovative tipping system. 
                Direct peer-to-peer transactions with minimal fees and instant settlements.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <TippingFlowchart />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">For Supporters</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      One-click tipping with multiple tokens
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Custom tip amounts and messages
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Anonymous or public contributions
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">For Creators</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Instant withdrawals to wallet
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Detailed analytics and insights
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Multi-currency support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Features */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Community Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <CardTitle>Decentralized Governance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Participate in platform decisions through our DAO structure. 
                Token holders vote on feature updates, policy changes, and community initiatives.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Active Proposals</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Voting Power</span>
                  <span className="font-semibold">Based on token holdings</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-green-600" />
                <CardTitle>Community Moderation</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Self-governing community with transparent moderation policies. 
                Reputation-based system ensures quality content and healthy discussions.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Community Moderators</span>
                  <span className="font-semibold">500+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Appeal Process</span>
                  <span className="font-semibold">24h response time</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Privacy & Security</h2>
        
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">End-to-End Encryption</h4>
                <p className="text-sm text-gray-600">
                  All communications and private content are encrypted using military-grade security protocols.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Privacy Controls</h4>
                <p className="text-sm text-gray-600">
                  Granular privacy settings let you control who sees your content and personal information.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Blockchain Security</h4>
                <p className="text-sm text-gray-600">
                  Immutable records and decentralized architecture ensure maximum security and transparency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Messaging System */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Secure Messaging</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Private Communications</h3>
                </div>
                <p className="text-gray-600">
                  Connect with other users through our secure, encrypted messaging system. 
                  Support for text, voice, video calls, and file sharing.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MessageCircle className="h-4 w-4" />
                    <span>End-to-end encrypted messages</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Video className="h-4 w-4" />
                    <span>HD video and voice calls</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span>Self-destructing messages</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Group Channels</h3>
                <p className="text-gray-600">
                  Create and join community channels based on interests, projects, or topics. 
                  Moderated spaces for meaningful discussions and collaborations.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">10,000+</div>
                      <div className="text-sm text-gray-600">Active Channels</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">24/7</div>
                      <div className="text-sm text-gray-600">Community Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Fee Tier System */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Fee Tier System</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-gray-200">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Percent className="h-6 w-6 text-gray-600" />
              </div>
              <CardTitle className="text-xl">Basic Tier</CardTitle>
              <CardDescription>For casual users and new creators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2.5%</div>
                <div className="text-sm text-gray-600">Transaction fee</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Percent className="h-4 w-4" />
                  <span>Standard tipping fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Basic security features</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Community support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-blue-900">Premium Tier</CardTitle>
              <CardDescription>For active creators and businesses</CardDescription>
              <Badge className="bg-blue-100 text-blue-800">Most Popular</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">1.5%</div>
                <div className="text-sm text-gray-600">Transaction fee</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Percent className="h-4 w-4 text-blue-600" />
                  <span>Reduced transaction fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>Enhanced security features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-blue-600" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-blue-600" />
                  <span>Priority customer support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Banknote className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl text-purple-900">Enterprise Tier</CardTitle>
              <CardDescription>For large organizations and influencers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-900">0.5%</div>
                <div className="text-sm text-gray-600">Transaction fee</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Percent className="h-4 w-4 text-purple-600" />
                  <span>Minimal transaction fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-purple-600" />
                  <span>Maximum security protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-purple-600" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Video className="h-4 w-4 text-purple-600" />
                  <span>Custom integrations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Toolkits Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">AI Toolkits</h2>
        
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <OptimizedImage
                src="/lovable-uploads/da465e20-b7ec-4c1f-b7b6-8049718e35cf.png"
                alt="AI Toolkits Interface"
                className="mx-auto rounded-lg shadow-lg max-w-2xl w-full"
              />
            </div>
            
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Your Personal AI Assistant</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  DeHub users will soon have their very own uncensored AI assistant and full toolkit suite directly in-app.
                  Experience the future of automated content creation and engagement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white/70 backdrop-blur border-indigo-100">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Settings className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-lg">Content Creation & Perfection</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Advanced AI algorithms help brainstorm, draft, edit, and optimize your content across all formats. 
                      From compelling captions to full-length articles, get AI-powered suggestions that match your unique voice and style.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur border-indigo-100">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <MessageCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">Automated Engagement</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Smart automation for community interaction and strategic tipping. 
                      AI analyzes engagement patterns, suggests optimal posting times, and helps maintain authentic relationships with your audience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur border-indigo-100">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Banknote className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-lg">Finance Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Intelligent financial tools for tracking earnings, managing payments, and optimizing revenue streams. 
                      Get AI-driven insights on spending patterns, investment opportunities, and tax optimization strategies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur border-indigo-100">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Eye className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">Performance Analytics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Comprehensive analytics suite that tracks, analyzes, and monitors your performance across all metrics. 
                      AI identifies trending topics, predicts viral content potential, and provides actionable growth strategies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur border-indigo-100">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <MessageCircle className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle className="text-lg">Global Translation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Break language barriers with real-time translation and cultural adaptation. 
                      AI ensures your message resonates globally while maintaining cultural sensitivity and context accuracy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur border-indigo-100">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Shield className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-lg">Uncensored AI</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Experience true AI freedom without corporate restrictions or biased filtering. 
                      Our decentralized AI provides honest, unfiltered assistance while respecting user privacy and creative expression.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center space-y-4 mt-8">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">The Future is Automated</h4>
                  <p className="text-lg opacity-90">The future is on DeHub.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">24/7</div>
                    <div className="text-sm text-gray-600">AI Availability</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">Multi-Modal</div>
                    <div className="text-sm text-gray-600">Content Support</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Privacy-First</div>
                    <div className="text-sm text-gray-600">Data Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Revolution?</h2>
          <p className="text-xl mb-6 opacity-90">
            Be part of the decentralized future of content creation and community building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Launch DApp
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dapp;
