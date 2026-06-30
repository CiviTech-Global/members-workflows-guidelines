import { motion } from 'framer-motion';
import type { RoadmapLevel } from '../data/teams';

interface RoadmapProps {
  levels: RoadmapLevel[];
}

export default function Roadmap({ levels }: RoadmapProps) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-violet-300 to-transparent dark:from-cyan-500/50 dark:via-violet-500/30" />
      <div className="space-y-6">
        {levels.map((level, index) => (
          <motion.div
            key={level.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex gap-5"
          >
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-cyan-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-400">
              {index + 1}
            </div>
            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{level.title}</h4>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {level.timeframe}
                </span>
              </div>
              <p className="mb-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">{level.level}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{level.focus}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
