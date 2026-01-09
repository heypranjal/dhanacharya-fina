import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MessageCircle, TrendingUp, ArrowRight } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const WhatsAppCommunity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const whatsappLink = "https://chat.whatsapp.com/Fsdo1Bxw7XUEq1ATO53izn";

  const benefits = [
    {
      icon: TrendingUp,
      title: "Market Updates",
      description: "Get real-time investment insights and market trends",
    },
    {
      icon: Users,
      title: "Investor Network",
      description: "Connect with like-minded investors and professionals",
    },
    {
      icon: MessageCircle,
      title: "Expert Guidance",
      description: "Direct access to expert advice and discussions",
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp Community
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6"
              >
                Join Our{" "}
                <span className="text-primary">Investor Community</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-secondary-foreground/70 mb-8 sm:mb-10"
              >
                Be part of an exclusive community of investors. Get instant updates on pre-IPO opportunities,
                market insights, and connect with fellow investors who share your financial goals.
              </motion.p>

              {/* Benefits */}
              <div className="space-y-4 mb-8 sm:mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 bg-navy-light/50 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-secondary-foreground/10 hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-foreground mb-1">{benefit.title}</h4>
                      <p className="text-xs sm:text-sm text-secondary-foreground/60">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg group"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                Join WhatsApp Community
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Background decoration */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl"
                />

                {/* Main card */}
                <div className="relative bg-navy-light/50 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center">
                      <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-secondary-foreground">Dhanacharya Investors</h3>
                      <p className="text-xs sm:text-sm text-secondary-foreground/60">Official Community Group</p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-secondary-foreground/5 rounded-xl border border-secondary-foreground/10">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm text-secondary-foreground">Daily market insights shared</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary-foreground/5 rounded-xl border border-secondary-foreground/10">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm text-secondary-foreground">Active investor discussions</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary-foreground/5 rounded-xl border border-secondary-foreground/10">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm text-secondary-foreground">Exclusive pre-IPO alerts</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-secondary-foreground/10">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-navy-light"
                        />
                      ))}
                      <div className="w-8 h-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center border-2 border-navy-light text-xs font-medium text-secondary-foreground/60">
                        +
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-secondary-foreground/60">Join growing community</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCommunity;
