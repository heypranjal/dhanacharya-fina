import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const words = ["Wealth", "Future", "Growth", "Goals"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
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

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Slogan */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-secondary-foreground leading-tight mb-6"
        >
          <span>Your&nbsp;</span>

          <span className="inline-block text-primary w-[6ch] text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="inline-block"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>

          <span className="-ml-[0.8ch]">, Our Priority</span>
        </motion.h1>

        {/* 🔹 SUBTLE ADDITION BELOW HERO (ONLY NEW PART) */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-secondary-foreground/65"
        >
          <p className="text-sm sm:text-base font-medium mb-2">
            Professional and Experienced Financial Consultants
          </p>

          <p className="text-sm sm:text-base md:text-lg font-medium mb-4">
            Get Progressive Financially
          </p>

          <p className="text-sm sm:text-base italic leading-relaxed mb-6">
            “We work as an <span className="font-medium">Acharya</span>{" "}
            (teacher) of our clients to direct them to raise, use & invest their{" "}
            <span className="font-medium">Dhan</span> (money) wisely — because
            we firmly believe that money is a terrible master but can be an
            excellent servant if one is directed to use it properly.”
          </p>

          <div className="text-xs sm:text-sm tracking-wide uppercase">
            <div className="font-semibold text-secondary-foreground">
              Team Dhanacharya
            </div>
            <div className="mt-1">We Know Money</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
