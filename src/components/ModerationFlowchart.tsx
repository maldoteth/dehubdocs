
import React from 'react';
import { Card, CardContent } from './ui/card';
import { ArrowDown, ArrowRight } from 'lucide-react';

const ModerationFlowchart = () => {
  return (
    <Card className="w-full my-6 bg-gradient-to-br from-slate-50 to-blue-50 border-sky-blue/20">
      <CardContent className="p-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Creator uploads video */}
          <div className="bg-gradient-to-r from-royal-blue to-middle-blue text-white px-8 py-4 rounded-xl font-semibold text-center min-w-[240px] shadow-lg transform hover:scale-105 transition-transform">
            Creator uploads video
          </div>
          
          <ArrowDown className="text-royal-blue w-6 h-6" />
          
          {/* Viewer clicks to vote */}
          <div className="bg-gradient-to-r from-royal-blue to-middle-blue text-white px-8 py-4 rounded-xl font-semibold text-center min-w-[240px] shadow-lg transform hover:scale-105 transition-transform">
            Viewer clicks to vote
          </div>
          
          <ArrowDown className="text-royal-blue w-6 h-6" />
          
          {/* Decision flow */}
          <div className="flex flex-col items-center space-y-6">
            {/* Moderator check */}
            <div className="bg-gradient-to-r from-sky-blue to-middle-blue text-white px-8 py-4 rounded-xl font-semibold text-center min-w-[180px] shadow-lg border-2 border-white">
              Moderator?
            </div>
            
            <div className="flex items-start space-x-16">
              {/* Yes path - Left side */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                  <ArrowDown className="text-royal-blue w-5 h-5" />
                  <span className="text-royal-blue font-bold bg-white px-3 py-1 rounded-full shadow">Yes</span>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold text-center min-w-[160px] shadow-lg">
                  Video removed
                </div>
              </div>
              
              {/* No path - Right side */}
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center space-x-2">
                  <ArrowDown className="text-royal-blue w-5 h-5" />
                  <span className="text-royal-blue font-bold bg-white px-3 py-1 rounded-full shadow">No</span>
                </div>
                
                <div className="bg-gradient-to-r from-sky-blue to-middle-blue text-white px-6 py-3 rounded-xl font-semibold text-center min-w-[180px] shadow-lg border-2 border-white">
                  Staking DeHub?
                </div>
                
                <div className="flex items-start space-x-12">
                  {/* No staking */}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="flex items-center space-x-2">
                      <ArrowDown className="text-royal-blue w-4 h-4" />
                      <span className="text-royal-blue font-bold bg-white px-2 py-1 rounded-full shadow text-sm">No</span>
                    </div>
                    <div className="bg-gradient-to-r from-slate-500 to-slate-600 text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[140px] shadow">
                      Vote unavailable
                    </div>
                  </div>
                  
                  {/* Yes staking */}
                  <div className="flex flex-col items-center space-y-6">
                    <div className="flex items-center space-x-2">
                      <ArrowDown className="text-royal-blue w-4 h-4" />
                      <span className="text-royal-blue font-bold bg-white px-2 py-1 rounded-full shadow text-sm">Yes</span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-sky-blue to-middle-blue text-white px-4 py-3 rounded-lg font-semibold text-center min-w-[140px] shadow border border-white">
                      Over 50m?
                    </div>
                    
                    <div className="flex items-start space-x-10">
                      {/* Yes over 50m */}
                      <div className="flex flex-col items-center space-y-3">
                        <div className="flex items-center space-x-2">
                          <ArrowDown className="text-royal-blue w-4 h-4" />
                          <span className="text-royal-blue font-bold bg-white px-2 py-1 rounded-full shadow text-sm">Yes</span>
                        </div>
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[130px] shadow">
                          Video removed
                        </div>
                      </div>
                      
                      {/* No under 50m */}
                      <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-2">
                          <ArrowDown className="text-royal-blue w-4 h-4" />
                          <span className="text-royal-blue font-bold bg-white px-2 py-1 rounded-full shadow text-sm">No</span>
                        </div>
                        
                        <div className="bg-gradient-to-r from-royal-blue to-middle-blue text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[130px] shadow">
                          Staking weight calculator
                        </div>
                        
                        <ArrowDown className="text-royal-blue w-4 h-4" />
                        
                        <div className="bg-gradient-to-r from-royal-blue to-middle-blue text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[130px] shadow">
                          Vote Registered
                        </div>
                        
                        <ArrowDown className="text-royal-blue w-4 h-4" />
                        
                        <div className="bg-gradient-to-r from-sky-blue to-middle-blue text-white px-3 py-2 rounded-lg font-medium text-center text-sm min-w-[160px] shadow border border-white">
                          90% cancel rate after 1000 views?
                        </div>
                        
                        <div className="flex items-start space-x-8">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="flex items-center space-x-1">
                              <ArrowDown className="text-royal-blue w-3 h-3" />
                              <span className="text-royal-blue font-bold bg-white px-2 py-1 rounded-full shadow text-xs">Yes</span>
                            </div>
                            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-2 rounded-lg font-medium text-center text-xs min-w-[110px] shadow">
                              Video removed
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-center space-y-2">
                            <div className="flex items-center space-x-1">
                              <ArrowDown className="text-royal-blue w-3 h-3" />
                              <span className="text-royal-blue font-bold bg-white px-2 py-1 rounded-full shadow text-xs">No</span>
                            </div>
                            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg font-medium text-center text-xs min-w-[110px] shadow">
                              Video remains live
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bounty sharing */}
          <div className="mt-12 bg-gradient-to-r from-royal-blue via-middle-blue to-sky-blue text-white px-8 py-6 rounded-2xl font-semibold text-center max-w-[320px] shadow-xl border-2 border-white">
            <div className="text-lg">💰 Bounty & Ad Revenue</div>
            <div className="text-sm mt-2 opacity-90">Shared between all voting wallets</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModerationFlowchart;
