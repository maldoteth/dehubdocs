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
- CEX integrations: Coinbase, MEXC, OKX (via their DEX integration features)

## Token Bridge
You can bridge DHB tokens between BASE and BNB chains. The bridge is currently a manual process with processing times of up to 24 hours. An automated bridge is coming soon.

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
- Megalodon (50m+ DHB): 1% fee (minimum fee)

## D'App Features
The DeHub app includes:
- **Upload**: Instantly upload content with Watch2Earn, token-gated content, PPV events, NFT collectables, tips, and subscriber-only content
- **Tokenised Content**: Every upload mints an ERC-1155 NFT split into 1,000 tradeable fractions. Creators control how many to sell. Content earns ad revenue for life - passive, permissionless, censorship-resistant income forever.
- **Live Streaming**: On-chain live streams with real-time tip animations, Livepeer infrastructure supporting 50,000+ concurrent viewers, sub-200ms latency globally, 99.99% uptime
- **Messaging**: E2E encrypted private communications, paid or free DMs, unlockable chat content
- **Tradable Subscriptions**: On-chain subscriptions that can be traded
- **Multi-streaming**: Stream keys allow streaming on multiple apps simultaneously

## End-to-End Encryption (E2EE)
DeHub implements military-grade E2EE for private conversations using:
- **XChaCha20-Poly1305** for message encryption (same as Signal, WhatsApp)
- **X25519 ECDH** for secure key exchange with Perfect Forward Secrecy
- **HKDF-SHA256** for key derivation
- Uses audited @noble cryptographic libraries

### How E2EE Works:
1. Enable E2EE by signing a message with your wallet
2. Private key is derived from your wallet signature (never transmitted)
3. Public key is uploaded to DeHub database
4. Session keys are generated using ECDH for each conversation
5. Messages are encrypted with unique nonces before transmission
6. Only you and the recipient can decrypt messages - DeHub cannot read them

### What's Protected:
- Message content (fully encrypted)
- Message integrity (tamper-proof)
- Private keys (never leave your device)
- Forward secrecy (unique keys per conversation)

### What's Not Protected (Metadata):
- Who you're talking to
- When messages are sent
- Message count

## DePIN (Decentralized Physical Infrastructure Network)
DeHub's DePIN leverages shared computing power from miners who contribute resources for data hosting, transcoding, and content delivery. Miners are rewarded from application revenue and token fees (inflation-free model).

### System Architecture:
DeHub Application ↔ DePIN Coordinator ↔ Miners (Mobile/PC/Server) → Hosting/Transcode/Deliver

### Core Components:
- **Contributors (Miners)**: Individuals providing computing resources
- **DePIN Coordinator**: Smart contract system managing rewards and task distribution
- **DeHub Application**: The streaming/gaming app interfacing with DePIN
- **Clients**: End users consuming content

### Miner Requirements:
- Mobile Phones: Quad-core CPU, 4GB RAM, 100,000 DHB stake (Hosting only)
- PCs/Laptops: 4-core CPU, 8GB RAM, GPU, 1,000,000 DHB stake (Transcoding, Hosting, Delivery)
- Dedicated Servers: 8-core CPU, 16GB RAM, SSD, 10,000,000 DHB stake (High-volume Hosting, Delivery)

### Revenue Pool Sources:
- In-app revenue (subscriptions, ads, purchases)
- Token transaction fees
- Distributed based on volume and quality of contributions

## Games
DeHub offers blockchain-integrated games including arcade games and the upcoming flagship game:

### Last Chad Standing (Upcoming)
- First ever MMA Battle Royale with hyper-realistic graphics
- Features top UFC stars
- Developers from Ubisoft
- Leading meme skins available
- Website: lastchadstanding.com

### Released Games (arcade.dehub.net):
- Whack A Schifff
- Gas Guzzler
- Rocket Blaster
- Street Slayer

- Play and earn model sustained entirely on fee generation (no dilution or inflation)

