import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone } from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-5xl">
          {/* Weekly Mantra Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 sm:w-16 h-px bg-primary" />
            <span className="text-primary text-sm sm:text-base font-medium tracking-wide">
              Weekly Mantra
            </span>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-secondary-foreground leading-tight">
              "Consistent wealth creation comes from early access to high-quality businesses and disciplined capital allocation — enabled by technology, driven by judgment."
            </p>
          </motion.blockquote>

          {/* Attribution */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl font-heading text-primary"
          >
            – Team Dhanacharya
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom Contact Section */}
      <motion.div
        className="relative z-10 border-t border-secondary-foreground/20"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            {/* Location */}
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Our Location</span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-secondary-foreground">
                Delhi-NCR, India
              </p>
            </div>

            {/* Contact */}
            <div className="sm:text-right">
              <div className="flex items-center gap-2 text-primary mb-2 sm:justify-end">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">For Consultation</span>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-secondary-foreground">
                91-8285363331
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-secondary-foreground">
                91-8076542631
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
