import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Satisfied Client Base" },
  { value: 1000, suffix: " Lacs+", label: "Assets Under Management" },
  { value: 45000, suffix: " Lacs+", label: "Amount Of Loans Disbursed" },
  { value: 45, suffix: "+", label: "Start-Ups Been Assisted For Fund Raising" },
];

const features = [
  {
    number: "01",
    title: "Client Centered",
    description:
      "Client always comes first for us & we enjoy building long term relationship with them.",
  },
  {
    number: "02",
    title: "Dedicated Service",
    description:
      "We work closely with you just as your partner & take immediate actions to resolve all your problems.",
  },
  {
    number: "03",
    title: "Independent",
    description:
      "You have our promise of always having best quality unbiased & independent advice.",
  },
  {
    number: "04",
    title: "Expertise",
    description:
      "Our team has 100+ years of combined experience in finance & has worked with fortune 500 companies as consultants.",
  },
  {
    number: "05",
    title: "One Stop Solution",
    description:
      "We have a magic bullet & unique touch for all your financial problems.",
  },
  {
    number: "06",
    title: "Community Involvement",
    description:
      "We endeavour to contribute time and resources to make a positive impact in the lives of others.",
  },
];

const AnimatedNumber = ({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Reset to 0 and start counting
      setDisplayValue(0);
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setDisplayValue(Math.min(Math.round(stepValue * currentStep), value));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    } else {
      // Reset when out of view
      setDisplayValue(0);
    }
  }, [isInView, value]);

  return (
    <span className="tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920"
          alt="Business team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
            >
              <div className="w-8 sm:w-12 h-px bg-primary" />
              <span className="text-primary text-xs sm:text-sm font-medium tracking-wide">
                Professional and Experienced Financial Consultants
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-6 sm:mb-8 lg:mb-12"
            >
              Why Choose Our Firm
            </motion.h2>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-3 sm:gap-4 lg:gap-6">
                    <span className="text-primary/40 font-heading font-bold text-base sm:text-lg group-hover:text-primary transition-colors flex-shrink-0">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-secondary-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-secondary-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-8 xl:pl-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative p-3 sm:p-4 lg:p-6 border border-secondary-foreground/10 rounded-lg bg-secondary/30 backdrop-blur-sm hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-secondary-foreground mb-1 sm:mb-2 text-center">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </h3>
                  <p className="text-primary text-center font-medium text-xs sm:text-sm lg:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
