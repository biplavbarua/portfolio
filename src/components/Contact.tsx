import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-foreground">Let's connect!</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you have a question, want to discuss a project, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:baruabiplav16@yahoo.in" className="hover:text-emerald-500 transition-colors">baruabiplav16@yahoo.in</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 bg-teal-500/10 dark:bg-teal-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Location</h4>
                  <span>India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form using Web3Forms */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 transition-colors duration-500 pointer-events-none" />
              
              {/* Replace with your Access Key */}
              <input type="hidden" name="access_key" value="945a51ce-8553-4a16-95bc-a6006b9c0d57" />
              
              <div className="space-y-2 relative z-10">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2 relative z-10">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all text-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2 relative z-10">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all resize-none text-foreground"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Optional: Add a honeypot field to prevent spam */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all relative z-10"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
