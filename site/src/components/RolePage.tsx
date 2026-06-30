import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Target, BookOpen, Route, Handshake, Award, ChevronRight } from 'lucide-react';
import { teams } from '../data/teams';
import TopBar from './TopBar';
import Footer from './Footer';
import Roadmap from './Roadmap';
import InteractionList from './InteractionList';
import ResourceList from './ResourceList';
import BestPractices from './BestPractices';

export default function RolePage() {
  const { teamId, roleSlug } = useParams<{ teamId: string; roleSlug: string }>();
  const team = teams.find((t) => t.id === teamId);
  const roleIndex = team?.roles.findIndex((r) => r.slug === roleSlug) ?? -1;
  const role = team && roleIndex >= 0 ? team.roles[roleIndex] : null;

  if (!team || !role) {
    return <Navigate to="/" replace />;
  }

  const prevRole = team.roles[roleIndex - 1];
  const nextRole = team.roles[roleIndex + 1];

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
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-slate-900 hover:underline dark:hover:text-slate-100">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              to={`/team/${team.id}`}
              className="hover:text-slate-900 hover:underline dark:hover:text-slate-100"
            >
              {team.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900 dark:text-slate-100">{role.title}</span>
          </nav>

          <Link
            to={`/team/${team.id}`}
            className={`mb-4 inline-flex items-center gap-1 text-sm font-medium ${team.color} hover:underline`}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {team.name}
          </Link>

          <p className={`mb-2 text-sm font-semibold uppercase tracking-wider ${team.color}`}>
            {role.shortTitle}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            {role.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{role.summary}</p>
        </motion.div>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">The story of this role</h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-8">
            {role.story.split('\n\n').map((paragraph, idx) => (
              <p
                key={idx}
                className="mb-4 last:mb-0 text-lg leading-relaxed text-slate-700 dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100">
            <Target className={`h-5 w-5 ${team.color}`} />
            Key Responsibilities
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {role.responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
              >
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${team.color.replace('text-', 'bg-')}`} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">Common Tools</h2>
            <div className="flex flex-wrap gap-2">
              {role.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <Route className={`h-6 w-6 ${team.color}`} />
            Career Roadmap
          </h2>
          <Roadmap levels={role.roadmap} />
        </section>

        <section className="mt-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <Handshake className={`h-6 w-6 ${team.color}`} />
            Daily Interactions
          </h2>
          <InteractionList interactions={role.interactions} />
        </section>

        <section className="mt-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <Award className={`h-6 w-6 ${team.color}`} />
            Best Practices
          </h2>
          <BestPractices practices={role.bestPractices} />
        </section>

        <section className="mt-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <BookOpen className={`h-6 w-6 ${team.color}`} />
            Learning Resources
          </h2>
          <ResourceList resources={role.resources} />
        </section>

        {/* Prev / Next role navigation */}
        <div className="mt-16 grid gap-4 border-t border-slate-200 pt-10 dark:border-slate-800 sm:grid-cols-2">
          {prevRole ? (
            <Link
              to={`/team/${team.id}/${prevRole.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700"
            >
              <ArrowLeft className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Previous role</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{prevRole.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextRole ? (
            <Link
              to={`/team/${team.id}/${nextRole.slug}`}
              className="group flex items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-right transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700"
            >
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Next role</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{nextRole.title}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
