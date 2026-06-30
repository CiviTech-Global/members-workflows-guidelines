import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Megaphone,
  Sparkles,
  Users,
  Calendar,
  FileText,
  ArrowRight,
  ArrowLeft,
  Gamepad2,
} from 'lucide-react';
import TopBar from './TopBar';
import Footer from './Footer';

const APPLY_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeF_k4TByVI5OIOnh2Y9qI5akcadOO0EhmJz_w5YHD8jYAGlg/viewform?usp=publish-editor';
const CALENDLY_URL = 'https://calendly.com/mohammadkhalilzadeh77/30min';

export default function OpenCall() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <TopBar />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="overflow-hidden rounded-3xl border border-cyan-200 bg-white shadow-sm dark:border-cyan-500/20 dark:bg-slate-900/60">
            {/* Header */}
            <div className="bg-gradient-to-br from-cyan-500 to-violet-600 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                <Megaphone className="h-4 w-4" />
                Open Call
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                Part-Time | Volunteer Contributors
              </h1>
              <p className="mt-4 text-lg text-white/90">
                Rayan Tamaddon Jahan Gostar (CiviTech Global)
              </p>
              <p className="mx-auto mt-3 flex max-w-xl items-center justify-center gap-2 text-white/80">
                <Sparkles className="h-4 w-4" />
                Developing creative, innovative software solutions to help and facilitate civilization.
                <Gamepad2 className="h-4 w-4" />
                We like games as well.
              </p>
            </div>

            {/* Body */}
            <div className="space-y-10 px-6 py-10 sm:px-12 sm:py-14">
              <section>
                <h2 className="mb-3 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  <Users className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  What this opportunity is
                </h2>
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                  We are opening applications for people who want to gain practical experience by
                  contributing to real software products and seeing how ideas become solutions used in
                  practice. This is a part-time volunteer opportunity designed for contributors with
                  different interests, strengths, and backgrounds to participate in different stages of
                  product creation and growth.
                </p>
                <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
                  Contributors will collaborate on real initiatives and be matched to activities based on
                  interests, capabilities, and project priorities.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40">
                <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
                  Through this experience, contributors may gain exposure to:
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    'How software products are created and improved',
                    'Cross-functional collaboration and delivery workflows',
                    'Real-world execution and iteration cycles',
                    'Product launch and continuous evolution',
                    'Market-oriented product environments',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-rose-200 bg-rose-50 p-6 dark:border-rose-500/20 dark:bg-rose-500/10">
                <h2 className="mb-2 text-xl font-bold text-rose-700 dark:text-rose-300">Important</h2>
                <p className="text-rose-700 dark:text-rose-300">
                  This is a voluntary and unpaid opportunity.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Purpose of this initiative
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Build official work experience',
                    'Strengthen portfolios with meaningful work',
                    'Develop practical and collaborative skills',
                    'Experience how products evolve from concept to real-world use',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
                  <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100">
                    Who should apply
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300">
                    People who are curious, proactive, collaborative, and excited to learn by building.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
                  <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                    <Calendar className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    Commitment
                  </h2>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      Part-time participation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      Flexible coordination
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      Remote-friendly where applicable
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  <FileText className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  To apply
                </h2>
                <p className="mb-6 text-slate-700 dark:text-slate-300">
                  Please include your LinkedIn profile or resume, a short introduction, your interests and
                  goals, and an optional portfolio or previous work.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={APPLY_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 text-center font-semibold text-white shadow-sm transition-colors hover:bg-cyan-700"
                  >
                    Apply with this form
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule a 30–45 min call
                  </a>
                </div>
              </section>

              <div className="text-center">
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Build. Learn. Contribute. Grow.
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Regards, Rayan Tamaddon Jahan Gostar (CiviTech Global)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
