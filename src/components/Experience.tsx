import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Summer Trainee — Data Structures & Algorithms",
    company: "CipherSchools India",
    location: "India (Remote)",
    period: "Jul 2025",
    description: [
      "Mastered advanced DSA concepts including Graphs, Hash Tables, and Backtracking algorithms.",
      "Solved 70+ DSA problems with 75% accuracy across competitive programming platforms.",
      "Developed an Event Management App as an end-of-training capstone project."
    ],
    skills: ["DSA", "Graphs", "Hash Tables", "Backtracking", "React", "Convex"]
  },
  {
    title: "AI Content Writer",
    company: "Tech-Mero Web-Services Private Limited",
    location: "India (Remote)",
    period: "Dec 2023 — May 2024",
    description: [
      "Published 50+ SEO-optimized technical articles using WordPress and AI tools (ChatGPT, Google Bard).",
      "Increased CPM by 80% through data-driven performance tracking via Google Analytics.",
      "Managed editorial calendar and maintained consistent publishing cadence for the tech blog."
    ],
    skills: ["WordPress", "SEO", "Google Analytics", "Content Strategy", "AI Tools"]
  },
  {
    title: "Open Source Contributor",
    company: "GitHub",
    location: "Global",
    period: "Ongoing",
    description: [
      "Contributed to pandas (48k+ ★): Improved Series accessors documentation and code quality — PR #63457 merged.",
      "Contributed to Mole (tw93/Mole): Implemented purge support for Angular, SvelteKit, and Astro frameworks — PR #286 merged.",
      "Contributed to GlobalSpeed (polywock): Implemented 'Force Background Play' feature for browser extension — PR #806 merged.",
      "Contributed to Monkeytype: Decoupled event handlers from modal system, resolving circular dependencies — PR #7333 merged."
    ],
    skills: ["TypeScript", "Python", "Open Source", "Git", "Code Review"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] dark:hover:shadow-[0_8px_30px_rgb(96,165,250,0.12)] hover:-translate-y-1 transition-all duration-300 group shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mt-1 font-medium">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2 text-sm text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-foreground/80">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
