import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, X } from 'lucide-react';
import { teams } from '../data/teams';
import { getTeamIcon } from '../lib/teamIcons';
import TopBar from './TopBar';
import Footer from './Footer';

export default function RolesPage() {
  const [query, setQuery] = useState('');
  const [filterTeam, setFilterTeam] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return teams.flatMap((team) =>
      team.roles
        .filter(() => !filterTeam || team.id === filterTeam)
        .filter((role) => {
          if (!q) return true;
          const haystack = [
            role.title,
            role.shortTitle,
            role.summary,
            ...role.skills,
            team.name,
          ]
            .join(' ')
            .toLowerCase();
          return haystack.includes(q);
        })
        .map((role) => ({ team, role }))
    );
  }, [query, filterTeam]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <TopBar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Explore roles
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Browse every role across our teams. Filter by team or search by title, skill, or keyword.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative mx-auto mb-8 max-w-xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search roles, skills, or teams..."
            className="w-full rounded-full border border-slate-200 bg-white py-3 pl-12 pr-10 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Team filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilterTeam(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filterTeam === null
                ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
          >
            All teams
          </button>
          {teams.map((team) => {
            const Icon = getTeamIcon(team);
            const active = filterTeam === team.id;
            return (
              <button
                key={team.id}
                onClick={() => setFilterTeam(active ? null : team.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? `${team.bg} ${team.color} ${team.border} border`
                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                {team.name}
              </button>
            );
          })}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(({ team, role }, index) => {
              const Icon = getTeamIcon(team);
              return (
                <motion.div
                  key={`${team.id}-${role.slug}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <Link
                    to={`/team/${team.id}/${role.slug}`}
                    className={`group flex h-full flex-col rounded-2xl border ${team.border} bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-slate-900/60`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className={`flex items-center gap-1.5 rounded-full ${team.bg} px-2.5 py-1 text-xs font-semibold ${team.color}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {team.name}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {role.shortTitle}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">
                      {role.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {role.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {role.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100">
                      Read full story
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-slate-500 dark:text-slate-400">
              No roles match your search.
            </p>
            <button
              onClick={() => {
                setQuery('');
                setFilterTeam(null);
              }}
              className="mt-4 text-cyan-600 hover:underline dark:text-cyan-400"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
