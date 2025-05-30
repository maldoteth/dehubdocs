
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Palette, Type, Grid, Eye, CheckCircle, XCircle } from 'lucide-react';

const BrandGuidelines = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Brand Guidelines</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Comprehensive guidelines for using the DeHub brand identity consistently across all platforms and materials.
        </p>
      </div>

      {/* Logo Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid className="w-5 h-5" />
            Logo Usage
          </CardTitle>
          <CardDescription>
            Our logo is the cornerstone of the DeHub brand identity.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Primary Logo</h3>
              <div className="bg-white border-2 border-slate-200 rounded-lg p-8 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DH</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">Use this version on light backgrounds</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Logo on Dark</h3>
              <div className="bg-slate-900 border-2 border-slate-200 rounded-lg p-8 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DH</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">Use this version on dark backgrounds</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Clear Space</h3>
            <p className="text-slate-600">Maintain a minimum clear space around the logo equal to half the logo's height.</p>
          </div>
        </CardContent>
      </Card>

      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Color Palette
          </CardTitle>
          <CardDescription>
            Our carefully selected colors that define the DeHub visual identity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="w-full h-20 bg-blue-500 rounded-lg"></div>
              <div>
                <h4 className="font-semibold">Primary Blue</h4>
                <p className="text-sm text-slate-600">#3B82F6</p>
                <p className="text-sm text-slate-600">RGB: 59, 130, 246</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="w-full h-20 bg-purple-600 rounded-lg"></div>
              <div>
                <h4 className="font-semibold">Primary Purple</h4>
                <p className="text-sm text-slate-600">#9333EA</p>
                <p className="text-sm text-slate-600">RGB: 147, 51, 234</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="w-full h-20 bg-slate-900 rounded-lg"></div>
              <div>
                <h4 className="font-semibold">Dark Gray</h4>
                <p className="text-sm text-slate-600">#0F172A</p>
                <p className="text-sm text-slate-600">RGB: 15, 23, 42</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="w-full h-20 bg-slate-100 rounded-lg border"></div>
              <div>
                <h4 className="font-semibold">Light Gray</h4>
                <p className="text-sm text-slate-600">#F1F5F9</p>
                <p className="text-sm text-slate-600">RGB: 241, 245, 249</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="w-5 h-5" />
            Typography
          </CardTitle>
          <CardDescription>
            Font guidelines for consistent brand communication.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Primary Font</h3>
            <div className="space-y-2">
              <p className="text-2xl font-bold">Inter</p>
              <p className="text-slate-600">Use Inter for all headings, body text, and UI elements. It provides excellent readability and modern appeal.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Typography Scale</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <p className="text-sm text-slate-600">36px, Bold</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h2 className="text-2xl font-semibold">Heading 2</h2>
                <p className="text-sm text-slate-600">24px, Semibold</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium">Heading 3</h3>
                <p className="text-sm text-slate-600">18px, Medium</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-base">Body Text</p>
                <p className="text-sm text-slate-600">16px, Regular</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Usage Guidelines
          </CardTitle>
          <CardDescription>
            Best practices for maintaining brand consistency.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Do's
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Use the logo at appropriate sizes with clear space
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Maintain consistent color usage across platforms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Use high-resolution logo files for print materials
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Follow typography hierarchy guidelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Ensure sufficient contrast for accessibility
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Don'ts
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Don't stretch, rotate, or distort the logo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Don't use non-brand colors for the logo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Don't place logo on busy backgrounds
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Don't use outdated or low-resolution files
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Don't recreate or modify the logo design
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Assets
          </CardTitle>
          <CardDescription>
            Access official DeHub brand assets and resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="/docs/brand-assets" 
              className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div>
                <h4 className="font-semibold">Logo Package</h4>
                <p className="text-sm text-slate-600">SVG, PNG, and vector formats</p>
              </div>
              <Download className="w-5 h-5 text-slate-400" />
            </a>
            <a 
              href="/docs/brand-assets" 
              className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div>
                <h4 className="font-semibold">Color Swatches</h4>
                <p className="text-sm text-slate-600">Adobe, Sketch, and Figma files</p>
              </div>
              <Download className="w-5 h-5 text-slate-400" />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>
            For questions about brand usage or additional assets, please contact our brand team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600">
            Email: <a href="mailto:brand@dehub.io" className="text-blue-600 hover:underline">brand@dehub.io</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrandGuidelines;
