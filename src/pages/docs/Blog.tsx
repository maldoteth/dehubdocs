
import React, { useState, useMemo } from 'react';
import { Search, Tag, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { getPublishedPosts, getFeaturedPosts, getAllTags, searchPosts } from '@/utils/blogUtils';
import BlogCard from '@/components/blog/BlogCard';
import { Alert, AlertDescription } from '@/components/ui/alert';
import SEO from '@/components/SEO';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const allPosts = getPublishedPosts();
  const featuredPosts = getFeaturedPosts();
  const allTags = getAllTags();

  const filteredPostsBySearch = useMemo(() => {
    let posts = allPosts;
    if (searchQuery) {
      posts = searchPosts(searchQuery);
    }
    if (selectedTag) {
      posts = posts.filter(post => 
        post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }
    return posts;
  }, [searchQuery, selectedTag, allPosts]);

  const nonFeaturedPosts = useMemo(() => {
    const featuredSlugs = new Set(featuredPosts.map(p => p.slug));
    return allPosts.filter(p => !featuredSlugs.has(p.slug));
  }, [allPosts, featuredPosts]);

  const postsToDisplay = searchQuery || selectedTag ? filteredPostsBySearch : nonFeaturedPosts;

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
              {featuredPosts.slice(0, 1).map(post => (
                <BlogCard key={post.slug} post={post} featured={true} />
              ))}
              {featuredPosts.slice(1, 2).map(post => (
                <BlogCard key={post.slug} post={post} />
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
                ({postsToDisplay.length} post{postsToDisplay.length !== 1 ? 's' : ''})
              </span>
            )}
          </div>

          {postsToDisplay.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {postsToDisplay.map(post => (
                <BlogCard key={post.slug} post={post} />
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
