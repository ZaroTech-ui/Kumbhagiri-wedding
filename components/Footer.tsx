export default function Footer() {
  return (
    <footer className="relative bg-[#080305] py-16 px-4 text-center border-t border-gold/10">
      <div className="flex items-center justify-center gap-4 text-2xl mb-6 opacity-60">
        <span>🌺</span>
        <span>🪔</span>
        <span>🌺</span>
      </div>

      <div className="font-display text-3xl md:text-5xl mb-2 text-gradient-gold animate-shimmer">
        Mohan Krishna <span className="text-gold mx-2">&</span> Anusha
      </div>

      <p className="text-sm tracking-[0.2em] uppercase text-gold/80 mb-6">
        25 · April · 2026 · Bhimavaram Village
      </p>

      <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
        <span className="text-gold/60">◆</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
      </div>

      <p className="text-base italic text-ivory/50 mb-8">
        "Two souls, one heart — blessed by love, bound by tradition"
      </p>

      {/* Developer Credits Section */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gold/10">
        <div className="mb-6">
          <p className="text-xs tracking-[0.2em] uppercase text-gold/60 mb-2">Website Developed By</p>
          <h3 className="font-display text-2xl text-gold-light mb-2">Zaro Tech</h3>
          <a 
            href="mailto:contactzarotech@gmail.com" 
            className="text-sm text-ivory/60 hover:text-gold transition-colors inline-flex items-center gap-2"
          >
            <span>✉️</span>
            <span>contactzarotech@gmail.com</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
          {/* Developer 1 */}
          <div className="bg-white/5 border border-gold/20 p-4 hover:border-gold/40 transition-all">
            <p className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">Developer</p>
            <h4 className="font-display text-lg text-ivory mb-2">Anil Kancharla</h4>
            <a 
              href="https://wa.me/917675957378" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#1ebe5d] transition-colors"
            >
              <span>💬</span>
              <span>+91 7675957378</span>
            </a>
          </div>

          {/* Developer 2 */}
          <div className="bg-white/5 border border-gold/20 p-4 hover:border-gold/40 transition-all">
            <p className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-2">Developer</p>
            <h4 className="font-display text-lg text-ivory mb-2">Siddhartha Mamuduru</h4>
            <a 
              href="https://wa.me/917997793530" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#1ebe5d] transition-colors"
            >
              <span>💬</span>
              <span>+91 7997793530</span>
            </a>
          </div>
        </div>
      </div>

      <p className="text-xs text-ivory/25 tracking-wide mt-8">
        Made with ❤️ for a lifetime of love
      </p>
    </footer>
  );
}
