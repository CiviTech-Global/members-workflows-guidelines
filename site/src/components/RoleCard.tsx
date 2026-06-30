import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Eye } from 'lucide-react';
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
      className={`group relative overflow-hidden rounded-2xl border ${team.border} bg-white p-6 shadow-sm transition-colors hover:border-opacity-60 dark:border-opacity-100 dark:bg-slate-900/60`}
    >
      <div className="mb-4 flex items-start justify-between">
        <span
          className={`rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wider ${team.color} bg-slate-100 dark:bg-slate-950/40`}
        >
          {role.shortTitle}
        </span>
        <ArrowUpRight
          className={`h-5 w-5 ${team.color} opacity-0 transition-opacity group-hover:opacity-100`}
        />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-50">{role.title}</h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {role.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {role.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-400"
          >
            {skill}
          </span>
        ))}
        {role.skills.length > 3 && (
          <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-400">
            +{role.skills.length - 3}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={onClick}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        >
          <Eye className="h-3.5 w-3.5" />
          Quick view
        </button>
        <Link
          to={`/team/${team.id}/${role.slug}`}
          className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border ${team.border} ${team.bg} px-3 py-2 text-sm font-medium ${team.color} transition-colors hover:bg-white dark:hover:bg-slate-900/60`}
        >
          <BookOpen className="h-3.5 w-3.5" />
          Full story
        </Link>
      </div>
    </motion.article>
  );
}
