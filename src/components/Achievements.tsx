import { motion } from 'framer-motion';
import { GitMerge, ExternalLink } from 'lucide-react';

const achievements = [
  {
    project: "Pandas",
    repo: "pandas-dev/pandas",
    stars: "48k+",
    description: "Improved code quality and API documentation consistency in the core Series accessors.",
    pr: "#63457",
    prUrl: "https://github.com/pandas-dev/pandas/pull/63457",
    impact: "Enhanced usability for millions of data scientists relying on Pandas documentation."
  },
  {
    project: "Mole",
    repo: "tw93/Mole",
    stars: "2k+",
    description: "Implemented purge support for modern frameworks — Angular, SvelteKit, and Astro.",
    pr: "#286",
    prUrl: "https://github.com/tw93/Mole/pull/286",
    impact: "Enabled thousands of developers to reclaim disk space from previously unsupported project types."
  },
  {
    project: "GlobalSpeed",
    repo: "polywock/globalSpeed",
    stars: "1k+",
    description: "Implemented \"Force Background Play\" to bypass Visibility API checks, allowing video playback in background tabs.",
    pr: "#806",
    prUrl: "https://github.com/polywock/globalSpeed/pull/806",
    impact: "Solved a key user frustration for thousands of users of this popular browser extension."
  },
  {
    project: "Monkeytype",
    repo: "monkeytypegame/monkeytype",
    stars: "18k+",
    description: "Decoupled event handlers from the central modal system to page controllers, resolving circular dependencies.",
    pr: "#7333",
    prUrl: "https://github.com/monkeytypegame/monkeytype/pull/7333",
    impact: "Improved code maintainability and stability for the world's most popular typing test."
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative bg-slate-50/50 dark:bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Impact</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Code accepted and merged into significant open-source projects used by millions.
          </p>
          <div className="w-20 h-1 bg-purple-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={index}
              className="group bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgb(168,85,247,0.12)] dark:hover:shadow-[0_8px_30px_rgb(192,132,252,0.12)] hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 p-3 bg-purple-50 dark:bg-purple-500/10 rounded-xl border border-purple-200 dark:border-purple-500/20 group-hover:scale-110 transition-transform">
                    <GitMerge className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.project}
                    </h3>
                    <p className="text-sm text-muted font-mono">{item.repo} · ★ {item.stars}</p>
                  </div>
                </div>
                <a
                  href={item.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors flex items-center gap-1.5"
                >
                  <GitMerge className="w-3 h-3" />
                  PR {item.pr}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-foreground/80 mb-3 leading-relaxed">
                {item.description}
              </p>
              <p className="text-sm text-muted italic">
                {item.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
