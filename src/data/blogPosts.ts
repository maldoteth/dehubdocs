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

// Helper function to pick a random item from an array
const pickRandom = (arr: string[]): string => {
  if (!arr || arr.length === 0) {
    return ""; // Return an empty string or a default value if the array is empty
  }
  return arr[Math.floor(Math.random() * arr.length)];
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

  // Collections of more descriptive phrases
  const dehubValues = [
    "our core value of relentless innovation",
    "our strong and unwavering commitment to the community",
    "our steadfast focus on ensuring robust platform security",
    "our dedication to fostering continuous growth and tangible improvement",
    "the guiding principle of complete transparency in all our operations",
    "the pursuit of excellence in every feature we develop",
    "a user-centric approach that prioritizes the needs of our audience"
  ];

  const broaderGoals = [
    "our overarching goal of significantly enhancing platform capabilities and user experience",
    "the key objective of strategically expanding user engagement and community interaction",
    "the strategic aim of strengthening our ecosystem's foundational infrastructure for long-term success",
    "our core mission to deliver unparalleled value and cutting-edge solutions to our users",
    "the ambitious drive to pioneer new and innovative solutions within the decentralized technology space",
    "establishing DeHub as a leader in decentralized applications",
    "creating a sustainable and thriving digital economy around our platform"
  ];

  const generalEfforts = [
    "the dedicated and collaborative teamwork of our highly skilled professional team",
    "successfully overcoming a series of complex and multifaceted technical challenges",
    "meticulous strategic planning combined with agile and responsive execution methodologies",
    "a period of intense, focused research and cutting-edge development initiatives",
    "synergistic collaborative efforts across multiple internal departments and external partners",
    "rigorous testing and quality assurance processes to ensure stability",
    "community feedback integration throughout the development lifecycle"
  ];

  const impacts = [
    "significantly strengthened and future-proofed our platform's core foundational elements",
    "opened up exciting new avenues and possibilities for user engagement and rich interaction",
    "materially bolstered our market position and provided a distinct competitive edge",
    "provided a robust and scalable framework for numerous future developments and innovations",
    "enhanced the overall user experience, making it more intuitive, engaging, and rewarding",
    "increased platform adoption and user retention rates",
    "set a new benchmark for quality and innovation within our sector"
  ];
  
  const defaultExcerpt = `Delve into DeHub's journey as we explore the ${quarter} achievement: "${bulletPoint}". Discover its impact on our ecosystem and our ongoing mission to redefine decentralized experiences.`;
  
  const specificDetailsSection = `
The work undertaken for "${bulletPoint}" was comprehensive, involving careful consideration of various factors to ensure its success. 
This milestone represented a significant step in our roadmap, focusing on ${pickRandom([
    "enhancing core functionality", 
    "improving user experience", 
    "expanding platform capabilities", 
    "strengthening security measures",
    "integrating new technologies"
  ])}. 
It involved ${pickRandom([
    "extensive research and development",
    "cross-functional team collaboration",
    "rigorous testing and quality assurance",
    "community feedback and iteration",
    "strategic partnerships"
  ])} to ensure we delivered a robust and impactful solution. 
This laid crucial groundwork for subsequent projects and innovations, reinforcing our commitment to ${pickRandom(dehubValues)}.
  `;

  const defaultContent = `
# ${title}

In the vibrant period of ${quarter}, DeHub marked a significant step forward: **${bulletPoint}**. This accomplishment was a cornerstone in our ongoing mission to revolutionize decentralized infrastructure and deliver exceptional value to our users.

## The Story Behind This Milestone

The initiative to "${bulletPoint}" was driven by ${pickRandom(dehubValues)}. It represented a crucial phase in ${pickRandom(broaderGoals)}, reflecting our commitment to pushing boundaries and achieving new heights.

${additionalContent || `This achievement involved ${pickRandom(generalEfforts)} and was met with positive reception from our community, validating the direction and effort invested. The team dedicated considerable resources to ensure that "${bulletPoint}" not only met but exceeded expectations, showcasing our capability to deliver on complex projects.`}

${specificDetailsSection}

## Impact and Future Outlook

Successfully completing "${bulletPoint}" has ${pickRandom(impacts)}. It paved the way for subsequent innovations and continues to shape DeHub's trajectory towards a more decentralized and user-centric future. This particular milestone is a testament to our adaptive strategies and our focus on long-term growth.

We remain dedicated to building upon such successes as we forge ahead. Stay tuned for more updates from DeHub as we continue to innovate and grow!
  `;

  return {
    id: `dehub-milestone-${postIdCounter}-${slug.substring(0,20)}`,
    title,
    slug,
    excerpt: defaultExcerpt,
    content: defaultContent.trim(),
    bannerImage: getNextImage(),
    bannerImageAlt: title,
    author: { name: 'DeHub Team' },
    publishedAt,
    tags: customTags || ['DeHub Journey', 'Roadmap', quarter.replace(' ', ''), year.toString(), 'Milestone'],
    readingTime: 3, // Estimated
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
