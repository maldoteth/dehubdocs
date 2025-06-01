
import React from 'react';

const ModerationFlowchart = () => {
  return (
    <div className="my-8 p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200">
      <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto">
        {/* Creator uploads video */}
        <div className="bg-royal-blue text-white px-8 py-4 rounded-xl text-center font-medium shadow-lg">
          Creator uploads video
        </div>
        
        {/* Arrow down */}
        <div className="w-px h-8 bg-slate-400"></div>
        
        {/* Viewer clicks to vote */}
        <div className="bg-royal-blue text-white px-8 py-4 rounded-xl text-center font-medium shadow-lg">
          Viewer clicks to vote
        </div>
        
        {/* Arrow down */}
        <div className="w-px h-8 bg-slate-400"></div>
        
        {/* Main flow with side branches */}
        <div className="relative flex items-start justify-center w-full">
          {/* Left side - Video removed outcome */}
          <div className="absolute left-0 top-12">
            <div className="bg-red-500 text-white px-6 py-3 rounded-xl text-center font-medium shadow-lg">
              Video removed
            </div>
          </div>
          
          {/* Left side arrow and Yes label */}
          <div className="absolute left-32 top-16 flex items-center">
            <div className="w-16 h-px bg-slate-400"></div>
            <span className="text-sm font-medium text-slate-700 ml-2">Yes</span>
          </div>
          
          {/* Center - Moderator? */}
          <div className="bg-sky-blue text-slate-800 px-8 py-4 rounded-xl text-center font-medium shadow-lg">
            Moderator?
          </div>
        </div>
        
        {/* Arrow down with No label */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-slate-700 mb-2">No</span>
          <div className="w-px h-6 bg-slate-400"></div>
        </div>
        
        {/* Second decision with side branch */}
        <div className="relative flex items-start justify-center w-full">
          {/* Left side - Vote unavailable */}
          <div className="absolute left-0 top-12">
            <div className="bg-purple-500 text-white px-6 py-3 rounded-xl text-center font-medium shadow-lg">
              Vote unavailable
            </div>
          </div>
          
          {/* Left side arrow and No label */}
          <div className="absolute left-32 top-16 flex items-center">
            <div className="w-16 h-px bg-slate-400"></div>
            <span className="text-sm font-medium text-slate-700 ml-2">No</span>
          </div>
          
          {/* Center - Staking DeHub? */}
          <div className="bg-sky-blue text-slate-800 px-8 py-4 rounded-xl text-center font-medium shadow-lg">
            Staking DeHub?
          </div>
        </div>
        
        {/* Arrow down with Yes label */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-slate-700 mb-2">Yes</span>
          <div className="w-px h-6 bg-slate-400"></div>
        </div>
        
        {/* Third decision with side branch */}
        <div className="relative flex items-start justify-center w-full">
          {/* Left side - Video removed */}
          <div className="absolute left-0 top-12">
            <div className="bg-red-500 text-white px-6 py-3 rounded-xl text-center font-medium shadow-lg">
              Video removed
            </div>
          </div>
          
          {/* Left side arrow and Yes label */}
          <div className="absolute left-32 top-16 flex items-center">
            <div className="w-16 h-px bg-slate-400"></div>
            <span className="text-sm font-medium text-slate-700 ml-2">Yes</span>
          </div>
          
          {/* Center - Over 50m? */}
          <div className="bg-sky-blue text-slate-800 px-8 py-4 rounded-xl text-center font-medium shadow-lg">
            Over 50m?
          </div>
        </div>
        
        {/* Arrow down with No label */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-slate-700 mb-2">No</span>
          <div className="w-px h-6 bg-slate-400"></div>
        </div>
        
        {/* Staking weight calculator */}
        <div className="bg-royal-blue text-white px-8 py-4 rounded-xl text-center font-medium shadow-lg">
          Staking weight<br />calculator
        </div>
        
        {/* Arrow down */}
        <div className="w-px h-8 bg-slate-400"></div>
        
        {/* Vote Registered */}
        <div className="bg-royal-blue text-white px-8 py-4 rounded-xl text-center font-medium shadow-lg">
          Vote Registered
        </div>
        
        {/* Arrow down */}
        <div className="w-px h-8 bg-slate-400"></div>
        
        {/* Final decision with side branch */}
        <div className="relative flex items-start justify-center w-full">
          {/* Left side - Bounty and Ad revenue shared */}
          <div className="absolute left-0 top-12">
            <div className="bg-royal-blue text-white px-6 py-3 rounded-xl text-center font-medium shadow-lg max-w-48">
              Bounty and Ad revenue shared between all voting wallets
            </div>
          </div>
          
          {/* Left side connecting line */}
          <div className="absolute left-48 top-16">
            <div className="w-16 h-px bg-slate-400"></div>
          </div>
          
          {/* Center - 90% cancel rate after 1000 views? */}
          <div className="bg-sky-blue text-slate-800 px-8 py-4 rounded-xl text-center font-medium shadow-lg">
            90% cancel rate after<br />1000 views?
          </div>
        </div>
        
        {/* Arrow down with No label */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-slate-700 mb-2">No</span>
          <div className="w-px h-6 bg-slate-400"></div>
        </div>
        
        {/* Video remains live */}
        <div className="bg-royal-blue text-white px-8 py-4 rounded-xl text-center font-medium shadow-lg">
          Video remains live
        </div>
        
        {/* Connecting line from bounty to video removed */}
        <div className="relative w-full flex justify-center mt-8">
          <div className="absolute left-24 top-0">
            <div className="w-px h-12 bg-slate-400"></div>
            <div className="w-32 h-px bg-slate-400"></div>
            <div className="absolute left-32 -top-12">
              <div className="w-px h-12 bg-slate-400"></div>
            </div>
          </div>
          
          {/* Video removed (final) */}
          <div className="bg-red-500 text-white px-8 py-4 rounded-xl text-center font-medium shadow-lg">
            Video removed
          </div>
        </div>
      </div>
      
      <div className="text-center text-slate-500 text-sm mt-8 italic">
        Decentralised moderation mining and revenue share model
      </div>
    </div>
  );
};

export default ModerationFlowchart;
