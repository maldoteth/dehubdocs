
import React from 'react';

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

      {/* Embedded Google Slides */}
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe 
          src="https://docs.google.com/presentation/d/e/2PACX-1vQgLJgskx5DzNQhbHmteH7CR9QqzsboG8RaVYZ7IwSW-PfoXRic3K9SX2gyrydR-7qwlL5UkvlLTObH/pubembed?start=false&loop=false&delayms=30000" 
          frameBorder="0" 
          width="100%" 
          height="569" 
          allowFullScreen={true}
          className="w-full min-h-[569px]"
        />
      </div>
    </div>
  );
};

export default BrandGuidelines;
