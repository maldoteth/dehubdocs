
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Key, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center px-4 py-2 bg-sky-blue/10 text-royal-blue rounded-full text-sm font-medium">
          <Shield className="w-4 h-4 mr-2" />
          Privacy & Data Protection
        </div>
        
        <h1 className="text-4xl font-bold text-royal-blue font-exo">
          Privacy Policy
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
            Decentralized Privacy Commitment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p>
            DeHub is built as a decentralized application that prioritizes user privacy and data sovereignty. This Privacy Policy explains how we handle information in our decentralized ecosystem.
          </p>
          <p className="font-semibold text-royal-blue">
            Core Principle: We do not store, collect, or process personal data on centralized servers.
          </p>
        </CardContent>
      </Card>

      {/* Data Collection */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Data Collection & Storage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <div className="space-y-3">
            <h3 className="font-semibold text-royal-blue">What We Don't Collect:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Personal identification information</li>
              <li>Email addresses or contact information</li>
              <li>Browsing history or behavioral data</li>
              <li>Location data</li>
              <li>Device fingerprinting information</li>
              <li>Centralized user accounts or profiles</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-royal-blue">Blockchain Data:</h3>
            <p>
              As a decentralized application, your interactions with DeHub may be recorded on public blockchains. This data is:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Publicly accessible by nature of blockchain technology</li>
              <li>Pseudonymous (linked to wallet addresses, not personal identity)</li>
              <li>Immutable and permanent</li>
              <li>Not controlled or stored by DeHub</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-royal-blue">Local Storage:</h3>
            <p>
              Some application preferences may be stored locally in your browser to enhance user experience. This data:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Remains on your device only</li>
              <li>Is never transmitted to external servers</li>
              <li>Can be cleared by you at any time</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Content Moderation */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Content Moderation & Governance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <div className="space-y-3">
            <h3 className="font-semibold text-royal-blue">Community Governance:</h3>
            <p>
              Content moderation is handled through decentralized community governance mechanisms:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Community voting determines content policies</li>
              <li>Token holders participate in governance decisions</li>
              <li>Transparent, on-chain voting processes</li>
              <li>No centralized censorship authority</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-royal-blue">Legal Compliance:</h3>
            <p>
              Content moderation may occur only for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Illegal content as defined by applicable law</li>
              <li>Content violating community-approved guidelines</li>
              <li>Spam or malicious activities</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Third Party Services */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Third-Party Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p>
            DeHub may integrate with third-party services that have their own privacy policies:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Wallet Providers:</strong> MetaMask, WalletConnect, etc. - governed by their respective privacy policies</li>
            <li><strong>Blockchain Networks:</strong> Transaction data is public on respective blockchains</li>
            <li><strong>IPFS/Decentralized Storage:</strong> Content stored on distributed networks</li>
          </ul>
          <p className="mt-3">
            We recommend reviewing the privacy policies of any third-party services you choose to use with DeHub.
          </p>
        </CardContent>
      </Card>

      {/* User Rights */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo flex items-center">
            <Key className="w-5 h-5 mr-2" />
            Your Rights & Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <div className="space-y-3">
            <h3 className="font-semibold text-royal-blue">Data Sovereignty:</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>You maintain full control over your data</li>
              <li>No central authority can access your private information</li>
              <li>You can discontinue use at any time</li>
              <li>Your wallet and keys remain under your sole control</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-royal-blue">Blockchain Considerations:</h3>
            <p>
              Due to the immutable nature of blockchain technology:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Blockchain transactions cannot be deleted or modified</li>
              <li>Public blockchain data remains permanently accessible</li>
              <li>Consider privacy implications before making transactions</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="border-sky-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-royal-blue font-exo">Contact & Updates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-royal-blue/80 leading-relaxed font-exo">
          <p>
            For questions about this Privacy Policy or our privacy practices:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Visit our community forums</li>
            <li>Participate in governance discussions</li>
            <li>Submit proposals through the DAO</li>
          </ul>
          
          <p className="mt-4">
            This Privacy Policy may be updated through community governance processes. Material changes will be communicated through our official channels.
          </p>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="border-orange-200 bg-orange-50/50">
        <CardHeader>
          <CardTitle className="text-xl text-orange-800 font-exo flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Important Notice
          </CardTitle>
        </CardHeader>
        <CardContent className="text-orange-700 font-exo">
          <p>
            DeHub operates as a decentralized protocol. While we strive to protect user privacy, the decentralized nature means that interactions may be visible on public blockchains. Users are responsible for understanding the privacy implications of their blockchain interactions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
