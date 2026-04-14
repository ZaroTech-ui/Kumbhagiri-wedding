import { useState } from 'react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '',
    event: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.guests || !formData.event) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `🙏 *Wedding RSVP — Mohan Krishna & Anusha*\n\n` +
      `📛 Name: ${formData.name || '[Your Name]'}\n` +
      `👥 Guests: ${formData.guests || '1'}\n` +
      `🎉 Attending: ${formData.event || 'All Events'}\n` +
      `📅 Date: 25 April 2026\n` +
      `📍 Venue: Bhimavaram Village\n` +
      (formData.message ? `\n💬 Message: ${formData.message}` : '') +
      `\n\n_Sent via Wedding Website_`
    );
    window.open(`https://wa.me/917702553877?text=${text}`, '_blank');
  };

  const handleShare = async () => {
    const shareText = '🌸 You are invited to the wedding of Mohan Krishna & Anusha on 25 April 2026 at Bhimavaram Village! 🪔';
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: 'Mohan Krishna & Anusha Wedding', text: shareText, url: shareUrl });
      } catch (_) {}
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert('Link copied to clipboard!');
      } catch (_) {
        alert('Copy this link: ' + shareUrl);
      }
    }
  };

  return (
    <section id="rsvp" className="relative py-24 bg-gradient-to-b from-[#1a0810] to-[#0d0608] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(107,15,26,0.2)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">You're Invited</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-light mb-4">RSVP</h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xl">💌</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="text-lg text-ivory/70 italic max-w-2xl mx-auto">
            Please let us know you're coming — your presence is our greatest blessing
          </p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gold mb-2">Your Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-white/10 border-2 border-gold/40 text-ivory placeholder:text-ivory/50 focus:border-gold focus:bg-white/15 focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-white/10 border-2 border-gold/40 text-ivory placeholder:text-ivory/50 focus:border-gold focus:bg-white/15 focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gold mb-2">Number of Guests *</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border-2 border-gold/40 text-ivory focus:border-gold focus:bg-white/15 focus:ring-2 focus:ring-gold/20 outline-none transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select guests</option>
                      <option value="1">Just Me (1)</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gold mb-2">Attending Events *</label>
                    <select
                      value={formData.event}
                      onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border-2 border-gold/40 text-ivory focus:border-gold focus:bg-white/15 focus:ring-2 focus:ring-gold/20 outline-none transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select event(s)</option>
                      <option value="Muhurtham (2:30 AM)">Muhurtham (2:30 AM)</option>
                      <option value="Wedding Lunch (12:30 PM)">Wedding Lunch (12:30 PM)</option>
                      <option value="Reception & Dinner (8 PM)">Reception & Dinner (8 PM)</option>
                      <option value="All Events">All Events</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-gold mb-2">Your Blessings / Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your blessings and warm wishes for the couple..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-gold/40 text-ivory placeholder:text-ivory/50 focus:border-gold focus:bg-white/15 focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-y"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-9 py-3.5 bg-gradient-to-br from-gold to-gold-mid text-maroon font-bold text-sm tracking-[0.15em] uppercase rounded shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:from-gold-light hover:to-gold hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)] transition-all duration-300"
                  >
                    Confirm Attendance 🙏
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 px-9 py-3.5 bg-[#25D366] text-white font-bold text-sm tracking-[0.1em] uppercase rounded hover:bg-[#1ebe5d] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(37,211,102,0.3)] transition-all duration-300"
                  >
                    💬 Send via WhatsApp
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center p-12 border border-gold/30 rounded bg-gold/5">
                <span className="block text-5xl mb-4">🎉</span>
                <h3 className="font-display text-3xl text-gold-light mb-2">Thank You!</h3>
                <p className="text-ivory/70 italic mb-2">Your RSVP has been received. We can't wait to celebrate with you!</p>
                <p className="font-display text-gold">Mohan Krishna & Anusha</p>
              </div>
            )}
          </div>

          {/* Info sidebar */}
          <div className="space-y-8">
            {/* Details card */}
            <div className="border border-gold/25 rounded overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
              <div className="bg-gradient-to-br from-maroon to-maroon-mid p-5 text-center">
                <h4 className="font-display text-xl text-gold-light">📅 Wedding Details</h4>
              </div>
              <div className="bg-[#1a0d10] p-6 space-y-4 text-sm text-ivory/85">
                <div className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0">📅</span>
                  <div><strong>Date:</strong> 25 April 2026 (Saturday)</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0">🪔</span>
                  <div><strong>Muhurtham:</strong> 2:30 AM – 3:40 AM</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0">🍽️</span>
                  <div><strong>Lunch:</strong> 12:30 PM Onwards</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0">✨</span>
                  <div><strong>Reception:</strong> 8:00 PM Onwards</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0">📍</span>
                  <div><strong>Venue:</strong> Bhimavaram Village</div>
                </div>
              </div>
            </div>

            {/* Share card */}
            <div className="border border-gold/20 rounded p-6 bg-[#1a0d10] text-center">
              <h4 className="font-display text-lg text-gold-light mb-2">Share the Joy</h4>
              <p className="text-sm text-ivory/60 mb-5">Invite your loved ones to celebrate with us</p>
              <div className="space-y-3">
                <button
                  onClick={handleShare}
                  className="w-full px-6 py-3 border border-gold text-gold-light text-sm tracking-[0.1em] uppercase rounded hover:bg-gold/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  📤 Share Invitation
                </button>
                <button
                  onClick={() => window.open(`https://wa.me/917702553877?text=${encodeURIComponent('🌸 You are invited to the wedding of Mohan Krishna & Anusha on 25 April 2026 at Bhimavaram Village! 🪔\n' + window.location.href)}`, '_blank')}
                  className="w-full px-6 py-3 bg-[#25D366] text-white text-sm tracking-[0.1em] uppercase rounded hover:bg-[#1ebe5d] hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(37,211,102,0.3)] transition-all duration-300"
                >
                  💬 Share on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
