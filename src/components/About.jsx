import { profile } from '../data';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About text */}
          <div>
            <p className="text-ronin-accent text-sm font-semibold uppercase tracking-widest mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Bridging operations leadership with digital product development
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              {profile.about.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 p-5 glass-card rounded-2xl">
              <p className="text-sm text-gray-500 mb-1">Education</p>
              <p className="text-white font-medium">{profile.education.degree}</p>
              <p className="text-gray-400 text-sm">{profile.education.institution}</p>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {profile.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
