import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoadingFallbackEnhanced } from "./components/LoadingSkeletons";
import { CustomCursor, ScrollProgressIndicator, SmoothScrollWrapper } from "./components/CustomCursor";
import { pageTransitionVariants } from "./hooks/useAnimations";

// Lazy load page components for code splitting
const HomeEnhanced = lazy(() => import("./pages/HomeEnhanced"));
const About = lazy(() => import("./pages/About"));
const CareerHighlights = lazy(() => import("./pages/CareerHighlights"));
const Services = lazy(() => import("./pages/Services"));
// Rebrand: CaseStudies become Projects. Load CaseStudies component for /projects route.
const Projects = lazy(() => import("./pages/CaseStudies"));
// Optional legacy route still serves same component for backward compatibility.
const LegacyCaseStudies = Projects;
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

/**
 * PageWrapper - Wraps each page with animation variants
 */
function PageWrapper({ children }: { children: React.ReactNode }) {
  const variants = pageTransitionVariants();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/**
 * Router - Enhanced with page transitions
 */
function Router() {
  const [location] = useLocation();

  return (
    <>
      <ScrollProgressIndicator />
      <Header />
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingFallbackEnhanced />} key={location}>
          <Switch location={location}>
            <Route path={"/"}>
              <PageWrapper>
                <HomeEnhanced />
              </PageWrapper>
            </Route>
            <Route path={"/about"}>
              <PageWrapper>
                <About />
              </PageWrapper>
            </Route>
            <Route path={"/career-highlights"}>
              <PageWrapper>
                <CareerHighlights />
              </PageWrapper>
            </Route>
            <Route path={"/services"}>
              <PageWrapper>
                <Services />
              </PageWrapper>
            </Route>
            <Route path={"/projects"}>
              <PageWrapper>
                <Projects />
              </PageWrapper>
            </Route>
            <Route path={"/case-studies"}>
              <PageWrapper>
                <LegacyCaseStudies />
              </PageWrapper>
            </Route>
            <Route path={"/contact"}>
              <PageWrapper>
                <Contact />
              </PageWrapper>
            </Route>
            <Route path={"/404"}>
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            </Route>
            <Route>
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </>
  );
}

/**
 * Enhanced App with animations and premium features
 *
 * New Features:
 * - Custom cursor with smooth following
 * - Scroll progress indicator
 * - Smooth scroll behavior
 * - Page transitions with AnimatePresence
 * - Enhanced loading skeletons
 * - Improved error boundaries
 */
function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <SmoothScrollWrapper>
            <TooltipProvider>
              <CustomCursor />
              <Toaster />
              <Router />
            </TooltipProvider>
          </SmoothScrollWrapper>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
