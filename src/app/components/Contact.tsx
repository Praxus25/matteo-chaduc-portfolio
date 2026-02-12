import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';
import { portfolioData } from '../config/portfolio-data';

export function Contact() {
  const { contact } = portfolioData;

  const contactInfo = [
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: 'Téléphone', value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MapPin, label: 'Localisation', value: contact.location, href: null },
  ];

  const socialLinks = [
    { icon: Github, href: contact.social.github, label: 'GitHub', color: '#ff006e' },
    { icon: Linkedin, href: contact.social.linkedin, label: 'LinkedIn', color: '#00f0ff' },
    { icon: Twitter, href: contact.social.twitter, label: 'Twitter', color: '#8b00ff' },
    { icon: Instagram, href: contact.social.instagram, label: 'Instagram', color: '#00ff41' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 retro-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff006e]/10 rounded-full blur-3xl" />

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
            <Send className="w-8 h-8 neon-text-cyan" />
            <h2 className="text-4xl lg:text-5xl font-bold neon-text-cyan uppercase tracking-wider">
              {contact.title}
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#ff006e] mb-6 uppercase tracking-wide">
              Informations de contact
            </h3>
            
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 p-4 bg-black/50 border-2 border-[#ff006e]/30 hover:border-[#ff006e] hover:shadow-[0_0_20px_rgba(255,0,110,0.2)] transition-all group">
                  <div className="p-3 bg-[#ff006e]/20 border border-[#ff006e] group-hover:bg-[#ff006e] group-hover:text-black transition-all">
                    <Icon className="w-6 h-6 text-[#ff006e] group-hover:text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 uppercase tracking-wide">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>
                  {content}
                </div>
              );
            })}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-[#00f0ff] mb-4 uppercase tracking-wide">
                Réseaux sociaux
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-black/50 border-2 border-white/10 hover:border-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all group"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 text-white/70 group-hover:text-[#00f0ff] transition-colors" />
                      <span className="text-white/70 group-hover:text-[#00f0ff] transition-colors text-sm font-semibold">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/50 neon-border-cyan p-8"
          >
            <h3 className="text-2xl font-semibold text-[#00f0ff] mb-6 uppercase tracking-wide">
              Envoyez-moi un message
            </h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wide">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-black/70 border-2 border-white/20 text-white focus:border-[#00f0ff] focus:shadow-[0_0_20px_rgba(0,240,255,0.3)] outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-black/70 border-2 border-white/20 text-white focus:border-[#00f0ff] focus:shadow-[0_0_20px_rgba(0,240,255,0.3)] outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black/70 border-2 border-white/20 text-white focus:border-[#00f0ff] focus:shadow-[0_0_20px_rgba(0,240,255,0.3)] outline-none transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-transparent neon-border-pink text-[#ff006e] hover:bg-[#ff006e] hover:text-black transition-all font-bold uppercase tracking-wider flex items-center justify-center gap-3 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Scanlines */}
      <div className="scanlines absolute inset-0 pointer-events-none opacity-20" />
    </section>
  );
}
