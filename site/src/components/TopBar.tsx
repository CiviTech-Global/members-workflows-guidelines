import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { asset } from '../lib/asset';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/teams', label: 'Teams' },
  { to: '/roles', label: 'Roles' },
  { to: '/open-call', label: 'Open Call' },
  { to: '/git-workflow', label: 'Git Workflow' },
];

export default function TopBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            <span className="text-lg font-bold text-slate-800 dark:text-slate-100">
              Civitech Global
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active =
                link.to === '/teams'
                  ? location.pathname === '/teams' || location.pathname.startsWith('/team/')
                  : location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'text-slate-900 dark:text-slate-50'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-slate-100 dark:bg-slate-800"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-slate-200 bg-white px-6 py-6 shadow-2xl dark:border-slate-800 dark:bg-slate-950 md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-bold text-slate-900 dark:text-slate-100">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active =
                    link.to === '/teams'
                      ? location.pathname === '/teams' || location.pathname.startsWith('/team/')
                      : location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? 'bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/60">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
