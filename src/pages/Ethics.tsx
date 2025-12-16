import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface DutyItem {
  title: string;
  content: string[];
}

const dutiesData: DutyItem[] = [
  {
    title: "Duties to Clients",
    content: [
      "Loyalty, Prudence, and Care – We place our clients' interests before our own interests. In the process of delivering value to clients, we act with reasonable care and exercise prudent judgment. Our loyalty towards our clients is never compromised.",
      "Fair Dealing – We deal fairly and objectively with all our clients while engaging with them professionally. This ensures that the interests of no single client are placed in priority to those of other clients.",
      "Suitability – We ensure that the products and services offered to our clients are best suited to their individual financial situation and conditions, as agreed with them.",
    ],
  },
  {
    title: "Confidentiality",
    content: [
      "We ensure that information about our former, current, and prospective clients is kept confidential unless we are required by law to disclose it, or the client permits to disclose it.",
    ],
  },
  {
    title: "Transparency",
    content: [
      "We communicate effectively to clients our service delivery process, our operating procedures, and the general principles of financial and investment process; all the risks and limitations associated with the processes along with the significant decisions made.",
      "We distinguish between facts and opinions in all our consultations and presentations.",
      "We retain all records associated with our service deliveries and communication with clients to support our recommendations and actions.",
    ],
  },
  {
    title: "Integrity",
    content: [
      "We ensure adherence to honesty, fair dealing, truthfulness, and straightforwardness in all our professional endeavors which involves full and fair disclosure of all material factors associated with our services.",
    ],
  },
  {
    title: "Independence & Objectivity",
    content: [
      "We ensure adherence to honesty, fair dealing, truthfulness, and straightforwardness in all our professional endeavors which involves full and fair disclosure of all material factors associated with our services.",
    ],
  },
  {
    title: "Competence",
    content: [
      "We bring the requisite expertise, skills, knowledge, and experience on the table to serve the clients' needs, taking due care of the expectations of our clients. Our team remains abreast of all the professional and technical developments to perform competently in the professional environment. We ensure adequate supervision in all the steps of our service delivery process.",
    ],
  },
  {
    title: "Diligence",
    content: [
      "We exercise diligence, independence, and thoroughness in making recommendations and taking actions while serving our clients. We have a reasonable and adequate basis, supported by appropriate research and investigation, for any analysis, recommendation, or action.",
    ],
  },
];

