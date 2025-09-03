import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, CheckCircle, ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

interface ProjectsPageProps {
  onPageChange: (page: string) => void;
}

export function ProjectsPage({ onPageChange }: ProjectsPageProps) {
  const projects = [
    {
      name: "Landmark Parks & Gardens",
      location: "Ikanna Balogun",
      image: "https://images.unsplash.com/photo-1673203383692-69b05b01e5e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3NTYwNTM0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Your gateway to premium living and secure investment. This estate is strategically located, designed with modern infrastructure, and close to key developments.",
      details: "Perfect for both homeowners and investors.",
      features: [
        "✅ Secure title documents",
        "✅ Flexible payment options", 
        "✅ Prime location with high ROI potential"
      ],
      type: "Residential",
      price: "From ₦2.5M per plot",
      status: "Available"
    },
    {
      name: "Landmark Farm Estate",
      location: "Solomo-Asipa Owode", 
      image: "https://images.unsplash.com/photo-1737961120707-d836eeae9608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm0lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTYwNTM0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "An innovative estate merging agriculture with real estate.",
      details: "Investors enjoy both property appreciation and agribusiness opportunities, making it a unique wealth-building avenue.",
      features: [
        "✅ Affordable entry price",
        "✅ Ideal for agribusiness & landbanking",
        "✅ Strategic growth corridor with guaranteed value increase"
      ],
      type: "Agricultural",
      price: "From ₦1.8M per plot",
      status: "Limited Availability"
    }
  ];

  const whyInvest = [
    "100% verified and secure documentation",
    "Strategic locations that guarantee high appreciation", 
    "Affordable installment plans",
    "A thriving community of investors and homeowners"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--brand-green)] to-[var(--brand-dark-green)] text-white py-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="text-[var(--brand-light-green)]">Featured Projects</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our estates are more than properties—they are investments in lifestyle, growth, and financial freedom
            </motion.p>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
                Smart Real Estate Investment
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our estates are carefully planned, strategically located, and built with both comfort and 
                investment growth in mind. Each project offers not just land but a lifestyle and a financial opportunity.
              </p>
              <Button 
                className="bg-[var(--brand-green)] hover:bg-[var(--brand-dark-green)]"
                onClick={() => onPageChange('contact')}
              >
                Schedule Site Visit
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaW52ZXN0bWVudCUyMHBsYW5uaW5nfGVufDF8fHx8MTc1NjA1MzQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Real Estate Investment Planning"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-[var(--brand-green)]/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
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
              Available Properties
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our current portfolio of premium developments
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
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-t-4 border-t-[var(--brand-green)]">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-[var(--brand-green)] text-white px-3 py-1 rounded-full text-sm">
                          {project.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          project.status === 'Available' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-[var(--brand-green)] px-3 py-1 rounded-lg">
                          {project.price}
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
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                          >
                            <CheckCircle className="h-4 w-4 text-[var(--brand-green)] mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          className="bg-[var(--brand-green)] hover:bg-[var(--brand-dark-green)] flex-1"
                          onClick={() => onPageChange('contact')}
                        >
                          Get More Info
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-[var(--brand-green)] text-[var(--brand-green)] hover:bg-[var(--brand-green)] hover:text-white"
                          onClick={() => onPageChange('contact')}
                        >
                          Book Site Visit
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
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
              Why Invest in Our Projects?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {whyInvest.map((reason, index) => (
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
                <p className="text-lg text-gray-700 leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Testimonials
            </h2>
            <p className="text-lg text-gray-700">
              Hear from our satisfied clients and investors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Mr. Adewale A.",
                text: "Landley Properties made my first land purchase stress-free. Their transparency and support were top-notch. I now feel confident investing in real estate."
              },
              {
                name: "Mrs. Chidinma O.",
                text: "I was amazed at how professional and efficient their team was. They helped me secure a property with flexible payment options that suited my budget perfectly."
              },
              {
                name: "Tunde B.",
                text: "Their shortlet apartments are modern, clean, and very affordable. I'll definitely use them again on my next trip to Ogun State."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4 italic leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                    <p className="text-[var(--brand-green)]">
                      — {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
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
              Ready to Secure Your Investment?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't miss out on these premium opportunities. Contact us today to learn more about our available properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
                onClick={() => onPageChange('contact')}
              >
                Contact Us Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
                onClick={() => onPageChange('contact')}
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}