import { OptimizedImage } from "@/components/OptimizedImage";

const Dapp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          DeHub DApps
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Decentralized applications powering the future of social interaction and community engagement
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Introduction</h2>
          <p className="text-lg text-muted-foreground">
            DeHub DApps are the cornerstone of our decentralized ecosystem, offering a wide array of functionalities
            that empower users and communities.
          </p>
          <p className="text-lg text-muted-foreground">
            From decentralized social networking to community governance tools, DeHub DApps are designed to foster
            innovation and collaboration.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <p className="text-lg text-muted-foreground">
            Explore the core functionalities that make DeHub DApps stand out:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Decentralized Social Networking</h3>
              <p className="text-muted-foreground">
                Connect with friends, family, and communities without the constraints of traditional social media
                platforms.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Community Governance Tools</h3>
              <p className="text-muted-foreground">
                Participate in decision-making processes and shape the future of your favorite communities.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Tokenized Rewards</h3>
              <p className="text-muted-foreground">
                Earn tokens for your contributions and engagement within the DeHub ecosystem.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Cross-Chain Compatibility</h3>
              <p className="text-muted-foreground">
                Seamlessly interact with DApps across multiple blockchain networks.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Getting Started</h2>
          <p className="text-lg text-muted-foreground">
            Ready to dive in? Follow these steps to start using DeHub DApps:
          </p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              <p className="text-lg">
                <span className="font-semibold">Connect your wallet:</span> Use a compatible wallet like MetaMask or
                Trust Wallet to connect to the DeHub platform.
              </p>
            </li>
            <li>
              <p className="text-lg">
                <span className="font-semibold">Explore the DApp directory:</span> Browse our curated list of DApps
                and discover new and exciting applications.
              </p>
            </li>
            <li>
              <p className="text-lg">
                <span className="font-semibold">Start interacting:</span> Engage with DApps by posting content,
                participating in discussions, and earning rewards.
              </p>
            </li>
          </ol>
        </section>

        {/* Benefits Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Benefits of Using DeHub DApps</h2>
          <p className="text-lg text-muted-foreground">
            Discover the advantages of building and using DApps on the DeHub platform:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Enhanced privacy and security</li>
            <li>Greater control over your data</li>
            <li>Direct access to communities and resources</li>
            <li>Opportunities to earn tokens and rewards</li>
          </ul>
        </section>
        
        {/* Fee System Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Fee System</h2>
          <p className="text-lg text-muted-foreground">
            Our transparent fee structure ensures sustainable platform growth while rewarding active participants.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Transaction Fees</h3>
              <ul className="space-y-2">
                <li>• Standard posting: 0.1% of transaction value</li>
                <li>• Premium features: 0.5% of transaction value</li>
                <li>• Cross-chain transactions: 1% of transaction value</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Revenue Sharing</h3>
              <ul className="space-y-2">
                <li>• 50% to token holders</li>
                <li>• 25% to platform development</li>
                <li>• 15% to community rewards</li>
                <li>• 10% to operational costs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Superpowers Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Superpowers</h2>
          <p className="text-lg text-muted-foreground">
            App super powers provide users with hacks to boost engagement or raise awareness
          </p>
          <p className="text-lg text-muted-foreground">
            Think of it like boosted posts on legacy social platforms, however not limited to just companies or products, anyone can get involved
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">1) Trend Jacker</h3>
              <p className="text-muted-foreground">
                Have your desired topic appear on the trending list
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">2) Timeline Bomber</h3>
              <p className="text-muted-foreground">
                Appear on the timeline of all profiles you follow
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">3) Precision Strike</h3>
              <p className="text-muted-foreground">
                Appear on the timeline of users following accounts you target
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">4) Harpoon</h3>
              <p className="text-muted-foreground">
                Appear on the timeline of selected badge holders, such as whales, sharks, etc
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dapp;