## AI Toolkits (Coming Soon)
DeHub users will have access to an uncensored AI assistant with features including:
- **Content Creation**: AI-powered writing, editing, and optimization
- **Automated Engagement**: Automate engagement and tipping based on preferences
- **Finance Management**: Track earnings, manage tips, optimize monetization
- **Performance Analytics**: Track, analyze, and monitor performance & trends
- **Global Translation**: Translate and clarify content for global audiences
- **Content Analysis**: AI-powered content analysis and interpretation

## Governance
DeHub uses novel fair voting logic where stakeholder weight is multiplied by limited amounts to prevent whale manipulation. Each vote requires burning 50 DHB tokens to discourage bad actors. This ensures:
- Fair representation regardless of holding size
- Prevention of vote buying
- Active participation requirements

## Advertising (POVR System)
POVR (Proof-Of-View-And-Rank) is DeHub's revolutionary ad-tech solution:
- 13-tier ranking system combined with verification badges
- Targets users based on wallet balance and activity (financial data targeting)
- Eliminates ad fraud (which costs $84-125 billion annually globally)
- Higher holdings = higher badge = more ad revenue earned = companies pay more to advertise to you
- Benefits creators, consumers, holders, and advertisers

### Advertiser Dashboard Features:
- Campaign creation and management
- Real-time analytics (impressions, CTR, ROAS)
- Budget calculator
- Multiple campaign types supported

## Security
- **Certik Audited**: Full smart contract security audit
- **Bug Bounty Program**: Report bugs to tech@dehub.net
- **E2EE**: Military-grade encryption for communications

## Brand Assets
- Official brand font: Exo
- Logo downloads available in documentation
- Brand guidelines presentation available
- Contact marketing@dehub.net for full brand kit (SVG, EPS, vector formats)

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

## Contact Information

### Quick Contact:
- Telegram: t.me/dehub_dhb
- Discord: discord.gg/dehub
- Direct Message: Coming soon in-app

### Email Contacts:
- Technical Support: tech@dehub.net
- Marketing/Partnerships: marketing@dehub.net
- Human Resources/Careers: hr@dehub.net

### Community Channels:
- Turkish Community: t.me/Dehub_Turkish
- Arabic Community: t.me/Dehub_Arabic
- Holders Channel: Exclusive for token holders
- Whales Channel: For holders over 10m DHB tokens

### Social Media:
- Twitter/X: @dehub_official
- Instagram: @dehub_official

### Websites:
- Main: dehub.net
- Staking: dehub.net/staking
- Arcade: arcade.dehub.net
- Token tracker: dhbscan.com
- Last Chad Standing: lastchadstanding.com

## FAQ - Frequently Asked Questions

### What is DeHub?
A decentralized social media and streaming platform powered by the $DHB token, offering censorship-resistant content creation, live streaming, and gaming.

### How do I get started?
Download the app, sign up with socials or email (wallet created automatically), and start creating or consuming content.

### Is DHB an investment?
No. DHB is strictly a utility token for platform features, like in-game currencies. It is NOT an investment vehicle.

### How do I earn on DeHub?
Through content creation (tips, subscriptions, PPV, Watch2Earn), staking rewards, DePIN mining, or playing games.

### What makes DeHub different?
True decentralization, on-chain transparency, tokenized content ownership, E2EE privacy, and the DePIN infrastructure ensuring censorship resistance.

## Contract Addresses
- BASE Chain: 0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c
- BNB Chain: 0x680d3113caf77b61b510f332d5ef4cf5b41a761d

## Donate
DeHub is a non-profit, decentralised, user-owned protocol. All net profit is used to buy back and share $DHB tokens with stakeholders. All revenue is spent in accordance with DAO proposals, ensuring 100% reinvestment into the ecosystem.

### Donation Addresses:
- EVM (Ethereum, BNB, Polygon, etc.): 0x1759ceb6255dbebfe2c0c51edbcd29ad7efb9229
- Bitcoin (BTC): bc1qldncd2fejalxjjpa4z5rhkd8rnd0lmchvpdxr2

