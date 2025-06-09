
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Code, Zap, Shield, Users, Database, Rocket, Star, CheckCircle, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { usePerformance } from '@/hooks/usePerformance';
import ExportButton from '@/components/ExportButton';

const DocsHome = () => {
  const { toast } = useToast();
  
  // Monitor performance for this page
  usePerformance();

  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: "This feature is currently under development and will be available soon."
    });
  };

  // Last published date - update this when docs are updated
  const lastPublishedDate = new Date();

  const quickLinks = [{
    title: 'Basescan',
    description: 'View on Base network',
    icon: ExternalLink,
    path: 'https://basescan.org/token/0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c',
    color: 'from-middle-blue to-sky-blue',
    external: true
  }, {
    title: 'BSCScan',
    description: 'View on BNB Smart Chain',
    icon: ExternalLink,
    path: 'https://bscscan.com/token/0x680d3113caf77b61b510f332d5ef4cf5b41a761d',
    color: 'from-sky-blue to-middle-blue',
    external: true
  }, {
    title: 'DHBScan',
    description: 'DeHub network explorer',
    icon: ExternalLink,
    path: 'https://dhbscan.com',
    color: 'from-royal-blue to-sky-blue',
    external: true
  }, {
    title: 'DeHub App',
    description: 'Access the DeHub application',
    icon: ExternalLink,
    path: 'https://dehub.io',
    color: 'from-middle-blue to-royal-blue',
    external: true
  }];

  const features = [
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description: 'Building on the safest and speediest chains across L1s and EVM L2s.'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Token holders run nodes globally to power the network and earn rewards'
    },
    {
      icon: Code,
      title: 'Dev Support',
      description: 'We fund community projects and initiatives where we can'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'An established and supportive community here since 2021'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        
        
        <h1 className="text-5xl font-bold text-royal-blue leading-tight font-exo">
          Welcome to
          <span className="block bg-gradient-to-r from-royal-blue to-middle-blue bg-clip-text text-transparent">Our Docs</span>
        </h1>
        
        <p className="text-xl text-royal-blue/70 max-w-3xl mx-auto leading-relaxed font-exo">
          Everything you need to use, integrate, build, and scale with our platform. From quick start guides to advanced configurations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/docs/overview" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-royal-blue to-middle-blue text-plain-white font-semibold rounded-lg hover:from-royal-blue/90 hover:to-middle-blue/90 transition-all duration-200 shadow-lg hover:shadow-xl font-exo">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <button onClick={handleComingSoonClick} className="inline-flex items-center px-6 py-3 border border-sky-blue text-royal-blue font-semibold rounded-lg hover:bg-sky-blue/10 transition-all duration-200 font-exo">
            View API Reference
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-sm sm:max-w-none">
          {quickLinks.map(link => link.external ? <a key={link.path} href={link.path} target="_blank" rel="noopener noreferrer" className="group block p-6 bg-plain-white rounded-xl border border-sky-blue/20 hover:border-sky-blue/40 transition-all duration-200 hover:shadow-lg">
                <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <link.icon className="w-6 h-6 text-plain-white" />
                </div>
                <h3 className="text-lg font-semibold text-royal-blue mb-2 font-exo">{link.title}</h3>
                <p className="text-royal-blue/70 text-sm font-exo">{link.description}</p>
                <div className="flex items-center mt-3 text-sm text-middle-blue group-hover:text-royal-blue font-exo">
                  Visit site
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </a> : <Link key={link.path} to={link.path} className="group block p-6 bg-plain-white rounded-xl border border-sky-blue/20 hover:border-sky-blue/40 transition-all duration-200 hover:shadow-lg">
                <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <link.icon className="w-6 h-6 text-plain-white" />
                </div>
                <h3 className="text-lg font-semibold text-royal-blue mb-2 font-exo">{link.title}</h3>
                <p className="text-royal-blue/70 text-sm font-exo">{link.description}</p>
                <div className="flex items-center mt-3 text-sm text-middle-blue group-hover:text-royal-blue font-exo">
                  Learn more
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>)}
        </div>
      </div>

      {/* Features */}
      <div className="bg-plain-white rounded-2xl border border-sky-blue/20 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-royal-blue mb-4 font-exo">Why Build On DeHub?</h2>
          <p className="text-royal-blue/70 max-w-2xl mx-auto font-exo">For true censorship resistance, decentralisation and permissionlessness that's guaranteed for the rest of time, choose DeHub.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-blue/20 to-middle-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-royal-blue" />
              </div>
              <h3 className="text-lg font-semibold text-royal-blue mb-2 font-exo">{feature.title}</h3>
              <p className="text-royal-blue/70 text-sm font-exo">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-r from-royal-blue to-middle-blue rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-plain-white font-exo">Ready to Get Started?</h2>
        <p className="text-sky-blue/90 mb-6 max-w-2xl mx-auto font-exo text-zinc-50">
          Follow our step-by-step guide to integrate our platform in minutes.
        </p>
        <Link to="/docs/quickstart" className="inline-flex items-center px-6 py-3 bg-plain-white text-royal-blue font-semibold rounded-lg hover:bg-sky-blue/10 transition-all duration-200 font-exo">
          Start Building
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* Export Section - Moved to bottom */}
      <div className="bg-plain-white/50 rounded-lg p-6 border border-sky-blue/20">
        <h3 className="text-lg font-semibold text-royal-blue mb-4 font-exo">Export Documentation</h3>
        <p className="text-royal-blue/70 mb-4 font-exo">Download the complete documentation for offline reading</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <ExportButton format="pdf" />
          <ExportButton format="txt" />
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-center pt-4 border-t border-sky-blue/20">
        <p className="text-sm text-royal-blue/60 font-exo">
          Last updated: {lastPublishedDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })} at {lastPublishedDate.toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>
    </div>
  );
};

export default DocsHome;
