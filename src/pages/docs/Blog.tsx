import React, { useState, useMemo } from 'react';
import { Search, Tag, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { getPublishedPosts, getFeaturedPosts, getAllTags } from '@/utils/blogUtils';
import BlogCard from '@/components/blog/BlogCard';
import { Alert, AlertDescription } from '@/components/ui/alert';
import SEO from '@/components/SEO';
import { BlogPost as BlogPostType, BlogTag } from '@/types/blog';

const newPostData: BlogPostType = {
  id: 'base-pool-going-live-soon',
  title: 'Base pool going live soon!',
  slug: 'base-pool-going-live-soon',
  excerpt: 'Get ready DeHubbers! We are thrilled to announce that we will be deploying on Uniswap on the Base network imminently. Find out how to bridge your tokens for free!',
  content: `
    <h2 class="text-2xl font-bold mb-4 font-exo">The Next Chapter: DeHub is Launching on Base!</h2>
    <p class="mb-4 text-lg text-royal-blue/80">Get ready, DeHubbers! The moment many of you have been waiting for is almost here. We are thrilled to announce that DeHub will be deploying on Uniswap on the Base network imminently.</p>
    <p class="mb-4 text-royal-blue/80">This strategic move marks a significant milestone for our project, opening up a world of possibilities within Base's fast, low-cost, and developer-friendly Ethereum L2 ecosystem. We're excited to bring more liquidity, accessibility, and utility to the DeHub token and our community.</p>
    
    <h3 class="text-xl font-bold mt-8 mb-4 font-exo">Official Base Contract</h3>
    <p class="mb-4 text-royal-blue/80">For everyone wanting to get prepared, here is the official DeHub token contract address on the Base network:</p>
    <div class="bg-sky-blue/10 p-4 rounded-lg my-4 overflow-x-auto border border-sky-blue/20">
      <a href="https://basescan.org/token/0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c" target="_blank" rel="noopener noreferrer" class="text-sm font-mono text-middle-blue break-all hover:underline">0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c</a>
    </div>
    <p class="mb-4 text-royal-blue/80">We encourage you to add this to your wallet and verify it on <a href="https://basescan.org/token/0xD20ab1015f6a2De4a6FdDEbAB270113F689c2F7c" target="_blank" rel="noopener noreferrer" class="text-middle-blue hover:underline font-semibold">Basescan</a>.</p>
    
    <h3 class="text-xl font-bold mt-8 mb-4 font-exo">Bridge to Base for FREE!</h3>
    <p class="mb-4 text-royal-blue/80">To celebrate our launch and make your transition seamless, we've established a simple and free bridging mechanism. You can migrate your tokens from other networks to Base effortlessly.</p>
    <p class="mb-4 text-royal-blue/80">Simply send your tokens to this dedicated bridging address:</p>
    <div class="bg-sky-blue/10 p-4 rounded-lg my-4 overflow-x-auto border border-sky-blue/20">
      <code class="text-sm font-mono text-middle-blue break-all">0x11D79aE9a0F8a8f9Fcf5BE71e403ed203EC2394d</code>
    </div>
    <p class="mb-4 text-royal-blue/80">Tokens sent to this address will be automatically burned on the origin chain and re-minted for you on the Base network. No fees, no hassle.</p>

    <p class="mt-8 font-semibold text-royal-blue">This is just the beginning. Stay tuned for the official announcement when the Uniswap pool goes live. We're incredibly excited for this next chapter and couldn't have done it without our amazing community!</p>
  `,
  bannerImage: '/lovable-uploads/2ad39b99-84df-44cf-9521-ddac621b4874.png',
  bannerImageAlt: 'DeHub launching on Base network announcement banner',
  author: {
    name: 'DeHub Team',
  },
  publishedAt: '2024-05-09T12:00:00.000Z',
  tags: ['Announcement', 'Base', 'DeFi', 'Uniswap'],
  readingTime: 2,
  featured: true,
  status: 'published',
  seoTitle: 'DeHub is Launching on Base! Uniswap Pool Going Live Soon',
  seoDescription: 'DeHub is expanding to the Base network! Get ready for our Uniswap pool launch. Learn about the new contract and how to bridge your tokens for free.',
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const originalPosts = useMemo(() => getPublishedPosts(), []);
  
  const allPosts = useMemo(() => {
    if (originalPosts.some(p => p.id === newPostData.id)) {
      return originalPosts;
    }
    return [newPostData, ...originalPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [originalPosts]);

  const featuredPosts = useMemo(() => {
    const featured = getFeaturedPosts();
    if (newPostData.featured && !featured.some(p => p.id === newPostData.id)) {
      return [newPostData, ...featured].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }
    return featured;
  }, []);

  const allTags = useMemo((): BlogTag[] => {
    const tagCounts: { [key: string]: number } = {};
    allPosts.forEach(post => {
      post.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.excerpt.toLowerCase().includes(lowercasedQuery)
      );
    }

    if (selectedTag) {
      posts = posts.filter(post => 
        post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    return posts;
  }, [searchQuery, selectedTag, allPosts]);

  return (
    <>
      <SEO
        title="Community Blog"
        description="Stay updated with the latest news, insights, and stories from the DeHub ecosystem. Join our community as we build the future of decentralized infrastructure."
        url="/docs/blog"
      />
      <div className="space-y-12">
        {/* Construction Notice */}
        <Alert className="bg-amber-50 border-amber-200">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800 font-exo">
            Our new blog is under construction, stay tuned for the official release
          </AlertDescription>
        </Alert>

        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-royal-blue leading-tight font-exo">
            DeHub
            <span className="block bg-gradient-to-r from-royal-blue to-middle-blue bg-clip-text text-transparent">Community Blog</span>
          </h1>
          
          <p className="text-xl text-royal-blue/70 max-w-3xl mx-auto leading-relaxed font-exo">
            Stay updated with the latest news, insights, and stories from the DeHub ecosystem. Join our community as we build the future of decentralized infrastructure.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-plain-white rounded-2xl border border-sky-blue/20 p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-royal-blue/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-sky-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-middle-blue/20 focus:border-middle-blue font-exo"
              />
            </div>

            {/* Tag Filter */}
            <div className="lg:w-64 relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-royal-blue/40 w-5 h-5" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-sky-blue/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-middle-blue/20 focus:border-middle-blue font-exo appearance-none bg-white"
              >
                <option value="">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag.name} value={tag.name}>
                    {tag.name} ({tag.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedTag) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag('');
                }}
                className="px-4 py-3 border border-sky-blue/20 text-royal-blue rounded-lg hover:bg-sky-blue/10 transition-colors duration-200 font-exo"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Featured Posts */}
        {!searchQuery && !selectedTag && featuredPosts.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-royal-blue" />
              <h2 className="text-2xl font-bold text-royal-blue font-exo">Featured Posts</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.slice(0, 2).map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-royal-blue" />
            <h2 className="text-2xl font-bold text-royal-blue font-exo">
              {searchQuery || selectedTag ? 'Search Results' : 'Latest Posts'}
            </h2>
            {(searchQuery || selectedTag) && (
              <span className="text-royal-blue/60 font-exo">
                ({filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''})
              </span>
            )}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-plain-white rounded-xl border border-sky-blue/20">
              <h3 className="text-xl font-semibold text-royal-blue mb-2 font-exo">No Posts Found</h3>
              <p className="text-royal-blue/70 font-exo">
                {searchQuery || selectedTag 
                  ? 'Try adjusting your search criteria or browse all posts.'
                  : 'Check back soon for new content!'
                }
              </p>
            </div>
          )}
        </section>

        {/* Popular Tags */}
        {!searchQuery && !selectedTag && (
          <section className="bg-plain-white rounded-2xl border border-sky-blue/20 p-8">
            <h2 className="text-2xl font-bold text-royal-blue mb-6 font-exo">Popular Tags</h2>
            <div className="flex flex-wrap gap-3">
              {allTags.slice(0, 10).map(tag => (
                <button
                  key={tag.name}
                  onClick={() => setSelectedTag(tag.name)}
                  className="bg-sky-blue/10 text-royal-blue px-4 py-2 rounded-full text-sm font-medium hover:bg-sky-blue/20 transition-colors duration-200 font-exo"
                >
                  {tag.name} ({tag.count})
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Blog;
