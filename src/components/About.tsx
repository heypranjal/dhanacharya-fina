import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Shield, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const features = [
    { icon: TrendingUp, text: "Strategic Growth" },
    { icon: Shield, text: "Secure Investments" },
    { icon: Users, text: "Expert Guidance" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight"
            >
              Get Progressive{" "}
              <span className="text-primary">Financially</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              The First Step To Your Financial Success Starts Here. We are a team
              of dedicated financial advisors committed to helping you achieve your
              financial goals through strategic planning and expert guidance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              With years of experience in equity fund raising, investments, corporate
              advisory, and loans, we provide comprehensive financial solutions tailored
              to your unique needs.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex items-center gap-3 cursor-pointer group bg-background/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Logo/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background decorative circles */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-8 bg-gradient-to-tl from-primary/10 to-transparent rounded-full"
                animate={{ scale: [1.05, 1, 1.05], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-full"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Central logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-40 h-40 bg-secondary rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-5xl font-heading font-bold text-primary">D</span>
                    <p className="text-xs text-secondary-foreground tracking-widest mt-1">DHANACHARYA</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary/30 rounded-full"
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
