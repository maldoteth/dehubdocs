
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Games = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-royal-blue mb-4">Games</h1>
        <p className="text-xl text-royal-blue/80 max-w-3xl mx-auto">
          Sustainable play and win to earn with no dilution or inflation.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-plain-white/50 rounded-lg p-6 border border-sky-blue/20">
          <p className="text-royal-blue/90 mb-4">
            As a team full of gamers & streamers, we found a gap in the market that no one else is penetrating. Currently, billions of gamers world wide who enjoy free casual games have been overlooked by the web3 industry even though regular web2 arcades are turning over millions per month.
          </p>
          <p className="text-royal-blue/90 mb-4">
            So we've built and released a barrier free, play and win to earn arcade full of classics and custom games that will compliment our more immersive gaming experiences years down the line.
          </p>
          <p className="text-royal-blue/90 mb-4">
            A play and earn model sustained entirely on fee generation ensuring no dilution or inflation is needed to incentivise engagement, positive feedback loops & general growth.
          </p>
          <p className="text-royal-blue/90">
            This also has the added benefit of incentivising the team and community to consistently work harder to achieve the common goal as the more users we have, the more revenue we make, the more rewards are generated and the more users we can attract.
          </p>
          <p className="text-royal-blue/90 mt-4 font-semibold">
            A truly self enhancing and sustainable ecosystem.
          </p>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Releases</TabsTrigger>
            <TabsTrigger value="released">Titles Released</TabsTrigger>
            <TabsTrigger value="features">Key Features</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="bg-plain-white/50 rounded-lg p-6 border border-sky-blue/20">
              <h3 className="text-2xl font-semibold text-royal-blue mb-4">Upcoming Releases</h3>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-royal-blue">Last Chad Standing</h4>
                <p className="text-royal-blue/90">
                  Hyper realistic and gory battle royale featuring top UFC stars, game developers from Ubisoft and leading memes with their own skins.
                </p>
                <div className="mt-4">
                  <span className="font-semibold text-royal-blue">Website: </span>
                  <a 
                    href="https://lastchadstanding.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-middle-blue hover:text-royal-blue underline"
                  >
                    lastchadstanding.com
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="released" className="space-y-6">
            <div className="bg-plain-white/50 rounded-lg p-6 border border-sky-blue/20">
              <h3 className="text-2xl font-semibold text-royal-blue mb-6">Titles Released</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-royal-blue mb-2">Whack A Schifff</h4>
                  <p className="text-royal-blue/90">
                    Whack Peter Schiff on the head every time he squirms out his mole hole to rack up points while avoiding the bombs to stay alive for a limited time.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-royal-blue mb-2">Gas Guzzler</h4>
                  <p className="text-royal-blue/90">
                    Keep your ETH gas topped up while collecting dehub coins and avoiding other moon boys in their Lambos. Be sure to hit the NOS for a boost as you maximise your score in this endless driver!
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-royal-blue mb-2">Rocket Blaster</h4>
                  <p className="text-royal-blue/90">
                    Avoid those cursed laser beams on your 100km mission back to the moon in this endless blaster
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-royal-blue mb-2">Street Slayer</h4>
                  <p className="text-royal-blue/90">
                    Rid the streets of the greedy banking mafia and save the club at all cost in this endless fighter that's free for all, yet comes with full play and earn for Lean Chad Fight Club (LCFC) holders. LCFC are our genesis NFT mint partners and the first of many coming to the DeHub ecosystem.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sky-blue/20">
                  <p className="text-royal-blue/90 mb-3">
                    Play all these games and more at our arcade:
                  </p>
                  <a 
                    href="https://arcade.dehub.net" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-middle-blue hover:text-royal-blue underline font-semibold"
                  >
                    arcade.dehub.net
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="bg-plain-white/50 rounded-lg p-6 border border-sky-blue/20">
              <h3 className="text-2xl font-semibold text-royal-blue mb-6">Key Features</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-middle-blue rounded-full mt-2"></div>
                  <p className="text-royal-blue/90">Barrier free play and win to earn</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-middle-blue rounded-full mt-2"></div>
                  <p className="text-royal-blue/90">Classic arcade mini games, tournaments & top tier independent/indi games</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-middle-blue rounded-full mt-2"></div>
                  <p className="text-royal-blue/90">Stream gaming content directly on our streaming app</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-middle-blue rounded-full mt-2"></div>
                  <p className="text-royal-blue/90">Build decentralised guilds and e-sports divisions with existing pro gamers</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Games;
