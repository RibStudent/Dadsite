import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

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
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-muted-foreground mb-6">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left bg-muted p-4 rounded-md">
                <summary className="cursor-pointer font-semibold mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-sm overflow-auto">
                  <code>{this.state.error.toString()}</code>
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-sm overflow-auto mt-2">
                    <code>{this.state.errorInfo.componentStack}</code>
                  </pre>
                )}
              </details>
            )}

            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                aria-label="Refresh the page"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
                aria-label="Return to homepage"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
