import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 lg:py-32 bg-secondary relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6 px-2">
              Ready to Grow Your{" "}
              <span className="text-primary">Wealth?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-foreground/70 mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-2">
              Take the first step towards financial freedom. Contact our experts today for a free consultation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12"
          >
            {/* <motion.a
              href="tel:+919866052111"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 sm:gap-4 bg-navy-light/50 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 border border-secondary-foreground/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm text-secondary-foreground/60">Noida</p>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-secondary-foreground">+91 98660 52111</p>
              </div>
            </motion.a> */}

            {/* <motion.a
              href="tel:+918666052111"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 sm:gap-4 bg-navy-light/50 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 border border-secondary-foreground/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm text-secondary-foreground/60">Vijayawada</p>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-secondary-foreground">+91 86660 52111</p>
              </div>
            </motion.a> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-full text-sm sm:text-base lg:text-lg group"
              asChild
            >
              <Link to="/contact">
                Schedule a Consultation
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;