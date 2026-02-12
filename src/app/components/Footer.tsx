import { Heart, Zap } from 'lucide-react';
import { portfolioData } from '../config/portfolio-data';

export function Footer() {
  const { footer, name } = portfolioData;

  return (
    <footer className="bg-black border-t-2 border-[#ff006e] py-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff006e]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#00f0ff]" />
            <span className="text-[#ff006e] font-bold text-lg uppercase tracking-wider">
              {name}
            </span>
            <Zap className="w-5 h-5 text-[#00f0ff]" />
          </div>
          
          <p className="flex items-center justify-center gap-2 text-white/60 mb-2">
            {footer.text}
            <Heart className="w-4 h-4 text-[#ff006e] fill-current animate-pulse" />
          </p>
          
          <p className="text-white/40 text-sm uppercase tracking-widest">
            © {footer.year} - Portfolio BTS SIO
          </p>
          
          {/* Decorative line */}
          <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent mx-auto mt-6" />
          
          <p className="text-white/30 text-xs mt-4 uppercase tracking-wide">
            [ Retro Neon Theme - Style Années 80 ]
          </p>
        </div>
      </div>
    </footer>
  );
}
