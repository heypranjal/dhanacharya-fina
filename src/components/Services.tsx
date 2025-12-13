import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, PiggyBank, Briefcase, Wallet, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Equity Fund Raising",
    description: "Strategic equity solutions for businesses looking to grow and expand their operations through capital infusion.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: PiggyBank,
    title: "Investments",
    description: "Comprehensive investment advisory services tailored to maximize your returns while managing risk effectively.",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    icon: Briefcase,
    title: "Corporate Advisory",
    description: "Expert corporate advisory services including M&A, restructuring, and strategic business consulting.",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Wallet,
    title: "Loans",
    description: "Flexible loan solutions for personal and business needs with competitive rates and quick processing.",
    color: "from-orange-500/20 to-orange-600/10",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      }}
      className="group relative bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 card-shadow transition-all duration-300 hover:shadow-2xl border border-border/50 cursor-pointer overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative z-10">
        <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:bg-primary/20 transition-colors"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
        </motion.div>

        <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
          {service.description}
        </p>

        <motion.div
          className="flex items-center gap-2 text-primary font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity"
          animate={isHovered ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
            Practice <span className="text-primary">Areas</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-2">
            Comprehensive financial solutions tailored to help you achieve your financial goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;