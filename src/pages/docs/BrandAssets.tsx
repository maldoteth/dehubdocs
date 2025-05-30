import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Image, FileText, Package } from 'lucide-react';
const BrandAssets = () => {
  const handleDownload = (imagePath: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const logoAssets = [{
    id: 1,
    name: "DeHub Logo - Primary",
    description: "Main logo for light backgrounds",
    imagePath: "/lovable-uploads/40022385-7894-4cb4-a6f9-403a0d9e4e5e.png",
    filename: "dehub-logo-primary.png",
    type: "PNG"
  }, {
    id: 2,
    name: "DeHub Logo - Alternative",
    description: "Alternative logo variation",
    imagePath: "/lovable-uploads/5e136fdf-d23f-4cdb-b8ec-54babb5d375b.png",
    filename: "dehub-logo-alternative.png",
    type: "PNG"
  }];
  return <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Brand Assets</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Download official DeHub logos, assets, and brand materials for your projects and presentations.
        </p>
      </div>

      {/* Logo Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="w-5 h-5" />
            Logo Downloads
          </CardTitle>
          <CardDescription>
            High-quality logo files in various formats for different use cases.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {logoAssets.map(asset => <div key={asset.id} className="border border-slate-200 rounded-lg p-6 space-y-4">
                <div className="aspect-video rounded-lg flex items-center justify-center p-4 bg-zinc-950">
                  <img src={asset.imagePath} alt={asset.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{asset.name}</h3>
                  <p className="text-sm text-slate-600">{asset.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded">{asset.type}</span>
                    <Button onClick={() => handleDownload(asset.imagePath, asset.filename)} size="sm" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Usage Guidelines
          </CardTitle>
          <CardDescription>
            Important guidelines for using DeHub brand assets.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-green-700">✓ Allowed Uses</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Marketing and promotional materials</li>
                <li>• Press releases and media coverage</li>
                <li>• Partner integrations and collaborations</li>
                <li>• Educational and informational content</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-red-700">✗ Prohibited Uses</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Modifying or altering the logos</li>
                <li>• Using logos to endorse products/services</li>
                <li>• Creating derivative works</li>
                <li>• Commercial use without permission</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brand Package */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Complete Brand Package
          </CardTitle>
          <CardDescription>
            Need additional formats or the complete brand package?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-6 text-center space-y-4">
            <Package className="w-12 h-12 text-slate-400 mx-auto" />
            <div>
              <h3 className="font-semibold mb-2">Request Full Brand Kit</h3>
              <p className="text-sm text-slate-600 mb-4">
                For SVG, EPS, and other vector formats, or if you need assets not shown here, 
                please contact our brand team.
              </p>
              <Button variant="outline">
                Contact Brand Team
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Questions about Brand Assets?</CardTitle>
          <CardDescription>
            For licensing questions, additional formats, or custom requests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600">
            Email: <a href="mailto:marketing@dehub.net" className="text-blue-600 hover:underline">marketing@dehub.net</a>
          </p>
        </CardContent>
      </Card>
    </div>;
};
export default BrandAssets;