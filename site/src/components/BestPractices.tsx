import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

interface BestPracticesProps {
  practices: string[];
}

export default function BestPractices({ practices }: BestPracticesProps) {
  return (
    <section>
      <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-100">
        <Award className="h-5 w-5 text-cyan-400" />
        Best Practices
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {practices.map((practice, index) => (
          <motion.div
            key={practice}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            <span className="text-sm text-slate-300">{practice}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
