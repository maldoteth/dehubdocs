import { BlogPost, BlogTag } from '@/types/blog';
import { blogPosts } from '@/data/blogPosts';

const applyPostOverrides = (post: BlogPost): BlogPost => {
  const newPost = { ...post };

  if (post.slug === '1-million-dollar-raise-completed') {
    newPost.bannerImage = '/lovable-uploads/bdd1dd4c-eb62-44e7-a205-fced995bdf9f.png';
    newPost.bannerImageAlt = '$1,000,000 Fundraise';
  } else if (post.slug === 'get-ready-players-final-snapshot-for-last-chad-standing-airdrop---a-dehub-milestone-from-q2-2025') {
    newPost.bannerImage = '/lovable-uploads/6d868478-769e-4981-b285-4ca5fa215dc5.png';
    newPost.bannerImageAlt = 'Last Chad Standing helicopter';
    newPost.publishedAt = '2025-04-01T10:00:00.000Z';
    newPost.content = `## A New Era of Gaming: Why Last Chad Standing is a Game-Changer

The gaming landscape is on the brink of a revolution, and Last Chad Standing (LCS) is poised to lead the charge. This isn't just another game; it's a paradigm shift, blending high-stakes competitive play with true digital ownership. But to understand where we're going, we first need to look at why the time for a project like this is now.

### Why Now? The Perfect Storm for Web3 Gaming

The market is ripe for disruption. Recent trends show a massive surge in the global gaming market, projected to exceed $300 billion by 2027. More importantly, there's a growing demand among players for more than just entertainment. They want value, ownership, and a say in the games they dedicate their time to.

- **Market Growth:** The Web3 gaming sector is exploding, with transaction volumes and user engagement hitting all-time highs.
- **Player Demand:** Gamers are tired of closed ecosystems. They are actively seeking out play-to-own models where their in-game assets have real-world value.
- **Technological Maturity:** The underlying blockchain technology has evolved, enabling faster, cheaper, and more seamless gaming experiences than ever before.

This confluence of factors creates a unique window of opportunity for a game that gets it right.

![Last Chad Standing gameplay screenshot](/lovable-uploads/6d868478-769e-4981-b285-4ca5fa215dc5.png)

### Why Us? The Team Forged in Success

An idea is only as strong as the team executing it. The team behind Last Chad Standing is a powerhouse of industry veterans with a proven track record of building, scaling, and exiting successful ventures in both traditional and Web3 spaces.

- **Proven Leadership:** Our founders have a combined 40+ years of experience in game development, finance, and blockchain technology.
- **Track Record:** We've successfully launched multiple projects, generating over $50 million in revenue and building communities of millions of users.
- **Strategic Vision:** We don't just follow trends; we set them. Our deep understanding of market dynamics allows us to anticipate player needs and deliver innovative solutions.

Our past successes are not just a line on a resume; they are the foundation upon which Last Chad Standing is built.

### The LCS Advantage: A Deep Dive into Our Strategy

So, why will Last Chad Standing succeed where others have struggled? Our approach is multi-faceted, focusing on key differentiators that give us a competitive edge.

- **Superior Tokenomics:** We've designed a sustainable economic model that rewards players for their skill and engagement, not just their investment. This prevents the inflationary pressures that have plagued many play-to-earn games.
- **Unparalleled Gameplay:** At its core, LCS is a fun, skill-based game. We're focused on creating a compelling and replayable experience that will attract and retain a large player base from both Web2 and Web3.
- **Community-First Approach:** We believe in building with our community. Player feedback is integral to our development process, ensuring that we create a game that people love to play.

### Game Overview: What is Last Chad Standing?

Last Chad Standing is a high-octane, third-person shooter where strategy, skill, and a little bit of luck determine the winner. Players are dropped into a dynamic, ever-changing arena and must scavenge for weapons, outmaneuver opponents, and be the last one standing to claim victory.

The twist? Every match has real stakes. Players can win valuable digital assets, including exclusive skins, token rewards, and more, all of which are truly owned by them and can be traded on the open market. It's the ultimate competitive experience where every victory counts.

### 🚨 The Final Call: Don't Miss the Airdrop! 🚨

The revolution is coming, and this is your chance to be a part of it from the very beginning.

The last snapshot for the @LCS_game airdrops will be taken in **under a week!**

**Deadline: 04/01/25 at 00:00 UTC**

To ensure you qualify, hold or stake your assets before the deadline and until your airdrop is complete. This is a critical milestone, and further details regarding the game launch, first-round raises, and the game token are releasing imminently.

Stay tuned, and get ready to play. The arena awaits.`;
  } else if (post.slug === 'main-event-ready-last-chad-standing-full-trailer-gains-mma-promoter-attention---a-dehub-milestone-from-q1-2025') {
    newPost.bannerImage = '/lovable-uploads/b632bee7-0228-48be-b4ac-7ac0ab5e9994.png';
    newPost.bannerImageAlt = 'Last Chad Standing character helmet';
  } else if (post.slug === 'fresh-experience-revamped-app-feed-with-audio-replies--live-talk-spaces---a-dehub-milestone-from-q2-2025') {
    newPost.bannerImage = '/lovable-uploads/eeb2e5c9-2347-4865-876e-31f38fe4412a.png';
    newPost.bannerImageAlt = 'DeHub Revamped App Feed';
    newPost.publishedAt = '2025-05-03T10:00:00.000Z';
  } else if (post.slug === 'transparency-hub-dhbscancom-launches-for-contract-activity-tracking---a-dehub-milestone-from-q2-2025') {
    newPost.bannerImage = '/lovable-uploads/a6f93bd4-c3f4-4d91-abd9-ebdd88e3b884.png';
    newPost.bannerImageAlt = 'DHBScan.com banner';
  } else if (post.slug === 'community-champions-ugc-ambassadorship-program-launched---a-dehub-milestone-from-q2-2025') {
    newPost.bannerImage = '/lovable-uploads/443805df-744b-4ab4-80a7-ae59cafe8baa.png';
    newPost.bannerImageAlt = 'DeHub UGC Programme banner';
    newPost.publishedAt = '2025-05-10T10:00:00.000Z';
    newPost.content = `## Become a DeHub Ambassador: Announcing Our UGC Programme

![DeHub UGC Programme Banner](/lovable-uploads/59b8a8cb-c9c7-412e-b51e-8f68b47d73a0.png)

### What is the UGC Programme?

We're looking for passionate creators, storytellers, and influencers to help us spread the word about DeHub. Whether you have a massive following or a small, engaged audience, we believe everyone has a unique voice. We are opening up **50 spots** for creators to join our inaugural cohort of ambassadors.

This programme is designed for creators of all sizes. We have opportunities for both small and large accounts, with compensation structured to reflect your reach and impact.

### What's Involved?

As a DeHub Ambassador, you'll create content across various platforms to showcase what makes our ecosystem special. Your mission, should you choose to accept it, is to produce engaging content for:

- **X (formerly Twitter):** Share updates, create threads, and engage with the wider crypto community.
- **YouTube:** Produce video reviews, tutorials, or deep dives into DeHub's features.
- **Instagram:** Create visually appealing posts, Reels, and Stories.
- **DeHub App:** Be an active, leading voice within our own platform, sharing insights and fostering discussion.

### Who Are We Looking For?

We're seeking creative, authentic, and knowledgeable individuals who are genuinely excited about the future of decentralized platforms. You could be a:

- Crypto enthusiast with a knack for breaking down complex topics.
- Talented video creator or graphic designer.
- Social media guru with an engaged following.
- Passionate DeHub user who wants to share their experience.

### Why Join?

This is more than just a content creation gig. It's a partnership. As a DeHub Ambassador, you will receive:

- **Ranging Compensation:** We offer competitive rewards tailored to your content and audience size.
- **Exclusive Access:** Get sneak peeks at upcoming features and a direct line of communication with the DeHub team.
- **Official Recognition:** Be featured as an official ambassador, boosting your own profile in the Web3 space.
- **Shape the Future:** Your feedback and content will directly contribute to the growth and direction of DeHub.

### Applications Closed

Applications for our first cohort of ambassadors are now closed. Thank you to everyone who applied! We were overwhelmed by the quality and passion of the applications.

Stay tuned for announcements about our selected ambassadors and future opportunities to get involved.`;
  } else if (post.slug === 'building-the-dream-dehubs-core-team-assembled---a-dehub-milestone-from-q1-2021') {
    newPost.content = `DeHub's core team is officially assembled, bringing together a powerhouse of expertise from the worlds of tech, gaming, and social media. This marks a pivotal moment in our journey, laying the foundation for the innovation to come. With a shared vision and diverse skill sets, we are poised to revolutionize the digital landscape. The dream is now in the hands of a team built to make it a reality.

## Meet the Team

[TEAM_SECTION_START]
### Malik Jan - Co-Founder
![Malik Jan|avatar](/lovable-uploads/361bb373-38ee-4888-a4b1-ab8239941261.png)
Founder of U.K registered Web3 developers DeLabs LTD and Co-founder of Puso group, a SEC licensed construction & development company in the Philippines.

**Key Experience:**
- Guide Dogs: Raised >$1m as fundraising manager with a team of 5-10 across multiple sectors
- Randstad: Senior consultant at $8bn dollar market cap and world's largest agency
- Blue Arrow: Biggest biller & award winning consultant at UK's largest agency with >600 staff & 70 offices nationwide. Producing personal net margins in excess of $10,000 per week & hiring thousands in the process with >100 full or part time staff at any one time
- ITS Construction: Sussex Regional Manager at leading UK construction agency. Built own office from scratch and turned 0 into $5k per week in less than 8 months, signed PSL with UK's most prestigious builder Berkeley Homes, won exclusive supplier at $100bn Horsham project, Highwood.

### Mike Hales - Co-Founder
![Mike Hales|avatar](/lovable-uploads/4cc7ad51-0d4d-49fd-9307-b932b6dc7246.png)
Founder and CEO of Rapz, a notable high end MMA fightwear brand backed by top UFC and boxing stars, with exclusive supplier rights to BKFC. Joint-owner of First Class, the UK's largest TikTok partner agency, approaching 1000 streamers signed on and reporting directly for the in-house executive team with offices in the UK and Asia.

**Key Experience:**
- Selected by TikTok executives after 10 months of leading the UK charts with his live streams
- Digital and mixed martial artist behind the Lean Chad Fight Club and Rapz Sport
- Owner of the UK's leading cobra bag provider that recently merged with NGNE

### Indi Jay Cammish - Co-Founder
![Indi Jay Cammish|avatar](/lovable-uploads/e06bb6aa-5093-4691-98a1-7bf09b02a71d.png)
Social media, content & dance expert overseeing communications & corporate relations.

**Key Experience:**
- Highly experienced working directly alongside global stars such as Mabel on long term world tours
- Performed at the Platinum Party at The Palace event for her majesty, the Queen of England in the summer of 2022
- Co-founder of First Class, the UK's leading TikTok partner agency

### Bailey Young - Co-Founder
![Bailey Young|avatar](/lovable-uploads/980e65e0-cae8-4ed4-86da-c11e3d42fa69.png)
Operational powerhouse and former pro-gamer heavily connected across the gaming, music & entertainment scene.

**Key Experience:**
- Investments and tokenomics expert who played an instrumental role in the astronomical growth of DeHub in 2021
- Oversaw the Blocjerk fundraise of $1,000,000 in 2023 which gave a peak ROI of 1,000%
- Former professional gamer, ranking globally in the top 3 COD MW2 and top 100 on Warzone under the tag RickyBobby
[TEAM_SECTION_END]`;
  } else if (post.slug === '2022-wrap-up-and-2023-lookahead') {
    newPost.title = '2022 Wrap Up';
    newPost.status = 'published';
    newPost.bannerImage = '/lovable-uploads/54bc3062-44f0-456b-8183-c916d4cef34e.png';
    newPost.bannerImageAlt = 'DeHub 2022 Wrap-Up with fireworks';
    newPost.publishedAt = '2023-01-04T10:00:00.000Z';
    newPost.tags = ['2022', '2023', 'Recap'];
    newPost.content = `Thanks to each and every one of the team, community and contributors we have been ploughing through our roadmap and setting ourself up for the biggest year yet.

### We started 2022 with…

- No games or arcade d’app
- No streaming d’app or documentaries
- No marketplace d’app or NFTs minted
- No staking d’app.

We’ve sustained plenty of hopes, dreams and bear market battle wounds yet through thick and thin we’ve prevailed. We had a plan and like-minded individuals who were all aligned to the same goal.

### We now end 2022 with…

- Streaming d’app for stakers with 2 original productions released, including the exclusive feature from Jorge Masvidal and more pipelined for 2023
- Gaming arcade with 3 custom play and win to earn games, including Whack a Schiff and Gas Guzzler which is set for app & play store debut imminently
- Our own marketplace with epic partners and products including Raceline in Bristol amongst more to be announced in 2023
- Staking d’app with 100m+ tokens in rewards successfully claimed by holders
- The free mint for LCFC picking up steam with the game set for imminent release with officially licensed fighters.
- Our new company registered in the UK with the BDM team set up, targeting businesses and consumers.

### We enter 2023 with…

Our streaming and marketplace d’app upgrades set for imminent release and currently being tested by users. This includes a permission-less deposit and spend contract that allows for instant fiat onboarding, with 0 wallet knowledge and email/password access. Transactions occur instantly and direct on d’app with 0 gas fees. This allows us to scale to millions of users without having to worry about BNB, Matic or Ethereum TPS. The 3 chains we will be minting the new DHB token on and the first 3 chains that will be integrated onto the d’app, also set for release on IOS and Android.

### It’s clear to see…

We’ve been building and now we enter 2023 prepared to scale. We’ve laid the foundations and all of our core d’apps are coming to fruition, entering their later development phases. Development wise we’re in our strongest position so far, with enough ammo and a continuous stream of reinforcements to get us through any bear market as we’ve proved over the last year. DeHub is not just surviving, but thriving and putting out game-changing tech through the chaos and commotion of a turbulent year. Although it’s been a success development wise, there is a leaderboard out there for d’app users we aren’t close to topping. That must change now.

**2023 must be better, 2023 must be bigger, 2023 must be $DHB.**

### Chronological condensed highlights…

**January 4:** LCFC started revealing art and onboarding notable club members including Lerone Murphy, Kane Mousah, Kelvin Gastelum, Mark Diakese, Brad Pickett and many more.

**January 12:** DeHub community successfully raised over $2,000 to assist long term and value adding community member Skeksis who had just been beaten up and robbed.

**January 20:** Partnered with and integrated fiat on-ramp for users to buy DeHub tokens direct on our d’app via credit or debit cards.

**January 24:** Released staking whitepaper and technical specification as well as a hackathon bounty which was never cracked.

**January 27:** Staking d’app launched on our own custom built contract for our previous tokenomics including reflections and rewards.

**February 22:** Scheduled launch of our stake-to-access streaming d’app including licensed films, tv shows and documentaries as well as our own productions. This was delayed due to Allrites technical delivery and our CTO Aleksandr had to go onto their own tech stack and finish the build they couldn’t.

**February 25:** Malik, Mike and Indi interview and review by Entrepreneur.com released in this article

**February 27:** DeHub production & Vida Entertainment team flew out to Prague to film our genesis original production, following the emotional Oktagon return of war veteran Jay Cuciniello.

**March 1:** Official release of first original production trailer for Way of The Warrior series and featured in BigFish Boxing.

**March 14:** Way of the Warrior pilot released onto our own custom streaming d’app for stakers.

**March 22:** Genesis mints for LCFC commenced with floor price currently 0.3E on a free collection.

**March 26:** Puso Group, the company part owned by Malik and overseeing initial development of the d’app officially receives SEC licenses & registration in the Philippines.

**April 1:** Genesis rewards unlocked from V1 staking with over 50,000,000 in DeHub tokens distributed to all stakers.

**April 7:** Completed OTC deal with North Equities for $100,000 marketing campaign involving a number of KOLs and publications of which we recieved 50%. The tokens were locked into a contract and then never claimed and upon our contract upgrade are considered burned as they can now never be claimed. North Equities were understanding given the market and poor performance and we essentially came away with 3 months of marketing for free, albeit not the best.

**April 19:** Play and win to earn arcade made its debut with classic arcade games available and users airdropped 10,000 tokens for participating.

**May 6:** Released first custom game, Super Robin Hood, onto our arcade. A fun, simple and engaging platform game aimed at growing users and driving ad revenue to the protocol, which is shared with holders.

**May 9:** DeHub production team linked up with Jorge Masvidal to film content and a trailer for episode 2 of our original series, Way of the Warrior featuring a deep dive into the groundgreaking career of UFC legend Brad Pickett.

**May 27:** Partnership secured with Raceline bringing Lamborghinis and a host of other super cars onto our marketplace while offering their customers a chance to claim a free dehub.net minted NFT with every purchase.

**June 6:** Marketplace goes live on mainnet, and with it DeHub officially becomes the world’s first dedicated phygital NFT marketplace with a transaction on chain. Our marketplace is custom built to host our own product lines but also opening up to public use in later stages.

**June 15:** Released “Whack A Schiff” onto our arcade, a play and win to earn game where users fight for high scores for whacking the mole version of Peter Schiff on the head while avoiding the bombs!

**June 29:** DeLabs LTD is registered in the UK and given registration 14204474. Office opened up in Waterlooville with a BDM team focussed on B2B and B2C.

**July 14:** Way of the Warrior Episode 2 featuring Jorge Masvidal and Brad Pickett released to rave reviews and expecting retweets from the legend Gamebred himself prior to facing technical difficulties with our stake to access d’app. This also played a role in DeHub’s transformation to a free public streaming app where anyone can view content. We are working closely with all past partners to bring this to life.

**July 8:** The team attend Binance’s 5th birthday celebrations in Paris and connect with key members of the Binance ecosystem.

**July 25:** DeLabs LTD acquired $1,000,000 UK home and put it up for raffle on DeHub’s provably fair and random NFT raffle protocol. This was covered by a number of KOLs and publishers including bitcoin.com across multiple platforms and sales started well yet ROI became unsustainable and the home is currently renting privately and is likely to be sold on the market followed by refunds to ticket holders. The NFT will still possess utility nonetheless and revenue raised from the property will be reinvested back into the protocol.

**August 10:** First tax halving commenced and reducing the protocol’s transaction tax from 12% to 6% much to the approval of the community.

**August 12:** DeHub officially partners with Travladd, bringing the growing influencer on board our marketing advisory team. Trav was one of the first to cover our project when we launched and will be with us for many years ahead.

**August 15:** Partnered with Lawrence Choto, TikTok star with over 1m followers focussed on positivity and random acts of kindness. We are working on a long term documentary with Lawrence as well as a number of promotional campaigns.

**August 17:** New play and win to earn model released with hackathon which was cracked and users rewarded. A combination of screen recording and security measures will be implemented as it is clear that even the biggest games in the world can’t stop cheaters.

**August 31:** LCFC full art reveal and token-gated Discord groups go live. Along with the first LCFC game being teased in the following months, there is also a full website re-build set for launch on January 11th 2023.

**September 3:** The tax halving caused trigger calibration issues with the contract. Previously, all we had to do was manually pull the triggers to unblock the contract, but after the tax halving this wasn’t possible and the order of triggers also recalibrated meaning we could not resolve the issue immediately.

**September 7:** Contract upgrade announced and notice given to traders on gate.io prior to the halting of transactions.

**September 24:** Private LGE (liquidity generation event) for existing holders commences.

**September 25:** Private sale is sold out and over subscribed by 50% which was used to then fill the public allocation.

**October 10:** New whitepaper released including key updates on tokenomics and technical changes.

**October 25:** On-chain referral and rewards system went live along with upgrade to our marketplace smart contract.

**October 31:** Public LGE goes live for 11 days after integration of our new referral system along with a new bot we built to track and reward engaged users in our community. This is currently being mastered and set for updates prior to the new token launch.

**November 11:** Official release of Gas Guzzler, a play and win to earn game where users collect DeHub coins while avoiding other moonboys around a track in their Lambos making sure to keep the Ethereum Gas topped up and hitting the NOS for a boost!

**Nov 18:** Banking on Zero (BOZ) trailer goes live and promises to be the most uncensored deep dive into the FTX saga and all of the victims that fell along with it.

**November 23:** Malik’s younger brother and team member in our gaming division secures dream job at Binance working as an investment advisor for institutional clients.

**November 25:** Released first gameplay teasers for LCFC’s genesis 2D game “Street Slayer” including officially licensed UFC stars and more set for launch on IOS and Android stores as well as DeHub’s arcade.

**December 2:** Streaming d’app upgrade whitepaper release and technical reveal.

**December 12:** Sheriff finally secures 1 token from Malik on his Birthday.

**December 16:** Private beta goes live on testnet to outstanding reviews and feedback all contributing to further development prior to public launch.

**December 27:** We closed the year with key updates on our latest test d’app, new token listing and marketing partner update where you will see me and the team regularly on Crypto Jamie’s channel, currently ranked number 3 on Binance Live.

Bring on 2023.`;
  } else if (post.slug === 'early-traction-dehubs-beta-app-hits-2000-daus---a-dehub-milestone-from-q1-2021') {
    newPost.title = post.title.replace('Beta App', 'Alpha App');
    newPost.publishedAt = '2021-04-20T10:00:00.000Z';
  } else if (post.title === "Diving In: First DeHub Liquidity Pools on Pancake Swap - A DeHub Milestone from Q2 2021") {
    newPost.publishedAt = '2021-05-30T10:00:00.000Z';
  } else if (post.title === "Listening to Our Users: 50+ Interviews Shape DeHub - A DeHub Milestone from Q1 2021") {
    newPost.publishedAt = '2021-03-30T10:00:00.000Z';
  } else if (post.title === "Power to the People: Community Governed Listings - A DeHub Milestone from Q2 2021") {
    newPost.publishedAt = '2021-05-15T10:00:00.000Z';
    newPost.content = `From the very beginning, DeHub has been a project for the people, by the people. This isn't just a slogan; it's our foundational principle. Every critical decision on our path has been made transparently and democratically with our community.

We took to our Telegram group to vote on the most fundamental aspects of our token. The community decided:
- The Chain: Which blockchain we would build upon.
- The Price: The initial listing price.
- The Market Cap: Our starting valuation.
- The Supply: The total token supply.

Every step of the way was a collective decision. This approach ensures that DeHub is not just a platform, but a true community-governed ecosystem where every member has a voice and a stake in our shared future.

With these foundational decisions made by the community, our path forward was clear. First, we would list on PancakeSwap. Next, we would launch marketing campaigns with top KOLs and celebrities. From there, we would build out our ambitious roadmap, developing on top of our existing alpha application.`;
  } else if (post.title === "Navigating Challenges: Addressing a V1 Smart Contract Security Issue - A DeHub Milestone from Q2 2021") {
    newPost.publishedAt = '2021-06-19T10:00:00.000Z';
    newPost.content = `Security is paramount in the Web3 space. When a vulnerability was discovered in our V1 smart contract, our team acted immediately to address it. We believe in transparency and taking swift, decisive action to protect our community and their assets.

The issue was identified through our continuous internal audits. We paused all interactions with the contract, and our developers worked around the clock to patch the vulnerability and deploy a new, more secure contract.

To ensure a seamless transition for our community, we took a snapshot of all holder balances prior to deploying the new contract. **Every single holder was then automatically airdropped their tokens on a 1:1 basis. Nobody was left behind.**

This incident, while challenging, has made our platform stronger and our commitment to security even more resolute. We are grateful for our community's patience and support during this process.`;
  } else if (post.title.startsWith("Reliability Perfected: 99.99% Uptime for DeHub Streaming")) {
    newPost.publishedAt = '2025-03-10T10:00:00.000Z';
  } else if (post.title.startsWith("Strategic Shift: Discontinuing Ethereum Mainnet Support for DHB")) {
    newPost.publishedAt = '2025-02-01T10:00:00.000Z';
  } else if (post.title.startsWith("Connect and Converse: Advanced Messaging System with Paid/Free DMs")) {
    newPost.publishedAt = '2025-02-25T10:00:00.000Z';
  } else if (post.title.startsWith("Leading the Way: DeHub Agency Becomes UK #1")) {
    newPost.title = "Leading the Way: DeHub founder's agency Becomes UK #1 with 1,000 Streamers";
    newPost.publishedAt = '2024-11-22T10:00:00.000Z';
  } else if (post.title.startsWith("Scaling New Heights: Livepeer Integration for 50k+ Concurrent Viewers")) {
    newPost.publishedAt = '2025-03-14T10:00:00.000Z';
  } else if (post.title.startsWith("Town Hall AMA October 2024")) {
    newPost.content = `Our recent Town Hall AMA was a great success, and we want to thank our incredible community for their insightful questions. We've compiled the key questions and answers below to keep everyone in the loop.

### 1. Can we get a roadmap with exact release dates?
We regularly provide release dates for imminent updates, such as the countdown on dehub.io now. We’ll provide a more detailed roadmap with specific dates for upcoming features with the release of the next upgrade but the core roadmap stays the same. We’ve kept it phased to allow flexibility since the nature of tech and crypto is always shifting.

### 2. What happened to the gold tick on X (Twitter)?
We lost the gold tick while switching account tiers on Twitter, which resulted in a double charge. We’re currently awaiting a refund and customer support. Twitter doesn’t allow tier changes without canceling and re-subscribing, which caused the issue. As a UK-registered company that meets all the gold tick criteria, we’re determined to get it back. It’s a small cost — less than £200 a month which we are spending on ads anyway as comes with ad credits too. We’ve also had a rough history with Twitter; our original account was permanently banned because I set the birth date to under 13 (reflecting our launch date: 04/20/2021). While we could make some noise, being suspended again would be a hassle. We’re just happy to be able to promote on the platform until our own user base is strong enough.

### 3. Will DeHub return to the BNB Chain?
If we redeploy on BNB, it’ll be on opBNB, which is built specifically for scalable apps like ours. Redeployment would require bridging regardless, and opBNB is BNB’s new scaling chain, so it makes no sense to return to the legacy BNB chain. In future updates, we’ll also discontinue in-app support for old BNB to focus on cutting-edge technology. Of course, users are still free to deploy liquidity pools (LP) where they wish.

### 4. What’s the latest on LCFC and the gaming arcade?
While we’ve shifted focus to the streaming app after our last game releases, the arcade is still available. We’re also gearing up for the launch of our 3D hyperrealistic Battle Royale, Last Chad Standing (LCS). This game is a giant leap from the 2D arcade fun we’ve been having. Combined with our team reach across some of the biggest UFC fighters in the world, we’re expecting major adoption of LCS, as a unique game never seen before on or off chain. The only other fighter/weaponless based Battle Royale, (Rumbleverse), discontinued and left a large player base yearning for its return.

### 5. Are Mike and Indi still involved?
Of course, we launched this together, so Mike and Indi are still very much involved. We’re actually planning a new strategy to boost Twitter engagement. If anyone’s been following either on socials you’ll see regular mentions and insights into DeHub and the future. During the bear market, they built one of the most successful TikTok agencies worldwide and are now managing nearly 1,000 streamers, including big names like Beavo, bringing in tens of millions of views daily at their peak. All this expertise is feeding back into what we’re building at DeHub, just as we’ve always envisioned.

### 6. What are the major upcoming releases, and when can we expect them?
Aside from the imminent major upgrade, we’ve already teased some key features. While we can’t provide exact timelines for everything just yet, there are exciting developments underway. As always, we’ve got some surprises, but timing will depend on our progress. We’re working daily to strengthen the protocol and hit significant milestones.

### 7. Can you tell us more about Malik’s business background and the Guide Dogs fundraiser?
During my time as a fundraising manager at Guide Dogs, one of the world’s largest charities supporting the visually impaired, my team raised over seven figures through events, street canvassing, and ongoing pledges. Before that, I worked in a trainee role while studying Biomedical Science at QA Hospital, with the goal of pursuing medicine, influenced by my family’s background in healthcare. However, I realised it wasn’t for me and eventually transitioned into business. A career highlight for me was becoming the top-billing agent at Blue Arrow, the UK’s largest recruitment agency, outcompeting 70 other offices and 600 staff.

### 8. When is the live streaming feature expected?
We’re aiming to launch the live streaming feature within this quarter, though it’s a complex build that ties directly into our agency CRM system. We’re replicating TikTok’s tip-based economy model, which is incredibly intricate. We’re hoping to have it ready by Christmas, but we can’t guarantee exact dates just yet.

### 9. Do you care about the token price, or is it all about the tech?
We absolutely care about the token price, but we have to be cautious about how we discuss it publicly to avoid any legal risks. Protecting the business and the community is our top priority. That said, in crypto, everything inevitably circles back to the chart — whether we like it or not. We’re determined to surpass all past achievements, and we won’t stop until we do.

### 10. Will you list on centralized exchanges (CEXs) again?
We’re only interested in listing on top-tier CEXs like Binance, Coinbase, and other leading platforms. For now, we’re focused on growing organically through community engagement and on-chain volume. Once our volume and LP grow, the top CEXs will naturally want to list us, and we’ll aim to do it on our terms. We’ve never struggled to hit highs without CEXs, and we’ve actually thrived without them.

### 11. Will there be any expected delays after the countdown?
No delays are expected. The major overhaul is ready and will be rolled out at the end of the countdown. Any features not immediately live at launch will be released according to the updated roadmap, which will be shared alongside the upgrade.

This AMA covered a lot of ground, and we’re excited for what’s to come. Stay tuned for more updates, and thanks to everyone who tuned in!`;
  } else if (post.title.startsWith("The Future of Infrastructure: DEPIN Phase 1 Goes Live - A DeHub Milestone from Q4 2024")) {
    newPost.publishedAt = '2024-12-13T10:00:00.000Z';
  }
  
  // Clean up tags by replacing "Qx YYYY" with just "YYYY"
  const cleanedTags = new Set<string>();
  newPost.tags.forEach(tag => {
    const yearMatch = tag.match(/\b(202\d)\b/); // Matches years from 2020-2029
    if (tag.toUpperCase().startsWith('Q') && yearMatch) {
      cleanedTags.add(yearMatch[1]);
    } else {
      cleanedTags.add(tag);
    }
  });
  newPost.tags = Array.from(cleanedTags);

  newPost.title = newPost.title.replace(/\s-\sA\sDeHub\sMilestone\sfrom\sQ\d\s\d{4}$/, '');
  
  return newPost;
};

