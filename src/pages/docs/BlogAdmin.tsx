
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, Search, Download, Upload } from 'lucide-react';
import { blogPosts } from '@/utils/blogData';
import { BlogPost } from '@/types/blog';
import { isAdmin, generateBlogDataFile } from '@/utils/adminUtils';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredPosts(filtered);
  }, [posts, searchQuery]);

  const checkAdminAccess = async () => {
    const adminStatus = await isAdmin();
    setIsAdminUser(adminStatus);
  };

  const handleDeletePost = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(post => post.id !== postId);
      setPosts(updatedPosts);
      toast({
        title: "Post Deleted",
        description: "Blog post has been removed successfully."
      });
    }
  };

  const handleTogglePublish = (postId: string) => {
    const updatedPosts = posts.map(post =>
      post.id === postId
        ? { ...post, status: post.status === 'published' ? 'draft' : 'published' as 'draft' | 'published' }
        : post
    );
    setPosts(updatedPosts);
    toast({
      title: "Status Updated",
      description: "Post status has been changed successfully."
    });
  };

  const handleToggleFeatured = (postId: string) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, featured: !post.featured } : post
    );
    setPosts(updatedPosts);
    toast({
      title: "Featured Status Updated",
      description: "Post featured status has been changed successfully."
    });
  };

  const handleExportData = () => {
    const dataStr = generateBlogDataFile(posts);
    const dataBlob = new Blob([dataStr], { type: 'text/javascript' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'blogData.ts';
    link.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Data Exported",
      description: "Blog data file has been downloaded. Replace your blogData.ts file with this one."
    });
  };

  if (!isAdminUser) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-royal-blue mb-4 font-exo">Access Denied</h1>
        <p className="text-royal-blue/70 font-exo">You don't have permission to access the admin panel.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-royal-blue font-exo">Blog Admin</h1>
          <p className="text-royal-blue/70 mt-2 font-exo">Manage your blog posts and content</p>
        </div>
        <Link to="/docs/blog/admin/create">
          <Button className="bg-gradient-to-r from-royal-blue to-middle-blue hover:from-royal-blue/90 hover:to-middle-blue/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
          <h3 className="text-sm font-medium text-royal-blue/70 font-exo">Total Posts</h3>
          <p className="text-2xl font-bold text-royal-blue font-exo">{posts.length}</p>
        </div>
        <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
          <h3 className="text-sm font-medium text-royal-blue/70 font-exo">Published</h3>
          <p className="text-2xl font-bold text-green-600 font-exo">
            {posts.filter(p => p.status === 'published').length}
          </p>
        </div>
        <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
          <h3 className="text-sm font-medium text-royal-blue/70 font-exo">Drafts</h3>
          <p className="text-2xl font-bold text-yellow-600 font-exo">
            {posts.filter(p => p.status === 'draft').length}
          </p>
        </div>
        <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
          <h3 className="text-sm font-medium text-royal-blue/70 font-exo">Featured</h3>
          <p className="text-2xl font-bold text-middle-blue font-exo">
            {posts.filter(p => p.featured).length}
          </p>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-royal-blue/40 w-5 h-5" />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={handleExportData} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Posts List */}
      <div className="bg-plain-white rounded-xl border border-sky-blue/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-sky-blue/10">
              <tr>
                <th className="text-left p-4 font-semibold text-royal-blue font-exo">Title</th>
                <th className="text-left p-4 font-semibold text-royal-blue font-exo">Status</th>
                <th className="text-left p-4 font-semibold text-royal-blue font-exo">Featured</th>
                <th className="text-left p-4 font-semibold text-royal-blue font-exo">Date</th>
                <th className="text-left p-4 font-semibold text-royal-blue font-exo">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post.id} className="border-t border-sky-blue/10 hover:bg-sky-blue/5">
                  <td className="p-4">
                    <div>
                      <h3 className="font-semibold text-royal-blue font-exo">{post.title}</h3>
                      <p className="text-sm text-royal-blue/70 font-exo">{post.excerpt.slice(0, 80)}...</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleTogglePublish(post.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {post.status}
                    </button>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleToggleFeatured(post.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.featured
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {post.featured ? 'Featured' : 'Regular'}
                    </button>
                  </td>
                  <td className="p-4 text-royal-blue/70 font-exo">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Link to={`/docs/blog/${post.slug}`}>
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                      </Link>
                      <Link to={`/docs/blog/admin/edit/${post.slug}`}>
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3" />
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
