import { useState, useEffect } from 'react';

export default function Hero() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const weddingDate = new Date('2026-04-25T02:30:00');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#3a0a14] via-[#1a0508] to-[#0d0608]" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 30deg, rgba(212,175,55,0.3) 30deg, rgba(212,175,55,0.3) 31deg)`,
        backgroundSize: '120px 120px'
      }} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0608]/30 via-[#0d0608]/10 to-[#0d0608]/95" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl w-full">
        {/* Top ornament */}
        <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fadeInUp">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold" />
          <span className="text-2xl animate-float">🪔</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold" />
        </div>

        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          With the Blessings of God & Family
        </p>

        {/* Names */}
        <div className="mb-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-tight text-gradient-gold animate-shimmer mb-2">
            Mohan Krishna
          </h1>
          <div className="flex items-center justify-center gap-4 my-2">
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold" />
            <span className="font-display text-4xl md:text-6xl text-gold-mid opacity-80">&</span>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-tight text-gradient-gold animate-shimmer">
            Anusha
          </h1>
        </div>

        <p className="text-xl md:text-2xl italic text-ivory/80 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <em>"A Sacred Union of Love & Tradition"</em>
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-6 max-w-md mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold-mid">◆</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Date block */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 border border-gold/30 rounded max-w-lg mx-auto mb-8 overflow-hidden opacity-0 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <div className="flex-1 p-4 text-center border-b md:border-b-0 md:border-r border-gold/20">
            <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-1">Date</span>
            <span className="block font-display text-base text-ivory">25 April 2026</span>
          </div>
          <div className="flex-1 p-4 text-center border-b md:border-b-0 md:border-r border-gold/20">
            <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-1">Day</span>
            <span className="block font-display text-base text-ivory">Saturday</span>
          </div>
          <div className="flex-1 p-4 text-center">
            <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-1">Muhurtham</span>
            <span className="block font-display text-base text-ivory">2:30 AM – 3:40 AM</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-start justify-center gap-4 md:gap-6 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
          <div className="text-center min-w-[70px]">
            <span className="block font-display text-4xl md:text-5xl font-bold text-gold-light drop-shadow-[0_0_20px_rgba(240,208,96,0.4)]">
              {pad(countdown.days)}
            </span>
            <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-ivory/60 mt-1">Days</label>
          </div>
          <span className="font-display text-3xl text-gold/50 pt-1">:</span>
          <div className="text-center min-w-[70px]">
            <span className="block font-display text-4xl md:text-5xl font-bold text-gold-light drop-shadow-[0_0_20px_rgba(240,208,96,0.4)]">
              {pad(countdown.hours)}
            </span>
            <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-ivory/60 mt-1">Hours</label>
          </div>
          <span className="font-display text-3xl text-gold/50 pt-1">:</span>
          <div className="text-center min-w-[70px]">
            <span className="block font-display text-4xl md:text-5xl font-bold text-gold-light drop-shadow-[0_0_20px_rgba(240,208,96,0.4)]">
              {pad(countdown.mins)}
            </span>
            <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-ivory/60 mt-1">Minutes</label>
          </div>
          <span className="font-display text-3xl text-gold/50 pt-1">:</span>
          <div className="text-center min-w-[70px]">
            <span className="block font-display text-4xl md:text-5xl font-bold text-gold-light drop-shadow-[0_0_20px_rgba(240,208,96,0.4)]">
              {pad(countdown.secs)}
            </span>
            <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-ivory/60 mt-1">Seconds</label>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.4s' }}>
          <a
            href="#rsvp"
            className="px-9 py-3.5 bg-gradient-to-br from-gold to-gold-mid text-maroon font-bold text-sm tracking-[0.15em] uppercase rounded shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:from-gold-light hover:to-gold hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            RSVP Now
          </a>
          <a
            href="#events"
            className="px-9 py-3.5 bg-transparent border border-gold text-gold-light font-semibold text-sm tracking-[0.15em] uppercase rounded hover:bg-gold/10 hover:border-gold-light hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(212,175,55,0.2)] transition-all duration-300"
          >
            View Events
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll to explore</span>
        <div className="text-xl animate-bounce">↓</div>
      </div>
    </section>
  );
}
