import { Instagram, Github, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SOCIALS = [
  { id: 'discord', label: 'wintersummon', icon: MessageCircle, color: 'text-indigo-400', link: 'discord://-/users/wintersummon' },
  { id: 'insta1', label: 'wintersummonz', icon: Instagram, color: 'text-pink-500', link: 'https://instagram.com/wintersummonz' },
  { id: 'insta2', label: 'astro_chetan_20', icon: Instagram, color: 'text-pink-400', link: 'https://instagram.com/astro_chetan_20' },
  { id: 'github', label: 'astrochetan12-netizen', icon: Github, color: 'text-white', link: 'https://github.com/astrochetan12-netizen' },
  { id: 'whatsapp', label: 'wintersummons', icon: MessageCircle, color: 'text-green-500', link: '#' },
];

export default function Socials() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-20 relative z-20">
      <div className="bg-[#111214] border border-white/5 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Connect</h3>
        <div className="flex flex-wrap gap-4">
          {SOCIALS.map(social => {
            const Icon = social.icon;
            return (
              <a 
                key={social.id}
                href={social.link}
                target={social.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-[#1e1f22] border border-white/5 hover:border-white/20 rounded-xl px-4 py-3 cursor-pointer transition-colors shadow-md"
                >
                  <Icon className={`w-5 h-5 ${social.color}`} />
                  <span className="text-sm font-medium text-gray-200">{social.label}</span>
                </motion.div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
