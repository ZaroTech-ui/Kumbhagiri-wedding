interface Props {
  show: boolean;
  onClose: () => void;
}

export default function SaveDatePopup({ show, onClose }: Props) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#1e0d12] to-[#2a1018] border border-gold rounded max-w-md w-full p-12 text-center relative shadow-[0_0_60px_rgba(201,168,76,0.2)] animate-fadeInUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-xl text-gold/70 hover:text-gold transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        <div className="text-4xl mb-4">🪔</div>
        <p className="text-sm tracking-[0.15em] uppercase text-ivory/60 mb-2">
          You are cordially invited to celebrate
        </p>
        <h2 className="font-display text-3xl text-gold-light mb-3">Save the Date</h2>
        <div className="font-display text-2xl text-ivory mb-2">
          Mohan Krishna <span className="text-gold mx-2">&</span> Anusha
        </div>
        <div className="text-base tracking-[0.2em] text-gold mb-2">25 · April · 2026</div>
        <p className="text-sm text-ivory/60 italic mb-8">Bhimavaram Village</p>
        <button
          onClick={onClose}
          className="px-10 py-3.5 bg-gradient-to-br from-gold to-gold-mid text-maroon font-bold text-sm tracking-[0.12em] uppercase rounded hover:from-gold-light hover:to-gold hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-300"
        >
          Open Invitation ✦
        </button>
      </div>
    </div>
  );
}
