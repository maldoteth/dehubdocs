
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Eye, ArrowLeft } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { generateSlug, calculateReadingTime } from '@/utils/adminUtils';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import BlogContent from './BlogContent';

interface BlogPostEditorProps {
  post?: BlogPost;
  onSave: (post: BlogPost) => void;
}

const BlogPostEditor: React.FC<BlogPostEditorProps> = ({ post, onSave }) => {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    bannerImage: '',
    bannerImageAlt: '',
    author: { name: 'DeHub Team' },
    tags: [],
    featured: false,
    status: 'draft',
    seoTitle: '',
    seoDescription: '',
    ...post
  });
  const [tagInput, setTagInput] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (formData.title && !post) {
      setFormData(prev => ({
        ...prev,
        slug: generateSlug(formData.title)
      }));
    }
  }, [formData.title, post]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim().toLowerCase();
      if (!formData.tags?.includes(newTag)) {
        setFormData(prev => ({
          ...prev,
          tags: [...(prev.tags || []), newTag]
        }));
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }));
  };

  const handleSave = (status: 'draft' | 'published') => {
    if (!formData.title || !formData.content || !formData.excerpt) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields (title, excerpt, content).",
        variant: "destructive"
      });
      return;
    }

    const readingTime = calculateReadingTime(formData.content);
    const now = new Date().toISOString();

    const blogPost: BlogPost = {
      id: post?.id || Math.random().toString(36).substr(2, 9),
      title: formData.title!,
      slug: formData.slug || generateSlug(formData.title!),
      excerpt: formData.excerpt!,
      content: formData.content!,
      bannerImage: formData.bannerImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop',
      bannerImageAlt: formData.bannerImageAlt || formData.title!,
      author: formData.author || { name: 'DeHub Team' },
      publishedAt: post?.publishedAt || now,
      updatedAt: now,
      tags: formData.tags || [],
      readingTime,
      featured: formData.featured || false,
      status,
      seoTitle: formData.seoTitle,
      seoDescription: formData.seoDescription
    };

    onSave(blogPost);
    
    toast({
      title: status === 'published' ? "Post Published" : "Draft Saved",
      description: `Blog post has been ${status === 'published' ? 'published' : 'saved as draft'} successfully.`
    });

    navigate('/docs/blog/admin');
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/docs/blog/admin')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Admin
          </Button>
          <h1 className="text-3xl font-bold text-royal-blue font-exo">
            {post ? 'Edit Post' : 'Create New Post'}
          </h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowPreview(!showPreview)}>
            <Eye className="w-4 h-4 mr-2" />
            {showPreview ? 'Edit' : 'Preview'}
          </Button>
          <Button variant="outline" onClick={() => handleSave('draft')}>
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button onClick={() => handleSave('published')} className="bg-gradient-to-r from-royal-blue to-middle-blue">
            Publish
          </Button>
        </div>
      </div>

      {showPreview ? (
        <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-royal-blue mb-6 font-exo">{formData.title}</h1>
            {formData.bannerImage && (
              <img 
                src={formData.bannerImage} 
                alt={formData.bannerImageAlt || formData.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
            )}
            <p className="text-xl text-royal-blue/80 mb-8 font-exo">{formData.excerpt}</p>
            <BlogContent content={formData.content || ''} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter post title..."
                  />
                </div>

                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    placeholder="auto-generated-from-title"
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt *</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    placeholder="Brief description of the post..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => handleInputChange('content', e.target.value)}
                    placeholder="Write your blog post content here..."
                    rows={15}
                    className="font-mono"
                  />
                  <p className="text-sm text-royal-blue/60 mt-1">
                    Supports markdown formatting (# headers, **bold**, [links](url), etc.)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
              <h3 className="font-semibold text-royal-blue mb-4 font-exo">Post Settings</h3>
              <div className="space-y-4">
                <div>
                  <Label>
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => handleInputChange('featured', e.target.checked)}
                      className="mr-2"
                    />
                    Featured Post
                  </Label>
                </div>

                <div>
                  <Label htmlFor="author">Author Name</Label>
                  <Input
                    id="author"
                    value={formData.author?.name}
                    onChange={(e) => handleInputChange('author', { name: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
              <h3 className="font-semibold text-royal-blue mb-4 font-exo">Banner Image</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bannerImage">Image URL</Label>
                  <Input
                    id="bannerImage"
                    value={formData.bannerImage}
                    onChange={(e) => handleInputChange('bannerImage', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div>
                  <Label htmlFor="bannerImageAlt">Alt Text</Label>
                  <Input
                    id="bannerImageAlt"
                    value={formData.bannerImageAlt}
                    onChange={(e) => handleInputChange('bannerImageAlt', e.target.value)}
                    placeholder="Description of the image"
                  />
                </div>
                {formData.bannerImage && (
                  <img 
                    src={formData.bannerImage} 
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                )}
              </div>
            </div>

            <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
              <h3 className="font-semibold text-royal-blue mb-4 font-exo">Tags</h3>
              <div className="space-y-3">
                <Input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                  placeholder="Press Enter to add tags..."
                />
                <div className="flex flex-wrap gap-2">
                  {formData.tags?.map(tag => (
                    <span 
                      key={tag}
                      className="bg-sky-blue/10 text-royal-blue px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-red-100 hover:text-red-600"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      {tag} ×
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-plain-white rounded-xl border border-sky-blue/20 p-6">
              <h3 className="font-semibold text-royal-blue mb-4 font-exo">SEO</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="seoTitle">SEO Title</Label>
                  <Input
                    id="seoTitle"
                    value={formData.seoTitle}
                    onChange={(e) => handleInputChange('seoTitle', e.target.value)}
                    placeholder="SEO optimized title"
                  />
                </div>
                <div>
                  <Label htmlFor="seoDescription">SEO Description</Label>
                  <Textarea
                    id="seoDescription"
                    value={formData.seoDescription}
                    onChange={(e) => handleInputChange('seoDescription', e.target.value)}
                    placeholder="Meta description for search engines"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostEditor;
