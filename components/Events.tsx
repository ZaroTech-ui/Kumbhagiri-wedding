export default function Events() {
  const events = [
    {
      icon: '🛕',
      badge: 'Sacred Muhurtham',
      name: 'Vivaha Muhurtham',
      time: '2:30 AM – 3:40 AM',
      date: 'Saturday, 25 April 2026',
      desc: 'In the most auspicious hours of the pre-dawn sky, when the stars align in divine harmony, Mohan Krishna and Anusha will be united in the sacred fire of matrimony. This celestial muhurtham is blessed by the heavens themselves.',
      tag: '⭐ Most Auspicious Time',
      special: true
    },
    {
      icon: '🍽️',
      badge: 'Celebration Feast',
      name: 'Wedding Lunch',
      time: '12:30 PM Onwards',
      date: 'Saturday, 25 April 2026',
      desc: 'Savour the rich flavours of a traditional Telugu feast, lovingly prepared to honour our guests. A grand spread of authentic delicacies served on banana leaves — a celebration of culture, warmth, and togetherness.',
      tag: '🌿 Traditional Telugu Feast'
    },
    {
      icon: '✨',
      badge: 'Grand Evening',
      name: 'Reception & Dinner',
      time: '8:00 PM Onwards',
      date: 'Saturday, 25 April 2026',
      desc: 'As the evening sky glitters with stars, join us for a grand reception filled with music, laughter, and the warmth of loved ones. An evening of elegance and celebration to honour the newly wed couple.',
      tag: '🌟 Grand Celebration'
    },
  ];

  return (
    <section id="events" className="relative py-24 bg-[#130c0e]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Mark Your Calendar</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-light mb-4">Wedding Events</h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xl">🌼</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-lg text-ivory/70 italic max-w-2xl mx-auto">
            Join us in celebrating every sacred moment of this joyous occasion
          </p>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`relative bg-[#1a0d10] border ${
                event.special ? 'border-gold animate-pulse-glow' : 'border-gold/25'
              } rounded p-8 text-center overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(201,168,76,0.1)] hover:border-gold/50 transition-all duration-300`}
            >
              {/* Glow effect */}
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_60%)] pointer-events-none" />

              <div className="relative z-10">
                <div className="text-5xl mb-4 animate-float">{event.icon}</div>
                <div className="inline-block px-3 py-1 bg-gold/15 border border-gold/40 rounded-full text-[0.62rem] tracking-[0.15em] uppercase text-gold-light mb-4">
                  {event.badge}
                </div>
                <h3 className="font-display text-2xl text-gold-light mb-2">{event.name}</h3>
                <div className="text-lg text-ivory/90 mb-1">{event.time}</div>
                <div className="text-sm text-ivory/60 mb-4">{event.date}</div>
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
                <p className="text-sm text-ivory/65 leading-relaxed mb-4">{event.desc}</p>
                <div className="inline-block px-4 py-1.5 border border-gold/30 rounded-full text-xs tracking-wide text-gold uppercase">
                  {event.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
