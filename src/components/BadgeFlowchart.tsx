
import React from 'react';
import { CheckCircle, X } from 'lucide-react';

const BadgeFlowchart = () => {
  const badges = [
    { threshold: "10,000", badge: "Crab Badge", color: "bg-orange-500" },
    { threshold: "25k", badge: "Lobster Badge", color: "bg-red-500" },
    { threshold: "50k", badge: "Piranha Badge", color: "bg-purple-500" },
    { threshold: "100k", badge: "Tortoise Badge", color: "bg-green-600" },
    { threshold: "250k", badge: "Cobra Badge", color: "bg-gray-800" },
    { threshold: "500k", badge: "Octopus Badge", color: "bg-blue-600" },
    { threshold: "1m", badge: "Crocodile Badge", color: "bg-green-800" },
    { threshold: "2m", badge: "Dolphin Badge", color: "bg-cyan-500" },
    { threshold: "3m", badge: "Tiger Shark Badge", color: "bg-slate-600" },
    { threshold: "5m", badge: "Killer Whale Badge", color: "bg-gray-900" },
    { threshold: "10m", badge: "Great White Shark Badge", color: "bg-blue-800" },
    { threshold: "25m", badge: "Blue Whale Badge", color: "bg-indigo-700" },
    { threshold: "50m", badge: "Megalodon Badge", color: "bg-purple-800" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200">
      <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">Badge of Honour Decision Flow</h4>
      
      <div className="flex flex-col items-center space-y-4">
        {/* Start */}
        <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center">
          Read Wallet & Staked Amount
        </div>
        
        <div className="w-px h-4 bg-slate-400"></div>
        
        {/* Badge progression */}
        {badges.map((badge, index) => (
          <div key={badge.threshold} className="flex items-center justify-center w-full max-w-2xl">
            <div className="flex items-center space-x-4 w-full">
              {/* Threshold check */}
              <div className="bg-cyan-400 text-slate-800 px-4 py-2 rounded-lg font-medium min-w-fit">
                Has {badge.threshold}+ $DHB?
              </div>
              
              {/* Yes arrow and badge */}
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Yes</span>
                </div>
                <div className={`${badge.color} text-white px-3 py-2 rounded-lg text-sm font-medium text-center`}>
                  {badge.badge}
                </div>
              </div>
              
              {/* No arrow (except for last item) */}
              {index < badges.length - 1 && (
                <div className="flex items-center space-x-2 ml-auto">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-medium text-red-500">No</span>
                  <div className="w-px h-8 bg-slate-400 ml-2"></div>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Final no badge */}
        <div className="flex items-center space-x-2">
          <X className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium text-red-500">No</span>
        </div>
        
        <div className="bg-pink-400 text-white px-4 py-2 rounded-lg font-medium">
          No Badge
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-slate-600 italic">
          Badge system based on $DHB token holdings - higher holdings unlock exclusive badges and enhanced features
        </p>
      </div>
    </div>
  );
};

export default BadgeFlowchart;
