import React from 'react';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Plain white logo background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png"
          alt=""
          aria-hidden="true"
          className="w-[70vmin] h-[70vmin] opacity-10 brightness-0 invert"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <img
          src="/lovable-uploads/bca432dc-7ef2-4a07-99b6-fac376265184.png"
          alt="DeHub Logo"
          className="w-20 h-20 mb-8 brightness-0 invert"
        />

        <h1 className="text-5xl md:text-6xl font-bold font-exo mb-6">
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
