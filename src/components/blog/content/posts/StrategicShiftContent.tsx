import React from 'react';

interface StrategicShiftContentProps {
  block: string;
  index: number;
}

export const StrategicShiftContent: React.FC<StrategicShiftContentProps> = ({ block, index }) => {
  // For the strategic shift post, render the new comprehensive content ONLY ONCE
  if (index === 0) {
    return (
      <div key={index} className="space-y-8">
        <div className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-sky-blue/30 shadow-lg">
          <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo flex items-center">
            🚀 Why we're pivoting from Ethereum L1
          </h2>
          <p className="text-royal-blue/80 mb-6 leading-relaxed font-exo text-lg">
            Ethereum thought leaders—including the Ethereum Foundation and Vitalik Buterin—have been clear: scaling must happen via Layer 2, not by bloating the base chain. Vitalik has emphasized that modern rollups now scale Ethereum by ~17× while slashing fees by a similar margin, and that "layer‑2‑centric ecosystems" are essential for a pluralistic, decentralized future.
          </p>
          <p className="text-royal-blue/80 mb-6 leading-relaxed font-exo text-lg">
            His 2025 roadmap reinforces that continued investment in L2 is crucial, both technically and socially.
          </p>
          <p className="text-royal-blue/80 leading-relaxed font-exo text-lg">
            From an app development POV, this is a green light: focus on fastest, cheapest, most vibrant networks—especially Coinbase's Base, the dominant L2 that processes ~40% of all Ethereum Layer 2 activity.
          </p>
        </div>

        <div className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-emerald-200 shadow-lg">
          <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo flex items-center">
            🎯 DHB's consumer-first approach: Why Base makes sense
          </h2>
          <p className="text-royal-blue/80 mb-6 leading-relaxed font-exo text-lg">
            As a consumer-facing product, DHB must run where users already are—where transactions are near-instant, gas fees are negligible, and wallet friction is minimal. Base checks all these boxes:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white/60 p-6 rounded-lg">
              <h4 className="font-semibold text-royal-blue mb-3 font-exo">⚡ Speed & Cost</h4>
              <p className="text-royal-blue/70 text-sm font-exo">
                Upgrades targeting 200ms confirmations and sub-$0.01 fees
              </p>
            </div>
            
            <div className="bg-white/60 p-6 rounded-lg">
              <h4 className="font-semibold text-royal-blue mb-3 font-exo">📈 Mass Adoption</h4>
              <p className="text-royal-blue/70 text-sm font-exo">
                ~4.6 million weekly active addresses—{'>'}50% of overall L2 usage
              </p>
            </div>
            
            <div className="bg-white/60 p-6 rounded-lg">
              <h4 className="font-semibold text-royal-blue mb-3 font-exo">🔗 Coinbase Ecosystem</h4>
              <p className="text-royal-blue/70 text-sm font-exo">
                Users see Base and its tokens directly in their Coinbase wallets and can onboard instantly
              </p>
            </div>
          </div>
          
          <p className="text-royal-blue/80 mt-6 leading-relaxed font-exo text-lg italic">
            This natural ecosystem synergy makes Base the logical primary chain for DHB.
          </p>
        </div>

        <div className="p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 shadow-lg">
          <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo flex items-center">
            🌊 Solana: next on our radar
          </h2>
          <p className="text-royal-blue/80 leading-relaxed font-exo text-lg">
            Although Base is our initial focus, we're keeping Solana squarely on the roadmap. Its high-throughput, low-latency design complements Base's strengths, and a recent listing on Coinbase opens more seamless integration paths. Solana's vibrant DeFi and NFT ecosystems—combined with Coinbase's support—make it a powerful second leg for DHB's multi-chain ambitions.
          </p>
        </div>

        <div className="p-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-amber-200 shadow-lg">
          <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo flex items-center">
            💸 Fueling growth: more LP, investment & campaigns ahead
          </h2>
          <p className="text-royal-blue/80 mb-6 leading-relaxed font-exo text-lg">
            With a realigned chain strategy, we're doubling down on:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/60 p-6 rounded-lg">
                <h4 className="font-semibold text-royal-blue mb-3 font-exo">💧 Liquidity provisioning</h4>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Partnering with leading AMMs on Base (e.g. Uniswap v4, Sushi) to bootstrap organic depth.
                </p>
              </div>
              
              <div className="bg-white/60 p-6 rounded-lg">
                <h4 className="font-semibold text-royal-blue mb-3 font-exo">💰 Capital injection</h4>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Deploying treasury funds and leveraging Coinbase Ventures to support incentives and token unlocks.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/60 p-6 rounded-lg">
                <h4 className="font-semibold text-royal-blue mb-3 font-exo">👥 User acquisition</h4>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Launching targeted campaigns—DEX onboarding rewards, wallet connection bonuses, cross-chain bridge credits—to boost both DAU and volume.
                </p>
              </div>
              
              <div className="bg-white/60 p-6 rounded-lg">
                <h4 className="font-semibold text-royal-blue mb-3 font-exo">🛠️ Developer engagement</h4>
                <p className="text-royal-blue/70 text-sm font-exo">
                  Hackathons, grants, and tool integrations to build on Base (and later Solana) via DHB-native SDKs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-r from-royal-blue/10 to-middle-blue/10 rounded-xl border border-royal-blue/20 shadow-lg">
          <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo flex items-center">
            🔭 Looking forward
          </h2>
          <p className="text-royal-blue/80 mb-6 leading-relaxed font-exo text-lg">
            By discontinuing Ethereum Mainnet support, we're enabling DHB to:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white/40 p-6 rounded-lg">
              <h4 className="font-semibold text-royal-blue mb-2 font-exo">⚡ Focus on performance</h4>
              <p className="text-royal-blue/70 text-sm font-exo">
                Fastest and cheapest network with zero L1 baggage
              </p>
            </div>
            
            <div className="bg-white/40 p-6 rounded-lg">
              <h4 className="font-semibold text-royal-blue mb-2 font-exo">🌊 Ride the L2 wave</h4>
              <p className="text-royal-blue/70 text-sm font-exo">
                Following the ecosystem's leader (Base) and trusted roadmap pushed by Vitalik and others
              </p>
            </div>
            
            <div className="bg-white/40 p-6 rounded-lg">
              <h4 className="font-semibold text-royal-blue mb-2 font-exo">🔄 Stay flexible</h4>
              <p className="text-royal-blue/70 text-sm font-exo">
                Ready to add Solana and beyond where user value is proven
              </p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-royal-blue/30">
            <p className="text-royal-blue/80 font-exo text-lg leading-relaxed">
              This is more than a technical shift—it's a strategic step to align DHB with the future of consumer crypto. We're excited to scale smarter, faster, and more cost‑effectively. <strong>The next chapter starts on Base… stay tuned.</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};
