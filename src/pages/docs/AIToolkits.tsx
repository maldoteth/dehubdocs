
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Code, Zap, Users } from 'lucide-react';

const AIToolkits = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">AI Toolkits</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Comprehensive AI development tools and frameworks for building intelligent applications
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800 flex items-center space-x-2">
            <Bot className="w-5 h-5 text-blue-500" />
            <span>AI Framework Integration</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 leading-relaxed">
            DeHub provides seamless integration with popular AI frameworks and models, enabling developers to build intelligent applications with ease.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <Code className="w-5 h-5 text-green-500" />
              <span>Development Tools</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Advanced development tools for building, testing, and deploying AI-powered applications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>Performance Optimization</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              Optimize your AI applications for better performance and reduced resource consumption.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800 flex items-center space-x-2">
            <Users className="w-5 h-5 text-purple-500" />
            <span>Community Resources</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 leading-relaxed">
            Access community-driven AI toolkits, templates, and best practices to accelerate your development process.
          </p>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-xl text-blue-800">Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 leading-relaxed">
            Enhanced AI toolkit features are currently in development. Stay tuned for updates on advanced machine learning integrations and automated deployment tools.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIToolkits;
