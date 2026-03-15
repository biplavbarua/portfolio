import { motion } from 'framer-motion';
import { Mail, MapPin, GraduationCap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block max-w-md mx-auto w-full"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/20 mix-blend-overlay z-10" />
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1000&auto=format&fit=crop" 
                alt="Developer working" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative elements behind image */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-emerald-500/20 rounded-2xl" />
            <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Bio & CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a passionate software developer and an open-source enthusiast currently pursuing my Bachelor of Technology. I love building tools that solve real-world problems and creating seamless user experiences.
              </p>
              <p>
                My journey in tech has been driven by a constant curiosity to learn new frameworks, deep-dive into complex systems, and contribute back to the community that has taught me so much.
              </p>
              
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-3 text-foreground">
                  <GraduationCap className="w-5 h-5 text-emerald-500" />
                  <span>3rd Year B.Tech Student at Lovely Professional University</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Let's build something together</h3>
                  <p className="text-sm text-muted-foreground">
                    Open to internship and part-time opportunities.
                  </p>
                </div>
                
                <a
                  href="mailto:baruabiplav16@yahoo.in"
                  className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors duration-300 w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5" />
                  Say Hello
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
