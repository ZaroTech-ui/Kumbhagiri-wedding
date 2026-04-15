import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#story', label: 'Our Story' },
    { href: '#events', label: 'Events' },
    { href: '#venue', label: 'Venue' },
    { href: '#family', label: 'Family' },
    { href: '#rsvp', label: 'RSVP' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-[#0d0608]/96 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.5)] py-3' : 'bg-transparent'
      }`}>
        <div className="font-display text-2xl text-gold-light tracking-wide drop-shadow-[0_0_20px_rgba(240,208,96,0.4)]">
          M <span className="text-gold mx-1">✦</span> A
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.82rem] tracking-[0.12em] uppercase text-ivory/85 hover:text-gold-light transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span className="block w-7 h-0.5 bg-gold-light rounded transition-all" />
          <span className="block w-7 h-0.5 bg-gold-light rounded transition-all" />
          <span className="block w-7 h-0.5 bg-gold-light rounded transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-[#0d0608]/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
        mobileOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
      }`}>
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-8 text-3xl text-gold hover:text-gold-light transition-colors"
          aria-label="Close"
        >
          ×
        </button>
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-display text-4xl text-ivory hover:text-gold-light tracking-wide transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
