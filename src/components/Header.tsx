import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface SubItem {
  name: string;
  href: string;
  isRoute: boolean;
}

interface NavItem {
  name: string;
  href: string;
  isRoute: boolean;
  subItems?: SubItem[];
}

const navItems: NavItem[] = [
  {
    name: "About",
    href: "#about",
    isRoute: false,
    subItems: [
      { name: "What we do", href: "/whatwedo", isRoute: true },
      { name: "Our Team", href: "/ourteam", isRoute: true },
      { name: "Ethics", href: "/ethics", isRoute: true },
      { name: "Careers", href: "/careers", isRoute: true },
    ],
  },
  { name: "Equity", href: "/whatwedo#equity", isRoute: false },
  {
    name: "Investments",
    href: "/whatwedo#investments",
    isRoute: false,
    subItems: [
      { name: "Mutual Fund", href: "/mutualfunds", isRoute: true },
      { name: "Calculator", href: "/calculator", isRoute: true },
    ],
  },
  {
    name: "Corporate Advisory",
    href: "/whatwedo#corporate",
    isRoute: false,
    subItems: [
      { name: "Start Your Business", href: "/start-your-business", isRoute: true },
      { name: "Auditing and Assurance", href: "/auditing-assurance", isRoute: true },
      { name: "Taxation Advisory", href: "/taxation-advisory", isRoute: true },
      { name: "Regulatory Compliance", href: "/regulatory-compliance", isRoute: true },
      { name: "Registration & Licenses", href: "/registration-licenses", isRoute: true },
      { name: "Intellectual Property", href: "/intellectual-property", isRoute: true },
    ],
  },
  { name: "Media Coverage", href: "/mediacoverage", isRoute: true },
  { name: "Contact", href: "/contact", isRoute: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileExpand = (itemName: string) => {
    setMobileExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

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
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.subItems ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors font-medium text-sm py-2"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 min-w-[180px] bg-secondary border border-secondary-foreground/10 rounded-xl shadow-xl overflow-hidden"
                        >
                          {item.subItems.map((subItem, subIndex) =>
                            subItem.isRoute ? (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                  to={subItem.href}
                                  className="block px-4 py-3 text-sm text-secondary-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ) : (
                              <motion.a
                                key={subItem.name}
                                href={subItem.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                                className="block px-4 py-3 text-sm text-secondary-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                              >
                                {subItem.name}
                              </motion.a>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : item.isRoute ? (
                  <motion.div whileHover={{ y: -2 }}>
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
                    href={item.href}
                    className="relative text-secondary-foreground/80 hover:text-secondary-foreground transition-colors font-medium text-sm"
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
                )}
              </motion.div>
            ))}
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
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => toggleMobileExpand(item.name)}
                        className="flex items-center justify-between w-full py-3 font-medium text-secondary-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileExpandedItems.includes(item.name) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpandedItems.includes(item.name) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 border-l-2 border-primary/30 ml-2"
                          >
                            {item.subItems.map((subItem) =>
                              subItem.isRoute ? (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block py-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ) : (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block py-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </a>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.isRoute ? (
                    <Link
                      to={item.href}
                      className={`block py-3 font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-secondary-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-3 text-secondary-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}
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
