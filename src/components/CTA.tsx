import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">
              Ready to Grow Your{" "}
              <span className="text-primary">Wealth?</span>
            </h2>
            <p className="text-xl text-secondary-foreground/70 mb-12 max-w-2xl mx-auto">
              Take the first step towards financial freedom. Contact our experts today for a free consultation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.a
              href="tel:+919866052111"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-navy-light/50 backdrop-blur-sm rounded-2xl px-8 py-5 border border-secondary-foreground/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-secondary-foreground/60">Hyderabad</p>
                <p className="text-lg font-semibold text-secondary-foreground">+91 98660 52111</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+918666052111"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-navy-light/50 backdrop-blur-sm rounded-2xl px-8 py-5 border border-secondary-foreground/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-sm text-secondary-foreground/60">Vijayawada</p>
                <p className="text-lg font-semibold text-secondary-foreground">+91 86660 52111</p>
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 rounded-full text-lg group"
            >
              Schedule a Consultation
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;