import { motion } from 'motion/react';
import { GraduationCap, Code, Server, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../config/portfolio-data';

export function BtsSio() {
  const { btsSio } = portfolioData;

  return (
    <section id="bts" className="py-20 bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff006e] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#00f0ff] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 neon-text-pink" />
            <h2 className="text-4xl lg:text-5xl font-bold neon-text-pink uppercase tracking-wider">
              {btsSio.title}
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent mx-auto mb-6" />
          <p className="text-xl text-[#00f0ff] uppercase tracking-wide mb-4">
            {btsSio.subtitle}
          </p>
          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
            {btsSio.description.split('\n\n')[0]}
          </p>
        </motion.div>

        {/* Options SISR et SLAM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {btsSio.options.map((option, index) => {
            const isMyOption = option.name === btsSio.myOption;
            const Icon = option.name === 'SISR' ? Server : Code;
            
            return (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative p-8 bg-black/50 backdrop-blur-sm ${
                  isMyOption 
                    ? 'neon-border-cyan scale-105' 
                    : 'border-2 border-white/20'
                } transition-all hover:scale-105 group`}
              >
                {isMyOption && (
                  <div className="absolute -top-3 -right-3 px-4 py-1 bg-[#00f0ff] text-black font-bold text-sm uppercase tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                    Mon Option
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${isMyOption ? 'text-[#00f0ff]' : 'text-[#ff006e]'}`} />
                  <div>
                    <h3 className={`text-3xl font-bold ${isMyOption ? 'neon-text-cyan' : 'neon-text-pink'} uppercase`}>
                      {option.name}
                    </h3>
                    <p className="text-white/60 text-sm">{option.fullName}</p>
                  </div>
                </div>

                <div className="h-1 w-20 bg-gradient-to-r from-[#ff006e] to-[#00f0ff] mb-4" />

                <p className="text-white/80 mb-6 leading-relaxed">
                  {option.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-3">
                    Compétences clés :
                  </h4>
                  {option.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1 h-1 ${isMyOption ? 'bg-[#00f0ff]' : 'bg-[#ff006e]'} rounded-full`} />
                      <span className="text-white/70 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Compétences générales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0a0a0a] to-[#1a0a2e] p-8 neon-border-purple"
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-6 h-6 text-[#8b00ff]" />
            <h3 className="text-2xl font-bold text-[#8b00ff] uppercase">
              Compétences professionnelles du BTS SIO
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {btsSio.competences.map((competence, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-black/50 border border-[#8b00ff]/30 hover:border-[#8b00ff] hover:shadow-[0_0_15px_rgba(139,0,255,0.3)] transition-all group"
              >
                <CheckCircle2 className="w-5 h-5 text-[#8b00ff] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                  {competence}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scanlines */}
      <div className="scanlines absolute inset-0 pointer-events-none opacity-30" />
    </section>
  );
}
