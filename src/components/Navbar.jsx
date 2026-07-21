import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/services' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Certs', href: '/#certifications' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setMobileOpen(false);

    if (href.startsWith('/#')) {
      e.preventDefault();
      const anchor = href.substring(2);

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div className={`w-full max-w-5xl transition-all duration-500 ${
        scrolled
          ? 'glass-card rounded-2xl shadow-2xl shadow-black/40'
          : 'bg-ronin-dark/40 backdrop-blur-sm border border-white/5 rounded-2xl'
      }`}>
        <div className="flex items-center justify-between h-14 px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center font-black text-white text-lg shadow-lg shadow-ronin-accent/20 group-hover:scale-110 transition-transform duration-300">
                R
              </div>
              <div className="absolute inset-0 rounded-xl gradient-bg blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight group-hover:text-ronin-accent transition-colors hidden sm:block">
              Ronin Labs
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-3.5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
              >
                {link.label}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-ronin-accent rounded-full scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 gradient-bg text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-ronin-accent/20"
            >
              Let's Talk
              <ArrowUpRight size={15} />
            </a>

            <button
              className="md:hidden w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
                <ArrowUpRight size={15} className="opacity-30" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="flex items-center justify-center gap-2 px-4 py-3 mt-2 gradient-bg text-white text-sm font-semibold rounded-xl"
            >
              Let's Talk
              <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
