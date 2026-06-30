import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { teams } from '../data/teams';

export default function TopBar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="./assets/Colored logo.png"
            alt="Civitech Global"
            className="h-8 w-8 dark:hidden"
          />
          <img
            src="./assets/concept logo - no bg - white.png"
            alt="Civitech Global"
            className="hidden h-8 w-8 dark:block"
          />
          <span className="hidden text-lg font-bold text-slate-800 dark:text-slate-100 sm:block">
            Civitech Global
          </span>
        </Link>

        <nav className="hidden items-center gap-1 overflow-x-auto md:flex">
          {teams.map((team) => {
            const active = location.pathname.startsWith(`/team/${team.id}`);
            return (
              <Link
                key={team.id}
                to={`/team/${team.id}`}
                className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? 'text-slate-900 dark:text-slate-50'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="topBarTeam"
                    className={`absolute inset-0 rounded-full ${team.bg} ${team.border} border`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${team.color.replace('text-', 'bg-')}`} />
                  {team.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile team strip */}
      <div className="border-t border-slate-100 bg-white/70 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/70 md:hidden">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          {teams.map((team) => {
            const active = location.pathname.startsWith(`/team/${team.id}`);
            return (
              <Link
                key={team.id}
                to={`/team/${team.id}`}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  active
                    ? `${team.bg} ${team.color} ${team.border} border`
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900/50'
                }`}
              >
                {team.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
