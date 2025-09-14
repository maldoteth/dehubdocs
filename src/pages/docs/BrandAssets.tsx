
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
    name: "DeHub Logo - Full",
    description: "Main logo for light backgrounds",
    imagePath: "/lovable-uploads/40022385-7894-4cb4-a6f9-403a0d9e4e5e.png",
    filename: "dehub-logo-primary.png",
    type: "PNG"
  }, {
    id: 2,
    name: "DeHub Logo - Icon",
    description: "Alternative logo variation",
    imagePath: "/lovable-uploads/5e136fdf-d23f-4cdb-b8ec-54babb5d375b.png",
    filename: "dehub-logo-alternative.png",
    type: "PNG"
  }];

  return (
    <div className="space-y-8">
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

      {/* Typography Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Typography
          </CardTitle>
          <CardDescription>
            Our official brand font is Exo. Please use it consistently across all materials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="font-exo grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div className="border rounded-lg p-4 flex flex-col justify-center items-center">
              <p className="text-5xl font-black">Aa</p>
              <p className="mt-2 text-lg font-semibold">Exo Black</p>
              <p className="text-sm text-slate-500">900</p>
            </div>
            <div className="border rounded-lg p-4 flex flex-col justify-center items-center">
              <p className="text-5xl font-semibold">Aa</p>
              <p className="mt-2 text-lg font-semibold">Exo Semi-bold</p>
              <p className="text-sm text-slate-500">600</p>
            </div>
            <div className="border rounded-lg p-4 flex flex-col justify-center items-center">
              <p className="text-5xl font-medium">Aa</p>
              <p className="mt-2 text-lg font-semibold">Exo Medium</p>
              <p className="text-sm text-slate-500">500</p>
            </div>
            <div className="border rounded-lg p-4 flex flex-col justify-center items-center">
              <p className="text-5xl font-light">Aa</p>
              <p className="mt-2 text-lg font-semibold">Exo Light</p>
              <p className="text-sm text-slate-500">300</p>
            </div>
          </div>
           <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <a href="https://fonts.google.com/specimen/Exo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Exo Font
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Brand Guidelines Presentation */}
      <Card>
        <CardHeader>
          <CardTitle>Brand Guidelines</CardTitle>
          <CardDescription>
            Complete brand guidelines and style guide for DeHub.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-hidden rounded-lg">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQgLJgskx5DzNQhbHmteH7CR9QqzsboG8RaVYZ7IwSW-PfoXRic3K9SX2gyrydR-7qwlL5UkvlLTObH/pubembed?start=false&loop=false&delayms=30000" frameBorder="0" width="100%" height="569" allowFullScreen={true} className="w-full" />
          </div>
        </CardContent>
      </Card>

      {/* 2025 Shake Up */}
      <Card>
        <CardHeader>
          <CardTitle>2025 Shake Up</CardTitle>
          <CardDescription>
            Latest product design slides and strategic updates for 2025.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-hidden rounded-lg">
            <iframe 
              style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
              width="800" 
              height="450" 
              src="https://embed.figma.com/slides/22r8W9g98g3KZz5vUwqWND/Dehub-Product-Design?node-id=1-42&embed-host=share" 
              allowFullScreen={true} 
              className="w-full" 
            />
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card>
        
        
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
              <Button variant="outline" asChild>
                <a href="mailto:marketing@dehub.net">
                  Contact Brand Team
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card>
        
        
      </Card>
    </div>
  );
};

export default BrandAssets;

