
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bug, Mail } from 'lucide-react';

const TokenBugs = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Bugs</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          With special regards to the white hats of the world.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-slate-800 flex items-center space-x-2">
            <Bug className="w-6 h-6 text-blue-500" />
            <span>Bug Bounty Programme</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border">
            <Mail className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-slate-700 leading-relaxed mb-2">
                We run a bug bounty programme. Please email{' '}
                <a 
                  href="mailto:tech@dehub.net" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  tech@dehub.net
                </a>{' '}
                for more information.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TokenBugs;
