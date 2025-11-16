import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

/**
 * Enhanced Header with animated mobile menu
 *
 * Features:
 * - Smooth mobile menu slide-in animation
 * - Staggered menu item animations
 * - Animated theme toggle
 * - Backdrop blur effect
 * - Keyboard navigation support
 * - Respects reduced motion preference
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Career Highlights", href: "/career-highlights" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <nav
          className="container mx-auto flex items-center justify-between py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="SGT Infrastructure Consulting home"
          >
            <div className="text-2xl font-bold text-primary">
              SGT
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">
              Infrastructure Consulting
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
                aria-current={location === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="ml-4">
                Get in Touch
              </Button>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="ml-2"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -180 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -180 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
            <button
              className="p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation with animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
              role="dialog"
              aria-label="Mobile navigation menu"
              initial={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { height: "auto", opacity: 1 }}
              exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <motion.div
                className="container py-4 flex flex-col space-y-4 overflow-hidden"
                initial={prefersReducedMotion ? {} : "closed"}
                animate={prefersReducedMotion ? {} : "open"}
                exit={prefersReducedMotion ? {} : "closed"}
                variants={
                  prefersReducedMotion
                    ? {}
                    : {
                        open: {
                          transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                        },
                        closed: {
                          transition: { staggerChildren: 0.05, staggerDirection: -1 },
                        },
                      }
                }
              >
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={
                      prefersReducedMotion
                        ? {}
                        : {
                            open: {
                              y: 0,
                              opacity: 1,
                              transition: {
                                y: { stiffness: 1000, velocity: -100 },
                              },
                            },
                            closed: {
                              y: 20,
                              opacity: 0,
                              transition: {
                                y: { stiffness: 1000 },
                              },
                            },
                          }
                    }
                  >
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary block ${
                        location === item.href
                          ? "text-primary"
                          : "text-foreground/70"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={location === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={
                    prefersReducedMotion
                      ? {}
                      : {
                          open: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              y: { stiffness: 1000, velocity: -100 },
                            },
                          },
                          closed: {
                            y: 20,
                            opacity: 0,
                            transition: {
                              y: { stiffness: 1000 },
                            },
                          },
                        }
                  }
                >
                  <Link href="/contact">
                    <Button size="sm" className="w-full">
                      Get in Touch
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
