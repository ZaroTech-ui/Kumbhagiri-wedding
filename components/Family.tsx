export default function Family() {
  return (
    <section id="family" className="relative py-24 bg-[#110a0c]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">With Love & Blessings</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-light mb-4">Family & Blessings</h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xl">🙏</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-lg text-ivory/70 italic max-w-2xl mx-auto">
            This union is blessed by the love of our families and the grace of our elders
          </p>
        </div>

        {/* Family grid */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 mb-12">
          {/* Groom's family */}
          <div className="border border-gold/25 rounded overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
            <div className="bg-gradient-to-br from-maroon to-maroon-mid p-6 text-center">
              <span className="block text-3xl mb-2">👨‍👩‍👦</span>
              <h3 className="font-display text-xl text-gold-light">Groom's Family</h3>
              <p className="text-sm text-ivory/70 mt-1">Mohan Krishna</p>
            </div>
            <div className="bg-[#1a0d10] p-6 space-y-3">
              {[
                { role: 'Father', name: "Sri. Kumbhagiri Gopi" },
                { role: 'Mother', name: "Smt. Kumbhagiri Venkatamma" },
                { role: 'Brother', name: "Sri. Kumbhagiri Balaji" },
              ].map((member, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-gold/10 last:border-0">
                  <span className="text-xs tracking-wide uppercase text-gold/80">{member.role}</span>
                  <span className="font-display text-base text-ivory">{member.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center ornament */}
          <div className="hidden md:flex flex-col items-center justify-center gap-3 px-4 min-w-[80px]">
            <span className="text-3xl animate-float">🪔</span>
            <div className="w-px flex-1 min-h-[30px] bg-gradient-to-b from-transparent via-gold to-transparent" />
            <div className="font-display text-sm text-gold text-center leading-relaxed tracking-wide">
              United<br/>in<br/>Love
            </div>
            <div className="w-px flex-1 min-h-[30px] bg-gradient-to-b from-transparent via-gold to-transparent" />
            <span className="text-3xl animate-float">🪔</span>
          </div>

          {/* Bride's family */}
          <div className="border border-gold/25 rounded overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
            <div className="bg-gradient-to-br from-[#5a2010] to-[#8B3A2A] p-6 text-center">
              <span className="block text-3xl mb-2">👨‍👩‍👧</span>
              <h3 className="font-display text-xl text-gold-light">Bride's Family</h3>
              <p className="text-sm text-ivory/70 mt-1">Anusha</p>
            </div>
            <div className="bg-[#1a0d10] p-6 space-y-3">
              {[
                { role: 'Father', name: "Sri. Ganugupenta Khaja" },
                { role: 'Mother', name: "Smt. Ganugupenta Vijayabharathi" },
              ].map((member, idx) => (
                <div key={idx} className="flex items-center justify-between flex-row-reverse py-2 border-b border-gold/10 last:border-0">
                  <span className="text-xs tracking-wide uppercase text-gold/80">{member.role}</span>
                  <span className="font-display text-base text-ivory">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blessings block */}
        <div className="border border-gold/30 rounded p-10 text-center bg-gradient-to-br from-maroon/30 to-[#1a0d10]/80 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
          <span className="block text-3xl mb-4">🙏</span>
          <h3 className="font-display text-2xl text-gold-light mb-3">Bless the Couple</h3>
          <p className="text-base text-ivory/70 italic max-w-2xl mx-auto leading-relaxed mb-3">
            Your blessings are the greatest gift you can offer. As Mohan Krishna and Anusha begin this beautiful journey together, they seek the love, prayers, and blessings of every soul who has touched their lives.
          </p>
          <p className="text-base text-gold/80 italic mb-6">
            "May your home be filled with laughter, your hearts with love, and your lives with the grace of God."
          </p>
          <a
            href="#rsvp"
            className="inline-block px-9 py-3.5 bg-gradient-to-br from-gold to-gold-mid text-maroon font-bold text-sm tracking-[0.15em] uppercase rounded shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:from-gold-light hover:to-gold hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            Send Your Blessings 🙏
          </a>
        </div>
      </div>
    </section>
  );
}
