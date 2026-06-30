import { motion } from 'framer-motion';
import type { Interaction } from '../data/teams';
import { Users } from 'lucide-react';

interface InteractionListProps {
  interactions: Interaction[];
}

export default function InteractionList({ interactions }: InteractionListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {interactions.map((interaction, index) => (
        <motion.div
          key={interaction.role}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div className="mb-2 flex items-center gap-2">
            <Users className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">{interaction.role}</h4>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{interaction.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
