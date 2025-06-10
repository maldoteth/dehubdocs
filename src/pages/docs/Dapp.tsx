import React from "react";
import { DocsLayout } from "@/components/DocsLayout";

const Dapp: React.FC = () => {
  return (
    <DocsLayout title="DApp">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">DApp</h1>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Introduction</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            The Decentralized Application (DApp) serves as the gateway to a new
            era of social interaction, content creation, and community
            governance. Built on the principles of decentralization,
            transparency, and user empowerment, our DApp offers a unique
            platform for users to connect, share, and collaborate in a secure
            and censorship-resistant environment.
          </p>
          <p className="text-lg mb-8 text-muted-foreground">
            At its core, the DApp leverages blockchain technology to ensure
            that user data and content are immutable and protected from
            unauthorized access. This not only enhances user privacy but also
            fosters a more trustworthy and equitable online ecosystem.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Key Features
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Decentralized Social Networking
              </h3>
              <p className="text-muted-foreground">
                Connect with friends, family, and like-minded individuals in a
                decentralized social network that puts you in control of your
                data and content.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Content Creation and Sharing
              </h3>
              <p className="text-muted-foreground">
                Create and share a wide range of content, including text posts,
                images, videos, and more, with the assurance that your work is
                protected by blockchain technology.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Community Governance
              </h3>
              <p className="text-muted-foreground">
                Participate in the governance of the DApp through a
                decentralized voting system, allowing you to have a say in the
                platform's future development and policies.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Token-Based Economy
              </h3>
              <p className="text-muted-foreground">
                Earn tokens for your contributions to the DApp ecosystem, such
                as creating high-quality content, participating in community
                discussions, and voting on governance proposals.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Getting Started
          </h2>
          <p className="text-lg mb-6 text-muted-foreground">
            To start using the DApp, simply create an account and connect your
            crypto wallet. Once you're logged in, you can begin exploring the
            platform, connecting with other users, and creating content.
          </p>
          <p className="text-lg mb-8 text-muted-foreground">
            For more detailed instructions and tutorials, please refer to our
            documentation or join our community forum.
          </p>
        </div>

        {/* Superpowers Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Superpowers</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            App super powers provide users with hacks to boost engagement or
            raise awareness.
          </p>
          <p className="text-lg mb-8 text-muted-foreground">
            Think of it like boosted posts on legacy social platforms, however
            not limited to just companies or products, anyone can get involved.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">1) Trend Jacker</h3>
              <p className="text-muted-foreground">
                Have your desired topic appear on the trending list
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">2) Timeline Bomber</h3>
              <p className="text-muted-foreground">
                Appear on the timeline of all profiles you follow
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">3) Precision Strike</h3>
              <p className="text-muted-foreground">
                Appear on the timeline of users following accounts you target
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">4) Harpoon</h3>
              <p className="text-muted-foreground">
                Appear on the timeline of selected badge holders, such as
                whales, sharks, etc
              </p>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Dapp;
