import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Target, TrendingUp, Zap, Users } from "lucide-react";

const Dapp = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-royal-blue mb-4">Decentralized Applications (DApps)</h1>
        <p className="text-lg text-royal-blue/80">
          Explore the world of decentralized applications and their potential.
        </p>
      </div>

      {/* Key Features Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-royal-blue mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-sky-blue/20 hover:border-middle-blue/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-royal-blue">Decentralization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-royal-blue/70">
                DApps operate on a decentralized network, reducing the risk of censorship and single points of failure.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 hover:border-middle-blue/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-royal-blue">Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-royal-blue/70">
                All transactions and data are recorded on a public ledger, ensuring transparency and auditability.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 hover:border-middle-blue/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-royal-blue">Smart Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-royal-blue/70">
                DApps utilize smart contracts to automate processes and enforce agreements without intermediaries.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 hover:border-middle-blue/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-royal-blue">User Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-royal-blue/70">
                DApps give users more control over their data and digital assets, fostering a more equitable ecosystem.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-royal-blue mb-4">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-royal-blue mb-2">Decentralized Finance (DeFi)</h3>
            <p className="text-royal-blue/70">
              DApps are revolutionizing finance with lending, borrowing, and trading platforms that operate without traditional financial institutions.
            </p>
            <Badge className="bg-sky-blue/10 text-sky-blue mt-2">Explore DeFi</Badge>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-royal-blue mb-2">NFT Marketplaces</h3>
            <p className="text-royal-blue/70">
              DApps enable the creation and trading of non-fungible tokens (NFTs), representing unique digital assets like art, collectibles, and virtual real estate.
            </p>
            <Badge className="bg-sky-blue/10 text-sky-blue mt-2">Discover NFTs</Badge>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-royal-blue mb-2">Supply Chain Management</h3>
            <p className="text-royal-blue/70">
              DApps enhance supply chain transparency and efficiency by tracking products and materials from origin to consumer on a decentralized ledger.
            </p>
            <Badge className="bg-sky-blue/10 text-sky-blue mt-2">Track Supply Chains</Badge>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Superpowers Section */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-royal-blue mb-4">Superpowers</h2>
          <p className="text-lg text-royal-blue/80 max-w-3xl mx-auto">
            App super powers provide users with hacks to boost engagement or raise awareness. 
            Think of it like boosted posts on legacy social platforms, however not limited to just companies or products, anyone can get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-sky-blue/20 hover:border-middle-blue/40 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-middle-blue/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-middle-blue" />
                </div>
                <CardTitle className="text-royal-blue">Trend Jacker</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-royal-blue/70">
                Have your desired topic appear on the trending list
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 hover:border-middle-blue/40 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-middle-blue/10 rounded-lg">
                  <Zap className="w-6 h-6 text-middle-blue" />
                </div>
                <CardTitle className="text-royal-blue">Timeline Bomber</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-royal-blue/70">
                Appear on the timeline of all profiles you follow
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 hover:border-middle-blue/40 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-middle-blue/10 rounded-lg">
                  <Target className="w-6 h-6 text-middle-blue" />
                </div>
                <CardTitle className="text-royal-blue">Precision Strike</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-royal-blue/70">
                Appear on the timeline of users following accounts you target
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-sky-blue/20 hover:border-middle-blue/40 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-middle-blue/10 rounded-lg">
                  <Users className="w-6 h-6 text-middle-blue" />
                </div>
                <CardTitle className="text-royal-blue">Harpoon</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-royal-blue/70">
                Appear on the timeline of selected badge holders, such as whales, sharks, etc
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dapp;
