import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Folder, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

type Category = 'All' | 'Data Science' | 'Web / Full-Stack';

const projects = [
  {
    title: "Nifty-50 Stock Market Analysis",
    description: "A comprehensive predictive analysis of the Nifty 50 stock market index, leveraging Machine Learning and Deep Learning to forecast trends, segment risks, and generate insights.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
    tags: ["Python", "Jupyter", "ML/DL", "Pandas", "Scikit-learn"],
    github: "https://github.com/biplavbarua/Nifty-50-Stock-Market-Analysis",
    category: "Data Science"
  },
  {
    title: "Air Quality & Public Health Analysis",
    description: "Research project analyzing the impact of environmental air quality factors on public health outcomes using statistical methods and data visualization.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
    tags: ["Python", "Jupyter", "Pandas", "Matplotlib", "Research"],
    github: "https://github.com/biplavbarua",
    category: "Data Science"
  },
  {
    title: "Power BI Dashboard — Space Exploration",
    description: "An interactive Power BI dashboard analyzing global space exploration trends, financial investments, and technological shifts over the last two decades.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    tags: ["Power BI", "Data Visualization", "Dashboard Design"],
    github: "https://github.com/biplavbarua/PowerBI-Dashboard",
    category: "Data Science"
  },
  {
    title: "BeautyAI",
    description: "An AI-powered web application that evaluates and analyzes human beauty based on various aspects such as skin tone, facial features, and overall symmetry.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    tags: ["TypeScript", "AI", "Web App", "Computer Vision"],
    github: "https://github.com/biplavbarua/BeautyAI",
    category: "Web / Full-Stack"
  },
  {
    title: "Event Manager Pro",
    description: "An advanced event management system built as a CipherSchools capstone, utilizing priority queues, binary search, and modern web technologies.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600",
    tags: ["TypeScript", "React 18", "Convex", "DSA"],
    github: "https://github.com/biplavbarua/EventReminder_DSA",
    category: "Web / Full-Stack"
  }
];

export const Projects = () => {
  const [filter, setFilter] = useState<Category>('All');
  
  const categories: Category[] = ['All', 'Data Science', 'Web / Full-Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  filter === cat 
                    ? "bg-blue-600 text-white dark:bg-blue-500" 
                    : "bg-slate-100 dark:bg-white/5 text-muted hover:text-foreground hover:bg-slate-200 dark:hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgb(168,85,247,0.12)] dark:hover:shadow-[0_8px_30px_rgb(192,132,252,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <Folder className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-muted">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-foreground transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-white/5 text-foreground/70 border border-slate-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
