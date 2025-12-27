import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Search, Users, Handshake } from "lucide-react";

const practiceAreas = [
  {
    icon: TrendingUp,
    title: "Capital Raising & Private Market Placements",
    description: "We advise growth-oriented companies on equity capital raises, working closely with family offices, venture capital funds, private equity firms, and aligned long-term investors. Our role focuses on capital structuring, investor fit, and execution discipline, ensuring businesses raise capital that supports sustainable growth rather than short-term dilution.",
    highlights: ["Equity Capital Raises", "Family Offices & VCs", "Capital Structuring"],
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Search,
    title: "Curated Investment Opportunities",
    description: "We source and curate select private, late-stage, and pre-IPO opportunities for HNIs, UHNIs, family offices, and institutional investors. Every opportunity is screened through business quality, management intent, governance, and scalability, enabling investors to access off-market, high-conviction deals.",
    highlights: ["Pre-IPO Opportunities", "HNIs & Family Offices", "High-Conviction Deals"],
    color: "from-green-500/20 to-green-600/10",
  },
  {
    icon: Users,
    title: "Strategic & Institutional Advisory",
    description: "We partner with promoters and leadership teams on growth strategy, capital allocation, investor readiness, and institutional engagement. Our advisory supports companies as they transition from entrepreneur-led growth to institutionally investable platforms, including preparation for public markets.",
    highlights: ["Growth Strategy", "Investor Readiness", "Public Market Preparation"],
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Handshake,
    title: "Deal Origination & Transaction Partnering",
    description: "We work as a deal origination and transaction partner for merchant bankers, intermediaries, and investment institutions, assisting in deal evaluation, investor syndication, and capital placement. Our strength lies in aligning quality deal flow with credible capital, creating long-term partnerships across the private markets ecosystem.",
    highlights: ["Merchant Banker Partnerships", "Investor Syndication", "Capital Placement"],
    color: "from-orange-500/20 to-orange-600/10",
  },
];

const PracticeAreaCard = ({ area, index }: { area: typeof practiceAreas[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
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
      className="group relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 card-shadow transition-all duration-300 hover:shadow-2xl border border-border/50 cursor-pointer overflow-hidden h-full flex flex-col"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <area.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
        </motion.div>

        <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors leading-tight">
          {area.title}
        </h3>

        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-5 flex-grow">
          {area.description}
        </p>

        {/* Highlight tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {area.highlights.map((highlight, idx) => (
            <motion.span
              key={highlight}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
            >
              {highlight}
            </motion.span>
          ))}
        </div>
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
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
            Our Practice <span className="text-primary">Areas</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2">
            Specialized advisory services across capital raising, investment curation, strategic advisory, and transaction partnering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
