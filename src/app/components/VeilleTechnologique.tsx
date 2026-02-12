import { motion } from 'motion/react';
import { Eye, ExternalLink, Rss, Search, TrendingUp, Calendar } from 'lucide-react';
import { portfolioData } from '../config/portfolio-data';

export function VeilleTechnologique() {
  const { veilleTechnologique } = portfolioData;

  return (
    <section id="veille" className="py-20 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 retro-grid opacity-30" />
      
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
            <Eye className="w-8 h-8 neon-text-cyan" />
            <h2 className="text-4xl lg:text-5xl font-bold neon-text-cyan uppercase tracking-wider">
              {veilleTechnologique.title}
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {veilleTechnologique.description}
          </p>
        </motion.div>

        {/* Sujet de veille */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-8 neon-border-pink rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#ff006e]" />
              <h3 className="text-2xl font-bold text-[#ff006e] uppercase">Mon sujet de veille</h3>
            </div>
            <h4 className="text-xl font-semibold text-white mb-4">
              {veilleTechnologique.sujet.titre}
            </h4>
            <p className="text-white/80 mb-4 leading-relaxed">
              {veilleTechnologique.sujet.description}
            </p>
            <div className="bg-black/50 p-4 border-l-4 border-[#00f0ff]">
              <p className="text-sm text-white/70">
                <span className="text-[#00f0ff] font-semibold">Pourquoi ce sujet ? </span>
                {veilleTechnologique.sujet.pourquoi}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sources et Outils */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Sources */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-6 neon-border-cyan rounded-lg h-full">
              <div className="flex items-center gap-3 mb-6">
                <Rss className="w-6 h-6 text-[#00f0ff]" />
                <h3 className="text-xl font-bold text-[#00f0ff] uppercase">Sources d'information</h3>
              </div>
              <div className="space-y-4">
                {veilleTechnologique.sources.map((source, index) => (
                  <motion.a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="block p-4 bg-black/50 border border-[#00f0ff]/30 hover:border-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-[#00f0ff] transition-colors">
                          {source.nom}
                        </h4>
                        <p className="text-sm text-white/50 mb-2">{source.type}</p>
                        <p className="text-sm text-white/70">{source.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Outils */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-6 neon-border-purple rounded-lg h-full">
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-6 h-6 text-[#8b00ff]" />
                <h3 className="text-xl font-bold text-[#8b00ff] uppercase">Outils de veille</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {veilleTechnologique.outils.map((outil, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-black/50 border border-[#8b00ff]/50 text-white hover:border-[#8b00ff] hover:text-[#8b00ff] hover:shadow-[0_0_15px_rgba(139,0,255,0.3)] transition-all cursor-default uppercase text-sm font-semibold"
                  >
                    {outil}
                  </motion.span>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-black/50 border-l-4 border-[#8b00ff]">
                <p className="text-sm text-white/70">
                  <span className="text-[#8b00ff] font-semibold">Méthodologie : </span>
                  Consultation quotidienne des sources, utilisation d'agrégateurs RSS, alertes personnalisées et participation aux communautés techniques.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Articles récents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-[#ff006e]" />
            <h3 className="text-2xl font-bold text-[#ff006e] uppercase">Articles récents</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {veilleTechnologique.articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a0a2e] to-[#0a0a0a] p-6 border-2 border-transparent hover:border-[#ff006e] hover:shadow-[0_0_30px_rgba(255,0,110,0.3)] transition-all group"
              >
                <div className="text-sm text-[#ff006e] mb-2 uppercase tracking-wide">{article.date}</div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                  {article.titre}
                </h4>
                <p className="text-sm text-[#00f0ff]/80 mb-3">{article.source}</p>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {article.resume}
                </p>
                <a
                  href={article.lien}
                  className="inline-flex items-center gap-2 text-[#ff006e] hover:text-[#00f0ff] transition-colors text-sm font-semibold uppercase"
                >
                  Lire l'article
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
