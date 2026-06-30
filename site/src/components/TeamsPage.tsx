import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { teams } from '../data/teams';
import { getTeamIcon } from '../lib/teamIcons';
import TopBar from './TopBar';
import Footer from './Footer';

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <TopBar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Meet the teams
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Five cross-functional teams working together to turn ideas into real-world products.
            Click a team to read its story and explore the roles inside it.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team, index) => {
            const Icon = getTeamIcon(team);
            return (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/team/${team.id}`}
                  className={`group flex h-full flex-col rounded-3xl border ${team.border} ${team.bg} bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-slate-900/60`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${team.bg} ${team.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      <Users className="h-3 w-3" />
                      {team.roles.length} roles
                    </span>
                  </div>

                  <h2 className={`mb-2 text-2xl font-bold ${team.color}`}>{team.name}</h2>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {team.story.split('\n\n')[0]}
                  </p>

                  <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100">
                    Read the team story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
