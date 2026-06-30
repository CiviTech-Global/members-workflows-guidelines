import { motion } from 'framer-motion';
import { ChevronDown, Users, Briefcase } from 'lucide-react';
import { asset } from '../lib/asset';

interface HeroProps {
  teamCount: number;
  roleCount: number;
}

export default function Hero({ teamCount, roleCount }: HeroProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[120px] dark:bg-cyan-500/20"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-violet-300/20 blur-[140px] dark:bg-violet-500/20"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/3 top-1/3 h-[400px] w-[400px] rounded-full bg-emerald-300/15 blur-[100px] dark:bg-emerald-500/10"
        />
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center pt-16 sm:pt-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <img
            src={asset('assets/Colored logo.png')}
            alt="Civitech Global Logo"
            className="mx-auto h-40 w-40 drop-shadow-[0_0_40px_rgba(6,182,212,0.25)] sm:h-56 sm:w-56 dark:hidden"
          />
          <img
            src={asset('assets/concept logo - no bg - white.png')}
            alt="Civitech Global Logo"
            className="mx-auto hidden h-40 w-40 drop-shadow-[0_0_40px_rgba(6,182,212,0.35)] sm:h-56 sm:w-56 dark:block"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-gradient-to-r from-cyan-600 via-slate-800 to-violet-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-cyan-300 dark:via-slate-100 dark:to-violet-300 sm:text-7xl"
        >
          Civitech Global
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-4 text-lg text-slate-600 dark:text-slate-400 sm:text-xl"
        >
          Meet the teams, roles, and career paths that power our mission.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
            <Users className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            {teamCount} Teams
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
            <Briefcase className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            {roleCount} Roles
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
