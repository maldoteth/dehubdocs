import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const DEHUB_KNOWLEDGE = `
# DeHub Complete Documentation Knowledge Base

## What is DeHub?
DeHub is a decentralised, user-owned alternative to legacy media apps like YouTube, X, Rumble, Twitch, and Patreon. It's a censorship resistant, open source platform for content creation, streaming and gaming. Powered by its own utility token ($DHB) and cutting-edge DePIN infrastructure that reshapes how content is hosted, transcoded, and delivered globally.

Built by gamers & streamers, DeHub delivers a seamless Web2 experience while everything runs on-chain with full transparency—no wallet setup, no gas fees, no technical barriers. Users can sign up with socials or email and have a wallet generated automatically. Launch PPV events, monetise with subscriptions or paid messages, create Watch2Earn experiences, or distribute exclusive token-gated content—all without traditional banking or KYC processes.

The app is scaled via a decentralized miner network providing shared computing power to host, transcode, and deliver content that by design, should live forever. DeHub was the first protocol to tokenise content back in 2023.

## Team & Founders
DeHub was founded by a diverse team of entrepreneurs, social media experts, and gaming professionals:

### Malik Jan - Co-Founder
Founder of UK-registered Web3 developers DeLabs LTD and Co-founder of Puso Group, a SEC licensed construction & development company in the Philippines. Previously raised over $1m at Guide Dogs as fundraising manager, was Senior consultant at Randstad ($8bn market cap), and built offices from scratch at ITS Construction including signing Berkeley Homes and winning exclusive supplier at the $100bn Horsham Highwood project.

### Mike Hales - Co-Founder
Founder and CEO of Rapz, a high-end MMA fightwear brand backed by top UFC and boxing stars with exclusive supplier rights to BKFC (owned by Conor McGregor). Founder of First Class, the UK's largest TikTok partner agency working directly for TikTok at UK HQ, with nearly 1000 streamers signed. Selected by TikTok executives after 10 months of leading UK charts with his live streams. Trained under John Kavanagh (Conor McGregor's coach).

### Indi Jay Cammish - Co-Founder
Social media, content & dance expert overseeing communications & corporate relations. Co-founder of First Class (UK's largest TikTok partner agency). Performed at the Platinum Party at The Palace for the Queen of England in 2022. Highly experienced working alongside global stars like Mabel on world tours.

### Bailey Young - Co-Founder
Operational powerhouse and former pro-gamer. Investments and tokenomics expert who played an instrumental role in DeHub's growth in 2021. Oversaw the Blocjerk fundraise of $1,000,000 in 2023 (peak ROI 1,000%). Former professional gamer ranking globally in top 3 COD MW2 and top 100 on Warzone.

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

## Token Economics
- Total Supply: 8,000,000,000 $DHB
- Distribution: 42% Community Sales & Airdrops, 42% Burn, 8% Team, 8% Operations
- All supply is fully diluted, unlocked or burned from TGE apart from team wallets
- Team wallets are staked to accrue rewards, not locked
- 100% of liquidity raised was locked into pools for traders
- No pre-sale events or investment raised to fund development
- DeHub launched as FTV with a fully built app on Google Play Store prior to any token release

## Where to Buy DHB
DHB tokens are available on:
- Uniswap (BASE chain)
- Pancakeswap (BNB chain)
- In-app purchase with fiat via Stripe (130+ currencies supported)

## Token Bridge
You can bridge DHB tokens between BASE and BNB chains. The bridge addresses are available in the documentation.

## Staking
Stake DHB to access different club tiers with enhanced features across all d'apps. There are three staking tiers based on duration:
- Tier 1: Stake 1-2 quarters, share 25% of rewards
- Tier 2: Stake 3-4 quarters, share 25% of rewards  
- Tier 3: Stake 5+ quarters, share 50% of rewards

Staking badges are displayed on your dehub.io profile, comments, uploads and live chat. Users can unstake only 88% before unlock date (12% fee). Rewards come from protocol fees including subscriptions, PPV, Watch2Earn, paid DMs, premium subscriptions, NFT sales, advertising, and partner launches.

## Badge System (13 Tiers)
Based on DHB holdings, users unlock badges with reduced platform fees:
- No Badge (<10,000 DHB): 10% fee
- Crab (10,000+ DHB): 9.31% fee
- Lobster (25k+ DHB): 8.62% fee
- Piranha (50k+ DHB): 7.93% fee
- Tortoise (100k+ DHB): 7.24% fee
- Cobra (250k+ DHB): 6.55% fee
- Octopus (500k+ DHB): 5.86% fee
- Crocodile (1m+ DHB): 5.17% fee
- Dolphin (2m+ DHB): 4.48% fee
- Tiger Shark (3m+ DHB): 3.79% fee
- Killer Whale (5m+ DHB): 3.10% fee
- Great White Shark (10m+ DHB): 2.41% fee
- Blue Whale (25m+ DHB): 1.72% fee
- Megalodon (50m+ DHB): 1% fee

## D'App Features
The DeHub app includes:
- **Upload**: Instantly upload content with Watch2Earn, token-gated content, PPV events, NFT collectables, tips, and subscriber-only content
- **Tokenised Content**: Every upload mints an ERC-1155 NFT split into 1,000 tradeable fractions. Creators control how many to sell. Content earns ad revenue for life - passive, permissionless, censorship-resistant income forever.
- **Live Streaming**: On-chain live streams with real-time tip animations, Livepeer infrastructure supporting 50,000+ concurrent viewers, sub-200ms latency globally, 99.99% uptime
- **Messaging**: E2E encrypted private communications, paid or free DMs, unlockable chat content
- **Tradable Subscriptions**: On-chain subscriptions that can be traded
- **Multi-streaming**: Stream keys allow streaming on multiple apps simultaneously

## DePIN (Decentralized Physical Infrastructure Network)
DeHub's DePIN leverages shared computing power from miners who contribute resources for data hosting, transcoding, and content delivery. Miners are rewarded from application revenue and token fees (inflation-free model).

### Miner Requirements:
- Mobile Phones: Quad-core CPU, 4GB RAM, 100,000 DHB stake (Hosting only)
- PCs/Laptops: 4-core CPU, 8GB RAM, GPU, 1,000,000 DHB stake (Transcoding, Hosting, Delivery)
- Dedicated Servers: 8-core CPU, 16GB RAM, SSD, 10,000,000 DHB stake (High-volume Hosting, Delivery)

## Games
DeHub offers blockchain-integrated games including arcade games and the upcoming flagship game:
- **Last Chad Standing**: First ever MMA Battle Royale with hyper-realistic graphics, featuring top UFC stars, developers from Ubisoft, and leading meme skins. Website: lastchadstanding.com
- **Released Games**: Whack A Schifff, Gas Guzzler, Rocket Blaster, Street Slayer - available at arcade.dehub.net
- Play and earn model sustained entirely on fee generation (no dilution or inflation)

## Governance
DeHub uses novel fair voting logic where stakeholder weight is multiplied by limited amounts to prevent whale manipulation. Each vote requires burning 50 DHB tokens to discourage bad actors.

## Advertising (POVR System)
POVR (Proof-Of-View-And-Rank) is DeHub's revolutionary ad-tech solution:
- 13-tier ranking system combined with verification badges
- Targets users based on wallet balance and activity (financial data targeting)
- Eliminates ad fraud (which costs $84-125 billion annually globally)
- Higher holdings = higher badge = more ad revenue earned = companies pay more to advertise to you
- Benefits creators, consumers, holders, and advertisers

## Security
- Certik audited
- Bug bounty program
- End-to-end encryption for communications and content

## Roadmap Highlights

### 2021 - Foundation Year
- Assembled core team, launched beta app with 500+ testers and 2,000 DAUs
- Launched v1 token, established liquidity pools on PancakeSwap
- Rebranded to DeHub with full Certik Audit
- Released prediction and raffle games
- Listed on Gate.io after near 1000x price surge

### 2022 - Expansion & Innovation
- Released arcade with 5 games, achieved 5,000+ monthly active gamers
- Released 4K streaming app with 99.9% uptime
- Produced first tokenised documentary featuring Jorge Masvidal, Brad Pickett
- Acquired $1,000,000 home for largest crypto raffle ever (15,000+ participants)
- Incorporated DeLabs LTD

### 2023 - Recognition & Decentralization
- Won Most Innovative Company award at UK's Corporate Livewire (competing against 900+ companies backed by Sony, Samsung)
- Released tokenised uploads with on-chain ad revenue sharing (creators earning 90%)
- Featured in TechCrunch and VentureBeat
- Voluntary delisting from Gate.io to prioritize decentralization

### 2024 - Scale & Professional Growth
- Listed DHB on ETH mainnet and Base L2
- Dubai event expanded Middle East presence
- First Class agency grew to UK #1 with 1,000 live streamers
- Released DePIN Phase 1
- Released E2E encrypted privacy chat
- Released on-chain tradable subscriptions
- Teaser for Last Chad Standing got 1M+ views

### 2025 - Current Year
- Q1: Released on-chain live streams, Livepeer infrastructure (50k+ concurrent viewers), sub-200ms latency, 99.99% uptime, completed messaging system, released Last Chad Standing trailer
- Q2: UGC ambassadorship program (50 vacancies), released dhbscan.com, revamped feed, audio replies and live talk spaces, final snapshot for Last Chad Standing airdrop
- Q3: Released live stream keys for multi-platform streaming, fiat onramp with Stripe (130+ currencies), began Solana/Hyperliquid/Sui integrations
- Q4 (Planned): App store re-listings, multi-account access, CRM system for agency management, open source protocol, Last Chad Standing release begins

### 2026+ - Future Vision
- AI toolkits for automated tips, engagement, and financial guidance
- Custom advertising stack with wallet-based targeting
- DePIN phase 2
- Fiat off-ramp, SDKs for third-party developers
- Multi-posting to all major socials from one place
- TV & game console apps
- VR/AR profile hub
- Educational AI integrations

## Contact
- Technical Support: tech@dehub.net
- Twitter/X: @dehub_official
- Instagram: @dehub_official
- Website: dehub.net
- Staking: dehub.net/staking
- Arcade: arcade.dehub.net
- Token tracker: dhbscan.com

## Important Disclaimer
DHB tokens are strictly for utility purposes (like in-game currencies) and are NOT investment vehicles. Markets are highly volatile and you could lose all your money due to hacks, technical errors, or unforeseen events. Only spend what you can afford to lose completely.
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
