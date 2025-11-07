import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">SGT Infrastructure</h2>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Delivering excellence in major infrastructure projects across Queensland.
            </p>
            <p className="text-xs text-primary-foreground/60">
              ABN: 76 642 027 156<br />
              RPEQ: 08668
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h2 className="font-semibold mb-4">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:0477336719"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-primary rounded"
                  aria-label="Phone: 0477 336 719"
                >
                  0477 336 719
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@sgtinfrastructure.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-primary rounded"
                  aria-label="Email: info@sgtinfrastructure.com"
                >
                  info@sgtinfrastructure.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-primary-foreground/80">Coomera, Queensland</span>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} SGT Infrastructure Consulting Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
