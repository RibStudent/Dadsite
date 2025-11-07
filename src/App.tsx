import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

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

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <Route path={"/"} component={HomeEnhanced} />
          <Route path={"/about"} component={About} />
          <Route path={"/career-highlights"} component={CareerHighlights} />
          <Route path={"/services"} component={Services} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/case-studies"} component={LegacyCaseStudies} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
