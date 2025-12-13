import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "Birla Sun Life",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Aditya_Birla_Group_Logo.svg/200px-Aditya_Birla_Group_Logo.svg.png",
  },
  {
    name: "ICICI Prudential",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/ICICI_Prudential_Life_Logo.svg/200px-ICICI_Prudential_Life_Logo.svg.png",
  },
  {
    name: "Tata Mutual Fund",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png",
  },
  {
    name: "SBI Life",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI_Life_Insurance_Logo.svg/200px-SBI_Life_Insurance_Logo.svg.png",
  },
  {
    name: "IDBI Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/IDBI_Bank_Logo.svg/200px-IDBI_Bank_Logo.svg.png",
  },
  {
    name: "HDFC Life",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/200px-HDFC_Bank_Logo.svg.png",
  },
  {
    name: "Axis Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/200px-Axis_Bank_logo.svg.png",
  },
  {
    name: "Kotak Mahindra",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kotak_Mahindra_Bank_logo.svg/200px-Kotak_Mahindra_Bank_logo.svg.png",
  },
  {
    name: "Reliance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Reliance_Industries_Logo.svg/200px-Reliance_Industries_Logo.svg.png",
  },
  {
    name: "Bajaj Finserv",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bajaj_Finserv_Logo.svg/200px-Bajaj_Finserv_Logo.svg.png",
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
              duration: 25,
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
              className="flex-shrink-0 bg-card rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-white flex items-center justify-center p-1.5 sm:p-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to first letter if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<span class="text-base sm:text-lg lg:text-xl font-heading font-bold text-primary">${partner.name.charAt(0)}</span>`;
                    }}
                  />
                </div>
                <span className="text-sm sm:text-base lg:text-lg font-medium text-foreground whitespace-nowrap">
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