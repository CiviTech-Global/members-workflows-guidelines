import { motion } from 'framer-motion';
import type { Team } from '../data/teams';

interface TeamNavProps {
  teams: Team[];
  activeTeam: string;
  onSelect: (id: string) => void;
}

export default function TeamNav({ teams, activeTeam, onSelect }: TeamNavProps) {
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {teams.map((team) => {
          const isActive = team.id === activeTeam;
          return (
            <button
              key={team.id}
              onClick={() => onSelect(team.id)}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive ? 'text-slate-50' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTeam"
                  className={`absolute inset-0 rounded-full ${team.bg} ${team.border} border`}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${team.color.replace('text-', 'bg-')}`} />
                <span className="hidden sm:inline">{team.name}</span>
                <span className="sm:hidden">{team.name.split(' ')[0]}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
