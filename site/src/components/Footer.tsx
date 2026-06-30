import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-950/50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="./assets/concept logo - no bg - white.png"
            alt="Civitech Global"
            className="h-8 w-8 opacity-80"
          />
          <span className="font-semibold text-slate-200">Civitech Global</span>
        </div>
        <p className="flex items-center gap-1 text-sm text-slate-500">
          Built with <Heart className="h-3.5 w-3.5 text-rose-500" /> for our growing team · {year}
        </p>
      </div>
    </footer>
  );
}
