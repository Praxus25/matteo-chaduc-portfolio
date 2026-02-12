import { motion } from 'motion/react';
import { ChevronDown, Download, Zap } from 'lucide-react';
import { portfolioData } from '../config/portfolio-data';

export function Hero() {
  const { hero, name, title, tagline } = portfolioData;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 retro-grid"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff006e]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#00f0ff] text-lg mb-4 uppercase tracking-widest"
          >
            [ {hero.greeting} ]
          </motion.p>

          {/* Name with glitch effect */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 glitch"
          >
            <span className="neon-text-pink neon-pulse">{name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl neon-text-cyan mb-2"
          >
            {title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white/70 text-lg mb-8 uppercase tracking-wide"
          >
            {tagline}
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-64 h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent mx-auto mb-8"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-white/60 text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href={hero.ctaLink}
              onClick={(e) => handleScroll(e, hero.ctaLink)}
              className="group px-8 py-4 bg-transparent neon-border-pink text-[#ff006e] hover:bg-[#ff006e] hover:text-black rounded-none transition-all font-bold uppercase tracking-wider inline-flex items-center gap-3 relative overflow-hidden"
            >
              <Zap className="w-5 h-5" />
              {hero.ctaText}
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            
            <a
              href={hero.cvLink}
              download
              className="group px-8 py-4 bg-transparent neon-border-cyan text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black rounded-none transition-all font-bold uppercase tracking-wider inline-flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              {hero.cvText}
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-[#ff006e]" />
          </motion.div>
        </div>
      </div>

      {/* Scanlines effect */}
      <div className="scanlines absolute inset-0 pointer-events-none" />
    </section>
  );
}
