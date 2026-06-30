import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-cyan-500 dark:border-slate-800"
      />
    </div>
  );
}
