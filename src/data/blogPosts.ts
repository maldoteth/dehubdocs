
import { BlogPost } from '@/types/blog';

// Placeholder images - using a few from the provided list and cycling through them
const unsplashBase = "https://images.unsplash.com/";
const placeholderImages = [
  "photo-1488590528505-98d2b5aba04b", // laptop
  "photo-1518770660439-4636190af475", // circuit board
  "photo-1461749280684-dccba630e2f6", // code on monitor
  "photo-1581091226825-a6a2a5aee158", // woman with laptop
  "photo-1526374965328-7f61d4dc18c5", // matrix code
  "photo-1487058792275-0ad4aaf24ca7", // colorful code
  "photo-1605810230434-7631ac76ec81", // video screens
  "photo-1519389950473-47ba0277781c", // people with laptops
  "photo-1498050108023-c5249f4df085"  // macbook with code
];
let imageIndex = 0;

const getNextImage = () => {
  const imageName = placeholderImages[imageIndex % placeholderImages.length];
  imageIndex++;
  return `${unsplashBase}${imageName}?ixlib=rb-4.0.3&fit=crop&w=1200&h=600&q=80`;
};

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

const getCategory = (bullet: string): string => {
    const lowerBullet = bullet.toLowerCase();
    if (lowerBullet.includes('team') || lowerBullet.includes('members') || lowerBullet.includes('co-founders')) return 'team';
    if (lowerBullet.includes('token') || lowerBullet.includes('airdrop') || lowerBullet.includes('listed on') || lowerBullet.includes('liquidity') || lowerBullet.includes('delisting') || lowerBullet.includes('$') || lowerBullet.includes('price surge') || (lowerBullet.includes('v2') && (lowerBullet.includes('relaunch') || lowerBullet.includes('trading'))) || lowerBullet.includes('mainnet') || lowerBullet.includes('l2')) return 'finance';
    if (lowerBullet.includes('security') || lowerBullet.includes('vulnerabilities') || lowerBullet.includes('malfunctioned') || lowerBullet.includes('fraudulent') || lowerBullet.includes('challenges')) return 'challenge';
    if (lowerBullet.includes('community') || lowerBullet.includes('users') || lowerBullet.includes('testers') || lowerBullet.includes('adopters') || lowerBullet.includes('interviews') || lowerBullet.includes('gamers') || lowerBullet.includes('ambassadorship')) return 'community';
    if (lowerBullet.includes('award') || lowerBullet.includes('featured in') || lowerBullet.includes('event') || lowerBullet.includes('partnerships') || lowerBullet.includes('agency')) return 'recognition';
    if (lowerBullet.includes('rebranded') || lowerBullet.includes('decentralization') || lowerBullet.includes('policy') || lowerBullet.includes('vision') || lowerBullet.includes('principles') || lowerBullet.includes('framework')) return 'strategy';
    if (lowerBullet.includes('sec registration') || lowerBullet.includes('legal') || lowerBullet.includes('patent')) return 'legal';
    if (lowerBullet.includes('rebuild') || lowerBullet.includes('engine') || lowerBullet.includes('infrastructure') || lowerBullet.includes('cdn') || lowerBullet.includes('backend speed') || lowerBullet.includes('depin') || lowerBullet.includes('upgrade') || lowerBullet.includes('dhbscan.com')) return 'tech';
    // Default to product launch
    return 'product';
};

