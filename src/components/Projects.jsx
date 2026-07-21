import { Users, Search, Bot, ShoppingBag, Package, GraduationCap, ShieldCheck, Briefcase, ExternalLink } from 'lucide-react';
import { profile } from '../data';

const iconMap = {
  Users, Search, Bot, ShoppingBag, Package, GraduationCap, ShieldCheck, Briefcase,
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-ronin-accent text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A selection of digital products built under Ronin Labs — spanning web platforms, SEO tools, e-commerce, education, and HSE resources.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profile.projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Briefcase;
            return (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 hover:scale-[1.03] hover:border-ronin-accent/40 transition-all duration-300 group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-ronin-accent/10 flex items-center justify-center group-hover:bg-ronin-accent/20 transition-colors">
                    <Icon size={24} className="text-ronin-accent" />
                  </div>
                  <ExternalLink size={18} className="text-gray-600 group-hover:text-ronin-accent transition-colors" />
                </div>
                <span className="text-xs font-medium text-ronin-purple px-2.5 py-1 rounded-full bg-ronin-purple/10 mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ronin-accent transition-colors">{project.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
              </a>
            );
          })}
        </div>

        {/* Additional stats banner */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <p className="text-gray-400 mb-6">
            Beyond these platforms, Ronin Labs has also shipped:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-black gradient-text">100+</div>
              <div className="text-sm text-gray-500 mt-1">Web Tools</div>
            </div>
            <div>
              <div className="text-2xl font-black gradient-text">100+</div>
              <div className="text-sm text-gray-500 mt-1">Chrome Extensions</div>
            </div>
            <div>
              <div className="text-2xl font-black gradient-text">10+</div>
              <div className="text-sm text-gray-500 mt-1">Mobile Apps</div>
            </div>
            <div>
              <div className="text-2xl font-black gradient-text">16+</div>
              <div className="text-sm text-gray-500 mt-1">Websites Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
