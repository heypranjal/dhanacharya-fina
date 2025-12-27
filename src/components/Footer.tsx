import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// Custom X (Twitter) icon component since lucide-react Twitter is deprecated
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "What We Do", href: "/whatwedo", isRoute: true },
    { name: "Our Team", href: "/ourteam", isRoute: true },
    { name: "Media Coverage", href: "/mediacoverage", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
    { name: "Ethics", href: "/ethics", isRoute: true },
    { name: "Careers", href: "/careers", isRoute: true },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: "For Investors",
      items: [
        "Unlisted Private Equity & Pre-IPO Opportunities",
        "Curated Private Market Deals",
        "Investor Network & Onboarding",
      ],
    },
    {
      title: "For Companies",
      items: [
        "Equity Capital Raising",
        "Private Placements & Growth Capital",
        "Pre-IPO, IPO & Institutional Readiness",
      ],
    },
    {
      title: "Public Market & Wealth Solutions",
      items: [
        "Mutual Fund Distribution",
        "Portfolio Allocation Advisory",
      ],
    },
    {
      title: "For Intermediaries",
      items: [
        "Deal Syndication & Distribution",
        "Merchant Banker Partnerships",
        "Buy-Side Capital Access",
      ],
    },
    {
      title: "Corporate & Strategic Advisory",
      items: [
        "Capital Structuring & Allocation",
        "Growth & Expansion Strategy",
        "Investor Readiness & Positioning",
      ],
    },
  ];

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1BqoZe2h8g/?mibextid=wwXIfr", label: "Facebook" },
    { icon: XIcon, href: "https://x.com/dhanacharyallp?s=11", label: "X (Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/dhanacharya-advisors-llp/posts/?feedView=all", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/dhanacharya_advisors?igsh=MWk3NmM5OTF6YmYzbQ%3D%3D&utm_source=qr", label: "Instagram" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer ref={ref} className="bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <motion.div
              className="mb-4 sm:mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://res.cloudinary.com/dadfpmrat/image/upload/v1766126485/Artboard_10_maqdxl.png"
                alt="Dhanacharya Financial Advisors"
                className="h-56 sm:h-64 w-auto object-contain"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-secondary-foreground/70 leading-relaxed mb-4 sm:mb-6"
            >
              Your trusted partner for comprehensive financial solutions. We help you achieve your financial goals with expert guidance.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex gap-2 sm:gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-primary transition-colors group cursor-pointer"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground/70 group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-6 text-primary">Quick Links</h4>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-2 sm:space-y-3"
            >
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm sm:text-base text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services Dropdowns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-6 text-primary">Our Services</h4>
            <div className="space-y-2">
              {serviceCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + catIndex * 0.1 }}
                  className="border-b border-secondary-foreground/10 last:border-b-0"
                >
                  <button
                    onClick={() => toggleDropdown(category.title)}
                    className="w-full flex items-center justify-between py-2 text-left text-sm sm:text-base text-secondary-foreground/80 hover:text-primary transition-colors group"
                  >
                    <span className="font-medium">{category.title}</span>
                    <motion.div
                      animate={{ rotate: openDropdown === category.title ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-primary" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openDropdown === category.title && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-4 pb-2"
                      >
                        {category.items.map((item, index) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="py-1"
                          >
                            <span className="text-xs sm:text-sm text-secondary-foreground/60 hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-2 group">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-2 sm:gap-3 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mt-0.5 sm:mt-1"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                </motion.div>
                <span className="text-xs sm:text-sm text-secondary-foreground/70 group-hover:text-secondary-foreground transition-colors">
                  D-127, Second Floor, Sector 10,<br />Noida, Uttar Pradesh 201301
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-2 sm:gap-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mt-0.5 sm:mt-1"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                </motion.div>
                <div className="flex flex-col">
                  <a href="tel:+918285363331" className="text-xs sm:text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    +91 82853 63331
                  </a>
                  <a href="tel:+917838231007" className="text-xs sm:text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    +91 78382 31007
                  </a>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 sm:gap-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                </motion.div>
                <a href="mailto:contact@dhanacharya.com" className="text-xs sm:text-sm text-secondary-foreground/70 hover:text-primary transition-colors break-all">
                  contact@dhanacharya.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-secondary-foreground/10 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center"
        >
          <motion.p
            className="text-secondary-foreground/60 text-xs sm:text-sm"
            whileHover={{ scale: 1.02 }}
          >
            © {currentYear} Dhanacharya Financial Advisors. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
