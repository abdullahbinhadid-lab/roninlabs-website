import { Linkedin, Github, Mail } from 'lucide-react';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-ronin-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center font-black text-white text-sm">
              R
            </div>
            <span className="font-bold text-white">Ronin Labs</span>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {profile.name} · {profile.domain}
          </p>

          <div className="flex items-center gap-3">
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-ronin-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-ronin-accent transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={`mailto:${profile.social.email}`} className="text-gray-600 hover:text-ronin-accent transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