## Privacy Policy Summary
DeHub prioritizes user privacy and data sovereignty as a decentralized application.

### Core Principle:
DeHub does not store, collect, or process personal data on centralized servers.

### What DeHub Doesn't Collect:
- Personal identification information
- Email addresses or contact information
- Browsing history or behavioral data
- Location data
- Device fingerprinting information
- Centralized user accounts or profiles

### Blockchain Data:
Interactions may be recorded on public blockchains. This data is:
- Publicly accessible by nature of blockchain technology
- Pseudonymous (linked to wallet addresses, not personal identity)
- Immutable and permanent
- Not controlled or stored by DeHub

### User Rights:
- You maintain full control over your data
- No central authority can access your private information
- You can discontinue use at any time
- Your wallet and keys remain under your sole control

### Content Moderation:
Handled through decentralized community governance with token holder voting and transparent on-chain processes. No centralized censorship authority.

## Terms of Service Summary
Key points from DeHub's terms of service:

### Wallet Connections:
Users connect their own Web3 wallets. DeHub never has access to private keys. Users are responsible for wallet security.

### Token Purchases:
All token transactions are on-chain and irreversible. Users acknowledge the volatile nature of crypto assets.

### Monetization Rights:
Creators retain ownership of their content. DeHub provides infrastructure for monetization. Revenue sharing is governed by smart contracts.

### Content Governance:
Content policies are determined by community governance. Users must comply with applicable laws. Community can vote on content removal through governance.

### Legal Terms:
DeHub is provided "as is" without warranties. Users assume all risks associated with decentralized applications. DeHub is not liable for losses from market volatility, smart contract bugs, or user errors.

## Historical Milestones and Events

### Major Blog Posts and Announcements

**Coinbase Listing (December 2024)**
DHB token confirmed available directly on Coinbase CEX - a major milestone for accessibility and mainstream adoption.

**Google Play Store Launch**
DeHub D'App officially live on Google Play Store, making the platform accessible to millions of Android users worldwide.

**End-to-End Encryption Launch**
Full implementation of military-grade E2EE using XChaCha20-Poly1305 encryption, providing Signal-level privacy for all private communications.

**Corporate LiveWire Award (Q2 2023)**
Won the Innovation & Excellence Award in the Gaming category, beating 900+ companies backed by Sony and Samsung with over 27,000 public votes. First Web3 company to ever win this award.

**Tokenized Uploads Launch (June 2023)**
Revolutionary feature where every upload becomes a fractionalized ERC-1155 NFT split into 1,000 tradeable fractions, sharing ad revenue with holders forever.

**Dubai Events (Q2 2024)**
Expanded Middle East presence with presence at major blockchain events including Blockchain Life, Token2049, ETH Dubai, and World Blockchain Summit.

**Fan.site $1M Raise (March 2024)**
Adult fork of DeHub raised $1M backed by VCs and launchpads including Homeless Ventures and strategic investors.

**Gate.io Voluntary Delisting (Q4 2023)**
Voluntarily delisted from Gate.io to prioritize decentralization principles and DEX-first approach. Over 120M tokens were burned as part of this process.

### Detailed Chronological History

**2021 - Foundation Year**
- Q1: Core team assembled with 10+ years combined experience, beta app launched with 500+ testers, achieved 2,000+ daily active users, conducted 50+ user interviews for feedback
- Q2: V1 token launched on BNB chain, first liquidity pools established on PancakeSwap, grew to 2,000+ early adopters, community-driven development began
- Q3: Major rebrand from original name to DeHub, complete React Native app rebuild, full Certik Audit completed for smart contract security
- Q4: Prediction and raffle games launched, listed on Gate.io exchange after near 1000x price surge with $10M liquidity pool, community grew to 8,000+ members

