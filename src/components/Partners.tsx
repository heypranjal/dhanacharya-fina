import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "Tata Mutual Fund",
    logo: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767796028/tata_xqmidd.png",
  },
  {
    name: "SBI Mutual Fund",
    logo: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767795624/sbi_qlyrfh.png",
  },
  {
    name: "Aditya Birla Sun Life Mutual Fund",
    logo: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767792772/birla_npfexw.jpg",
  },
  {
    name: "UTI Mutual Fund",
    logo: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767796028/uti_r93elq.jpg",
  },
  {
    name: "ICICI Prudential Mutual Fund",
    logo: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767796028/icici_nykobj.jpg",
  },
  {
    name: "Indiabulls Mutual Fund",
    logo: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767796273/indiabulls_bsvaw6.png",
  },
  {
    name: "HDFC Mutual Fund",
    logo: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767796274/hdfc_p5pjab.png",
  },
  {
    name: "Reliance Mutual Fund",
    logo: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767796274/reliance_iy5fzc.avif",
  },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Our Partners
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
            Trusted <span className="text-primary">Partnerships</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-2">
            We work with leading financial institutions to bring you the best solutions
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-4 sm:gap-6 lg:gap-8"
          animate={{ x: [0, -50 * partners.length] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          {/* Duplicate partners for seamless loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-16 sm:w-32 sm:h-20 lg:w-40 lg:h-24 bg-white rounded-lg flex items-center justify-center p-3 sm:p-4 shadow-sm">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<span class="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary">${partner.name.split(' ')[0].charAt(0)}${partner.name.split(' ').length > 1 ? partner.name.split(' ')[1].charAt(0) : ''}</span>`;
                    }}
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground text-center max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] line-clamp-2">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;