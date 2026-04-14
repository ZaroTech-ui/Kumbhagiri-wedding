export default function Gallery() {
  const items = [
    { icon: '💑', label: 'Together Forever', gradient: 'from-[#3a0a14] via-[#6B0F1A] to-[#8B1A2A]', large: true },
    { icon: '💍', label: 'Engagement', gradient: 'from-[#1a0a05] via-[#4a2010] to-[#8B3A1A]' },
    { icon: '🌺', label: 'Pre-Wedding', gradient: 'from-[#0a0a1a] via-[#1a1040] to-[#3a2060]' },
    { icon: '👨‍👩‍👧‍👦', label: 'Family Moments', gradient: 'from-[#0a1a0a] via-[#1a3a10] to-[#2a5a1a]' },
    { icon: '🪔', label: 'Sacred Rituals', gradient: 'from-[#1a0a0a] via-maroon to-[#C9A84C]' },
    { icon: '🌸', label: 'Blessings', gradient: 'from-[#0a0a0a] via-[#2a1a0a] to-[#4a3010]', large: true },
  ];

  return (
    <section id="gallery" className="relative py-24 bg-[#0a0406]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Moments to Cherish</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-light mb-4">Our Gallery</h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xl">📸</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-lg text-ivory/70 italic max-w-2xl mx-auto">
            A glimpse into our beautiful journey together
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`relative ${item.large ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'} rounded overflow-hidden cursor-pointer group`}
            >
              {/* Placeholder with gradient */}
              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center gap-2 transition-transform duration-500 group-hover:scale-110`}>
                <span className="text-4xl opacity-60">{item.icon}</span>
                <span className="text-xs tracking-[0.2em] uppercase text-gold/70">{item.label}</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0608]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-display text-base text-gold-light">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
