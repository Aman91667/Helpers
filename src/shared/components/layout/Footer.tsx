import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { ROUTES } from '@/core/config/constants';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg overflow-hidden flex items-center justify-center bg-background/50">
                <img
                  src={logo}
                  alt="Healpers Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg">Healpers</div>
                <div className="text-xs text-muted-foreground">Hospital Companion</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Making hospital visits easier, one helper at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={ROUTES.HOME} className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.BECOME_HEALPER} className="text-muted-foreground hover:text-foreground transition-colors">
                  Become a Healper
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Safety Guidelines
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@healpers.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Healpers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
