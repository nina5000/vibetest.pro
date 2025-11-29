import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex items-center justify-center px-6 pt-32 pb-24">
        <div className="container mx-auto max-w-xl">
          <div className="rounded-2xl border border-border bg-card/80 px-8 py-10 text-center shadow-sm backdrop-blur">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Error 404
            </p>
            <h1 className="mb-3 text-4xl font-bold text-foreground md:text-5xl">
              Page not found
            </h1>
            <p className="mb-8 text-base text-muted-foreground">
              The page you’re looking for doesn’t exist or has been moved. Check the URL, or go
              back to the VibeTest homepage.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
