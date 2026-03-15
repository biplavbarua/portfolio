import { motion } from 'framer-motion';
import { Monitor, Code2, Terminal, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';

// Data for the uses page
const USES_DATA = {
  hardware: [
    {
      name: 'MacBook Air M1 13"',
      description: 'My main laptop or working machine. Silent, fast, and incredible battery life.',
      url: 'https://support.apple.com/kb/SP825',
    },
    {
      name: 'LG 27UN850-W 27" 4K Monitor',
      description: 'Crisp 4K resolution, great colors, and USB-C connectivity.',
      url: 'https://www.lg.com/us/monitors/lg-27un850-w-4k-uhd-monitor',
    },
    {
      name: 'Keychron K2 Wireless Mechanical Keyboard',
      description: 'Tactile typing experience with a compact 75% layout.',
      url: 'https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard',
    },
    {
      name: 'Logitech MX Master 3S',
      description: 'The ultimate productivity mouse. Ergonomic and highly customizable.',
      url: 'https://www.logitech.com/en-us/products/mice/mx-master-3s.html',
    },
    {
      name: 'Sony WH-1000XM4',
      description: 'Industry-leading noise cancellation for deep work sessions.',
      url: 'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-b',
    }
  ],
  development: [
    {
      name: 'Visual Studio Code',
      description: 'My editor of choice. Fast, extensible, and backed by a massive ecosystem.',
      url: 'https://code.visualstudio.com/',
    },
    {
      name: 'One Dark Pro Theme',
      description: 'A dark syntax theme that\'s easy on the eyes for late-night coding.',
      url: 'https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme',
    },
    {
      name: 'Fira Code',
      description: 'Monospaced font with programming ligatures. Highly legible.',
      url: 'https://github.com/tonsky/FiraCode',
    },
    {
      name: 'iTerm2 + Oh My Zsh',
      description: 'My terminal setup. Much more customizable than the default macOS Terminal.',
      url: 'https://iterm2.com/',
    },
    {
      name: 'Brave Browser',
      description: 'Fast, privacy-focused browser with great DevTools built-in.',
      url: 'https://brave.com/',
    }
  ],
  services: [
    {
      name: 'Vercel',
      description: 'The best platform to deploy frontend applications and static sites.',
      url: 'https://vercel.com/',
    },
    {
      name: 'GitHub',
      description: 'Where all my code lives.',
      url: 'https://github.com/',
    },
    {
      name: 'Namecheap',
      description: 'Where I register and manage my domains.',
      url: 'https://www.namecheap.com/',
    },
    {
      name: 'Notion',
      description: 'For all my note-taking, project management, and life organization.',
      url: 'https://www.notion.so/',
    }
  ]
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

interface SectionProps {
  title: string;
  icon: ReactNode;
  items: Array<{ name: string; description: string; url: string }>;
}

const CategorySection = ({ title, icon, items }: SectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <motion.div variants={itemVariants} className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <motion.a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="block p-6 rounded-2xl bg-card border border-border/50 hover:border-emerald-500/30 transition-colors group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                {item.name}
              </h3>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 flex-shrink-0 mt-1" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export const Uses = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">Use</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A somewhat comprehensive list of tools, apps, and hardware I use on a daily basis to design and build software.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-4">
          <CategorySection 
            title="Hardware & Peripherals" 
            icon={<Monitor className="w-6 h-6" />} 
            items={USES_DATA.hardware} 
          />
          
          <CategorySection 
            title="Development & Design" 
            icon={<Code2 className="w-6 h-6" />} 
            items={USES_DATA.development} 
          />
          
          <CategorySection 
            title="Services & Utilities" 
            icon={<Terminal className="w-6 h-6" />} 
            items={USES_DATA.services} 
          />
        </div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            This page was inspired by <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">uses.tech</a>.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};
