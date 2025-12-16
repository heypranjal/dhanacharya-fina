import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text: "Prompt, helpful, knowledgable and informative! Kunal and the team were great. We appreciated all of their efforts, they went above and beyond to ensure we were happy with everything and were extremely helpful through every step of the process!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Ruchika Handa",
    role: "Journalist",
  },
  {
    text: "DhanAcharya team provides an excellent service, be it on a business or on a personal level. I have found the company's advice regarding investment opportunities particularly helpful – everything is explained fully, no matter how complex the subject.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Vipin Sehgal",
    role: "Senior Advocate",
  },
  {
    text: "These guys from DhanAcharya Advisors made the process of buying our dream home possible! We can't thank them enough. From the moment we found the house to the moment we moved in they were very helpful in every step of the way.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Mahender Kataria",
    role: "Businessman & Politician",
  },
  {
    text: "UnlistedZone has worked with Dhawal Pant from Dhanachharya Advisors for buying and selling unlisted shares, and we have found the team to be extremely professional. Based on our experience, we would confidently recommend engaging with them without any hesitation.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Umesh Paliwal",
    role: "UnlistedZone",
  },
  {
    text: "We had a fantastic experience working with Dhanacharya Advisors LLP. Their team is highly professional, responsive, and deeply knowledgeable. They guided us through a complex transaction with confidence and clarity. We especially appreciated their strategic insights and ability to negotiate favorable terms. Highly recommended for anyone seeking top-tier investment banking support.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Rajesh Garg",
    role: "Client",
  },
  {
    text: "Dhawal and team are very proactive in searching for new ideas as well as understanding industry trends which together with a strong and growing network provides a very powerful value proposition for clients.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Sasha Sanwal",
    role: "Client",
  },
  {
    text: "Dhawal and Kunal make an excellent duo. They are extremely hardworking and well networked into financial fraternity. Best thing is they complete all assignments they sign on. Best Wishes to them.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Vipin Aggarwal",
    role: "Client",
  },
  {
    text: "Great people, in depth knowledge and the Skin in the game philosophy sets Dhanacharya aparts and especially founders are gems of persons.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Zakir Hussain",
    role: "Client",
  },
  {
    text: "Excellent guys to work with, indepth market knowledge and great industry connects.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Harish Lakhera",
    role: "Client",
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
