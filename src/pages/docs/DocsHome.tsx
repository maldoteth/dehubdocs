import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Code, Zap, Shield, Users, Database, Rocket, Star, CheckCircle } from 'lucide-react';
const DocsHome = () => {
  const quickLinks = [{
    title: 'Quick Start',
    description: 'Get up and running in minutes',
    icon: Rocket,
    path: '/docs/quickstart',
    color: 'from-middle-blue to-sky-blue'
  }, {
    title: 'API Reference',
    description: 'Complete API documentation',
    icon: Code,
    path: '/docs/endpoints',
    color: 'from-sky-blue to-middle-blue'
  }, {
    title: 'Examples',
    description: 'See real-world implementations',
    icon: Star,
    path: '/docs/examples',
    color: 'from-royal-blue to-sky-blue'
  }, {
    title: 'Best Practices',
    description: 'Learn from the experts',
    icon: CheckCircle,
    path: '/docs/best-practices',
    color: 'from-middle-blue to-royal-blue'
  }];
  const features = [{
    icon: Zap,
    title: 'Fast & Reliable',
    description: 'High-performance architecture built for scale'
  }, {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security features included'
  }, {
    icon: Database,
    title: 'Data-Driven',
    description: 'Powerful analytics and insights platform'
  }, {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built for teams of all sizes'
  }];
  return <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        
        
        <h1 className="text-5xl font-bold text-royal-blue leading-tight font-exo">
          Welcome to Our
          <span className="block bg-gradient-to-r from-royal-blue to-middle-blue bg-clip-text text-transparent">
            Documentation
          </span>
        </h1>
        
        <p className="text-xl text-royal-blue/70 max-w-3xl mx-auto leading-relaxed font-exo">
          Everything you need to use, integrate, build, and scale with our platform. From quick start guides to advanced configurations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/docs/quickstart" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-royal-blue to-middle-blue text-plain-white font-semibold rounded-lg hover:from-royal-blue/90 hover:to-middle-blue/90 transition-all duration-200 shadow-lg hover:shadow-xl font-exo">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link to="/docs/endpoints" className="inline-flex items-center px-6 py-3 border border-sky-blue text-royal-blue font-semibold rounded-lg hover:bg-sky-blue/10 transition-all duration-200 font-exo">
            View API Reference
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickLinks.map(link => <Link key={link.path} to={link.path} className="group block p-6 bg-plain-white rounded-xl border border-sky-blue/20 hover:border-sky-blue/40 transition-all duration-200 hover:shadow-lg">
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

      {/* Features */}
      <div className="bg-plain-white rounded-2xl border border-sky-blue/20 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-royal-blue mb-4 font-exo">Why Choose Our Platform?</h2>
          <p className="text-royal-blue/70 max-w-2xl mx-auto font-exo">
            Built with modern technologies and best practices to help you ship faster and scale effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-blue/20 to-middle-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-royal-blue" />
              </div>
              <h3 className="text-lg font-semibold text-royal-blue mb-2 font-exo">{feature.title}</h3>
              <p className="text-royal-blue/70 text-sm font-exo">{feature.description}</p>
            </div>)}
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
    </div>;
};
export default DocsHome;