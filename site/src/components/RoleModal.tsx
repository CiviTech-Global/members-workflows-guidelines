import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, BookOpen, Route, Handshake } from 'lucide-react';
import type { Role, Team } from '../data/teams';
import Roadmap from './Roadmap';
import InteractionList from './InteractionList';
import ResourceList from './ResourceList';
import BestPractices from './BestPractices';

interface RoleModalProps {
  role: Role;
  team: Team;
  onClose: () => void;
}

type TabId = 'overview' | 'roadmap' | 'interactions' | 'resources';

const tabs: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: 'overview', label: 'Overview', icon: Target },
  { id: 'roadmap', label: 'Roadmap', icon: Route },
  { id: 'interactions', label: 'Daily Interactions', icon: Handshake },
  { id: 'resources', label: 'Resources', icon: BookOpen },
];

export default function RoleModal({ role, team, onClose }: RoleModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
      >
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between border-b border-slate-800 bg-slate-900/50 p-6">
          <div>
            <p className={`mb-1 text-sm font-medium ${team.color}`}>{team.name}</p>
            <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">{role.title}</h2>
            <p className="mt-2 max-w-2xl text-slate-400">{role.summary}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="shrink-0 border-b border-slate-800 bg-slate-900/50 px-6">
          <div className="flex gap-2 overflow-x-auto py-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-slate-50' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-slate-800"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <section>
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-100">
                      <Target className="h-5 w-5 text-cyan-400" />
                      Key Responsibilities
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {role.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3 text-sm text-slate-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-slate-100">Core Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-slate-100">Common Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {role.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-lg border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>

                  <BestPractices practices={role.bestPractices} />
                </div>
              )}

              {activeTab === 'roadmap' && <Roadmap levels={role.roadmap} />}

              {activeTab === 'interactions' && <InteractionList interactions={role.interactions} />}

              {activeTab === 'resources' && <ResourceList resources={role.resources} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