const getAllPostsWithOverrides = (): BlogPost[] => {
  const allPosts = [...blogPosts];

  const coinbasePost: BlogPost = {
    id: 'dhb-tradable-on-coinbase-soon',
    title: 'Confirmed! $DHB Will Be Tradable on Coinbase Soon',
    slug: 'dhb-tradable-on-coinbase-soon',
    excerpt: 'In a landmark move for accessibility, $DHB, along with other Base tokens, will soon be tradable directly on Coinbase, bridging the gap between DEX and CEX liquidity.',
    content: `## A Monumental Leap for Accessibility

In a momentous move by the Coinbase team, you will soon be able to say "buy $DHB on Coinbase." This development addresses a major pain point in accessibility for what has traditionally been an all-DEX token.

We're getting the best of both worlds: our token will be directly available on one of the biggest centralized exchanges in the world, used by over 200 million people, while remaining entirely on-chain. It almost feels like destiny is at play.

![Coinbase and Base Integration](/lovable-uploads/435d9da9-f69a-405a-92e1-73c030728cd5.png)

## The Future of On-Chain Trading on Coinbase

Coinbase is opening its doors to countless Base tokens with integrated DEX trading. Soon, you’ll be able to trade tokens on Base straight from the Coinbase app, often on the very day they’re created.

A new chapter in on-chain access is coming, and DeHub is proud to be at the forefront of this evolution. This integration will significantly lower the barrier to entry for new users and provide our existing community with unprecedented liquidity and ease of use.

Stay tuned for more updates as we approach this exciting milestone!`,
    bannerImage: '/lovable-uploads/435d9da9-f69a-405a-92e1-73c030728cd5.png',
    bannerImageAlt: 'Base logo on a blue background, representing the Coinbase integration',
    author: {
      name: 'DeHub Team',
    },
    publishedAt: '2025-06-15T10:00:00.000Z',
    tags: ['Coinbase', 'Exchange', 'Listing', 'Base', 'Accessibility'],
    readingTime: 2,
    featured: true,
    status: 'published',
  };
  allPosts.unshift(coinbasePost);

  const adTechPost: BlogPost = {
    id: 'feature-spotlight-ad-tech',
    title: 'Feature Spotlight: Ad Tech',
    slug: 'feature-spotlight-ad-tech',
    excerpt: 'Taking digital advertising to new horizons.',
    content: `### POVR: Proof of View & Rank
Our ad-tech solution is unlike anything else seen across legacy or blockchain markets, and serves a unique purpose within our own app.

“Proof of View” is one dimensional and beyond identification, adds little benefit for users or holders.

What if you could prove viewers were real without wasting block space or gas? What if you could leverage each wallet’s financial data, not just for saving costs, but also to maximise ROI for your campaigns? Don’t just save more money, make more too!

Our software, with patents pending, does this via an unprecedented 13-tier ranking system combined with our verification badges, which were highlighted in this previous feature spotlight.

We are calling it “proof-of-view-and-rank” or “POVR”.


### How it works
The higher your total holdings, the higher-ranking badge you unlock, the more you earn from ads, the more companies pay to advertise to you.

This way benefits the whole ecosystem and not just a single party. Content creators, consumers, holders & companies advertising on the platform all reap more rewards.

Financial data is the most lucrative, and ours is uniquely combined into one system advertisers can use to target audiences. This isn’t even something you can do off-chain, as bank statements are private whereas the blockchain is public.

Being able to target whales and big spenders while also tailoring special deals or discounts for smaller fish in the sea will re-shape how advertising works across the globe. Why wouldn’t anyone want this?


### How does this prevent fraud?
Botting becomes less profitable while activity is trackable on-chain, easily connecting bad actors & eventually curating the entire user base. Advertisers target higher ranks, leaving minimal extractable value at the bottom layer, where any remaining fraud remains. On top of that, our decentralised moderation allows more efficient illicit activity detection and prevention.

For more information on our ad revenue sharing, refer to this thread and our whitepaper below. Also, be sure to follow us for all the latest news on app features and updates.`,
    bannerImage: '/lovable-uploads/79e6faf5-f135-410b-babd-d2d8611e2d5c.png',
    bannerImageAlt: 'DeHub ad tech ecosystem stakeholders',
    author: {
      name: 'DeHub Team',
    },
    publishedAt: '2023-09-30T10:00:00.000Z',
    tags: ['Ad Tech', 'POVR', 'Advertising', 'Feature Spotlight'],
    readingTime: 2,
    featured: true,
    status: 'published',
  };
  allPosts.unshift(adTechPost);

  const newPost: BlogPost = {
    id: 'mvp-app-released-q1-2021',
    title: 'MVP App Released & Listed on Google Play Store',
    slug: 'mvp-app-released-listed-on-google-play-store',
    excerpt: 'The DeHub MVP app is now live on the Google Play Store, featuring OTT streaming, protocol-uploaded content, and a YouTube aggregator. Discover what\'s next on our roadmap.',
    content: `We are thrilled to announce a monumental step in DeHub's journey: the official release of our MVP application, now available for download on the Google Play Store! This is more than just an app launch; it is the culmination of months of hard work, community feedback, and a relentless drive to build the future of decentralized content.

### What's Inside the MVP?

Our initial release is focused on delivering a core viewing experience that showcases the power and potential of the DeHub ecosystem. Here is what you can explore right now:

- **OTT Streaming:** Experience smooth, high-quality over-the-top streaming directly within the app. We are laying the groundwork for a robust, decentralized video delivery network.
- **Protocol-Uploaded Content:** Dive into our first wave of original and curated content, uploaded directly to the DeHub protocol. This is just the beginning of our content library.
- **YouTube Aggregator:** Seamlessly discover and watch your favorite YouTube content without leaving the app. We are bringing the best of Web2 and Web3 together in one place.

This MVP is the foundation upon which we will build a media empire. It is our stake in the ground, demonstrating our commitment to delivering a world-class product.

### The Road Ahead: What's Next for the DeHub App?

The journey is just beginning. Our MVP is a launchpad for a host of revolutionary features that will redefine content creation, consumption, and monetization. Here is a glimpse of what our ambitious roadmap holds:

- **User-Generated Content (UGC):** We will empower creators by enabling them to upload their own content, build their audience, and earn directly from their work.
- **Licensed Content & Exclusive PPVs:** Get ready for premium movies, series, and exclusive Pay-Per-View events, including live sports and concerts.
- **Watch-to-Earn Mechanics:** We are developing innovative models that reward you, the viewer, for your engagement and participation in the ecosystem.
- **DePIN Integration:** At our core, we are building a Decentralized Physical Infrastructure Network (DePIN) to power the future of media, ensuring a censorship-resistant and community-owned platform.

We invite you to download the app, explore the features, and share your feedback. You are the pioneers of this new era, and your insights are crucial as we continue to build and innovate.

Thank you for being part of our community. The future is bright, and it is being built on DeHub.`,
    bannerImage: '/lovable-uploads/7c5ce318-2248-49d4-bb92-dc686c8609f1.png',
    bannerImageAlt: 'FTV - Futurov app on Google Play Store',
    author: {
      name: 'DeHub Team',
    },
    publishedAt: '2021-03-20T10:00:00.000Z',
    tags: ['Launch', 'MVP', 'Android', 'Q1 2021'],
    readingTime: 3,
    featured: true,
    status: 'published',
  };
  allPosts.unshift(newPost);

  const postsToExcludeByTitle = [
    "Safe Spaces: DeHub's Initial Content Moderation Framework - A DeHub Milestone from Q1 2021",
    "The Genesis: DeHub's V1 Token Launch - A DeHub Milestone from Q2 2021",
    "A Voice for All: DeHub's Basic Governance Voting Arrives - A DeHub Milestone from Q2 2021",
    "Growing Together: DeHub's Early Adopter Community Surpasses 2,000 - A DeHub Milestone from Q2 2021"
  ];
  return allPosts
    .filter(post => !postsToExcludeByTitle.includes(post.title))
    .map(applyPostOverrides);
};

