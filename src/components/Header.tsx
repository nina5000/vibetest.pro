import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
      <Link
        to="/"
        className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[oklch(0.145_0_0)] text-[oklch(0.985_0_0)] text-lg font-bold leading-none">
          V
        </div>
        <span className="text-xl font-bold text-foreground">VibeTest</span>
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to="/guide"
          className="text-foreground/80 hover:text-foreground transition-colors font-medium"
        >
          Guide
        </Link>
        <Link
          to="/pricing"
          className="text-foreground/80 hover:text-foreground transition-colors font-medium"
        >
          Pricing
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" asChild>
          <a href="https://app.vibetest.pro/" target="_blank" rel="noopener noreferrer">Start Trial</a>
        </Button>
        <Button variant="default" asChild>
          <Link to="/book-demo">Book demo</Link>
        </Button>
      </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
