import { Briefcase, ChevronRight } from 'lucide-react';
import { profile } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-ronin-accent text-sm font-semibold uppercase tracking-widest mb-3">Career</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-ronin-accent via-ronin-purple to-transparent" />

          <div className="space-y-8">
            {profile.experience.map((job, i) => (
              <div key={i} className="relative pl-14 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-2 top-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full glass-card flex items-center justify-center">
                  <Briefcase size={16} className="text-ronin-accent" />
                </div>

                <div className="glass-card rounded-2xl p-6 hover:border-ronin-accent/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <span className="text-xs font-medium text-ronin-accent px-3 py-1 rounded-full bg-ronin-accent/10">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium mb-3">{job.company}</p>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{job.description}</p>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <ChevronRight size={16} className="text-ronin-accent mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
