import { Link } from 'react-router-dom';
import { Globe, Wrench, Smartphone, Palette, Bot, ClipboardList, Briefcase, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { profile } from '../data';

const iconMap = {
  Globe, Wrench, Smartphone, Palette, Bot, ClipboardList, Briefcase,
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-ronin-accent text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What I Do</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          From building digital products to managing operations — a full-stack skill set covering development, strategy, and project delivery.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            const isLast = i === profile.services.length - 1;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`glass-card rounded-2xl p-7 hover:scale-[1.02] hover:border-ronin-accent/40 transition-all duration-300 group flex flex-col ${
                  isLast ? 'sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-10' : ''
                }`}
              >
                <div className={isLast ? 'lg:flex-shrink-0' : ''}>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-ronin-accent/10 flex items-center justify-center group-hover:bg-ronin-accent/20 transition-colors">
                      <Icon size={28} className="text-ronin-accent" />
                    </div>
                    <ArrowUpRight size={20} className="text-gray-600 group-hover:text-ronin-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                </div>
                <div className={isLast ? 'flex-grow' : ''}>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">{service.description}</p>
                  <ul className={`space-y-2 mb-6 ${isLast ? 'sm:grid sm:grid-cols-2 sm:gap-x-6' : ''}`}>
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <Check size={15} className="text-ronin-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-ronin-accent group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-ronin-accent/20"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
