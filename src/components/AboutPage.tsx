import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Target, Eye, Heart, Lightbulb, Award, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency and honesty in every transaction."
    },
    {
      icon: Lightbulb,
      title: "Innovation", 
      description: "We leverage technology and creativity to deliver superior real estate solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We set high standards in service delivery and long-term value creation."
    },
    {
      icon: Users,
      title: "Sustainability",
      description: "We develop with the future in mind, creating communities that thrive."
    }
  ];

  const uniqueSellingPoints = [
    "Verified properties with zero hidden charges",
    "Affordable payment plans for every class of investor", 
    "Strategic locations that guarantee wealth growth",
    "Professional guidance from start to finish"
  ];

  const faqs = [
    {
      question: "Are your lands verified and free from government acquisition?",
      answer: "Yes. All our properties come with verified titles and proper documentation for peace of mind."
    },
    {
      question: "Do you offer installment payment plans?",
      answer: "Absolutely. We provide flexible and affordable payment options to suit different budgets."
    },
    {
      question: "Can I inspect the land before making payment?",
      answer: "Yes, inspections are encouraged. Our team is always ready to schedule guided visits."
    },
    {
      question: "Do you only sell land or also build houses?",
      answer: "We do both—land sales, housing projects, and property development."
    },
    {
      question: "Do you assist clients in the diaspora?",
      answer: "Yes, we specialize in helping Nigerians abroad secure verified properties back home."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-green)] to-[var(--brand-dark-green)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl mb-6">About Landley Properties</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              We don't just deal in real estate—we build lasting value
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-8 text-[var(--brand-green)]">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              At Landley Properties & Real Estate Development Limited, we don't just deal in real estate—we build lasting value. With a vision to transform lives and landscapes, we have grown into a trusted name in property brokerage, estate development, shortlets, and investment opportunities.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our team of seasoned professionals is passionate about helping individuals, families, and investors own real estate with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-l-4 border-l-[var(--brand-green)] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-[var(--brand-green)] mb-6" />
                  <h2 className="text-3xl mb-4 text-[var(--brand-green)]">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To simplify property ownership and investment by providing reliable, affordable, and sustainable 
                    real estate solutions tailored to meet the diverse needs of our clients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698065923333-de2f8d294f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBzaG93aW5nJTIwcHJvcGVydHl8ZW58MXx8fHwxNzU2MDU3Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Real Estate Professional"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-[var(--brand-green)]/20 rounded-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-l-4 border-l-[var(--brand-light-green)] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <Eye className="h-12 w-12 text-[var(--brand-light-green)] mb-6" />
                  <h2 className="text-3xl mb-4 text-[var(--brand-green)]">Our Vision</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be Africa's most trusted and innovative real estate company, transforming lives and landscapes 
                    through value-driven property solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These values guide everything we do and shape how we interact with our clients and communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-[var(--brand-green)] mx-auto mb-4" />
                    <h3 className="text-xl mb-3 text-[var(--brand-green)]">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
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
              Our Unique Edge
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              What sets us apart in the competitive real estate market
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {uniqueSellingPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start mb-6"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--brand-green)] rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white">✓</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Get answers to the most common questions about our services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-[var(--brand-green)] transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--brand-green)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Experience the Landley Difference
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of satisfied clients and discover why we're the trusted choice for real estate in Nigeria
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}