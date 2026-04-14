export default function Venue() {
  const handleMapClick = () => {
    // Pause the wedding music when opening Google Maps
    window.dispatchEvent(new Event('pauseWeddingMusic'));
  };

  return (
    <section id="venue" className="relative py-24 bg-[#0a0406] overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(107,15,26,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_20%_50%,rgba(201,168,76,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Where Love Comes Home</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-light mb-4">The Venue</h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xl">🏡</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-gold-light mb-2">Bhimavaram Village</h3>
            <p className="text-base text-ivory/60 italic mb-6">Traditional Family Residence</p>
            <p className="text-sm text-ivory/70 leading-relaxed mb-4">
              Nestled in the heart of tradition and heritage, Bhimavaram Village is where roots run deep and love grows eternal. This sacred family home has witnessed generations of joy, and now it opens its arms to celebrate the most beautiful union of all.
            </p>
            <p className="text-sm text-ivory/70 leading-relaxed mb-6">
              Celebrating amidst tradition and family roots — where every stone tells a story, every corner holds a memory, and every moment becomes a cherished legacy.
            </p>

            {/* Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">📍</span>
                <div>
                  <strong className="block text-xs tracking-[0.15em] uppercase text-gold mb-1">Location</strong>
                  <span className="text-sm text-ivory/85">Bhimavaram Village, Traditional Family Residence</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">📅</span>
                <div>
                  <strong className="block text-xs tracking-[0.15em] uppercase text-gold mb-1">Date</strong>
                  <span className="text-sm text-ivory/85">Saturday, 25 April 2026</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">🪔</span>
                <div>
                  <strong className="block text-xs tracking-[0.15em] uppercase text-gold mb-1">Muhurtham</strong>
                  <span className="text-sm text-ivory/85">2:30 AM – 3:40 AM (Sacred Auspicious Time)</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=14.713333,79.403417"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMapClick}
              className="inline-block px-9 py-3.5 bg-gradient-to-br from-gold to-gold-mid text-maroon font-bold text-sm tracking-[0.15em] uppercase rounded shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:from-gold-light hover:to-gold hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] transition-all duration-300"
            >
              Get Directions 📍
            </a>
          </div>

          {/* Map placeholder */}
          <a
            href="https://www.google.com/maps?q=14.713333,79.403417"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMapClick}
            className="relative aspect-[4/3] bg-gradient-to-br from-maroon via-[#2a0a12] to-[#1a0508] rounded border border-gold/30 shadow-[0_8px_40px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden hover:border-gold/50 transition-all duration-300 cursor-pointer group"
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.08)_0%,transparent_60%),repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(201,168,76,0.03)_40px,rgba(201,168,76,0.03)_41px),repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(201,168,76,0.03)_40px,rgba(201,168,76,0.03)_41px)]" />

            {/* Pin */}
            <div className="relative z-10 text-center">
              <span className="block text-5xl animate-bounce-pin drop-shadow-[0_4px_12px_rgba(201,168,76,0.5)] group-hover:scale-110 transition-transform">📍</span>
              <p className="font-display text-xl text-gold-light mt-2">Bhimavaram Village</p>
              <p className="text-sm text-ivory/60 mt-1">Traditional Family Residence</p>
              <p className="text-xs text-gold/70 mt-2 font-mono">14°42'48.0"N 79°24'12.3"E</p>
              <div className="flex items-center justify-center gap-4 text-2xl mt-3 opacity-70">
                <span>🌺</span>
                <span>🪔</span>
                <span>🌺</span>
              </div>
              <p className="text-xs text-gold-light mt-3 opacity-0 group-hover:opacity-100 transition-opacity">Click to open in Google Maps</p>
            </div>

            {/* Corner decorations */}
            <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold/50" />
            <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold/50" />
            <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold/50" />
            <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold/50" />
          </a>
        </div>
      </div>
    </section>
  );
}
