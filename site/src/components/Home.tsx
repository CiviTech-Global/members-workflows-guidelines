import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Megaphone, GitBranch } from 'lucide-react';
import { teams } from '../data/teams';
import TopBar from './TopBar';
import Hero from './Hero';
import Footer from './Footer';
import { getTeamIcon } from '../lib/teamIcons';

const roleCount = teams.reduce((acc, t) => acc + t.roles.length, 0);

const portals = [
  {
    to: '/teams',
    title: 'Meet the teams',
    description: 'Read the story behind each team and discover how they fit together.',
    icon: Users,
    color: 'cyan',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    to: '/roles',
    title: 'Explore roles',
    description: 'Browse all roles, filter by team, and find the career path that fits you.',
    icon: Briefcase,
    color: 'violet',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-600 dark:text-violet-400',
  },
  {
    to: '/open-call',
    title: 'Open Call',
    description: 'Join us as a part-time volunteer contributor and build real products.',
    icon: Megaphone,
    color: 'emerald',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    to: '/git-workflow',
    title: 'Git Workflow',
    description: 'Learn how we fork, branch, commit, push, and merge code together.',
    icon: GitBranch,
    color: 'rose',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    text: 'text-rose-600 dark:text-rose-400',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <TopBar />
      <Hero teamCount={teams.length} roleCount={roleCount} />

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Start exploring
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Whether you want to understand our teams, dive into a specific role, or join the mission,
            there is a path for you.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portals.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <motion.div
                key={portal.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={portal.to}
                  className={`group flex h-full flex-col rounded-3xl border ${portal.border} ${portal.bg} bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-slate-900/60`}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${portal.bg}`}
                  >
                    <Icon className={`h-7 w-7 ${portal.text}`} />
                  </div>
                  <h3 className={`mb-2 text-2xl font-bold ${portal.text}`}>{portal.title}</h3>
                  <p className="mb-6 flex-1 text-slate-600 dark:text-slate-400">{portal.description}</p>
                  <span className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100">
                    Go to {portal.title.toLowerCase()}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Team preview */}
        <section className="mt-24">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Our teams</h2>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                Five teams with refreshed professional names.
              </p>
            </div>
            <Link
              to="/teams"
              className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:underline dark:text-cyan-400"
            >
              View all teams
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team, index) => {
              const Icon = getTeamIcon(team);
              return (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={`/team/${team.id}`}
                    className={`group flex items-center gap-4 rounded-2xl border ${team.border} ${team.bg} bg-white p-4 transition-colors hover:bg-slate-50 dark:bg-slate-900/60 dark:hover:bg-slate-900`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${team.bg} ${team.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`truncate font-semibold ${team.color}`}>{team.name}</h3>
                      <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                        {team.roles.length} roles
                      </p>
                    </div>
                    <ArrowRight
                      className={`ml-auto h-5 w-5 shrink-0 ${team.color} opacity-0 transition-opacity group-hover:opacity-100`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
