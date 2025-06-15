import { BlogPost, BlogTag } from '@/types/blog';
import { blogPosts } from '@/data/blogPosts';

// Utility functions for blog operations
export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.featured && post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug && post.status === 'published');
};

export const getAllTags = (): BlogTag[] => {
  const tagCounts: { [key: string]: number } = {};
  
  getPublishedPosts().forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
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

export const getPostDetailsWithOverrides = (post: BlogPost): BlogPost => {
  if (!post) return post;

  const newPost = { ...post };

  switch (post.slug) {
    case '1-million-dollar-raise-completed':
      newPost.bannerImage = '/lovable-uploads/bdd1dd4c-eb62-44e7-a205-fced995bdf9f.png';
      newPost.bannerImageAlt = '$1,000,000 Fundraise';
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
      break;
    case 'get-ready-players-final-snapshot-for-last-chad-standing-airdrop---a-dehub-milestone-from-q2-2025':
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
      break;
    case 'main-event-ready-last-chad-standing-full-trailer-gains-mma-promoter-attention---a-dehub-milestone-from-q1-2025':
      newPost.bannerImage = '/lovable-uploads/b632bee7-0228-48be-b4ac-7ac0ab5e9994.png';
      newPost.bannerImageAlt = 'Last Chad Standing character helmet';
      break;
    case 'fresh-experience-revamped-app-feed-with-audio-replies--live-talk-spaces---a-dehub-milestone-from-q2-2025':
      newPost.bannerImage = '/lovable-uploads/eeb2e5c9-2347-4865-876e-31f38fe4412a.png';
      newPost.bannerImageAlt = 'DeHub Revamped App Feed';
      newPost.publishedAt = '2025-05-03T10:00:00.000Z';
      break;
    case 'transparency-hub-dhbscancom-launches-for-contract-activity-tracking---a-dehub-milestone-from-q2-2025':
      newPost.bannerImage = '/lovable-uploads/3b0272d6-6cae-4b9a-a303-5fdf970d17e7.png';
      newPost.bannerImageAlt = 'DHBScan Metrics';
      break;
    case 'community-champions-ugc-ambassadorship-program-launched---a-dehub-milestone-from-q2-2025':
      newPost.bannerImage = '/lovable-uploads/59b8a8cb-c9c7-412e-b51e-8f68b47d73a0.png';
      newPost.bannerImageAlt = 'DeHub UGC Programme';
      newPost.publishedAt = '2025-05-10T10:00:00.000Z';
      newPost.content = `## Become a DeHub Ambassador: Announcing Our UGC Programme

The strength of DeHub has always been its community. Today, we're excited to take that to the next level by officially launching the DeHub User-Generated Content (UGC) and Ambassadorship Programme! This is your chance to become an official voice for DeHub, create content you're passionate about, and get rewarded for your creativity and influence.

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

### How to Apply

Ready to join the ranks of our Community Champions? The application process is simple. We'll be sharing a link to the application form soon across our official channels.

Spaces are limited to 50 ambassadors for this first wave, so get ready to showcase your creativity. We can't wait to see what you'll create!`;
      break;
    default:
      break;
  }
  return newPost;
};
