import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import logo from '@/assets/logo.png';
import { ROUTES } from '@/core/config/constants';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: ROUTES.BECOME_HEALPER, label: 'Become a Healper' },
    { to: ROUTES.ABOUT, label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav
        className="container mx-auto max-w-7xl card-glass px-6 py-4 rounded-2xl backdrop-blur-lg border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Left: Logo + Links */}
          <div className="flex items-center gap-8">
            <Link
              to={ROUTES.HOME}
              className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
              aria-label="Healpers Home"
            >
              <div className="w-11 h-11 rounded-lg overflow-hidden flex items-center justify-center bg-background/50">
                <img
                  src={logo}
                  alt="Healpers Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="font-bold text-lg group-hover:text-healpers-coral transition-colors">
                  Healpers
                </div>
                <div className="text-xs text-muted-foreground">
                  Hospital Companion
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? 'text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <Link to={ROUTES.LOGIN} className="hidden md:inline-flex">
              <Button variant="outline" className="btn-glass-primary" aria-label="Login or Signup">
                Login / Signup
              </Button>
            </Link>

            <Link to={ROUTES.BOOK_HELPER} className="hidden md:inline-flex">
              <Button className="btn-glass-primary" aria-label="Book a Healper">
                Book a Healper
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-background/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pt-4 mt-4 border-t border-border animate-in fade-in slide-in-from-top-2"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium transition-colors text-left py-2 ${
                    isActive(link.to)
                      ? 'text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link to={ROUTES.LOGIN} onClick={closeMobileMenu}>
                <Button className="btn-glass-primary w-full" aria-label="Login or Signup">
                  Login / Signup
                </Button>
              </Link>

              <Link to={ROUTES.BOOK_HELPER} onClick={closeMobileMenu}>
                <Button className="btn-glass-primary w-full" aria-label="Book a Healper">
                  Book a Healper
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
