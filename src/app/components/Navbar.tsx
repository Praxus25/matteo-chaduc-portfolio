import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { portfolioData } from '../config/portfolio-data';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Veille Tech', href: '#veille' },
    { name: 'BTS SIO', href: '#bts' },
    { name: 'Alternance', href: '#alternance' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Épreuves', href: '#epreuves' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b-2 border-[#ff006e] shadow-[0_0_20px_rgba(255,0,110,0.5)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="font-bold text-xl flex items-center gap-2 neon-text-pink hover:neon-text-cyan transition-all glitch"
          >
            <Zap className="w-5 h-5" />
            {portfolioData.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-4 py-2 text-white/80 hover:text-[#00f0ff] transition-all font-medium uppercase text-sm tracking-wider relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff006e] to-[#00f0ff] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_currentColor]"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors neon-border-pink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#ff006e]" />
            ) : (
              <Menu className="w-6 h-6 text-[#ff006e]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t-2 border-[#ff006e]/30 bg-black/95 backdrop-blur-lg">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block px-4 py-2 text-white/80 hover:text-[#00f0ff] rounded-lg transition-all uppercase text-sm tracking-wider"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#ff006e] rounded-full"></span>
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