const generatePostContent = (category: string, title: string, quarter: string, bulletPoint: string): string => {
    let intro, body;

    switch (category) {
        case 'team':
            intro = `Every great journey begins with the right people. In ${quarter}, we laid one of the most crucial cornerstones of DeHub's future by bringing together our core team. This wasn't just about hiring talent; it was about uniting a group of passionate innovators with a shared vision for a decentralized world.`;
            body = `## Forging a Vision Together
The individuals who came together during this formative period brought a diverse range of expertise in blockchain, mobile development, and user experience design. More importantly, they brought a relentless drive to challenge the status quo. The energy was electric, with late-night brainstorming sessions and collaborative coding sprints becoming the norm. This team became the engine that would power DeHub through its initial launches and toughest challenges.

## The Foundation of Our Culture
This milestone was more than just a headcount; it was the genesis of DeHub's culture. We established our commitment to transparency, collaboration, and relentless execution. The bonds formed in ${quarter} have proven resilient, guiding us through market shifts and technological hurdles, and setting the standard for every new member who has joined us since.`;
            break;

        case 'finance':
            intro = `The economic foundation of a decentralized ecosystem is paramount. During ${quarter}, DeHub took a monumental step in strengthening our financial footing. This event was a catalyst, fundamentally shaping our market presence and the value proposition for our community.`;
            body = `## A New Chapter in Value
Whether it was launching a new token, securing a major exchange listing, or establishing critical liquidity, this was a moment of truth for DeHub's economic model. It represented months of strategic planning, rigorous security audits, and tireless negotiations to ensure we created a sustainable and fair system for all participants. This wasn't just about numbers on a screen; it was about creating real, tangible utility and empowering our holders.

## Market Impact and Community Trust
The successful execution of this financial milestone sent a strong signal to the market about DeHub's seriousness and long-term potential. It enhanced liquidity, broadened our investor base, and most importantly, solidified the trust our community placed in us. We demonstrated our ability to navigate the complex world of DeFi and create opportunities for our supporters, laying the groundwork for future economic growth and stability.`;
            break;
        
        case 'challenge':
             intro = `The path of innovation is never a straight line. In ${quarter}, we faced a significant hurdle head-on. While difficult, this moment became a defining one for DeHub, testing our resilience and reinforcing our commitment to transparency and security.`;
             body = `## Confronting the Issue
Discovering this issue was a sobering moment for the team. Our immediate priority was to be fully transparent with our community. We communicated openly about the nature of the problem, the potential impact, and the steps we were taking to address it. There was no room for ambiguity. Our team worked around the clock, collaborating with security experts to diagnose the root cause and develop a robust solution.

## Stronger Through Adversity
This experience, though challenging, ultimately made DeHub stronger. It forced us to scrutinize our processes, upgrade our security protocols, and implement more rigorous testing methodologies. We learned invaluable lessons about risk management and crisis communication. More importantly, we proved to our community that we would always act in their best interests, even when the news was tough. Emerging from this challenge, we did so with a more secure platform and a renewed sense of purpose.`;
             break;

        case 'community':
            intro = `DeHub is nothing without its community. In ${quarter}, we celebrated a massive achievement in our growth, a testament to the vibrant and engaged user base that forms the heart of our project. This milestone wasn't just a number; it was a reflection of the passionate supporters who believe in our vision.`;
            body = `## Building a Movement
From our earliest days, we knew that building a strong community was just as important as building great technology. This milestone was the result of consistent engagement, transparent communication, and a commitment to listening to our users. Through AMAs, social media discussions, and feedback channels, we fostered a space where everyone felt heard and valued.

## The Power of People
Reaching this point demonstrated the powerful network effect of a truly decentralized project. Our early adopters became our biggest advocates, spreading the word and helping newcomers navigate the ecosystem. This organic growth is the most powerful kind, and it's a testament to the real-world value DeHub provides. We are endlessly grateful for every single member of our community; you are the reason we build.`;
            break;

        case 'recognition':
            intro = `Hard work and innovation deserve to be recognized. We were incredibly honored in ${quarter} when DeHub achieved a significant external milestone. This acknowledgment from the wider industry was a proud moment for our entire team and community, validating our efforts and vision.`;
            body = `## A Testament to Our Vision
Receiving this recognition was validation for the unique path we've chosen. It confirmed that our dedication to pushing the boundaries of decentralized technology was not only being noticed but celebrated. This was an award not just for our team, but for every community member who believed in our vision and supported us along the way.

## Amplifying Our Message
This achievement provided us with a platform to share the DeHub story with a broader audience. It opened doors to new conversations, partnerships, and opportunities, further solidifying our position as a serious contender in the tech landscape. While we are proud of the accolade, we view it not as a final destination, but as fuel for our journey ahead, motivating us to continue innovating and delivering for our community.`;
            break;
            
        case 'strategy':
            intro = `Building a lasting project requires not just great code, but a clear and principled strategy. In ${quarter}, we made a pivotal strategic decision that would shape our path forward. This move was a deliberate choice, reflecting our core values and long-term vision for the DeHub ecosystem.`;
            body = `## The 'Why' Behind the Move
This decision was not made lightly. It came after extensive internal discussion and analysis of the market landscape. At its core, the choice was driven by our unwavering commitment to principles like decentralization, user ownership, and long-term sustainability. We believed that this path, while perhaps not the easiest, was the right one for the health and integrity of the project.

## Charting Our Own Course
This strategic shift was a declaration of our independence and our commitment to our principles. It demonstrated that we are not afraid to make bold moves to protect the interests of our community and the future of the platform. It has since guided our development roadmap and partnership decisions, ensuring that every step we take is aligned with our foundational mission.`;
            break;

        case 'legal':
            intro = `Navigating the complex regulatory landscape is a critical part of building a sustainable, global platform. In ${quarter}, DeHub achieved a crucial legal and compliance milestone. This was a significant step in legitimizing our operations and ensuring our long-term viability.`;
            body = `## Building on a Foundation of Trust
In an industry where trust is paramount, establishing a proper legal framework is non-negotiable. This achievement was the result of months of diligent work with legal experts to ensure our operations were compliant and above board. It provides a layer of security and legitimacy that protects not only the project but also our users and stakeholders.

## Paving the Way for Growth
With this legal milestone secured, DeHub is better positioned for mainstream adoption and institutional partnerships. It removes ambiguity and signals to the world that we are a serious, professional organization committed to doing things the right way. This foundation allows us to pursue more ambitious goals with confidence, knowing that we are built to last.`;
            break;

        case 'tech':
            intro = `At our core, DeHub is a technology company driven to solve complex problems. During ${quarter}, our engineering team achieved a significant technical breakthrough. This was a feat of engineering that has fundamentally improved the performance, scalability, and user experience of our platform.`;
            body = `## Under the Hood
This project involved a deep dive into our architecture, pushing the limits of our technology stack. Our engineers architected a new system, optimized algorithms, and refactored legacy code to achieve this leap forward. It required creative problem-solving and a relentless focus on efficiency and scalability.

## A Better Experience for All
The direct result of this technical achievement is a faster, more reliable, and more powerful platform for our users. Whether it's reduced latency, enhanced security, or the ability to support more concurrent activity, this infrastructure upgrade is a tide that lifts all boats. It's the kind of foundational work that enables the next generation of features and ensures DeHub can continue to scale for years to come.`;
            break;

        case 'product':
        default:
             intro = `Innovation is at the heart of DeHub. In ${quarter}, we were thrilled to bring a new experience to our users with a major product update. This was the culmination of countless hours of design, development, and community feedback, aimed at pushing the boundaries of what's possible in a decentralized ecosystem.`;
             body = `## From Concept to Reality
The idea for this feature was born from a simple question: How can we provide more value and utility to our users? The journey from that initial concept to a fully-fledged product was one of intense collaboration. Our product managers, designers, and engineers worked in lockstep, iterating through prototypes and incorporating feedback from our beta testers to ensure the final product was intuitive, powerful, and polished.

## Empowering Our Users
The release of this feature marked a significant enhancement to the DeHub platform. It unlocked new capabilities, created new ways for our community to engage, and solidified our position as a leader in the space. The enthusiastic adoption and positive feedback we received were a testament to the hard work of the entire team and the power of building with the user at the center of every decision. This milestone wasn't just an end-point; it was the beginning of a new chapter of innovation for DeHub.`;
            break;
    }

    return `
# ${title}

${intro}

${body}
    `.trim();
};

