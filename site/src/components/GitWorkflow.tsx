import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  Upload,
  RefreshCw,
  ShieldAlert,
  CheckCircle2,
} from 'lucide-react';
import TopBar from './TopBar';
import Footer from './Footer';
import CodeBlock from './CodeBlock';

const steps = [
  {
    icon: GitBranch,
    title: 'Create a branch',
    text: 'Never work directly on main. Start a focused branch from the latest main.',
    code: 'git checkout main\ngit pull origin main\ngit checkout -b feature/123-add-login-page',
  },
  {
    icon: GitCommit,
    title: 'Make commits',
    text: 'Commit small, logical changes with clear messages that explain why, not just what.',
    code: 'git add .\ngit commit -m "feat(auth): add login form with email validation"',
  },
  {
    icon: Upload,
    title: 'Push the branch',
    text: 'Push your branch to the remote so others can see it and CI can run.',
    code: 'git push -u origin feature/123-add-login-page',
  },
  {
    icon: GitPullRequest,
    title: 'Open a Pull Request',
    text: 'Describe what changed, why, and how to test it. Request review from the right people.',
    code: '# Open the PR on GitHub and fill the template.',
  },
  {
    icon: GitMerge,
    title: 'Merge after review',
    text: 'Only merge when approvals are in, checks pass, and conflicts are resolved.',
    code: '# Use the GitHub "Merge pull request" button, then delete the branch.',
  },
];

const branchTypes = [
  { prefix: 'feature/', example: 'feature/42-dark-mode', use: 'New functionality or enhancement' },
  { prefix: 'bugfix/', example: 'bugfix/42-fix-nav-scroll', use: 'Non-critical bug fixes' },
  { prefix: 'hotfix/', example: 'hotfix/42-patch-payment', use: 'Critical production fixes' },
  { prefix: 'docs/', example: 'docs/42-readme-update', use: 'Documentation only' },
  { prefix: 'refactor/', example: 'refactor/42-simplify-api', use: 'Code cleanup without behavior change' },
  { prefix: 'chore/', example: 'chore/42-update-deps', use: 'Maintenance, tooling, dependencies' },
];

const commitTypes = [
  { type: 'feat', desc: 'A new feature' },
  { type: 'fix', desc: 'A bug fix' },
  { type: 'docs', desc: 'Documentation changes' },
  { type: 'style', desc: 'Formatting, missing semicolons, etc.' },
  { type: 'refactor', desc: 'Code change that neither fixes a bug nor adds a feature' },
  { type: 'perf', desc: 'Performance improvement' },
  { type: 'test', desc: 'Adding or correcting tests' },
  { type: 'chore', desc: 'Build process or auxiliary tool changes' },
];

const bestPractices = [
  'Never commit directly to main.',
  'Keep branches focused on one task or one feature.',
  'Pull main into your branch regularly to avoid giant merge conflicts.',
  'Write commit messages in the imperative: "Add login" not "Added login".',
  'Open Pull Requests while they are still small and reviewable.',
  'Always link PRs to issues or tickets when possible.',
  'Delete branches after merging to keep the repo clean.',
  'Run local checks (lint, typecheck, build) before pushing when available.',
  'Assign at least one reviewer to every Pull Request.',
  'Wait for at least one approval before merging.',
  'Never merge your own Pull Request.',
];

