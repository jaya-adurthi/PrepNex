import React, { useEffect, useState } from 'react';
import { Sparkles, Zap, Award } from 'lucide-react';

export default function SplashScreen({ onFinish }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        onFinish();
      }, 500);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-500 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-cyan-950 opacity-90"></div>
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>

      <div className="relative z-10 text-center px-4">
        {/* Animated Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-6 animate-bounce">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>Placement & Career Readiness</span>
        </div>

        {/* Logo Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          PREP<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">NEX</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-slate-300 font-medium tracking-wide max-w-lg mx-auto">
          “Prepare Today. Step Into Your Future.”
        </p>

        {/* Loading Spinner Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
          <div className="w-3 h-3 rounded-full bg-teal-400 animate-ping delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-300 animate-ping delay-300"></div>
        </div>
      </div>
    </div>
  );
}