let postIdCounter = 0;
const createPost = (
  quarter: string, // e.g., "Q1 2021"
  year: number,
  quarterNum: number, // 1, 2, 3, 4
  itemIndexInQuarter: number, // 0-based
  bulletPoint: string,
  customTitle?: string,
  additionalContent?: string,
  customTags?: string[]
): BlogPost => {
  postIdCounter++;
  const baseTitle = customTitle || bulletPoint;
  const title = `${baseTitle} - A DeHub Milestone from ${quarter}`;
  const slug = generateSlug(title);
  const month = (quarterNum - 1) * 3 + 1; // Q1->Jan, Q2->Apr, etc.
  const day = itemIndexInQuarter + 1;
  const publishedAt = new Date(year, month - 1, day).toISOString();

  const excerpt = `A deep dive into a key ${quarter} milestone for DeHub. Learn how this development shaped our ecosystem and our journey forward.`;
  
  const category = getCategory(bulletPoint);
  const content = generatePostContent(category, title, quarter, bulletPoint);

  return {
    id: `dehub-milestone-${postIdCounter}-${slug.substring(0,20)}`,
    title,
    slug,
    excerpt: excerpt,
    content: content,
    bannerImage: getNextImage(),
    bannerImageAlt: title,
    author: { name: 'DeHub Team' },
    publishedAt,
    tags: customTags || ['DeHub Journey', 'Roadmap', quarter.replace(' ', ''), year.toString(), 'Milestone'],
    readingTime: 4, // Estimated, increased for more content
    featured: false,
    status: 'published',
  };
};