export default function GitWorkflow() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <TopBar />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
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

          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Git Workflow Guide
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              How we collaborate on code at Civitech Global: fork, branch, commit, push, and merge
              the right way.
            </p>
          </div>
        </motion.div>

        {/* Clone / fork */}
        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <GitBranch className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            Fork or clone the repository
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">For external contributors</h3>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                Fork the repo on GitHub, then clone your own copy and add the upstream remote.
              </p>
              <CodeBlock
                code={`# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/members-workflows-guidelines.git
cd members-workflows-guidelines

# 2. Add the original repo as "upstream"
git remote add upstream https://github.com/civitechglobal/members-workflows-guidelines.git
git remote -v`}
              />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">For team members</h3>
              <p className="mb-4 text-slate-600 dark:text-slate-400">
                Clone the organization repo directly. You will create branches and open Pull Requests on it.
              </p>
              <CodeBlock
                code={`git clone https://github.com/civitechglobal/members-workflows-guidelines.git
cd members-workflows-guidelines

# Verify the remote
git remote -v`}
              />
            </div>
          </div>
        </section>

        {/* The workflow */}
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">The standard workflow</h2>
          <div className="relative space-y-6">
            <div className="absolute left-7 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-5"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
                    <Icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="mb-3 text-slate-600 dark:text-slate-400">{step.text}</p>
                    <CodeBlock code={step.code} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Branch naming */}
        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <ShieldAlert className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            Branch naming conventions
          </h2>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            A clear branch name tells everyone what the branch is about and makes history easy to read.
            Use the pattern: <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-sm dark:bg-slate-800">type/issue-id-short-description</code>.
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-semibold">Prefix</th>
                  <th className="px-4 py-3 font-semibold">Example</th>
                  <th className="px-4 py-3 font-semibold">When to use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {branchTypes.map((row) => (
                  <tr key={row.prefix}>
                    <td className="px-4 py-3 font-mono text-cyan-600 dark:text-cyan-400">{row.prefix}</td>
                    <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-400">{row.example}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Commit messages */}
        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <GitCommit className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            Commit messages
          </h2>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            We follow a simplified version of{' '}
            <a
              href="https://www.conventionalcommits.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline dark:text-cyan-400"
            >
              Conventional Commits
            </a>
            . The format is:
          </p>
          <CodeBlock code="type(scope): short description in imperative mood\n\nOptional longer explanation of what and why.\n\nCloses #123" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commitTypes.map((ct) => (
              <div
                key={ct.type}
                className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <code className="font-mono text-base font-bold text-cyan-600 dark:text-cyan-400">{ct.type}</code>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{ct.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pull Requests */}
        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <GitPullRequest className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            Pull Request etiquette
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <ul className="space-y-4">
              {[
                'Give the PR a clear title that matches the branch purpose.',
                'Explain what changed and why in the description.',
                'Add screenshots or GIFs for UI changes.',
                'Link related issues: “Closes #123”.',
                'Keep the diff small and focused; big changes are hard to review.',
                'Make sure CI checks pass before requesting review.',
                'Assign at least one reviewer before merging.',
                'Wait for at least one approval before merging.',
                'Never merge your own Pull Request.',
                'Use “Squash and merge” or regular merge depending on project rules.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Staying up to date */}
        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <RefreshCw className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            Keeping your branch up to date
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-3 text-slate-600 dark:text-slate-400">
                If you cloned the original repo directly:
              </p>
              <CodeBlock
                code={`git checkout main\ngit pull origin main\ngit checkout feature/123-add-login-page\ngit merge main`}
              />
            </div>
            <div>
              <p className="mb-3 text-slate-600 dark:text-slate-400">
                If you forked the repo:
              </p>
              <CodeBlock
                code={`git checkout main\ngit pull upstream main\ngit push origin main\ngit checkout feature/123-add-login-page\ngit merge main`}
              />
            </div>
          </div>
        </section>

        {/* Best practices */}
        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            <CheckCircle2 className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            Best practices
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {bestPractices.map((practice) => (
              <div
                key={practice}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span className="text-slate-700 dark:text-slate-300">{practice}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick reference */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Quick reference</h2>
          <CodeBlock
            language="cheat-sheet"
            code={`# Start work
git checkout main && git pull origin main
git checkout -b feature/123-short-name

# Save progress
git add .
git commit -m "feat(scope): description"

# Share your branch
git push -u origin feature/123-short-name

# Update your branch with latest main
git checkout main && git pull origin main
git checkout feature/123-short-name
git merge main

# Clean up after merge
git branch -d feature/123-short-name
git push origin --delete feature/123-short-name`}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