const Ethics = () => {
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const howRef = useRef(null);
  const dutiesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: false, margin: "-100px" });
  const howInView = useInView(howRef, { once: false, margin: "-100px" });
  const dutiesInView = useInView(dutiesRef, { once: false, margin: "-100px" });

  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 sm:pb-20 bg-secondary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6"
              >
                <span className="text-primary">Ethics</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-secondary-foreground/70"
              >
                We have highest commitment
              </motion.p>
            </motion.div>

            {/* Scales of Justice Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-64 h-64">
                {/* Center pillar */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={heroInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-40 bg-primary rounded-t-full origin-bottom"
                />

                {/* Top circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={heroInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6, type: "spring" }}
                  className="absolute left-1/2 -translate-x-1/2 top-12 w-8 h-8 bg-primary rounded-full"
                />

                {/* Balance beam */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={heroInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-2 bg-primary/80 rounded-full"
                />

                {/* Left pan strings */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={heroInView ? { height: 40 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="absolute top-[72px] left-[32px] w-0.5 bg-primary/60"
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={heroInView ? { height: 40 } : {}}
                  transition={{ duration: 0.3, delay: 0.95 }}
                  className="absolute top-[72px] left-[56px] w-0.5 bg-primary/60"
                />

                {/* Left pan */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={heroInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.1, type: "spring" }}
                  className="absolute top-28 left-4 w-16 h-4 bg-primary/40 rounded-b-full"
                />

                {/* Right pan strings */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={heroInView ? { height: 40 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="absolute top-[72px] right-[32px] w-0.5 bg-primary/60"
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={heroInView ? { height: 40 } : {}}
                  transition={{ duration: 0.3, delay: 0.95 }}
                  className="absolute top-[72px] right-[56px] w-0.5 bg-primary/60"
                />

                {/* Right pan */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={heroInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.1, type: "spring" }}
                  className="absolute top-28 right-4 w-16 h-4 bg-primary/40 rounded-b-full"
                />

                {/* Base */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={heroInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-primary/60 rounded-full"
                />

                {/* Decorative circles */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={heroInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="absolute top-24 left-8 w-8 h-8 rounded-full border-2 border-primary/20"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={heroInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="absolute top-24 right-8 w-8 h-8 rounded-full border-2 border-primary/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Ethical Culture Section */}
      <section ref={whyRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Warning/Trust Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={whyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex justify-center order-2 lg:order-1"
            >
              <div className="relative w-64 h-64">
                {/* Outer broken circle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={whyInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute inset-4 rounded-full border-4 border-dashed border-destructive/30"
                />

                {/* Warning triangle */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={whyInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    <div
                      className="w-24 h-24 bg-destructive/20"
                      style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    />
                    <div
                      className="absolute inset-2 bg-destructive/40"
                      style={{ clipPath: "polygon(50% 10%, 10% 90%, 90% 90%)" }}
                    />
                    {/* Exclamation mark */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={whyInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-6 bg-destructive rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={whyInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 1 }}
                      className="absolute top-16 left-1/2 -translate-x-1/2 w-2 h-2 bg-destructive rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Crack lines */}
                {[45, 135, 225, 315].map((angle, index) => (
                  <motion.div
                    key={angle}
                    initial={{ scaleX: 0 }}
                    animate={whyInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                    className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-destructive/40 origin-left"
                    style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(60px)` }}
                  />
                ))}

                {/* Scattered dots representing broken trust */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                  const radian = (angle * Math.PI) / 180;
                  const x = 50 + 45 * Math.cos(radian);
                  const y = 50 + 45 * Math.sin(radian);
                  return (
                    <motion.div
                      key={angle}
                      initial={{ scale: 0 }}
                      animate={whyInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 1.3 + index * 0.05 }}
                      className="absolute w-2 h-2 bg-destructive/30 rounded-full"
                      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                    />
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                Why ethical culture is <span className="text-primary">needed?</span>
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed text-base sm:text-lg">
                  The stock market scam of 1992 is considered one of the worst violations of ethics in the Indian financial industry.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  This has given us countless scandals and news stories about professionals who have defrauded investors, employers, and peers. There is no doubt that greed is a powerful emotion, but sometimes unethical behavior boils down to lack of education on basic principles of financial standards. The finance industry has been singled out as a case of rampant unethical behavior and corporate greed.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  Investors intrinsically trust financial institutions with their money and expect them to invest it with integrity. All market risks considered, investors expect the highest return and put their faith in the hands of professionals. Upholding investor confidence is vital to the success of the investment industry. High ethical standards are critical to maintaining the public's trust in financial markets and in the investment profession.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Build Ethical Culture Section */}
      <section ref={howRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
              How we build <span className="text-primary">ethical culture</span>
            </h2>

            <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  We have highest allegiance towards ethical culture
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We strive to stay true to our values and ethics towards our clients and professional commitments towards all the stakeholders. Following is our code of ethics which incorporates best practices all around the globe in the finance and banking industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Duties Section with Expandable Items */}
      <section ref={dutiesRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={dutiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              {dutiesData.map((duty, index) => (
                <motion.div
                  key={duty.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={dutiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border/50 shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(duty.title)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-lg sm:text-xl font-heading font-semibold text-foreground">
                      {duty.title}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedItems.includes(duty.title) ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 ml-4"
                    >
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedItems.includes(duty.title) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-border/50">
                          <div className="space-y-4">
                            {duty.content.map((paragraph, i) => (
                              <p
                                key={i}
                                className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Ethics;
