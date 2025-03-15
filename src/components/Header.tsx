
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Recursos", path: "/features" },
    { name: "Preços", path: "/pricing" },
    { name: "Feedback", path: "/feedback" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight"
          onClick={closeMenu}
        >
          <span className="mr-1">Snea</span>
          <span className="text-muted-foreground">K</span>
          <span>Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary focus-ring ${
                isActive(link.path)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors focus-ring"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus-ring rounded-md p-1"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-down">
          <nav className="container py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium py-2 transition-colors hover:text-primary focus-ring ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors focus-ring w-full text-center mt-2"
              onClick={closeMenu}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
