import { Mail, MapPin, ArrowUpRight, Linkedin, Github, Download } from 'lucide-react';
import { profile } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-ronin-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-ronin-accent text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's build something together
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Open to roles in project management, operations supervision, digital transformation, and digital product development.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={`mailto:${profile.contact.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-ronin-accent/20"
              >
                <Mail size={18} />
                {profile.contact.email}
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 px-8 py-3.5 glass-card text-white font-semibold rounded-xl hover:border-ronin-accent/50 transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-ronin-accent hover:border-ronin-accent/40 transition-all" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-ronin-accent hover:border-ronin-accent/40 transition-all" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={`mailto:${profile.social.email}`} className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-ronin-accent hover:border-ronin-accent/40 transition-all" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <MapPin size={16} />
              {profile.contact.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
