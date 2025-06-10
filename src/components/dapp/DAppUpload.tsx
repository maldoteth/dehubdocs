
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Image, Video, FileText, Music } from 'lucide-react';

export const DAppUpload = () => {
  const uploadTypes = [
    { icon: Image, label: "Images", description: "JPEG, PNG, GIF, WebP" },
    { icon: Video, label: "Videos", description: "MP4, AVI, MOV, WebM" },
    { icon: Music, label: "Audio", description: "MP3, WAV, OGG, M4A" },
    { icon: FileText, label: "Documents", description: "PDF, DOC, TXT, MD" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-royal-blue">
          Upload & Monetize Your Content
        </h2>
        <p className="text-royal-blue/80 max-w-2xl mx-auto">
          Upload any type of digital content and start earning through our decentralized marketplace. 
          Your content, your rules, your profits.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {uploadTypes.map((type, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow border-sky-blue/20">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-sky-blue to-middle-blue rounded-full flex items-center justify-center">
                <type.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-royal-blue">{type.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-royal-blue/70">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-sky-blue/10 to-middle-blue/10 border-sky-blue/30">
        <CardContent className="p-8 text-center">
          <Upload className="w-16 h-16 mx-auto mb-4 text-middle-blue" />
          <h3 className="text-2xl font-bold text-royal-blue mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-royal-blue/80 mb-6 max-w-2xl mx-auto">
            Join thousands of creators who are already earning from their content. 
            Upload your first piece today and become part of the decentralized creator economy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
