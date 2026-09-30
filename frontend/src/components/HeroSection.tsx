import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenChat }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-between px-8 md:px-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl border border-blue-900/40 my-6 mx-auto max-w-7xl">
      {/* Left Column: Heading and Trigger Button */}
      <div className="max-w-xl z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" /> Official Campus AI
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Empowering Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">
            Academic Journey
          </span>
        </h1>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Your verified AI-powered guide for campus navigation, enrollment details, 
          academic schedules, and student services.
        </p>

        {/* Hero Action Button from Wireframe */}
        <div>
          <button
            onClick={onOpenChat}
            className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-150"
          >
            <Bot className="w-5 h-5 text-slate-950" />
            ASK QUESTIONS TO AI
          </button>
        </div>
      </div>

      {/* Right Column: Visual Mockup Container */}
      <div className="hidden lg:flex relative items-center justify-center w-1/2">
        <div className="relative w-full max-w-md p-4 bg-slate-800/60 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
          <div className="h-6 flex items-center gap-1.5 px-2 mb-3 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="p-4 space-y-3 bg-slate-900/80 rounded-lg text-xs font-mono text-slate-300">
            <p className="text-blue-400">// Knowledge Base Verified</p>
            <p className="text-emerald-400">✓ Ingestion complete</p>
            <p className="text-slate-400">Ready to answer campus queries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};