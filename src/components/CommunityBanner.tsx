import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, ArrowRight } from "lucide-react";

const CommunityBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const communityLink = "https://chat.whatsapp.com/Fsdo1Bxw7XUEq1ATO53izn";

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-secondary relative overflow-hidden">
      {/* Background decorations - matching website pattern */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-5 left-5 sm:left-10 w-32 sm:w-48 h-32 sm:h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-5 right-5 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-navy-light/30 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            {/* Left content */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Users className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-2 sm:mb-3">
                    Exclusive Community
                  </span>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-secondary-foreground mb-1 sm:mb-2"
                >
                  Join Our <span className="text-primary">Investor Community</span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xs sm:text-sm lg:text-base text-secondary-foreground/70 max-w-md"
                >
                  Get exclusive investment tips, market updates & connect with fellow investors
                </motion.p>
              </div>
            </div>

            {/* Right CTA button */}
            <motion.a
              href={communityLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full shadow-lg group transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-sm sm:text-base">Join Community</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityBanner;
