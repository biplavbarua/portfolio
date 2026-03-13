import { motion } from 'framer-motion';
import { Award, Code2, Database, Layout, Terminal, Bot, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    skills: ["Python", "SQL", "C", "C++", "Java"]
  },
  {
    title: "Data Science & ML",
    icon: <Bot className="w-6 h-6 text-purple-500" />,
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "PySpark", "TensorFlow"]
  },
  {
    title: "BI & Analytics",
    icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
    skills: ["Power BI", "Tableau", "Excel", "Google Analytics"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-purple-500" />,
    skills: ["React.js", "TypeScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6 text-blue-500" />,
    skills: ["Node.js", "MySQL", "MongoDB", "Convex"]
  },
  {
    title: "Tools & Platform",
    icon: <Terminal className="w-6 h-6 text-purple-500" />,
    skills: ["Git & GitHub", "Docker", "WordPress", "Jupyter", "LaTeX"]
  }
];

const certificates = [
  {
    title: "Data Structures & Algorithms",
    issuer: "CipherSchools",
    icon: <Award className="w-5 h-5 text-blue-500" />
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    icon: <Award className="w-5 h-5 text-purple-500" />
  },
  {
    title: "Computer Networking",
    issuer: "Coursera",
    icon: <Award className="w-5 h-5 text-blue-500" />
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Arsenal & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Accolades</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Skills Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-6 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] dark:hover:shadow-[0_8px_30px_rgb(96,165,250,0.12)] transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-50 dark:bg-black/50 rounded-lg border border-slate-200 dark:border-white/5">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-white/5 text-foreground/80 rounded-full text-sm border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
            <div className="flex flex-col gap-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 dark:from-purple-500/10 to-transparent border border-purple-200 dark:border-purple-500/20 rounded-2xl p-6 hover:border-purple-300 hover:shadow-[0_8px_30px_rgb(168,85,247,0.12)] dark:hover:shadow-[0_8px_30px_rgb(192,132,252,0.12)] hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start relative overflow-hidden group shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="shrink-0 p-3 bg-white dark:bg-black/50 rounded-xl border border-purple-200 dark:border-purple-500/20 relative z-10">
                    {cert.icon}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-purple-600/70 dark:text-purple-400/70 text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Soft decorative elements */}
            <div className="mt-12 relative h-48 rounded-2xl border border-border flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-black/20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
              <p className="relative z-10 text-muted text-sm font-medium tracking-widest uppercase">
                Continuous Learner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
