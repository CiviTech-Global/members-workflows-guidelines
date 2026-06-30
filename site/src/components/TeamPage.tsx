import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, ChevronRight } from 'lucide-react';
import { teams } from '../data/teams';
import TopBar from './TopBar';
import Footer from './Footer';

export default function TeamPage() {
  const { teamId } = useParams<{ teamId: string }>();
  const team = teams.find((t) => t.id === teamId);

  if (!team) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <TopBar />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-slate-900 hover:underline dark:hover:text-slate-100">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900 dark:text-slate-100">{team.name}</span>
          </nav>

          <div className="mb-6 flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${team.color.replace('text-', 'bg-')}`} />
            <h1 className={`text-4xl font-extrabold tracking-tight ${team.color} sm:text-5xl`}>
              {team.name}
            </h1>
          </div>
          <p className="mb-10 text-lg text-slate-500 dark:text-slate-400">
            Formerly <span className="text-slate-700 dark:text-slate-300">{team.originalName}</span>
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-8">
            {team.story.split('\n\n').map((paragraph, idx) => (
              <p
                key={idx}
                className="mb-4 last:mb-0 text-lg leading-relaxed text-slate-700 dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <section className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <Users className={`h-5 w-5 ${team.color}`} />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Roles on this team</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {team.roles.map((role, index) => (
              <motion.div
                key={role.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  to={`/team/${team.id}/${role.slug}`}
                  className={`group flex items-center justify-between rounded-2xl border ${team.border} ${team.bg} p-5 transition-colors hover:bg-white dark:hover:bg-slate-900/60`}
                >
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${team.color}`}>
                      {role.shortTitle}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {role.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                      {role.summary}
                    </p>
                  </div>
                  <ArrowRight className={`h-5 w-5 shrink-0 ${team.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
