import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Phone, Mail, CheckCircle, ArrowRight, Home, Building, Users } from 'lucide-react';

export function ProjectsContactPage() {
  const projects = [
    {
      name: "Landmark Parks & Gardens",
      location: "Ikanna Balogun",
      image: "https://images.unsplash.com/photo-1688374635837-49296fcec87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGVzdGF0ZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1NjA1Mjk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Your gateway to premium living and secure investment. This estate is designed with modern infrastructure, good road networks, and proximity to key developments.",
      details: "Whether you want to build your dream home or hold for future returns, Landmark Parks & Gardens offers the perfect balance of luxury and long-term appreciation.",
      features: [
        "Secure title documents",
        "Flexible payment options",
        "Prime location with high ROI potential"
      ],
      type: "Residential"
    },
    {
      name: "Landmark Farm Estate",
      location: "Solomo-Asipa Owode",
      image: "https://images.unsplash.com/photo-1724048413085-1c8d81b3ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZXN0YXRlJTIwbGFuZHxlbnwxfHx8fDE3NTYwNTI5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "A one-of-a-kind estate that merges agriculture with real estate, offering both living spaces and farming opportunities.",
      details: "Investors in Landmark Farm Estate enjoy the dual benefit of property appreciation and agribusiness potential. Perfect for forward-thinkers who want to diversify and grow their wealth.",
      features: [
        "Affordable entry price",
        "Ideal for agribusiness & landbanking",
        "Strategic growth corridor with guaranteed value increase"
      ],
      type: "Agricultural"
    }
  ];

  const whyInvest = [
    "100% verified and secure documentation",
    "Strategic locations that guarantee high appreciation",
    "Affordable and flexible installment plans",
    "Opportunity to join a thriving community of investors and homeowners"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-green)] to-[var(--brand-dark-green)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl mb-6">Our Projects & Contact</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Discover premium estates designed for modern living and smart investment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
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
              Our Featured Projects
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our estates are carefully planned, strategically located, and built with both comfort and investment growth in mind
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[var(--brand-green)] text-white px-3 py-1 rounded-full text-sm">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center mb-4">
                        <MapPin className="h-5 w-5 text-[var(--brand-green)] mr-2" />
                        <span className="text-gray-600">{project.location}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl mb-4 text-[var(--brand-green)]">
                        {project.name}
                      </h3>
                      
                      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.details}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-[var(--brand-green)] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-fit bg-[var(--brand-green)] hover:bg-[var(--brand-dark-green)]">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
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
              Why Invest in Our Projects?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyInvest.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--brand-green)] rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white">✓</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ready to start your property journey? Get in touch with our expert team today
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-[var(--brand-green)]">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-[var(--brand-green)] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">
                          Innovation Hub, Redemption City, Ogun State
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-[var(--brand-green)] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">07064288437</p>
                        <p className="text-gray-700">07061962893</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-[var(--brand-green)] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">landleyrealestate@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg mb-4 text-[var(--brand-green)]">Preferred Contact Methods</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Phone call during business hours</li>
                      <li>• WhatsApp chat for quick responses</li>
                      <li>• Email for official inquiries and documentation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Building className="h-8 w-8 text-[var(--brand-green)] mr-4" />
                    <h3 className="text-2xl text-[var(--brand-green)]">Explore Available Properties</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Looking for your next property investment or dream home? Browse through our curated list of verified brokerage properties. 
                    We update our listings regularly to give you access to the best deals in residential, commercial, and mixed-use properties.
                  </p>
                  <Button className="bg-[var(--brand-green)] hover:bg-[var(--brand-dark-green)]">
                    Explore Properties Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Home className="h-8 w-8 text-[var(--brand-green)] mr-4" />
                    <h3 className="text-2xl text-[var(--brand-green)]">Explore Available Shortlets</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Need a temporary stay that feels like home? Explore our wide range of fully furnished shortlet apartments across Ogun and Lagos. 
                    Each apartment is carefully selected to give you comfort, convenience, and security at an affordable rate.
                  </p>
                  <Button variant="outline" className="border-[var(--brand-green)] text-[var(--brand-green)] hover:bg-[var(--brand-green)] hover:text-white">
                    Book a Shortlet Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[var(--brand-green)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Your Dream Property Awaits
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you want to buy, sell, or invest, Landley has the right options for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
              >
                Contact Us Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[var(--brand-green)]"
              >
                Schedule Site Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}