import { useParams, Link, Navigate } from 'react-router-dom';
import { Globe, Wrench, Smartphone, Palette, Bot, ClipboardList, Check, ArrowLeft, ArrowRight, Mail, ExternalLink, TrendingUp } from 'lucide-react';
import { profile } from '../data';

const iconMap = {
  Globe, Wrench, Smartphone, Palette, Bot, ClipboardList,
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = profile.services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.icon] || Globe;
  const currentIndex = profile.services.findIndex((s) => s.slug === slug);
  const nextService = profile.services[(currentIndex + 1) % profile.services.length];

  return (
    <main className="pt-40 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          All Services
        </Link>

        {/* Hero */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ronin-accent/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-ronin-accent/10 flex items-center justify-center mb-6">
              <Icon size={32} className="text-ronin-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
          </div>
        </div>

        {/* Long description */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed text-lg">{service.longDescription}</p>
        </div>

        {/* Important Stats */}
        {service.stats && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp size={24} className="text-ronin-accent" />
              Key Metrics
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {service.stats.map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-ronin-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check size={20} className="text-ronin-accent" />
                </div>
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        {service.process && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">My Process</h2>
            <div className="space-y-4">
              {service.process.map((p, i) => (
                <div key={i} className="glass-card rounded-xl p-6 flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center font-bold text-white text-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{p.step}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables */}
        {service.deliverables && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">What You Get</h2>
            <div className="glass-card rounded-2xl p-6">
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-ronin-accent flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Samples / Work */}
        {service.samples && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <ExternalLink size={24} className="text-ronin-accent" />
              Sample Work
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.samples.map((sample, i) => (
                <a
                  key={i}
                  href={sample.url}
                  target={sample.url !== '#' ? '_blank' : undefined}
                  rel={sample.url !== '#' ? 'noopener noreferrer' : undefined}
                  className="glass-card rounded-2xl p-6 hover:scale-[1.02] hover:border-ronin-accent/40 transition-all duration-300 group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-ronin-accent/10 text-ronin-accent text-xs font-semibold">
                      {sample.category}
                    </span>
                    {sample.url !== '#' && (
                      <ExternalLink size={18} className="text-gray-600 group-hover:text-ronin-accent transition-colors" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ronin-accent transition-colors">
                    {sample.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{sample.description}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden mb-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-ronin-accent/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Interested in this service?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let's discuss your project and how I can help you achieve your goals.
            </p>
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-ronin-accent/20"
            >
              <Mail size={18} />
              {profile.contact.email}
            </a>
          </div>
        </div>

        {/* Next service */}
        <Link
          to={`/services/${nextService.slug}`}
          className="glass-card rounded-2xl p-6 flex items-center justify-between hover:border-ronin-accent/40 transition-all group"
        >
          <div>
            <p className="text-sm text-gray-500 mb-1">Next Service</p>
            <p className="text-lg font-bold text-white">{nextService.title}</p>
          </div>
          <ArrowRight size={24} className="text-gray-600 group-hover:text-ronin-accent group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </main>
  );
}
