import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Team, Role } from '../data/teams';

interface RoleCardProps {
  role: Role;
  team: Team;
  index: number;
  onClick: () => void;
}

export default function RoleCard({ role, team, index, onClick }: RoleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border ${team.border} ${team.bg} p-6 backdrop-blur-sm transition-colors hover:border-opacity-50 hover:bg-slate-900/60`}
    >
      <div className="mb-4 flex items-start justify-between">
        <span
          className={`rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wider ${team.color} bg-slate-950/40`}
        >
          {role.shortTitle}
        </span>
        <ArrowUpRight
          className={`h-5 w-5 ${team.color} opacity-0 transition-opacity group-hover:opacity-100`}
        />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-slate-50">{role.title}</h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">{role.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {role.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-700/60 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-400"
          >
            {skill}
          </span>
        ))}
        {role.skills.length > 3 && (
          <span className="rounded-full border border-slate-700/60 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-400">
            +{role.skills.length - 3}
          </span>
        )}
      </div>
    </motion.article>
  );
}
