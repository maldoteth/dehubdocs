import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, MessageSquare, DollarSign, TrendingUp, Globe, Search } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';
const AIToolkits = () => {
  return <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">AI Toolkits</h1>
        <OptimizedImage src="/lovable-uploads/305d0557-94f8-46fe-b44e-b6b3a810d434.png" alt="DeHub AI interface showing tools and chat bot functionality" className="w-full rounded-lg shadow-lg mb-6" />
        <p className="text-lg text-slate-600 leading-relaxed">DeHub users will soon have their own uncensored AI assistant and full toolkit suite directly in-app.</p>
      </div>

      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-xl text-blue-800 flex items-center space-x-2">
            <Bot className="w-5 h-5 text-blue-600" />
            <span>DeHub AI Assistant</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 leading-relaxed mb-4">
            An uncensored AI assistant built directly into the DeHub platform, providing comprehensive support for content creators and users.
          </p>
          <div className="text-sm text-blue-600">
            Features include but are not limited to:
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-green-500" />
              <span>Content Creation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Help create & perfect content with AI-powered assistance for writing, editing, and optimizing your posts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <Bot className="w-5 h-5 text-blue-500" />
              <span>Automated Engagement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Automate engagement and tipping based on your preferences and criteria to maximize your social interactions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-purple-500" />
              <span>Finance Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Aid with finance management and payments, helping you track earnings, manage tips, and optimize monetization.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <span>Performance Analytics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Track, analyse, and monitor performance & trends to understand your audience and optimize your content strategy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-cyan-500" />
              <span>Global Translation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Translate and clarify content for a global audience, breaking down language barriers in your interactions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <Search className="w-5 h-5 text-indigo-500" />
              <span>Content Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Get context on or explain posts with AI-powered content analysis and interpretation capabilities.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="text-xl text-amber-800">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-amber-700 leading-relaxed">
            The DeHub AI toolkit is currently in development and will be integrated directly into the platform. Stay tuned for updates as we prepare to launch this comprehensive AI assistant suite.
          </p>
        </CardContent>
      </Card>
    </div>;
};
export default AIToolkits;