// Utility functions for blog operations
export const getPublishedPosts = (): BlogPost[] => {
  return getAllPostsWithOverrides()
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getFeaturedPosts = (): BlogPost[] => {
  return getAllPostsWithOverrides()
    .filter(post => post.featured && post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllPostsWithOverrides().find(post => post.slug === slug && post.status === 'published');
};

export const getAllTags = (): BlogTag[] => {
  const tagCounts: { [key: string]: number } = {};
  
  getPublishedPosts().forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  const allTags = Object.entries(tagCounts).map(([name, count]) => ({ name, count }));

  const qTagRegex = /^Q(\d)\s?(20\d{2})$/;
  const qTags: BlogTag[] = [];
  const otherTags: BlogTag[] = [];

  allTags.forEach(tag => {
    if (qTagRegex.test(tag.name)) {
      qTags.push(tag);
    } else {
      otherTags.push(tag);
    }
  });

  // Sort other tags: by count descending, then alphabetically ascending
  otherTags.sort((a, b) => {
    if (a.count !== b.count) {
      return b.count - a.count;
    }
    return a.name.localeCompare(b.name);
  });

  // Sort Q-tags: by year ascending, then by quarter ascending
  qTags.sort((a, b) => {
    const aMatch = a.name.match(qTagRegex)!;
    const bMatch = b.name.match(qTagRegex)!;

    const aYear = parseInt(aMatch[2], 10);
    const aQuarter = parseInt(aMatch[1], 10);
    const bYear = parseInt(bMatch[2], 10);
    const bQuarter = parseInt(bMatch[1], 10);

    if (aYear !== bYear) {
      return aYear - bYear;
    }
    return aQuarter - bQuarter;
  });

  return [...otherTags, ...qTags];
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return getPublishedPosts().filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
