import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Home,
  GraduationCap,
  Plane,
  Car,
  Heart,
  Clock,
  Target,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";

const goals = [
  { icon: TrendingUp, label: "Building Wealth" },
  { icon: GraduationCap, label: "For child's higher education" },
  { icon: Plane, label: "Travelling the world" },
  { icon: Home, label: "Buying a dream house" },
  { icon: Clock, label: "Early retirement" },
  { icon: Car, label: "Buying your desired car" },
];

const oddsData = [
  { years: "1 year", chance: "60%", value: 60 },
  { years: "3 years", chance: "65%", value: 65 },
  { years: "5 years", chance: "70%", value: 70 },
  { years: "10 years", chance: "80%", value: 80 },
  { years: "15 years", chance: "85%", value: 85 },
  { years: "20 years", chance: "90%", value: 90 },
  { years: "25 years", chance: "95%", value: 95 },
];

const MutualFunds = () => {
  const heroRef = useRef(null);
  const wishRef = useRef(null);
  const goalsRef = useRef(null);
  const oddsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const wishInView = useInView(wishRef, { once: false, margin: "-100px" });
  const goalsInView = useInView(goalsRef, { once: false, margin: "-100px" });
  const oddsInView = useInView(oddsRef, { once: false, margin: "-100px" });

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section with Coin Stack Visual */}
      <section ref={heroRef} className="pt-32 pb-16 sm:pb-20 bg-secondary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-base sm:text-lg text-secondary-foreground/70 mb-6"
              >
                Did you know, if you had invested <span className="text-primary font-semibold">₹20,000</span> every month for the last 20 years in appropriate equity mutual funds, the value of your investment today could've been well over <span className="text-primary font-bold text-xl sm:text-2xl">₹6 Crores</span>.
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground"
              >
                We know how to make clients financial goals <span className="text-primary">achievable</span>
              </motion.h1>
            </motion.div>

            {/* Growing Coin Stack Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <div className="relative flex items-end justify-center gap-3 h-48">
                  {/* Coin stacks */}
                  {[3, 5, 4, 7, 6, 9].map((coins, index) => (
                    <div key={index} className="flex flex-col items-center gap-1">
                      {Array.from({ length: coins }).map((_, coinIndex) => (
                        <motion.div
                          key={coinIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={heroInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + coinIndex * 0.03 }}
                          className="w-8 h-3 rounded-full bg-primary border-2 border-primary/60"
                          style={{
                            boxShadow: "0 2px 0 rgba(0,0,0,0.1)"
                          }}
                        />
                      ))}
                    </div>
                  ))}
                  {/* Rupee symbol */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={heroInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                    className="absolute -top-2 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                  >
                    <span className="text-primary-foreground font-bold">₹</span>
                  </motion.div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">Wealth Growth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Do You Wish Section with Target Visual */}
      <section ref={wishRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Target Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={wishInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex justify-center order-2 lg:order-1"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    {/* Target rings */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={wishInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute w-48 h-48 rounded-full border-4 border-primary/20"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={wishInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="absolute w-36 h-36 rounded-full border-4 border-primary/40"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={wishInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="absolute w-24 h-24 rounded-full border-4 border-primary/60"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={wishInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                    >
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Your Goals</p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={wishInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  Do You Wish to<span className="text-primary">...</span>
                </h2>

                <div className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  {[
                    "Generate Passive income ?",
                    "Make money work for you as your servant ?",
                    "Buy your dream house ?",
                    "Build a corpus for your child's higher education ?",
                    "Travel the world with your loved ones ?",
                    "Get retired early & spend time with your family ?",
                  ].map((wish, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={wishInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{wish}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={wishInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-lg sm:text-xl font-heading font-semibold text-primary mt-8"
                >
                  …. We will help you realize your aspirations
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section ref={goalsRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={goalsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
              With <span className="text-primary">Dhanacharya</span>,
            </h2>
            <p className="text-lg sm:text-xl text-secondary-foreground/70">
              you can invest to achieve goals like
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.label}
                initial={{ opacity: 0, y: 30 }}
                animate={goalsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <goal.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <p className="font-medium text-foreground">{goal.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={goalsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-lg sm:text-xl font-semibold text-foreground">
                We do not charge anything from our client for managing their mutual fund investments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Odds Section with Progress Bars Visual */}
      <section ref={oddsRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={oddsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  What are the odds of achieving your <span className="text-primary">financial goal</span>?
                </h2>

                <div className="space-y-3">
                  {oddsData.map((item, index) => (
                    <motion.div
                      key={item.years}
                      initial={{ opacity: 0, x: -30 }}
                      animate={oddsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-xl p-3 sm:p-4 border border-border/50 shadow-md"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">{item.years}</span>
                        </p>
                        <div className="flex items-center gap-3 flex-1">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={oddsInView ? { width: item.chance } : {}}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                          <span className="font-bold text-primary text-sm min-w-[40px] text-right">
                            {item.chance}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bar Chart Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={oddsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="flex items-end justify-center gap-2 h-48">
                    {oddsData.map((item, index) => (
                      <motion.div
                        key={item.years}
                        initial={{ height: 0 }}
                        animate={oddsInView ? { height: `${item.value}%` } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="w-6 sm:w-8 bg-primary rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="flex justify-center gap-2 mt-2">
                    {oddsData.map((item, index) => (
                      <span key={index} className="text-[8px] text-muted-foreground w-6 sm:w-8 text-center">
                        {item.years.replace(' year', 'Y').replace('s', '')}
                      </span>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-3">Success Probability</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Contact Now
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <WhatsAppCommunity />
      <Footer />
    </main>
  );
};

export default MutualFunds;
