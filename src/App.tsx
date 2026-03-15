import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { ParticleBackground } from './components/ParticleBackground';

// Lazy load below-the-fold components and pages
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Achievements = lazy(() => import('./components/Achievements').then(module => ({ default: module.Achievements })));
const Certifications = lazy(() => import('./components/Certifications').then(module => ({ default: module.Certifications })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const NotFound = lazy(() => import('./components/NotFound').then(module => ({ default: module.NotFound })));
const Uses = lazy(() => import('./components/Uses').then(module => ({ default: module.Uses })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 rounded-full border-b-2 border-emerald-500 animate-spin"></div>
  </div>
);

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.25, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const Home = () => (
  <div className="pt-16">
    <Hero />
    <Suspense fallback={<LoadingSpinner />}>
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <Skills />
      <Contact />
    </Suspense>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative min-h-screen bg-transparent text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/uses" element={<PageWrapper><Uses /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
