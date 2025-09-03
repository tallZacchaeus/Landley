import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Phone, Mail, Clock, Building, Home, ArrowRight, Send } from 'lucide-react';

export function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "Innovation Hub, Redemption City, Ogun State",
      description: "Visit our modern office for in-person consultations"
    },
    {
      icon: Phone,
      title: "Phone Numbers", 
      details: "07064288437 / 07061962893",
      description: "Call us during business hours for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "landleyrealestate@gmail.com",
      description: "Send us your inquiries and we'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday: 8:00 AM - 6:00 PM",
      description: "Sunday: By appointment only"
    }
  ];

  const services = [
    {
      icon: Building,
      title: "Explore Available Properties",
      description: "Browse through our curated list of verified brokerage properties. We update our listings regularly to give you access to the best deals in residential, commercial, and mixed-use properties.",
      buttonText: "View Properties",
      buttonVariant: "default" as const
    },
    {
      icon: Home,
      title: "Explore Available Shortlets",
      description: "Explore our wide range of fully furnished shortlet apartments across Ogun and Lagos. Each apartment is carefully selected to give you comfort, convenience, and security.",
      buttonText: "Book Shortlet",
      buttonVariant: "outline" as const
    }
  ];

  const preferredMethods = [
    "Phone call (during business hours)"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--brand-green)] to-[var(--brand-dark-green)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl mb-6">Get in Touch</h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                We'd love to hear from you! Whether you're ready to invest, book a shortlet, or learn more about our services, our team is here to assist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
                >
                  Call Us Now
                  <Phone className="h-4 w-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
                >
                  Send Email
                  <Mail className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1682692597786-1ce3853e5cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjB0ZWFtJTIwaGVscGluZ3xlbnwxfHx8fDE3NTYwNTM0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Customer Service Team"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
              Contact Information
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-[var(--brand-green)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg mb-2 text-[var(--brand-green)]">{info.title}</h3>
                    <p className="text-gray-800 mb-2">{info.details}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-[var(--brand-green)]">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-2 text-gray-700">First Name</label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="block text-sm mb-2 text-gray-700">Last Name</label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Email Address</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Phone Number</label>
                      <Input type="tel" placeholder="+234 XXX XXX XXXX" />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Subject</label>
                      <Input placeholder="What is this regarding?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Message</label>
                      <Textarea 
                        placeholder="Tell us more about your inquiry..." 
                        rows={5}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[var(--brand-green)] hover:bg-[var(--brand-dark-green)]"
                    >
                      Send Message
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600339346882-5df07221e4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGNvbnRhY3R8ZW58MXx8fHwxNzU2MDQ4NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Landley Properties Office"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-[var(--brand-green)]/20 rounded-2xl"></div>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4 text-[var(--brand-green)]">Preferred Contact Methods</h3>
                  <div className="space-y-3">
                    {preferredMethods.map((method, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[var(--brand-green)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{method}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4 text-[var(--brand-green)]">Quick Response Guarantee</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We understand that time is valuable in real estate decisions. Our team is committed to 
                    responding to all inquiries within 2 hours during business hours and within 24 hours 
                    on weekends and holidays.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service CTAs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
              Ready to Explore?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Take the next step in your property journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-[var(--brand-green)] rounded-full p-3 mr-4">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl text-[var(--brand-green)]">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      variant={service.buttonVariant}
                      className={service.buttonVariant === 'default' 
                        ? "bg-[var(--brand-green)] hover:bg-[var(--brand-dark-green)] w-full" 
                        : "border-[var(--brand-green)] text-[var(--brand-green)] hover:bg-[var(--brand-green)] hover:text-white w-full"
                      }
                    >
                      {service.buttonText}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--brand-green)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Let's Make Your Property Dreams Reality
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you want to buy, sell, or invest, Landley has the right options for you. 
              Contact us today and let's get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now: 07064288437
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}