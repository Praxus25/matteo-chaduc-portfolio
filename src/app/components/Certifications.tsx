import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../config/portfolio-data';

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00f0ff] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8b00ff] rounded-full blur-3xl" />
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
            <Award className="w-8 h-8 neon-text-green" />
            <h2 className="text-4xl lg:text-5xl font-bold neon-text-green uppercase tracking-wider">
              {certifications.title}
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {certifications.description}
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.liste.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-black/50 border-2 border-white/10 hover:border-[#00ff41] transition-all overflow-hidden relative"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a]">
                <img
                  src={cert.image}
                  alt={cert.nom}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#00ff41] text-black text-xs font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(0,255,65,0.5)]">
                  {cert.niveau}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00ff41] transition-colors">
                    {cert.nom}
                  </h3>
                </div>

                <p className="text-[#00ff41] text-sm mb-1">{cert.organisme}</p>
                <p className="text-white/50 text-xs mb-4 uppercase tracking-wide">{cert.date}</p>

                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Compétences */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.competences.map((comp, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-black/50 border border-[#00ff41]/30 text-[#00ff41] text-xs uppercase tracking-wide"
                    >
                      {comp}
                    </span>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00ff41]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-[#0a0a0a] to-[#1a0a2e] neon-border-green">
            <p className="text-white/80 mb-4">
              Je continue à me former régulièrement pour rester à jour avec les dernières technologies.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#00ff41] font-semibold">
              <Award className="w-5 h-5" />
              <span className="uppercase tracking-wide">Formation continue</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scanlines */}
      <div className="scanlines absolute inset-0 pointer-events-none opacity-20" />
    </section>
  );
}
