import { motion } from 'motion/react';
import { BookOpen, FileText, Code2, Trophy, CheckCircle } from 'lucide-react';
import { portfolioData } from '../config/portfolio-data';

export function Epreuves() {
  const { epreuves } = portfolioData;

  return (
    <section id="epreuves" className="py-20 bg-black relative overflow-hidden">
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
            <BookOpen className="w-8 h-8 neon-text-pink" />
            <h2 className="text-4xl lg:text-5xl font-bold neon-text-pink uppercase tracking-wider">
              {epreuves.title}
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {epreuves.description}
          </p>
        </motion.div>

        {/* Épreuves Professionnelles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-6 h-6 text-[#ff006e]" />
            <h3 className="text-2xl font-bold text-[#ff006e] uppercase">
              Épreuves Professionnelles
            </h3>
          </div>

          <div className="space-y-8">
            {epreuves.epreuvesProfessionnelles.map((epreuve, index) => (
              <motion.div
                key={epreuve.code}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] neon-border-cyan overflow-hidden"
              >
                {/* Header */}
                <div className="bg-black/50 p-6 border-b-2 border-[#00f0ff]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="px-4 py-2 bg-[#00f0ff] text-black font-bold text-xl">
                        {epreuve.code}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {epreuve.nom}
                        </h4>
                        <p className="text-white/60 text-sm uppercase tracking-wide">
                          {epreuve.modalites}
                        </p>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-[#ff006e]/20 border border-[#ff006e] text-center">
                      <div className="text-xs text-white/60 uppercase">Coefficient</div>
                      <div className="text-2xl font-bold text-[#ff006e]">{epreuve.coef}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <p className="text-white/80 leading-relaxed">
                    {epreuve.description}
                  </p>

                  {/* Compétences évaluées */}
                  <div>
                    <h5 className="text-sm font-semibold text-[#00f0ff] mb-3 uppercase tracking-wide">
                      Compétences évaluées :
                    </h5>
                    <div className="grid md:grid-cols-3 gap-3">
                      {epreuve.competences.map((comp, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-3 bg-black/50 border-l-2 border-[#00f0ff]"
                        >
                          <CheckCircle className="w-4 h-4 text-[#00f0ff] flex-shrink-0 mt-0.5" />
                          <span className="text-white/70 text-sm">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Situations ou Projets */}
                  {epreuve.situations && (
                    <div>
                      <h5 className="text-sm font-semibold text-[#ff006e] mb-3 uppercase tracking-wide flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Situations professionnelles :
                      </h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        {epreuve.situations.map((situation, i) => (
                          <div
                            key={i}
                            className="p-4 bg-black/50 border border-[#ff006e]/30 hover:border-[#ff006e] transition-all"
                          >
                            <h6 className="font-semibold text-white mb-2">
                              {situation.titre}
                            </h6>
                            <p className="text-white/70 text-sm mb-2">
                              {situation.description}
                            </p>
                            <p className="text-xs text-white/50">
                              <span className="text-[#ff006e]">Contexte : </span>
                              {situation.contexte}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {epreuve.projets && (
                    <div>
                      <h5 className="text-sm font-semibold text-[#ff006e] mb-3 uppercase tracking-wide flex items-center gap-2">
                        <Code2 className="w-4 h-4" />
                        Projets présentés :
                      </h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        {epreuve.projets.map((projet, i) => (
                          <div
                            key={i}
                            className="p-4 bg-black/50 border border-[#ff006e]/30 hover:border-[#ff006e] hover:shadow-[0_0_20px_rgba(255,0,110,0.2)] transition-all"
                          >
                            <h6 className="font-semibold text-white mb-2">
                              {projet.nom}
                            </h6>
                            <p className="text-white/70 text-sm mb-3">
                              {projet.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {projet.technologies.map((tech, j) => (
                                <span
                                  key={j}
                                  className="px-2 py-1 bg-black border border-[#ff006e]/50 text-[#ff006e] text-xs uppercase"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex justify-between text-xs text-white/50">
                              <span>Durée : {projet.duree}</span>
                              <span>{projet.contexte}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Épreuves Générales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-[#8b00ff]" />
            <h3 className="text-2xl font-bold text-[#8b00ff] uppercase">
              Épreuves Générales
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {epreuves.epreuvesGenerales.map((epreuve, index) => (
              <motion.div
                key={epreuve.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-6 border-2 border-[#8b00ff]/30 hover:border-[#8b00ff] hover:shadow-[0_0_20px_rgba(139,0,255,0.2)] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 bg-[#8b00ff] text-black font-bold">
                    {epreuve.code}
                  </div>
                  <div className="text-[#8b00ff] font-bold">
                    Coef. {epreuve.coef}
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {epreuve.nom}
                </h4>
                <p className="text-white/70 text-sm">
                  {epreuve.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tableau de synthèse des compétences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-8 neon-border-pink">
            <h3 className="text-2xl font-bold text-[#ff006e] uppercase mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6" />
              Tableau de synthèse des compétences
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#ff006e]">
                    <th className="text-left text-white/80 uppercase text-sm tracking-wide py-3 px-4">
                      Compétence
                    </th>
                    <th className="text-left text-white/80 uppercase text-sm tracking-wide py-3 px-4">
                      Niveau
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {epreuves.tableauSyntheseCompetences.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3 px-4 text-white/80">
                        {item.competence}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 text-sm font-semibold uppercase tracking-wide ${
                          item.niveau === 'Maîtrisé' 
                            ? 'bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]'
                            : item.niveau === 'Avancé'
                            ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]'
                            : 'bg-[#ff006e]/20 text-[#ff006e] border border-[#ff006e]'
                        }`}>
                          {item.niveau}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
