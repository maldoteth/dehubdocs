import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

const Dapp = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">DApp</h2>
        <p className="text-muted-foreground">
          Understand the core functionalities and features of our Decentralized Application.
        </p>
      </div>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload</CardTitle>
            <CardDescription>
              Upload content to the decentralized web, powered by Arweave.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <OptimizedImage
              src="/dapp-upload.png"
              alt="DApp Upload"
              width={600}
              height={300}
              className="rounded-md"
            />
            <p className="text-sm text-muted-foreground">
              Our DApp allows you to seamlessly upload content to the decentralized web, leveraging the
              Arweave network. By utilizing Arweave, your content becomes permanently stored and
              accessible, ensuring its longevity and resistance to censorship.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Tokenization</CardTitle>
            <CardDescription>
              Mint tokens representing your content, enabling new forms of monetization and
              ownership.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <OptimizedImage
              src="/dapp-tokenization.png"
              alt="DApp Tokenization"
              width={600}
              height={300}
              className="rounded-md"
            />
            <p className="text-sm text-muted-foreground">
              Tokenization is a key feature of our DApp, allowing you to mint tokens that represent
              ownership or access rights to your content. By tokenizing your content, you can unlock
              new possibilities for monetization, distribution, and community engagement.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Badge Economy</CardTitle>
            <CardDescription>
              Engage with a vibrant badge economy, where users can earn and trade badges representing
              achievements and contributions.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <OptimizedImage
              src="/dapp-badge-economy.png"
              alt="DApp Badge Economy"
              width={600}
              height={300}
              className="rounded-md"
            />
            <p className="text-sm text-muted-foreground">
              Our DApp fosters a thriving badge economy, where users can earn and trade badges that
              represent their achievements, contributions, and reputation within the community. Badges
              can be used to unlock exclusive content, access special privileges, or simply showcase
              your accomplishments.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Fee Tier System</CardTitle>
            <CardDescription>
              Benefit from a dynamic fee tier system that rewards active participation and
              contribution to the platform.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <OptimizedImage
              src="/dapp-fee-tier-system.png"
              alt="DApp Fee Tier System"
              width={600}
              height={300}
              className="rounded-md"
            />
            <p className="text-sm text-muted-foreground">
              Our DApp incorporates a dynamic fee tier system that incentivizes active participation
              and contribution to the platform. By engaging with the DApp and contributing to the
              community, you can earn rewards and unlock lower fee tiers, making it more cost-effective
              to use the platform.
            </p>
          </CardContent>
        </Card>
        
        {/* Superpowers Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Superpowers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              App super powers provide users with hacks to boost engagement or raise awareness
            </p>
            <p className="text-muted-foreground">
              Think of it like boosted posts on legacy social platforms, however not limited to just companies or products, anyone can get involved
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">1</Badge>
                <div>
                  <h4 className="font-semibold">Trend Jacker</h4>
                  <p className="text-sm text-muted-foreground">Have your desired topic appear on the trending list</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">2</Badge>
                <div>
                  <h4 className="font-semibold">Timeline Bomber</h4>
                  <p className="text-sm text-muted-foreground">Appear on the timeline of all profiles you follow</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">3</Badge>
                <div>
                  <h4 className="font-semibold">Precision Strike</h4>
                  <p className="text-sm text-muted-foreground">Appear on the timeline of users following accounts you target</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">4</Badge>
                <div>
                  <h4 className="font-semibold">Harpoon</h4>
                  <p className="text-sm text-muted-foreground">Appear on the timeline of selected badge holders, such as whales, sharks, etc</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dapp;
