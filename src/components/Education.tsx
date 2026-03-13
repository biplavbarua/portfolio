import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    period: "Aug 2024 — Present",
    highlights: [
      "Current CGPA: 7.15",
      "Focusing on Data Structures & Algorithms, Machine Learning, and Software Engineering.",
      "S1 Category Student — ranked in the Top 50% of the cohort."
    ]
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    period: "Apr 2020 — Mar 2023",
    highlights: [
      "Graduated with CGPA: 8.14",
      "Built a strong foundation in programming, databases, and computer networking.",
      "Event Coordinator for 'One World' cultural fest at LPU."
    ]
  }
];

export const Education = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-white/[0.02]">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Education</span> Journey
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(168,85,247,0.12)] dark:hover:shadow-[0_8px_30px_rgb(192,132,252,0.12)] transition-all duration-300 relative group overflow-hidden shadow-sm"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 dark:from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-200 dark:border-white/10 flex items-center justify-center mb-6 pt-1 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 -mt-1" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                  {edu.degree}
                </h3>
                
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                  {edu.school}
                </p>

                <div className="flex flex-col gap-2 mb-6 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>

                <ul className="space-y-3">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-foreground/80">
                      <Award className="w-5 h-5 mr-3 text-purple-500/70 dark:text-purple-400/70 shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
