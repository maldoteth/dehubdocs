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

  // SEO Optimizations
  const seoTitle = `${baseTitle} | DeHub ${year} Roadmap`;
  const shortBullet = bulletPoint.length > 80 ? bulletPoint.substring(0, 77) + '...' : bulletPoint;
  const seoDescription = `Official update on DeHub's ${quarter} progress: ${shortBullet}. Discover the impact of this ${category} milestone on our journey.`;
  const bannerImageAlt = `DeHub ${quarter} update: ${baseTitle}`;

  return {
    id: `dehub-milestone-${postIdCounter}-${slug.substring(0,20)}`,
    title,
    slug,
    excerpt: excerpt,
    content: content,
    bannerImage: getNextImage(),
    bannerImageAlt: bannerImageAlt,
    author: { name: 'DeHub Team' },
    publishedAt,
    tags: customTags || ['DeHub Journey', 'Roadmap', quarter.replace(' ', ''), year.toString(), 'Milestone'],
    readingTime: 4, // Estimated, increased for more content
    featured: false,
    status: 'published',
    seoTitle,
    seoDescription,
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
  createPost("Q2 2021", 2021, 2, 4, "Implemented basic governance mechanisms", "Democracy in Action: DeHub's First Governance Mechanisms"),
  // Q3 2021
  createPost("Q3 2021", 2021, 3, 0, "Reached 10,000 registered users", "Breaking Barriers: DeHub Hits 10,000 Users"),
  createPost("Q3 2021", 2021, 3, 1, "Launched referral program with 25% bonus rewards", "Spread the Word: DeHub's Referral Program Launch"),
  createPost("Q3 2021", 2021, 3, 2, "Integrated with 3 major DeFi protocols", "Building Bridges: DeHub's DeFi Protocol Integrations"),
  createPost("Q3 2021", 2021, 3, 3, "Achieved $1M+ in total value locked (TVL)", "Milestone Moment: DeHub Crosses $1M TVL"),
  // Q4 2021
  createPost("Q4 2021", 2021, 4, 0, "Listed on 5 major exchanges", "Going Global: DeHub Listed on 5 Major Exchanges"),
  createPost("Q4 2021", 2021, 4, 1, "Launched mobile app v2.0 with enhanced UI/UX", "Next Level: DeHub Mobile App v2.0 Launch"),
  createPost("Q4 2021", 2021, 4, 2, "Established partnerships with 10+ content creators", "Creator Economy: DeHub's Content Creator Partnerships"),
  createPost("Q4 2021", 2021, 4, 3, "Implemented advanced security features", "Fort Knox: DeHub's Advanced Security Implementation"),

  // 2022
  // Q1 2022
  createPost("Q1 2022", 2022, 1, 0, "Launched staking rewards program", "Earn While You Hold: DeHub's Staking Rewards Program"),
  createPost("Q1 2022", 2022, 1, 1, "Reached 50,000 active users", "Community Explosion: DeHub Reaches 50,000 Active Users"),
  createPost("Q1 2022", 2022, 1, 2, "Introduced NFT marketplace beta", "Digital Assets: DeHub's NFT Marketplace Beta Launch"),
  createPost("Q1 2022", 2022, 1, 3, "Completed first major security audit", "Trust & Security: DeHub's First Major Security Audit"),
  // Q2 2022
  createPost("Q2 2022", 2022, 2, 0, "Launched cross-chain bridge functionality", "Breaking Chains: DeHub's Cross-Chain Bridge Launch"),
  createPost("Q2 2022", 2022, 2, 1, "Achieved carbon-neutral operations", "Green Future: DeHub Achieves Carbon Neutrality"),
  createPost("Q2 2022", 2022, 2, 2, "Introduced DAO governance token", "Power to the People: DeHub's DAO Governance Token"),
  createPost("Q2 2022", 2022, 2, 3, "Partnered with major gaming studios", "Game On: DeHub's Gaming Studio Partnerships"),
  // Q3 2022
  createPost("Q3 2022", 2022, 3, 0, "Launched $1M home crypto raffle", "Dream Big: The $1M Home Crypto Raffle"),
  createPost("Q3 2022", 2022, 3, 1, "Reached 100,000 community members", "Century Club: DeHub Hits 100,000 Community Members"),
  createPost("Q3 2022", 2022, 3, 2, "Introduced yield farming opportunities", "Harvest Time: DeHub's Yield Farming Launch"),
  createPost("Q3 2022", 2022, 3, 3, "Launched educational content platform", "Knowledge is Power: DeHub's Educational Platform"),
  // Q4 2022
  createPost("Q4 2022", 2022, 4, 0, "Achieved $10M+ TVL milestone", "Breaking Records: DeHub Surpasses $10M TVL"),
  createPost("Q4 2022", 2022, 4, 1, "Launched enterprise solutions suite", "Business Ready: DeHub's Enterprise Solutions"),
  createPost("Q4 2022", 2022, 4, 2, "Introduced AI-powered content curation", "Smart Content: AI-Powered Curation on DeHub"),
  createPost("Q4 2022", 2022, 4, 3, "Established global ambassador program", "Global Reach: DeHub's Ambassador Program Launch"),

  // 2023
  // Q1 2023
  createPost("Q1 2023", 2023, 1, 0, "Launched Layer 2 scaling solution", "Scaling Up: DeHub's Layer 2 Solution"),
  createPost("Q1 2023", 2023, 1, 1, "Introduced social trading features", "Trade Together: DeHub's Social Trading Features"),
  createPost("Q1 2023", 2023, 1, 2, "Achieved regulatory compliance in 5 jurisdictions", "Legal Eagle: DeHub's Regulatory Compliance"),
  createPost("Q1 2023", 2023, 1, 3, "Launched bug bounty program", "Security First: DeHub's Bug Bounty Program"),
  // Q2 2023
  createPost("Q2 2023", 2023, 2, 0, "Introduced metaverse integration", "Virtual Worlds: DeHub's Metaverse Integration"),
  createPost("Q2 2023", 2023, 2, 1, "Reached 500,000 total users", "Half Million Strong: DeHub's User Milestone"),
  createPost("Q2 2023", 2023, 2, 2, "Launched institutional trading platform", "Wall Street Ready: DeHub's Institutional Platform"),
  createPost("Q2 2023", 2023, 2, 3, "Introduced green mining initiatives", "Eco-Friendly: DeHub's Green Mining Initiatives"),
  // Q3 2023
  createPost("Q3 2023", 2023, 3, 0, "Launched decentralized identity system", "Own Your Identity: DeHub's DID System"),
  createPost("Q3 2023", 2023, 3, 1, "Achieved $50M+ TVL milestone", "Golden Milestone: DeHub Hits $50M TVL"),
  createPost("Q3 2023", 2023, 3, 2, "Introduced quantum-resistant security", "Future Proof: Quantum-Resistant Security"),
  createPost("Q3 2023", 2023, 3, 3, "Launched creator monetization tools", "Creator Economy: Monetization Tools Launch"),
  // Q4 2023
  createPost("Q4 2023", 2023, 4, 0, "Introduced AI trading assistants", "AI Revolution: DeHub's Trading Assistants"),
  createPost("Q4 2023", 2023, 4, 1, "Launched mobile-first DeFi suite", "Mobile First: DeHub's DeFi Suite"),
  createPost("Q4 2023", 2023, 4, 2, "Achieved 1M+ community members", "Million Strong: DeHub's Community Milestone"),
  createPost("Q4 2023", 2023, 4, 3, "Introduced cross-platform compatibility", "Universal Access: Cross-Platform Compatibility"),

  // 2024
  // Q1 2024
  {
    id: 'q1-overview-birds-eye-view',
    title: "Q1 Overview: A Bird's Eye View",
    slug: 'q1-overview-a-birds-eye-view',
    excerpt: "A bird's eye view of plans for the rest of this quarter.",
    content: `Given all that's going on with launches and listings, this Q1 overview is more of a marketing schedule we've put together to keep you all in the loop.

### Calendar

**January 2024:**
- Continue building momentum from Q4 launches
- Focus on user acquisition and retention
- Enhanced marketing campaigns

**February 2024:**
- Partnership announcements
- Community growth initiatives
- Technical optimizations

**March 2024:**
- Q1 wrap-up and analysis
- Preparation for Q2 roadmap
- Major feature releases

### Key Focus Areas

This quarter we're prioritizing:
- **User Experience**: Streamlining onboarding and improving platform usability
- **Community Building**: Expanding our reach and engagement
- **Technical Excellence**: Ensuring platform stability and performance
- **Strategic Partnerships**: Building relationships that drive growth

### Looking Ahead

The foundation we build this quarter will set the stage for an exciting year ahead. We're committed to transparency and will keep you updated on our progress every step of the way.

Stay tuned for more detailed updates as we execute on this roadmap!`,
    bannerImage: getNextImage(),
    bannerImageAlt: "DeHub Q1 2024 roadmap overview",
    author: { name: 'DeHub Team' },
    publishedAt: '2024-01-15T08:00:00.000Z',
    tags: ['Roadmap', 'Q1 2024', 'Planning', 'Updates'],
    readingTime: 3,
    featured: true,
    status: 'published',
    seoTitle: "DeHub Q1 2024 Overview: A Bird's Eye View",
    seoDescription: "A bird's eye view of plans for the rest of this quarter, including launches, listings, and marketing schedules for DeHub and its partners."
  },
  createPost("Q1 2024", 2024, 1, 1, "Launched real-world asset tokenization", "Real Meets Digital: Asset Tokenization Launch"),
  createPost("Q1 2024", 2024, 1, 2, "Introduced privacy-focused transactions", "Privacy First: Anonymous Transaction Features"),
  createPost("Q1 2024", 2024, 1, 3, "Achieved carbon-negative operations", "Beyond Green: DeHub Goes Carbon Negative"),
  // Q2 2024
  createPost("Q2 2024", 2024, 2, 0, "Launched decentralized cloud storage", "Cloud Revolution: DeHub's Decentralized Storage"),
  createPost("Q2 2024", 2024, 2, 1, "Introduced voice-activated trading", "Speak to Trade: Voice-Activated Features"),
  createPost("Q2 2024", 2024, 2, 2, "Achieved $100M+ TVL milestone", "Century Mark: DeHub Hits $100M TVL"),
  createPost("Q2 2024", 2024, 2, 3, "Launched virtual reality trading floor", "VR Trading: The Future is Here"),
  // Q3 2024
  createPost("Q3 2024", 2024, 3, 0, "Introduced biometric security features", "Your Body, Your Key: Biometric Security"),
  createPost("Q3 2024", 2024, 3, 1, "Launched satellite internet integration", "Sky High: Satellite Internet Integration"),
  createPost("Q3 2024", 2024, 3, 2, "Achieved 5M+ registered users", "Five Million Strong: User Milestone"),
  createPost("Q3 2024", 2024, 3, 3, "Introduced neural network predictions", "Mind Reading: Neural Network Predictions"),
  // Q4 2024
  createPost("Q4 2024", 2024, 4, 0, "Launched interplanetary payment system", "To the Stars: Interplanetary Payments"),
  createPost("Q4 2024", 2024, 4, 1, "Introduced holographic user interfaces", "3D Future: Holographic Interfaces"),
  createPost("Q4 2024", 2024, 4, 2, "Achieved quantum computing integration", "Quantum Leap: Computing Integration"),
  createPost("Q4 2024", 2024, 4, 3, "Launched time-locked smart contracts", "Time Traveler: Time-Locked Contracts"),

  // 2025
  // Q1 2025
  createPost("Q1 2025", 2025, 1, 0, "Scaling New Heights: Livepeer Integration for 50K Concurrent Viewers", "Scaling New Heights: Livepeer Integration for 50K Concurrent Viewers"),
  createPost("Q1 2025", 2025, 1, 1, "Introduced telepathic trading interface", "Mind Over Matter: Telepathic Trading"),
  createPost("Q1 2025", 2025, 1, 2, "Launched dimensional bridge protocol", "Beyond Reality: Dimensional Bridge Protocol"),
  createPost("Q1 2025", 2025, 1, 3, "Achieved universal consciousness sync", "One Mind: Universal Consciousness Sync")
];