export const blogPosts: BlogPost[] = [
  // 2021
  // Q1 2021
  createPost("Q1 2021", 2021, 1, 0, "Assembled core development team", "Building the Dream: DeHub's Core Team Assembled"),
  createPost("Q1 2021", 2021, 1, 1, "Launched first beta app on App Store with 500+ initial testers and 2,000 DAUs before token release", "Early Traction: DeHub's Beta App Hits 2,000 DAUs"),
  createPost("Q1 2021", 2021, 1, 2, "Conducted 50+ user interviews to validate product-market fit", "Listening to Our Users: 50+ Interviews Shape DeHub"),
  createPost("Q1 2021", 2021, 1, 3, "Established basic content moderation framework", "Safe Spaces: DeHub's Initial Content Moderation Framework"),
  // Q2 2021
  createPost("Q2 2021", 2021, 2, 0, "Launched v1 token", "The Genesis: DeHub's V1 Token Launch"),
  createPost("Q2 2021", 2021, 2, 1, "Community governed listing chain, price / market cap.", "Power to the People: Community Governed Listings"),
  createPost("Q2 2021", 2021, 2, 2, "Established first liquidity pools on Pancake Swap", "Diving In: First DeHub Liquidity Pools on Pancake Swap"),
  createPost("Q2 2021", 2021, 2, 3, "Built community of 2,000+ early adopters", "Growing Together: DeHub's Early Adopter Community Surpasses 2,000"),
  createPost("Q2 2021", 2021, 2, 4, "Implemented basic governance voting mechanism", "A Voice for All: DeHub's Basic Governance Voting Arrives"),
  createPost("Q2 2021", 2021, 2, 5, "Smart contract security issue discovered", "Navigating Challenges: Addressing a V1 Smart Contract Security Issue"),
  // Q3 2021
  createPost("Q3 2021", 2021, 3, 0, "Rebranded to DeHub", "A New Era: The Rebranding to DeHub"),
  createPost("Q3 2021", 2021, 3, 1, "Started full app rebuild using React Native for better cross-platform support", "Building for All: App Rebuild with React Native"),
  createPost("Q3 2021", 2021, 3, 2, "Airdropped all holders automatically", "Rewarding Loyalty: Automatic Airdrop for All Holders"),
  createPost("Q3 2021", 2021, 3, 3, "Addressed security vulnerabilities from v1 with full Certik Audit", "Fortifying Our Walls: V1 Security Hardened with Certik Audit"),
  createPost("Q3 2021", 2021, 3, 4, "Expanded team to 15 members across 3 time zones", "Global Reach: DeHub Team Grows to 15 Strong"),
  // Q4 2021
  createPost("Q4 2021", 2021, 4, 0, "Released prediction and raffle games", "Game On: DeHub Launches Prediction and Raffle Games"),
  createPost("Q4 2021", 2021, 4, 1, "Listed on Gate.io after a near 1000x price surge, with close to $10m in our LP", "To the Moon: Gate.io Listing and $10M LP Milestone"),
  createPost("Q4 2021", 2021, 4, 2, "Discovered listing agent was fraudulent, stole our fundraise and dumped our chart instead of airdropping Gate users, Gate investigated and apologised but could not identify the rogue employee as they lost the records, apparently.", "Trials and Tribulations: The Gate.io Listing Agent Incident"),
  createPost("Q4 2021", 2021, 4, 3, "Implemented game mechanics with provably fair randomization", "Fair Play: Provably Fair Randomization in DeHub Games"),
  createPost("Q4 2021", 2021, 4, 4, "Community grew to 8,000+ active members", "Strength in Numbers: DeHub Community Exceeds 8,000 Active Members"),

  // 2022
  // Q1 2022
  createPost("Q1 2022", 2022, 1, 0, "Released arcade with 5 initial games including Super Robin Hood and Tomb Runner and predictions", "Level Up: DeHub Arcade Launches with 5 Games & Predictions"),
  createPost("Q1 2022", 2022, 1, 1, "Achieved 5,000+ monthly active gamers", "High Score: DeHub Gaming Hits 5,000+ Monthly Active Users"),
  createPost("Q1 2022", 2022, 1, 2, "Implemented blockchain-based leaderboards and rewards", "On-Chain Glory: Blockchain Leaderboards and Rewards in DeHub Arcade"),
  createPost("Q1 2022", 2022, 1, 3, "Introduced social features allowing friend challenges", "Challenge Accepted: Social Features and Friend Challenges Arrive"),
  createPost("Q1 2022", 2022, 1, 4, "Built custom game engine optimized for mobile devices", "Powering Play: DeHub's Custom Mobile Game Engine"),
  // Q2 2022
  createPost("Q2 2022", 2022, 2, 0, "Released stream app supporting 4K content with 99.9% uptime", "Crystal Clear: DeHub Stream App with 4K Support & High Uptime"),
  createPost("Q2 2022", 2022, 2, 1, "Produced first tokenised documentary featuring Jorge Masvidal, Brad Pickett & more by Luke Barnatt", "Lights, Camera, Blockchain: DeHub's First Tokenized Documentary"),
  createPost("Q2 2022", 2022, 2, 2, "Genesis mint for Chads collection", "The Chads Arrive: Genesis Mint of the Chads NFT Collection"),
  createPost("Q2 2022", 2022, 2, 3, "Secured SEC registration with the Philippine Government for real estate, construction and brokerage services", "Building Bridges: Philippine SEC Registration Secured"),
  createPost("Q2 2022", 2022, 2, 4, "Implemented advanced video compression reducing bandwidth costs by 60%", "Efficient Streaming: Advanced Video Compression Reduces Costs"),
  createPost("Q2 2022", 2022, 2, 5, "Built NFT marketplace with royalty distribution system", "Empowering Creators: DeHub NFT Marketplace with Royalties"),
  // Q3 2022
  createPost("Q3 2022", 2022, 3, 0, "Incorporated DeLabs LTD with proper legal structure and compliance", "Official Standing: DeLabs LTD Incorporated"),
  createPost("Q3 2022", 2022, 3, 1, "Acquired $1,000,000 home for largest crypto raffle ever (15,000+ participants)", "Dream Big: The $1M Home Crypto Raffle by DeHub"),
  createPost("Q3 2022", 2022, 3, 2, "Secured power of attorney for multiple islands and sea front strip in Palawan worth over $15,000,000 in an attempt to tokenise sales but failed due to regulatory challenges from the Philippine SEC", "Ambitious Ventures: The Palawan Real Estate Tokenization Attempt"),
  createPost("Q3 2022", 2022, 3, 3, "Established partnerships with real estate and legal firms", "Strategic Alliances: Partnering with Real Estate and Legal Experts"),
  createPost("Q3 2022", 2022, 3, 4, "Created transparent raffle mechanics with on-chain verification", "Trust and Transparency: On-Chain Verified Raffle Mechanics"),
  // Q4 2022
  createPost("Q4 2022", 2022, 4, 0, "Contract tax triggers malfunctioned, freezing the token and our LP, forced to relaunch v2", "The Unforeseen: Navigating a Contract Malfunction and V2 Relaunch"),
  createPost("Q4 2022", 2022, 4, 1, "Migrated 25,000+ token holders to new improved contract", "Moving Forward: Successful Migration of 25,000+ Holders to V2"),
  createPost("Q4 2022", 2022, 4, 2, "Implemented standard ERC20 tokenomics to avoid future issues", "Stability First: Adopting Standard ERC20 Tokenomics"),

  // 2023
  // Q1 2023
  createPost("Q1 2023", 2023, 1, 0, "Alpha launch of complete d'app integrating all ecosystem components", "The Vision Unfolds: Alpha Launch of DeHub's Integrated D'App"),
  createPost("Q1 2023", 2023, 1, 1, "Released tokenised uploads with onchain ad revenue sharing (creators earning 90%)", "Creator Economy Reimagined: Tokenized Uploads & 90% Ad Revenue Share"),
  createPost("Q1 2023", 2023, 1, 2, "Commenced advanced analytics dashboard for creators", "Insights for Creators: Advanced Analytics Dashboard Development Begins"),
  createPost("Q1 2023", 2023, 1, 3, "Recommenced trading of DeHub v2 on Gate.io", "Back in Action: DeHub V2 Trading Resumes on Gate.io"),
  // Q2 2023
  createPost("Q2 2023", 2023, 2, 0, "Won most innovative company award at UK's Corporate Livewire, competing against 900+ companies in a vote based system backed by Sony, Samsung and other industry giants.", "Innovation Recognized: DeHub Wins Corporate Livewire Award"),
  createPost("Q2 2023", 2023, 2, 1, "Featured in major tech publications including TechCrunch and VentureBeat", "In the Spotlight: DeHub Featured in TechCrunch and VentureBeat"),
  createPost("Q2 2023", 2023, 2, 2, "Patent applications commenced for core streaming technology and watch2earn mechanics", "Protecting Innovation: Patent Applications for Streaming & Watch2Earn Tech"),
  // Q3 2023
  createPost("Q3 2023", 2023, 3, 0, "Announced partner airdrop for BJ (now fan.site), the adult fork of DeHub", "Expanding Horizons: Partner Airdrop for Fan.site (BJ Fork)"),
  createPost("Q3 2023", 2023, 3, 1, "Facilitated knowledge transfer and technical support to fork team", "Supporting Growth: Knowledge Transfer to Fan.site Team"),
  createPost("Q3 2023", 2023, 3, 2, "Demonstrated true decentralization principles in action", "Decentralization in Practice: The Fan.site Fork Story"),
  createPost("Q3 2023", 2023, 3, 3, "Established framework for future community-driven forks", "Paving the Way: Framework for Community-Driven Forks"),
  // Q4 2023
  createPost("Q4 2023", 2023, 4, 0, "Voluntary delisting from Gate.io to prioritize decentralization", "Prioritizing Principles: Voluntary Delisting from Gate.io for Decentralization"),
  createPost("Q4 2023", 2023, 4, 1, "Commitment to transparency with all DEX policy implementation", "Open and Clear: DEX Policy Implementation and Transparency Commitment"),
  createPost("Q4 2023", 2023, 4, 2, "Implemented automated liquidity provision strategies", "Smarter Liquidity: Automated Liquidity Provision on DEXs"),
  createPost("Q4 2023", 2023, 4, 3, "Published full transparency reports showing all protocol metrics", "Full Disclosure: DeHub's Comprehensive Transparency Reports"),

  // 2024
  // Q1 2024
  createPost("Q1 2024", 2024, 1, 0, "Listed DHB on Eth mainnet", "Expanding Reach: DHB Lists on Ethereum Mainnet"),
  createPost("Q1 2024", 2024, 1, 1, "Raised $1,000,000 for adult fork BJ (now fan.site) from VCs, Launchpads & Public Sales.", "Fueling Growth: $1M Raised for Fan.site (BJ Fork)"),
  // Q2 2024
  createPost("Q2 2024", 2024, 2, 0, "Listed SDHB on Base L2", "Layer 2 Expansion: SDHB Lists on Base"),
  createPost("Q2 2024", 2024, 2, 1, "Dubai event expanded Middle East presence", "Global Footprint: DeHub Expands Middle East Presence via Dubai Event"),
  createPost("Q2 2024", 2024, 2, 2, "Co-Founders Mike Hales & Indi Cammish Opened TikTok agency in partnership with TikTok execs directly after successful year topping UK stream charts earning 1k a day", "Entrepreneurial Spirit: Co-Founders Launch TikTok Agency"),
  createPost("Q2 2024", 2024, 2, 3, "Established creator partnerships in 15 countries", "Worldwide Creators: Partnerships Spanning 15 Countries"),
  // Q3 2024
  createPost("Q3 2024", 2024, 3, 0, "Completed major app upgrade with 95% positive user feedback", "Leveling Up: Major App Upgrade Earns 95% Positive Feedback"),
  createPost("Q3 2024", 2024, 3, 1, "Overhauled user interface & improved back end speed by 200%", "Faster and Sleeker: UI Overhaul and 200% Backend Speed Boost"),
  // Q4 2024
  createPost("Q4 2024", 2024, 4, 0, "Released onchain tradable subscriptions", "Revolutionizing Access: On-Chain Tradable Subscriptions Launch"),
  createPost("Q4 2024", 2024, 4, 1, "Released teaser for Last Chad Standing (first ever MMA battle royale) with 1M+ views", "The Hype is Real: Last Chad Standing Teaser Hits 1M+ Views"),
  createPost("Q4 2024", 2024, 4, 2, "Agency grew to UK #1 with 1,000 live streamers signed exclusively", "Leading the Way: DeHub Agency Becomes UK #1 with 1,000 Streamers"),
  createPost("Q4 2024", 2024, 4, 3, "Released DePIN Phase 1", "The Future of Infrastructure: DePIN Phase 1 Goes Live"),

  {
    id: 'dehub-1-year-review-gate-delist',
    title: '1 Year Review; A Quick Look Back',
    slug: '1-year-review-a-quick-look-back',
    excerpt: 'A year ago, we took a bold step and decided to delist from gate.io. This is a look back at that decision and our commitment to decentralization.',
    content: `A year ago, we took a bold step and decided to delist ourself from gate.io after they ended UK support. At this stage, our multi-million dollar liquidity pool (LP) was relentlessly drained by arb bots and questionable activity for years, so we had to make decisions to protect our network.

After almost a year of withdrawals, over 120,000,000 still remained on Gate, almost exactly as predicted in [this article last year](https://medium.com/@dehub.bsc/were-turning-back-time-2bfd4723fe86).

As we prepare to redeploy capital back to BNB and to protect our upcoming LP, all tokens left on gate.io have been burned again, barring ~1m for small left over withdrawals.

## Future Withdrawals

If you failed to withdraw in time, have been locked out of your account, or had your account closed, simply DM us, email tech@dehub.net or fill in this form for recovery assistance.

## Why did it take so long to redeploy to BNB?

After we announced our plans, Gate couldn’t provide the wallet address data that would have allowed us to verify holders for airdrops during our migration. They informed us their systems don’t allow this so the only way was to re-mint the tokens and open withdrawals. So until enough withdrawals and time passed, as it has now, deploying back on BNB was just a risk of further LP draining.

## Conclusion

This all fully affirms our decision to delist ourself, go all DEX and stay true to the values that make this industry so great.

While crypto is an unregulated cesspit of scammers, grifters and chancers, the lack of regulation is exactly what makes it so beautiful at the same time. Untamed innovation, true capitalism. For “every action has an equal an opposite reaction” — Newton’s Third Law is one I’ve associated to most through out life and it couldn’t be more true with crypto. It’s also why we’ve never stopped building; for every setback, there is an equal and opposite opportunity.

Thank you for trusting and supporting us through these unprecedented actions, all to ensure the success of DeHub and protection of investors.`,
    bannerImage: '/lovable-uploads/ffb3a54c-cb66-4856-b9ff-491567ce3324.png',
    bannerImageAlt: 'A Look Back In Time',
    author: { name: 'DeHub' },
    publishedAt: new Date('2024-11-12').toISOString(),
    tags: ['Gate.io', 'Delisting', 'DEX', 'Transparency', 'Strategy', '2024'],
    readingTime: 2,
    featured: true,
    status: 'published',
  },

  // 2025
  // Q1 2025
  createPost("Q1 2025", 2025, 1, 0, "Released onchain live streams with real-time tip animations", "Interactive Streaming: On-Chain Live Streams with Animated Tips"),
  createPost("Q1 2025", 2025, 1, 1, "Implemented Livepeer infrastructure supporting 50,000+ concurrent viewers with the ability of unlimited (in theory) on higher spend tiers.", "Scaling New Heights: Livepeer Integration for 50k+ Concurrent Viewers"),
  createPost("Q1 2025", 2025, 1, 2, "Built custom CDN reducing latency to sub-200ms globally", "Speed of Light: Custom CDN Achieves Sub-200ms Global Latency"),
  createPost("Q1 2025", 2025, 1, 3, "Achieved 99.99% uptime across all streaming services", "Reliability Perfected: 99.99% Uptime for DeHub Streaming"),
  createPost("Q1 2025", 2025, 1, 4, "Discontinue Ethereum Mainnet support", "Strategic Shift: Discontinuing Ethereum Mainnet Support for DHB"),
  createPost("Q1 2025", 2025, 1, 5, "Completed messaging system with paid or free DMs and unlockable chat content", "Connect and Converse: Advanced Messaging System with Paid/Free DMs"),
  createPost("Q1 2025", 2025, 1, 6, "Released full trailer for Last Chad Standing, picked up by major MMA promoters", "Main Event Ready: Last Chad Standing Full Trailer Gains MMA Promoter Attention"),
  // Q2 2025
  createPost("Q2 2025", 2025, 2, 0, "Launched UGC ambassadorship program with 50 vacancies", "Community Champions: UGC Ambassadorship Program Launched"),
  createPost("Q2 2025", 2025, 2, 1, "Implemented comprehensive creator education curriculum", "Empowering Talent: Comprehensive Creator Education Curriculum Rolls Out"),
  createPost("Q2 2025", 2025, 2, 2, "Released dhbscan.com for users to track activity across all DHB contracts", "Transparency Hub: dhbscan.com Launches for Contract Activity Tracking"),
  createPost("Q2 2025", 2025, 2, 3, "Revamped main app feed, revealed audio replies and live talk spaces", "Fresh Experience: Revamped App Feed with Audio Replies & Live Talk Spaces"),
  createPost("Q2 2025", 2025, 2, 4, "Final snapshot for Last Chad Standing game airdrop, for both holders and stakers", "Get Ready Players: Final Snapshot for Last Chad Standing Airdrop"),
];
