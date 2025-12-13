import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "About", href: "#about", isRoute: false },
  { name: "Equity", href: "#services", isRoute: false },
  { name: "Investments", href: "#services", isRoute: false },
  { name: "Corporate Advisory", href: "#services", isRoute: false },
  { name: "Contact", href: "/contact", isRoute: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary border-b border-secondary-foreground/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dadfpmrat/image/upload/v1765623345/Screenshot_2025-12-13_at_4.14.33_PM-removebg-preview_k3xhwt.png"
                alt="Dhanacharya Financial Advisors"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) =>
              item.isRoute ? (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={item.href}
                    className={`relative font-medium text-sm transition-colors ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-secondary-foreground/80 hover:text-secondary-foreground"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left transition-transform ${
                        location.pathname === item.href ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-secondary-foreground/80 hover:text-secondary-foreground transition-colors font-medium text-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )
            )}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full"
                asChild
              >
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-t border-secondary-foreground/10"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item, index) =>
                item.isRoute ? (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`block py-2 font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-secondary-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-secondary-foreground hover:text-primary transition-colors font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                )
              )}
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4 rounded-full"
                asChild
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;