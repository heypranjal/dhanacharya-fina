import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, BarChart3, Building2, Rocket } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients", prefix: "" },
  { icon: BarChart3, value: 1000, suffix: " Lacs+", label: "Assets Under Management", prefix: "" },
  { icon: Building2, value: 45000, suffix: " Lacs+", label: "Loans Disbursed", prefix: "" },
  { icon: Rocket, value: 45, suffix: "+", label: "Startups Funded", prefix: "" },
];

const AnimatedNumber = ({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
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
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Our Impact
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Numbers That <span className="text-primary">Speak</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 text-center card-shadow border border-border/50 hover:border-primary/50 transition-all duration-300">
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>

                <h3 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </h3>

                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>

                {/* Decorative bottom line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full group-hover:w-1/2 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;