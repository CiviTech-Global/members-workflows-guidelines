import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { asset } from '../lib/asset';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white/50 py-12 dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={asset('assets/Colored logo.png')}
            alt="Civitech Global"
            className="h-8 w-8 dark:hidden"
          />
          <img
            src={asset('assets/concept logo - no bg - white.png')}
            alt="Civitech Global"
            className="hidden h-8 w-8 dark:block"
          />
          <span className="font-semibold text-slate-800 dark:text-slate-200">Civitech Global</span>
        </Link>
        <p className="flex items-center gap-1 text-sm text-slate-500">
          Built with <Heart className="h-3.5 w-3.5 text-rose-500" /> for our growing team · {year}
        </p>
      </div>
    </footer>
  );
}
