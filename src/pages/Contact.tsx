import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", description: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["D-127, Second Floor, Sector 10,", "Noida, Uttar Pradesh 201301"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 82853 63331", "+91 78382 31007"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@dhanacharya.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday to Sunday:", "9:00 AM – 9:00 PM"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/dhanacharya_advisors?igsh=MWk3NmM5OTF6YmYzbQ%3D%3D&utm_source=qr", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              Have questions about our services? We're here to help you achieve your financial goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Send Us a Message
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-600"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/50 border-border/50 focus:border-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/50 border-border/50 focus:border-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXX-XXX-XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/50 border-border/50 focus:border-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-foreground font-medium">
                    Case Description *
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Tell us about your financial goals or questions..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-muted/50 border-border/50 focus:border-primary rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                Contact Details
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-card rounded-2xl border border-border/50"
              >
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary group transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional placeholder) */}
      <section className="h-96 bg-muted/50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
            <p className="text-muted-foreground">
              D-127, Second Floor, Sector 10, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
