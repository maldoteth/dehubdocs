
import React from 'react';
import { Upload, Wallet, Shield, Zap, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const Dapp = () => {
  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-slate-500">
          <span>Documentation</span>
          <span>/</span>
          <span>Ecosystem</span>
          <span>/</span>
          <span className="text-slate-900">dApp</span>
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900">dApp Platform</h1>
        <p className="text-xl text-slate-600">
          Build and deploy decentralized applications on our robust infrastructure with seamless user experience.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Wallet className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Integrated Wallet</h3>
          <p className="text-slate-600">Built-in wallet functionality with multi-chain support and seamless transactions.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Security First</h3>
          <p className="text-slate-600">Enterprise-grade security with audited smart contracts and secure key management.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
          <p className="text-slate-600">Optimized performance with instant transactions and minimal gas fees.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Community Driven</h3>
          <p className="text-slate-600">Built by the community, for the community with governance and voting mechanisms.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Global Access</h3>
          <p className="text-slate-600">Accessible worldwide with multi-language support and regulatory compliance.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Easy Deployment</h3>
          <p className="text-slate-600">Deploy your dApps with just a few clicks using our intuitive development tools.</p>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Sign Up</h2>
        </div>
        
        <p className="text-lg text-slate-700 mb-6">
          Get set up with socials or email and have a wallet generated for you in a few clicks. No private key management or custody, you are in full control of your assets and we never access your funds.
        </p>

        <div className="flex items-center space-x-2 text-sm text-blue-700 bg-blue-100 rounded-lg p-3 mb-6">
          <CheckCircle className="w-4 h-4" />
          <span>Complete control of your assets</span>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Upload Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
            <Upload className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Upload Your dApp</h2>
        </div>
        
        <p className="text-lg text-slate-600 mb-8">
          Ready to deploy? Upload your decentralized application and make it available to users worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Supported Formats</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                React Applications
              </li>
              <li className="flex items-center text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Vue.js Projects
              </li>
              <li className="flex items-center text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Angular Apps
              </li>
              <li className="flex items-center text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Static HTML/CSS/JS
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Requirements</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Web3 Integration
              </li>
              <li className="flex items-center text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Smart Contract Verified
              </li>
              <li className="flex items-center text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Security Audit Passed
              </li>
              <li className="flex items-center text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Documentation Complete
              </li>
            </ul>
          </div>
        </div>

        <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Drag and drop your files here</h3>
          <p className="text-slate-500 mb-4">or click to browse your files</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Browse Files
          </button>
        </div>
      </div>

      {/* Development Tools */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Development Tools & Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">SDK & APIs</h3>
            <p className="text-slate-600 mb-4">Comprehensive development kit with REST APIs, WebSocket connections, and JavaScript SDK.</p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              View Documentation →
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Testing Environment</h3>
            <p className="text-slate-600 mb-4">Sandbox environment for testing your dApps before deploying to mainnet.</p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Access Testnet →
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Smart Contract Templates</h3>
            <p className="text-slate-600 mb-4">Pre-built, audited smart contract templates for common use cases.</p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Browse Templates →
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Community Support</h3>
            <p className="text-slate-600 mb-4">Join our developer community for support, discussions, and collaboration.</p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Join Discord →
            </a>
          </div>
        </div>
      </div>

      {/* Getting Started CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Start developing your decentralized application today with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Building
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dapp;
