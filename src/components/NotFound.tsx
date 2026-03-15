import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Oops! It seems you've wandered into uncharted territory. The page you are looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors w-full sm:w-auto justify-center group"
            >
              <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-accent transition-colors w-full sm:w-auto justify-center group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
