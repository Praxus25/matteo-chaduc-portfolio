import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, Target, Award, Folder } from 'lucide-react';
import { portfolioData } from '../config/portfolio-data';

export function Alternance() {
  const { alternance } = portfolioData;

  return (
    <section id="alternance" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 retro-grid opacity-20" />

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
            <Briefcase className="w-8 h-8 neon-text-purple" />
            <h2 className="text-4xl lg:text-5xl font-bold neon-text-purple uppercase tracking-wider">
              {alternance.title}
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#8b00ff] to-transparent mx-auto" />
        </motion.div>

        {/* Entreprise Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-8 neon-border-pink">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden neon-border-cyan">
                <img 
                  src={alternance.entreprise.logo} 
                  alt={alternance.entreprise.nom}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold neon-text-pink mb-2">
                  {alternance.entreprise.nom}
                </h3>
                <p className="text-white/70 mb-4">{alternance.entreprise.secteur}</p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00f0ff]" />
                    <span className="text-white/80">{alternance.entreprise.localisation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00f0ff]" />
                    <span className="text-white/80">
                      {alternance.periode.debut} - {alternance.periode.fin}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="px-6 py-3 bg-black/50 neon-border-cyan">
                  <div className="text-sm text-[#00f0ff] mb-1 uppercase">Poste</div>
                  <div className="text-white font-bold">{alternance.poste}</div>
                </div>
                <div className="mt-4 text-xs text-white/60">
                  {alternance.periode.rythme}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Missions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-[#ff006e]" />
            <h3 className="text-2xl font-bold text-[#ff006e] uppercase">Missions principales</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {alternance.missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-6 border-2 border-transparent hover:border-[#ff006e] hover:shadow-[0_0_30px_rgba(255,0,110,0.2)] transition-all group"
              >
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                  {mission.titre}
                </h4>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {mission.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mission.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black/50 border border-[#ff006e]/30 text-[#ff006e] text-xs uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compétences et Projets */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Compétences acquises */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-6 neon-border-cyan h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-[#00f0ff]" />
                <h3 className="text-xl font-bold text-[#00f0ff] uppercase">Compétences acquises</h3>
              </div>
              <div className="space-y-3">
                {alternance.competencesAcquises.map((competence, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-black/50 border-l-4 border-[#00f0ff] hover:bg-black/70 transition-all group"
                  >
                    <div className="w-2 h-2 bg-[#00f0ff] rounded-full group-hover:shadow-[0_0_10px_#00f0ff] transition-all" />
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      {competence}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projets réalisés */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-6 neon-border-purple h-full">
              <div className="flex items-center gap-3 mb-6">
                <Folder className="w-6 h-6 text-[#8b00ff]" />
                <h3 className="text-xl font-bold text-[#8b00ff] uppercase">Projets réalisés</h3>
              </div>
              <div className="space-y-4">
                {alternance.projetsRealises.map((projet, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-black/50 border border-[#8b00ff]/30 hover:border-[#8b00ff] hover:shadow-[0_0_20px_rgba(139,0,255,0.2)] transition-all"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">
                      {projet.nom}
                    </h4>
                    <p className="text-white/70 text-sm mb-3">
                      {projet.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#8b00ff] uppercase tracking-wide">
                        {projet.role}
                      </span>
                      <span className="text-white/50">
                        Durée : {projet.duree}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
