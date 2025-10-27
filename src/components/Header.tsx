import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
        <span className="text-xl font-bold text-foreground">Vibetest</span>
      </div>

      <div className="flex items-center gap-8">
        <Link
          to="/guide"
          className="text-foreground/80 hover:text-foreground transition-colors font-medium"
        >
          Guide
        </Link>
        <a
          href="http://vibetest.pro/pricing"
          className="text-foreground/80 hover:text-foreground transition-colors font-medium"
        >
          Pricing
        </a>
      </div>

      <div className="w-[100px]" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
