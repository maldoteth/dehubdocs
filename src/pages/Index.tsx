import React from 'react';
import { ArrowRight } from 'lucide-react';
import ShaderBackground from '@/components/ShaderBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Animated shader background */}
      <div className="absolute inset-0">
        <ShaderBackground />
      </div>

      {/* Subtle vignette for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <img
          src="/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png"
          alt="DeHub Logo"
          className="w-20 h-20 mb-8 drop-shadow-[0_0_20px_rgba(255,87,34,0.6)]"
        />

        <h1 className="text-5xl md:text-6xl font-bold font-exo mb-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
          The docs have moved
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 font-exo leading-relaxed">
          To learn about DeHub, click the link below.
        </p>

        <a
          href="https://dehub.io/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold font-exo text-lg shadow-2xl hover:bg-white/90 transition-all duration-200 hover:scale-105"
        >
          Go to DeHub Docs
          <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>

        <p className="mt-6 text-sm text-white/50 font-exo">
          dehub.io/docs
        </p>
      </div>
    </div>
  );
};

export default Index;
