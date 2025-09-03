import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { HandHeart, Home, Building, Landmark, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  const services = [
    {
      icon: HandHeart,
      title: "Property Brokerage",
      description: "Buying, selling, or leasing? Our brokerage services guarantee you a stress-free experience.",
      details: "We carefully vet all properties, ensure proper documentation, and negotiate the best deals to help you save time and avoid risks.",
      features: [
        "Verified property listings",
        "Proper documentation ensured",
        "Expert negotiation",
        "Risk-free transactions"
      ]
    },
    {
      icon: Home,
      title: "Shortlets",
      description: "Discover comfort away from home with our furnished shortlet apartments.",
      details: "Strategically located in Ogun and Lagos, our apartments are perfect for business travelers, tourists, and families. Affordable, modern, and secure—short-term living has never been easier.",
      features: [
        "Furnished apartments",
        "Strategic locations",
        "Affordable pricing",
        "Modern and secure"
      ]
    },
    {
      icon: Building,
      title: "Property Development",
      description: "From residential estates to commercial complexes, we design and deliver properties that combine beauty, durability, and growth potential.",
      details: "Every development reflects our commitment to infrastructure, modern living, and long-term value.",
      features: [
        "Residential estates",
        "Commercial complexes",
        "Modern infrastructure",
        "Long-term value focus"
      ]
    },
    {
      icon: Landmark,
      title: "Landbanking",
      description: "Land is wealth. We help you secure prime lands in fast-growing areas with flexible payment options.",
      details: "With Landley, your land appreciates in value while you build wealth for future generations.",
      features: [
        "Prime land locations",
        "Flexible payment options",
        "Fast-growing areas",
        "Generational wealth building"
      ]
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
            <h1 className="text-4xl md:text-6xl mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              We go beyond selling land—we provide opportunities that secure your future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Landley Properties, we go beyond selling land—we provide opportunities that secure your future. Our services are designed to serve individuals, families, and investors of all levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-[var(--brand-green)]">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-[var(--brand-green)] rounded-full p-3 mr-4">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl text-[var(--brand-green)]">{service.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.details}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <CheckCircle className="h-5 w-5 text-[var(--brand-green)] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Landley */}
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
              Why Choose Landley Services?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Because we combine affordability, credibility, and guaranteed appreciation, giving you more than just a property—we give you a future.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="lg:col-span-2"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl mb-3 text-[var(--brand-green)]">Affordability</h3>
                  <p className="text-gray-600 leading-relaxed">Flexible payment plans and competitive pricing make our services accessible to all classes of investors.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659720879195-d5a108231648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU2MDU3MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Home Interior"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-[var(--brand-green)]/20 rounded-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2 relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626385785701-a0d3b879de2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBkZXZlbG9wbWVudCUyMHNpdGV8ZW58MXx8fHwxNzU2MDU3MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction Development"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-[var(--brand-green)]/20 rounded-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl mb-3 text-[var(--brand-green)]">Credibility</h3>
                  <p className="text-gray-600 leading-relaxed">Verified properties, secure documentation, and transparent processes you can trust completely.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl mb-3 text-[var(--brand-green)]">Guaranteed Appreciation</h3>
                  <p className="text-gray-600 leading-relaxed">Strategic locations and quality developments ensure your investment grows significantly over time.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
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
              How We Work
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our streamlined process ensures a smooth experience from initial consultation to property handover
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We understand your needs and budget requirements" },
              { step: "02", title: "Property Search", description: "We find the perfect properties matching your criteria" },
              { step: "03", title: "Verification", description: "All properties are thoroughly verified for authenticity" },
              { step: "04", title: "Transaction", description: "Secure payment processing and documentation" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-[var(--brand-green)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl mb-3 text-[var(--brand-green)]">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
                {index < 3 && (
                  <ArrowRight className="h-6 w-6 text-[var(--brand-green)] mx-auto mt-4 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
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
              Ready to Experience Our Premium Services?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you find the perfect property or investment opportunity that matches your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
                onClick={() => onPageChange('projects')}
              >
                View Our Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
                onClick={() => onPageChange('projects')}
              >
                Contact Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}