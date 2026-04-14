export default function Story() {
  const timeline = [
    {
      icon: '🌺',
      year: 'The First Meeting',
      title: 'When Destiny Smiled',
      text: "In the gentle warmth of a Telugu evening, two hearts found each other — not by chance, but by the divine design of the universe. Mohan Krishna's eyes met Anusha's, and in that sacred moment, a story older than time began to unfold.",
      side: 'left'
    },
    {
      icon: '💛',
      year: 'Growing Together',
      title: 'A Bond Like No Other',
      text: 'Through shared laughter, quiet conversations, and the warmth of family gatherings, their bond deepened like roots of a sacred banyan tree — strong, enduring, and full of life. Every moment together felt like a blessing from above.',
      side: 'right'
    },
    {
      icon: '💍',
      year: 'The Engagement',
      title: 'Families United in Joy',
      text: 'Surrounded by the fragrance of jasmine and the glow of diyas, two families came together in celebration. The exchange of rings was not just a promise between two hearts — it was a covenant blessed by elders, ancestors, and the divine.',
      side: 'left'
    },
    {
      icon: '🪔',
      year: '25 April 2026',
      title: 'The Sacred Wedding',
      text: 'As the stars align in the sacred hours of the early morning, Mohan Krishna and Anusha will take their seven steps together — a journey of love, devotion, and eternal togetherness. The universe itself will bear witness to this divine union.',
      side: 'right'
    },
  ];

  return (
    <section id="story" className="relative py-24 bg-[#0a0406]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">The Beginning of Forever</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-light mb-4">Our Story</h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xl">🌸</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-lg text-ivory/70 italic max-w-2xl mx-auto">
            Two souls, one destiny — woven together by fate and blessed by tradition
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent -translate-x-1/2" />

          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`relative grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-16 last:mb-0 ${
                item.side === 'left' ? '' : 'md:grid-flow-dense'
              }`}
            >
              {/* Content */}
              <div className={`${item.side === 'left' ? 'md:text-right md:col-start-1' : 'md:text-left md:col-start-3'}`}>
                <div className={`bg-[#1a0d10] p-6 rounded shadow-[0_8px_40px_rgba(0,0,0,0.6)] ${
                  item.side === 'left' ? 'md:border-r-4' : 'md:border-l-4'
                } border-maroon-mid hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)] transition-all duration-300`}>
                  <span className="block text-xs tracking-[0.2em] uppercase text-gold mb-2">{item.year}</span>
                  <h3 className="font-display text-2xl text-gold-light mb-2">{item.title}</h3>
                  <p className="text-sm text-ivory/75 leading-relaxed">{item.text}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="hidden md:flex w-16 h-16 rounded-full border-2 border-gold bg-[#1a0d10] items-center justify-center text-2xl shadow-[0_0_20px_rgba(201,168,76,0.2)] md:col-start-2 z-10">
                {item.icon}
              </div>

              {/* Spacer */}
              <div className={item.side === 'left' ? 'md:col-start-3' : 'md:col-start-1'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
