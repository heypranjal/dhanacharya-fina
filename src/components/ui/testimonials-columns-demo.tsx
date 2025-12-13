import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text: "Dhanacharya helped me secure the perfect investment strategy for my business. Their expertise and personalized approach made all the difference.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rajesh Kumar",
    role: "Business Owner",
  },
  {
    text: "The team's dedication to understanding my financial goals was impressive. They created a customized plan that perfectly aligned with my needs.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "IT Professional",
  },
  {
    text: "Thanks to Dhanacharya's equity fund raising services, my startup secured the funding we needed to scale. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Vikram Patel",
    role: "Startup Founder",
  },
  {
    text: "Professional, trustworthy, and always available. Their corporate advisory services helped us navigate complex financial decisions.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Anita Reddy",
    role: "Healthcare Professional",
  },
  {
    text: "Their wealth management expertise transformed my portfolio. I've seen consistent growth while maintaining the risk level I'm comfortable with.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Suresh Menon",
    role: "Retired Executive",
  },
  {
    text: "The mutual fund recommendations were spot on. Their research-driven approach gave me confidence in my investment choices.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Kavitha Nair",
    role: "Software Engineer",
  },
  {
    text: "Exceptional service! They took the time to explain every aspect of my insurance options, helping me make informed decisions.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Arun Krishnan",
    role: "Small Business Owner",
  },
  {
    text: "Their corporate training programs elevated our team's financial literacy. A valuable investment for any organization.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Deepa Iyer",
    role: "HR Director",
  },
  {
    text: "From retirement planning to tax optimization, Dhanacharya provided comprehensive solutions that exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Mohan Rao",
    role: "Senior Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumnsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold tracking-tighter text-center text-foreground">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            See what our valued clients have to say about their experience with
            Dhanacharya.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export { TestimonialsColumnsSection };
