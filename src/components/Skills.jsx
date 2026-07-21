import { profile } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-ronin-accent text-sm font-semibold uppercase tracking-widest mb-3">Capabilities</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Skills & Expertise</h2>

        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill, i) => (
            <span
              key={skill}
              className="px-4 py-2.5 glass-card rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-ronin-accent/40 hover:scale-105 transition-all duration-300 cursor-default"
              style={{
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
