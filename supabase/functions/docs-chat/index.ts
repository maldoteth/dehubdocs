import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const DEHUB_KNOWLEDGE = `
# DeHub Documentation Knowledge Base

## What is DeHub?
DeHub is a decentralised, user-owned alternative to legacy media apps like YouTube, X, Rumble, Twitch, and Patreon. Powered by its own utility token ($DHB) and cutting-edge DePIN infrastructure that reshapes how content is hosted, transcoded, and delivered globally.

Built by gamers & streamers, DeHub delivers a seamless Web2 experience while everything runs on-chain with full transparency—no wallet setup, no gas fees, no technical barriers. Launch PPV events, monetise with subscriptions or paid messages, create Watch2Earn experiences, or distribute exclusive token-gated content—all without traditional banking or KYC processes.

## DHB Token Utility
The DHB token provides:
- Access to games, content, events & enhanced features across all d'apps
- Global, instant, permissionless transactions
- Tipping creators & rewarding viewers with bounties
- Purchasing products, digital collectables, assets and services on the Phygital NFT Marketplace
- Proposing & voting on protocol decisions (governance)
- Staking to earn real yield from protocol revenue buybacks & x-2-earn rewards
- Securing the network through staking while accessing enhanced rights
- Mining via dispute management, content moderation & Hub Improvement Proposals (HIPS)

## Where to Buy DHB
DHB tokens are available on:
- Uniswap (BASE chain)
- Pancakeswap (BNB chain)

## Token Bridge
You can bridge DHB tokens between BASE and BNB chains. The bridge addresses are available in the documentation.

## DePIN (Decentralized Physical Infrastructure Network)
DeHub's DePIN leverages shared computing power from a network of miners who contribute resources for:
- Data hosting
- Transcoding
- Content delivery

Miners are rewarded directly from application revenue and token transaction fees, ensuring a sustainable, inflation-free model. Anyone can participate from mobile phones to dedicated servers.

### Miner Requirements:
- Mobile Phones: Quad-core CPU, 4GB RAM, 100,000 DHB stake (Hosting only)
- PCs/Laptops: 4-core CPU, 8GB RAM, GPU, 1,000,000 DHB stake (Transcoding, Hosting, Delivery)
- Dedicated Servers: 8-core CPU, 16GB RAM, SSD, 10,000,000 DHB stake (High-volume Hosting, Delivery)

## Governance
DeHub uses a novel fair voting logic where stakeholder weight is multiplied by limited amounts to prevent whale manipulation. Each vote requires burning 50 DHB tokens to discourage bad actors while incentivizing meaningful participation.

## Security
DeHub has undergone security audits by Certik and maintains a bug bounty program. Security is prioritized across all smart contracts and infrastructure.

## Advertising (POVR System)
DeHub offers POVR (Proof-Of-View-Rewards) advertising system that eliminates ad fraud:
- Uses tokenized tiers for participation
- Verified human engagement through staking requirements
- Direct value flow between advertisers and viewers
- Blockchain-verified transparency

Traditional ad fraud costs businesses $84-125 billion annually with 20-30% of digital spend wasted on fake traffic. POVR solves this.

## AI Toolkits
DeHub provides AI-powered tools and services integrated into the ecosystem, enhancing functionality across d'Apps and games.

## E2E Encryption
All communications and content on DeHub support end-to-end encryption for user privacy and security.

## Contact
- Technical Support: tech@dehub.net
- Twitter/X: @dehub_official
- Instagram: @dehub_official

## Important Disclaimer
DHB tokens are strictly for utility purposes (like in-game currencies) and are NOT investment vehicles. Markets are highly volatile and you could lose all your money. Only spend what you can afford to lose.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are DeHub's helpful documentation assistant. You help users understand DeHub, its token ($DHB), DePIN infrastructure, governance, and all platform features.

Use the following knowledge base to answer questions accurately:

${DEHUB_KNOWLEDGE}

Guidelines:
- Be friendly, concise, and helpful
- If asked about something not in the knowledge base, say you don't have that information and suggest contacting tech@dehub.net
- Never provide financial advice or suggest DHB as an investment
- Always remind users that DHB is a utility token, not an investment, when relevant
- Direct users to specific documentation sections when appropriate
- Keep responses clear and well-formatted`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limited");
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        console.error("Payment required");
        return new Response(JSON.stringify({ error: "Service temporarily unavailable, please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response back to client");
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("docs-chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
