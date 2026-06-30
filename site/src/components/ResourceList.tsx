import { motion } from 'framer-motion';
import type { Resource } from '../data/teams';
import { ExternalLink, BookOpen } from 'lucide-react';

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource, index) => (
        <motion.a
          key={resource.url}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-cyan-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-cyan-500/30 dark:hover:bg-slate-900"
        >
          <div className="mb-3 flex items-start justify-between">
            <BookOpen className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <ExternalLink className="h-4 w-4 text-slate-400 transition-colors group-hover:text-cyan-600 dark:text-slate-500 dark:group-hover:text-cyan-400" />
          </div>
          <h4 className="mb-2 text-base font-semibold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-slate-100 dark:group-hover:text-cyan-300">
            {resource.title}
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{resource.description}</p>
        </motion.a>
      ))}
    </div>
  );
}
