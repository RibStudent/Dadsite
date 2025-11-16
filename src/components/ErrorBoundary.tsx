import { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

/**
 * Enhanced ErrorBoundary with animations
 *
 * Features:
 * - Catches React component errors
 * - Premium animated error UI
 * - Development error details
 * - Smooth transitions
 * - Accessibility optimized
 *
 * @example
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });

    // Optional: Send error to monitoring service (e.g., Sentry, LogRocket)
    // if (import.meta.env.PROD) {
    //   logErrorToService(error, errorInfo);
    // }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
          {/* Animated background effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-background to-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="text-center p-8 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {/* Animated error icon */}
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-destructive"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Oops! Something went wrong
            </motion.h1>

            <motion.p
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We're sorry for the inconvenience. Please try refreshing the page or return home.
            </motion.p>

            {import.meta.env.DEV && this.state.error && (
              <motion.details
                className="mt-6 text-left bg-muted/50 p-4 rounded-lg border border-border backdrop-blur-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <summary className="cursor-pointer font-semibold mb-2 hover:text-primary transition-colors">
                  Error Details (Development Only)
                </summary>
                <pre className="text-sm overflow-auto bg-background/50 p-3 rounded mt-2">
                  <code>{this.state.error.toString()}</code>
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-sm overflow-auto bg-background/50 p-3 rounded mt-2">
                    <code>{this.state.errorInfo.componentStack}</code>
                  </pre>
                )}
              </motion.details>
            )}

            <motion.div
              className="flex gap-4 justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                aria-label="Refresh the page"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Refresh Page
              </motion.button>
              <motion.a
                href="/"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl inline-block"
                aria-label="Return to homepage"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Go Home
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
