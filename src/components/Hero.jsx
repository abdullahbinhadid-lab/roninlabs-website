import { ArrowDown, Sparkles, Download, Linkedin, Github, Mail } from 'lucide-react';
import { profile } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ronin-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ronin-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-ronin-accent/5 to-ronin-purple/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Available badge */}
        {profile.available && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-green-400 font-medium">Available for Work</span>
          </div>
        )}

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
          <Sparkles size={16} className="text-ronin-accent" />
          <span className="text-sm text-gray-300 font-medium">{profile.domain}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 animate-fade-in-up">
          {profile.name.split(' ')[0]}{' '}
          <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light mb-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {profile.tagline}
        </p>

        <p className="text-sm sm:text-base text-gray-500 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {profile.headline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="px-8 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-ronin-accent/20"
          >
            View My Work
          </a>
          <a
            href={profile.resume}
            download
            className="px-8 py-3.5 glass-card text-white font-semibold rounded-xl hover:border-ronin-accent/50 transition-colors inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-ronin-accent hover:border-ronin-accent/40 transition-all" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-ronin-accent hover:border-ronin-accent/40 transition-all" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={`mailto:${profile.social.email}`} className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-ronin-accent hover:border-ronin-accent/40 transition-all" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-ronin-accent transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