**2022 - Expansion & Innovation**
- Q1: Arcade launched with 5 blockchain-integrated games, achieved 5,000+ monthly active gamers, on-chain leaderboards implemented
- Q2: Stream app released with 4K content support, produced first tokenized documentary featuring UFC stars Jorge Masvidal and Brad Pickett, launched Chads NFT collection, completed Philippine SEC company registration
- Q3: DeLabs LTD incorporated in UK, acquired $1,000,000 home for largest ever crypto raffle (15,000+ participants), attempted Palawan real estate tokenization partnership
- Q4: V1 contract tax malfunction discovered forcing V2 relaunch, successfully migrated 25,000+ token holders to new contract with no losses

**2023 - Recognition & Decentralization**
- Q1: Alpha launch of integrated d'app combining all features, tokenized uploads released with 90% creator revenue share, V2 trading resumed on Gate.io
- Q2: Won Corporate LiveWire Innovation & Excellence Award (27,000+ votes), featured in TechCrunch and VentureBeat, filed patent applications for streaming technology
- Q3: Partner airdrop announced for Fan.site adult platform fork, demonstrated commitment to decentralization principles
- Q4: Voluntary Gate.io delisting completed, all-DEX policy implemented, transparency reports published, 120M+ tokens burned from exchange

**2024 - Scale & Professional Growth**
- Q1: Listed DHB on Ethereum mainnet for broader accessibility, raised $1M seed funding for Fan.site fork
- Q2: Listed SDHB on Base L2 for lower fees, Dubai blockchain events expanded Middle East presence, TikTok partner agency First Class founded
- Q3: Major app upgrade with 95% positive user feedback, 200% backend speed improvement, streamlined UX
- Q4: On-chain tradable subscriptions launched, Last Chad Standing game teaser achieved 1M+ views, DePIN Phase 1 released, First Class agency became UK #1 TikTok partner

**2025 - Current Year Progress**
- Q1: On-chain live streams with real-time tip animations, Livepeer integration supporting 50,000+ concurrent viewers, sub-200ms global latency achieved, 99.99% uptime, advanced messaging system completed, Last Chad Standing official trailer released
- Q2: UGC ambassadorship program launched (50 vacancies), dhbscan.com token tracker released, revamped app feed with audio replies and live talk spaces, final snapshot for Last Chad Standing airdrop eligibility

### Key Challenges Overcome

**V1 Smart Contract Security Issue (Q2 2021)**
Early security vulnerability identified and addressed through comprehensive Certik Audit, establishing security-first development practices.

**Gate.io Listing Agent Fraud (Q4 2021)**
Listing agent stole fundraise proceeds and dumped on chart. Team recovered, refunded affected users, and implemented stricter partner vetting.

**Contract Tax Malfunction (Q4 2022)**
V1 contract developed an unexpected tax issue forcing complete V2 migration. Successfully migrated 25,000+ holders with zero losses.

**Gate.io Token Burn (Q4 2023)**
After voluntary delisting, over 120M tokens held on the exchange were permanently burned, reducing supply and demonstrating commitment to decentralization.

### Key Partnerships and Recognition

**Awards:**
- Corporate LiveWire 2023 Innovation & Excellence Award (Gaming category)
- First Web3 company to win Corporate LiveWire award
- Beat 900+ companies including Sony and Samsung backed ventures

**Media Features:**
- TechCrunch
- VentureBeat
- Entrepreneur.com
- BigFish Boxing
- Yahoo Finance
- Benzinga

**Strategic Partnerships:**
- Raceline (supercars and luxury experiences)
- TikTok UK (First Class agency partnership)
- Major UFC fighters (Jorge Masvidal, Brad Pickett for documentaries)
- Livepeer (decentralized streaming infrastructure)

**Strategic Investors:**
- Homeless Ventures
- Brian D Evans (Forbes 40 under 40)
- Ferrum's TDI program

## Important Disclaimer
DHB tokens are strictly for utility purposes (like in-game currencies) and are NOT investment vehicles. As the token lives on-chain, DeHub can offer added utility and unprecedented levels of verifiable transparency. However, markets are highly volatile and you could lose all your money due to hacks, technical errors, competency failures, or unforeseen events. Only spend what you can afford to lose completely. DeHub and all affiliates hold no liability for financial losses incurred from purchasing any tokens or NFTs.
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
