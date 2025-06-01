
import React from 'react';

const ModerationFlowchart = () => {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200">
      <div className="flex flex-col items-center space-y-6">
        {/* Creator uploads video */}
        <div className="bg-royal-blue text-white px-6 py-4 rounded-xl text-center font-medium shadow-lg">
          Creator uploads video
        </div>
        
        {/* Arrow down */}
        <div className="w-px h-8 bg-slate-300"></div>
        
        {/* Viewer clicks to vote */}
        <div className="bg-royal-blue text-white px-6 py-4 rounded-xl text-center font-medium shadow-lg">
          Viewer clicks to vote
        </div>
        
        {/* Arrow down */}
        <div className="w-px h-8 bg-slate-300"></div>
        
        {/* Decision flow */}
        <div className="flex items-center space-x-8">
          {/* Left side - Video removed outcomes */}
          <div className="flex flex-col space-y-6">
            <div className="bg-red-500 text-white px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              Video removed
            </div>
            <div className="bg-red-400 text-white px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              Vote unavailable
            </div>
            <div className="bg-red-500 text-white px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              Video removed
            </div>
          </div>
          
          {/* Center - Decision flow */}
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-sky-blue text-slate-800 px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              Moderator?
            </div>
            
            <div className="bg-sky-blue text-slate-800 px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              Staking DeHub?
            </div>
            
            <div className="bg-sky-blue text-slate-800 px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              Over 50m?
            </div>
            
            <div className="bg-royal-blue text-white px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              Staking weight<br />calculator
            </div>
            
            <div className="bg-royal-blue text-white px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              Vote Registered
            </div>
            
            <div className="bg-middle-blue text-slate-800 px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              90% cancel rate after<br />1000 views?
            </div>
            
            <div className="bg-royal-blue text-white px-6 py-4 rounded-xl text-center font-medium shadow-lg">
              Video remains live
            </div>
          </div>
        </div>
        
        {/* Bottom outcome */}
        <div className="w-px h-8 bg-slate-300"></div>
        
        <div className="bg-royal-blue text-white px-8 py-6 rounded-xl text-center font-medium shadow-lg max-w-md">
          Bounty and Ad revenue<br />
          shared between all voting<br />
          wallets
        </div>
        
        {/* Arrow down */}
        <div className="w-px h-8 bg-slate-300"></div>
        
        <div className="bg-red-500 text-white px-6 py-4 rounded-xl text-center font-medium shadow-lg">
          Video removed
        </div>
      </div>
      
      <div className="text-center text-slate-500 text-sm mt-8 italic">
        Decentralised moderation mining and revenue share model
      </div>
    </div>
  );
};

export default ModerationFlowchart;
