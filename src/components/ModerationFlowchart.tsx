
import React from 'react';
import { Card, CardContent } from './ui/card';

const ModerationFlowchart = () => {
  return (
    <Card className="w-full my-6">
      <CardContent className="p-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Creator uploads video */}
          <div className="bg-purple-500 text-white px-6 py-3 rounded-lg font-medium text-center min-w-[200px]">
            Creator uploads video
          </div>
          
          <div className="w-px h-6 bg-gray-300"></div>
          
          {/* Viewer clicks to vote */}
          <div className="bg-purple-500 text-white px-6 py-3 rounded-lg font-medium text-center min-w-[200px]">
            Viewer clicks to vote
          </div>
          
          <div className="w-px h-6 bg-gray-300"></div>
          
          {/* Decision flow */}
          <div className="flex flex-col items-center space-y-4">
            {/* Moderator check */}
            <div className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium text-center min-w-[150px]">
              Moderator?
            </div>
            
            <div className="flex items-center space-x-8">
              {/* Yes path */}
              <div className="flex flex-col items-center space-y-4">
                <span className="text-sm font-medium">Yes</span>
                <div className="bg-pink-400 text-white px-6 py-3 rounded-lg font-medium text-center min-w-[150px]">
                  Video removed
                </div>
              </div>
              
              {/* No path */}
              <div className="flex flex-col items-center space-y-4">
                <span className="text-sm font-medium">No</span>
                <div className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium text-center min-w-[150px]">
                  Staking DeHub?
                </div>
                
                <div className="flex items-center space-x-6">
                  {/* No staking */}
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm font-medium">No</span>
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[120px]">
                      Vote unavailable
                    </div>
                  </div>
                  
                  {/* Yes staking */}
                  <div className="flex flex-col items-center space-y-4">
                    <span className="text-sm font-medium">Yes</span>
                    <div className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium text-center min-w-[120px]">
                      Over 50m?
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      {/* Yes over 50m */}
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-sm font-medium">Yes</span>
                        <div className="bg-pink-400 text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[120px]">
                          Video removed
                        </div>
                      </div>
                      
                      {/* No under 50m */}
                      <div className="flex flex-col items-center space-y-4">
                        <span className="text-sm font-medium">No</span>
                        <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[120px]">
                          Staking weight calculator
                        </div>
                        
                        <div className="w-px h-4 bg-gray-300"></div>
                        
                        <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[120px]">
                          Vote Registered
                        </div>
                        
                        <div className="w-px h-4 bg-gray-300"></div>
                        
                        <div className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[140px]">
                          90% cancel rate after 1000 views?
                        </div>
                        
                        <div className="flex items-center space-x-6">
                          <div className="flex flex-col items-center space-y-2">
                            <span className="text-sm font-medium">Yes</span>
                            <div className="bg-pink-400 text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[120px]">
                              Video removed
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-center space-y-2">
                            <span className="text-sm font-medium">No</span>
                            <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center text-sm min-w-[120px]">
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
          <div className="mt-8 bg-purple-700 text-white px-6 py-4 rounded-lg font-medium text-center max-w-[250px]">
            Bounty and Ad revenue shared between all voting wallets
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModerationFlowchart;
