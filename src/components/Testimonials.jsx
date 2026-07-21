import { Quote } from 'lucide-react';
import { profile } from '../data';

export default function Testimonials() {
  if (!profile.testimonials || profile.testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-ronin-accent text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What People Say</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Feedback from colleagues and partners I've worked with across projects and operations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {profile.testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 hover:border-ronin-accent/30 transition-all duration-300 flex flex-col"
            >
              <Quote size={32} className="text-ronin-accent/30 mb-4 flex-shrink-0" />
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow italic">"{t.quote}"</p>
              <div className="border-t border-ronin-border pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
