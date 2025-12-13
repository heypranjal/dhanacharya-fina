import { motion } from "framer-motion";
import { MapPin, Phone, ArrowDown } from "lucide-react";

const Hero = () => {
  const quote = "Mutual Fund Investments are subject to market risks, please read all related documents carefully before investing.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dadfpmrat/image/upload/v1765624603/pexels-pixabay-164636_jn3406.jpg"
          alt="Financial background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-transparent to-secondary/50"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating decorative elements - hidden on mobile for performance */}
      <motion.div
        className="hidden sm:block absolute top-20 right-10 md:right-20 w-32 md:w-64 h-32 md:h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden sm:block absolute bottom-20 left-10 md:left-20 w-48 md:w-96 h-48 md:h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating particles - fewer on mobile */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1.5 md:w-2 h-1.5 md:h-2 bg-primary/20 rounded-full ${i > 4 ? 'hidden sm:block' : ''}`}
          style={{
            top: `${15 + i * 10}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-8">
          <motion.span
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Weekly Mantra
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-secondary-foreground max-w-5xl mx-auto leading-tight mb-4 sm:mb-6 lg:mb-8 px-2"
        >
          Your Wealth,{" "}
          <motion.span
            className="text-primary inline-block"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Our Priority
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-foreground/70 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 font-light italic px-2"
        >
          "{quote}"
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 text-secondary-foreground/80 cursor-pointer group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </motion.div>
            <span className="text-xs sm:text-sm group-hover:text-secondary-foreground transition-colors">Hyderabad & Vijayawada</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-center gap-3 text-secondary-foreground/80 cursor-pointer group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </motion.div>
            <span className="text-xs sm:text-sm group-hover:text-secondary-foreground transition-colors">+91 98660 52111</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center gap-2 text-secondary-foreground/50 cursor-pointer hover:text-secondary-foreground/70 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
