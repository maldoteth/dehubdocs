
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Book, 
  Code, 
  Zap, 
  Shield, 
  Users, 
  Database,
  Rocket,
  Star,
  CheckCircle
} from 'lucide-react';

const DocsHome = () => {
  const quickLinks = [
    {
      title: 'Quick Start',
      description: 'Get up and running in minutes',
      icon: Rocket,
      path: '/docs/quickstart',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation',
      icon: Code,
      path: '/docs/endpoints',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Examples',
      description: 'See real-world implementations',
      icon: Star,
      path: '/docs/examples',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Best Practices',
      description: 'Learn from the experts',
      icon: CheckCircle,
      path: '/docs/best-practices',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description: 'High-performance architecture built for scale'
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Enterprise-grade security features included'
    },
    {
      icon: Database,
      title: 'Data-Driven',
      description: 'Powerful analytics and insights platform'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built for teams of all sizes'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          <Book className="w-4 h-4 mr-2" />
          Documentation
        </div>
        
        <h1 className="text-5xl font-bold text-slate-900 leading-tight">
          Welcome to Our
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Documentation
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Everything you need to integrate, build, and scale with our platform. 
          From quick start guides to advanced configurations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/docs/quickstart"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            to="/docs/endpoints"
            className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-200"
          >
            View API Reference
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-lg"
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
              <link.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{link.title}</h3>
            <p className="text-slate-600 text-sm">{link.description}</p>
            <div className="flex items-center mt-3 text-sm text-blue-600 group-hover:text-blue-700">
              Learn more
              <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </Link>
        ))}
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Platform?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Built with modern technologies and best practices to help you ship faster and scale effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Follow our step-by-step guide to integrate our platform in minutes.
        </p>
        <Link
          to="/docs/quickstart"
          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
        >
          Start Building
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default DocsHome;
