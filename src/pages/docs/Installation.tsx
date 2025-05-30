
import React from 'react';
import { Package, Download, Settings, CheckCircle, AlertTriangle, Terminal } from 'lucide-react';

const Installation = () => {
  const installMethods = [
    {
      name: 'npm',
      code: 'npm install @yourplatform/sdk',
      description: 'Most popular package manager'
    },
    {
      name: 'yarn',
      code: 'yarn add @yourplatform/sdk',
      description: 'Fast and reliable package manager'
    },
    {
      name: 'pnpm',
      code: 'pnpm add @yourplatform/sdk',
      description: 'Efficient package manager'
    }
  ];

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-slate-500">
          <span>Documentation</span>
          <span>/</span>
          <span>Getting Started</span>
          <span>/</span>
          <span className="text-slate-900">Installation</span>
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900">Installation</h1>
        <p className="text-xl text-slate-600">
          Multiple ways to install and set up our platform in your project.
        </p>
      </div>

      {/* System Requirements */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Settings className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-blue-900">System Requirements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-blue-900 mb-2">Node.js Environment</h4>
            <ul className="space-y-1 text-blue-800 text-sm">
              <li>• Node.js 16.0.0 or higher</li>
              <li>• npm 7.0.0 or higher</li>
              <li>• TypeScript 4.5+ (optional)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-900 mb-2">Browser Support</h4>
            <ul className="space-y-1 text-blue-800 text-sm">
              <li>• Chrome 90+</li>
              <li>• Firefox 88+</li>
              <li>• Safari 14+</li>
              <li>• Edge 90+</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Package Manager Installation */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center">
          <Package className="w-6 h-6 mr-3 text-blue-600" />
          Package Manager Installation
        </h2>
        
        <p className="text-slate-600">
          Choose your preferred package manager to install the SDK:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {installMethods.map((method) => (
            <div key={method.name} className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-900">{method.name}</h3>
                <Terminal className="w-4 h-4 text-slate-400" />
              </div>
              <p className="text-slate-600 text-sm mb-4">{method.description}</p>
              <div className="bg-slate-900 rounded p-3">
                <code className="text-green-400 font-mono text-sm">{method.code}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CDN Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center">
          <Download className="w-6 h-6 mr-3 text-blue-600" />
          CDN Installation
        </h2>
        
        <p className="text-slate-600">
          For quick prototyping or if you prefer not to use a build system:
        </p>

        <div className="bg-slate-900 rounded-lg p-4">
          <pre className="text-slate-300 font-mono text-sm overflow-x-auto">
            <code>{`<!-- Latest version -->
<script src="https://cdn.yourplatform.com/sdk/latest/yourplatform.min.js"></script>

<!-- Specific version (recommended for production) -->
<script src="https://cdn.yourplatform.com/sdk/v2.1.0/yourplatform.min.js"></script>`}</code>
          </pre>
        </div>
      </div>

      {/* Environment Setup */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Environment Setup</h2>
        
        <p className="text-slate-600">
          After installation, configure your environment variables:
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
            <div>
              <p className="text-yellow-800 font-medium">Environment Variables</p>
              <p className="text-yellow-700 text-sm mt-1">
                Create a <code className="bg-yellow-200 px-1 rounded">.env</code> file in your project root:
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg p-4">
          <pre className="text-slate-300 font-mono text-sm">
            <code>{`# API Configuration
YOURPLATFORM_API_KEY=your_api_key_here
YOURPLATFORM_ENVIRONMENT=production
YOURPLATFORM_BASE_URL=https://api.yourplatform.com

# Optional Settings
YOURPLATFORM_TIMEOUT=30000
YOURPLATFORM_RETRY_ATTEMPTS=3`}</code>
          </pre>
        </div>
      </div>

      {/* Verification */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Verify Installation</h2>
        
        <p className="text-slate-600">
          Test your installation with this simple verification script:
        </p>

        <div className="bg-slate-900 rounded-lg p-4">
          <pre className="text-slate-300 font-mono text-sm overflow-x-auto">
            <code>{`import { YourPlatform } from '@yourplatform/sdk';

// Verify the SDK is properly installed
console.log('SDK Version:', YourPlatform.version);

// Test basic initialization
const client = new YourPlatform({
  apiKey: process.env.YOURPLATFORM_API_KEY
});

console.log('✅ Installation successful!');`}</code>
          </pre>
        </div>
      </div>

      {/* Success Message */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center">
          <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-green-900 mb-1">Installation Complete!</h3>
            <p className="text-green-800">
              Your platform SDK is now installed and ready to use. Continue with the Quick Start guide to make your first API call.
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Next Steps</h3>
        <div className="space-y-3">
          <a href="/docs/quickstart" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <span className="font-medium">Quick Start Guide →</span>
            <span className="ml-2 text-slate-600">Make your first API call</span>
          </a>
          <a href="/docs/configuration" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <span className="font-medium">Configuration →</span>
            <span className="ml-2 text-slate-600">Advanced setup options</span>
          </a>
          <a href="/docs/auth" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <span className="font-medium">Authentication →</span>
            <span className="ml-2 text-slate-600">Set up API authentication</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Installation;
