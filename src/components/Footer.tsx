import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about", isRoute: false },
    { name: "Services", href: "#services", isRoute: false },
    { name: "Media Coverage", href: "/mediacoverage", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
    { name: "Privacy Policy", href: "#", isRoute: false },
  ];

  const services = [
    "Equity Fund Raising",
    "Investments",
    "Corporate Advisory",
    "Loans",
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1BqoZe2h8g/?mibextid=wwXIfr" },
    { icon: Twitter, href: "https://x.com/dhanacharyallp?s=11" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/dhanacharya-advisors-llp/posts/?feedView=all" },
    { icon: Instagram, href: "https://www.instagram.com/dhanacharya_advisors?igsh=MWk3NmM5OTF6YmYzbQ%3D%3D&utm_source=qr" },
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
                src="https://res.cloudinary.com/dadfpmrat/image/upload/v1765623345/Screenshot_2025-12-13_at_4.14.33_PM-removebg-preview_k3xhwt.png"
                alt="Dhanacharya Financial Advisors"
                className="h-10 sm:h-12 w-auto object-contain"
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

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-6 text-primary">Our Services</h4>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-2 sm:space-y-3"
            >
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#services"
                    className="text-sm sm:text-base text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
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
