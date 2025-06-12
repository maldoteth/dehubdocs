import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Zap, Globe, CreditCard } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-royal-blue font-exo">
          DeHub Terms of Service
        </h1>
        
        <div className="text-royal-blue/70 space-y-1 font-exo">
          <p><strong>Last updated:</strong> December 2, 2024</p>
          <p><strong>Effective:</strong> December 2, 2024</p>
        </div>
      </div>

      {/* Introduction */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-2xl text-royal-blue font-exo flex items-center">
            <Globe className="w-6 h-6 mr-2" />
            Welcome to DeHub!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p>
            Thank you for using the DeHub platform and the products, services and features we make available to you as part of the platform (collectively, the "Service").
          </p>
        </CardContent>
      </Card>

      {/* Our Service */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Our Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p>
            The Service allows you to discover, share and monetize content in a completely decentralized environment, provides a forum for people to connect, inform, and inspire others across the globe, and acts as a distribution platform for original content creators without centralized restrictions. We provide a censorship-resistant platform where anyone can monetize their content through community governance rather than corporate control.
          </p>
          <p>
            DeHub operates as a decentralized protocol where content moderation is handled by community governance, ensuring that only illegal content or content violating community-approved guidelines may be restricted.
          </p>
        </CardContent>
      </Card>

      {/* Service Provider */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Your Service Provider</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p>
            The entity providing the Service is DeLabs LTD (14204474), office 4, 219 Kensington High Street, London, UK, W68BD (referred to as "DeHub", "we", "us", or "our").
          </p>
        </CardContent>
      </Card>

      {/* Who May Use */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Who May Use the Service?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-royal-blue/80 leading-relaxed font-exo">
          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Age Requirements</h3>
            <p>You may use the Service if you are at least 14 years old; however, children of all ages may use the Service if enabled by a parent or legal guardian.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Permission by Parent or Guardian</h3>
            <p>If you are under 18, you must have your parent or legal guardian's permission to use the Service. Please have them read this Agreement with you.</p>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Businesses</h3>
            <p>If you are using the Service on behalf of a company or organisation, you confirm to us that you have authority to act on behalf of that entity, and that entity accepts this Agreement.</p>
          </div>
        </CardContent>
      </Card>

      {/* Content and Wallets */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Wallet Connections and Identity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p>
            You can use parts of the Service, such as browsing and discovering content, without connecting a wallet. However, you do need a compatible crypto wallet to use monetization features and participate in governance.
          </p>
          <p>
            Creating content and participating in the platform economy requires wallet connection. You are fully responsible for:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Securing your wallet and private keys</li>
            <li>All transactions made through your wallet</li>
            <li>Understanding the irreversible nature of blockchain transactions</li>
          </ul>
        </CardContent>
      </Card>

      {/* Token Purchases */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo flex items-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Token Purchases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Token Usage</h3>
            <p>
              Tokens are used within our application for various activities including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Tipping content creators or profiles</li>
              <li>Subscribing to creators</li>
              <li>Unlocking premium content</li>
              <li>Accessing super powers like trending boosts</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Purchase Limits</h3>
            <p>
              The maximum daily purchase limit is $500 USD equivalent. This limit is in place for security and regulatory compliance purposes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">No Refunds Policy</h3>
            <p>
              Due to the irreversible nature of blockchain transactions, refunds are not applicable in any capacity. All token purchases are final and cannot be reversed, canceled, or refunded.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Fees and Gas Costs</h3>
            <p>
              Every token purchase includes an additional 1% fee to cover gas costs and service fees. These fees may vary based on network conditions and third-party service providers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Fiat On-Ramp Services</h3>
            <p>
              We may provide access to third-party fiat on-ramp services to facilitate token purchases. These services are provided by independent third parties and are subject to their own terms and conditions. We are not responsible for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The availability or reliability of third-party payment processors</li>
              <li>Payment processing delays or failures</li>
              <li>Third-party service fees or charges</li>
              <li>Compliance with local payment regulations in your jurisdiction</li>
              <li>Customer support for payment-related issues (handled by the payment provider)</li>
            </ul>
            <p className="mt-2">
              You agree to comply with all applicable laws and regulations regarding digital asset purchases in your jurisdiction.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Permissions and Restrictions */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Permissions and Restrictions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p>You may access and use the Service as made available to you, as long as you comply with this Agreement and applicable law.</p>
          
          <div>
            <h3 className="font-semibold text-royal-blue mb-2">You are not allowed to:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Use the Service to distribute content that is illegal under applicable law</li>
              <li>Circumvent, disable, or interfere with security-related features of the Service</li>
              <li>Use automated means to access the Service except as explicitly permitted</li>
              <li>Collect personal information without consent</li>
              <li>Use the Service to distribute spam or unwanted mass solicitations</li>
              <li>Artificially manipulate engagement metrics through paid or incentivized interactions</li>
              <li>Misuse reporting, flagging, or governance processes</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Monetization Rights */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            Decentralized Monetization Rights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p className="font-semibold text-royal-blue">
            Core Principle: Anyone can monetize their content without centralized censorship.
          </p>
          <p>
            Unlike traditional platforms, DeHub provides unrestricted monetization rights to all users, subject only to:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Legal compliance in applicable jurisdictions</li>
            <li>Community governance decisions made through transparent voting</li>
            <li>Basic technical requirements for platform functionality</li>
          </ul>
          <p>
            You retain full ownership of your content and the right to monetize it through various mechanisms including tips, subscriptions, NFT sales, and other blockchain-based revenue streams.
          </p>
        </CardContent>
      </Card>

      {/* Content Governance */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Community Governance & Content Moderation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Decentralized Moderation</h3>
            <p>Content moderation on DeHub is handled through community governance mechanisms:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Token holders vote on content policies and enforcement actions</li>
              <li>Transparent, on-chain voting processes for all moderation decisions</li>
              <li>Appeals process managed by community governance</li>
              <li>No single entity has unilateral censorship power</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Content Restrictions</h3>
            <p>Content may only be restricted for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Illegal content as defined by applicable law</li>
              <li>Content violating community-approved guidelines through governance votes</li>
              <li>Technical spam or malicious activities that threaten platform security</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Rights You Grant */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Rights You Grant</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p>You retain all ownership rights in your content. What belongs to you stays yours.</p>
          
          <div>
            <h3 className="font-semibold text-royal-blue mb-2">License to DeHub</h3>
            <p>
              By providing content to the Service, you grant DeHub a worldwide, non-exclusive, royalty-free license to host and distribute your content through the decentralized platform for the purpose of operating the Service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">License to Other Users</h3>
            <p>
              You grant other users of the Service the right to access and view your content as enabled by the platform features, while you retain all monetization and ownership rights.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Account Management */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Account Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Termination by You</h3>
            <p>You may stop using the Service at any time by disconnecting your wallet and ceasing to use the platform.</p>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Restrictions by DeHub</h3>
            <p>Due to our decentralized nature, DeHub has limited ability to restrict access. Restrictions may only occur for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Legal compliance requirements</li>
              <li>Community governance decisions</li>
              <li>Technical security threats to the platform</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Legal Terms */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Other Legal Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Disclaimer</h3>
            <p>
              DeHub operates as a decentralized protocol. We provide the platform "as is" without warranties. Due to the decentralized nature, we cannot guarantee continuous availability or specific performance metrics.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Limitation of Liability</h3>
            <p>
              As a decentralized platform, DeHub's liability is limited to the technical operation of the protocol. We are not responsible for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Content posted by users</li>
              <li>Financial losses from crypto transactions</li>
              <li>Community governance decisions</li>
              <li>Third-party integrations or services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-royal-blue mb-2">Changes to Agreement</h3>
            <p>
              Changes to these terms will be proposed through community governance mechanisms. Major changes require community approval through token holder voting.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Contact</CardTitle>
        </CardHeader>
        <CardContent className="text-royal-blue/80 leading-relaxed font-exo">
          <p>
            For questions about these Terms of Service, please engage with our community governance channels or submit proposals through the DAO mechanism.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;
