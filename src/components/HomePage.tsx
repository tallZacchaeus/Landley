import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Building2, TrendingUp, Shield, Star, Users, Home, Target, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageCarousel } from './ImageCarousel';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjA1NTMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury Modern House",
      title: "Building Dreams. Securing Futures. Creating Wealth Through Real Estate.",
      subtitle: "Your trusted partner in property ownership, development, and investment"
    },
    {
      src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTYwNTcyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Modern Apartment Building",
      title: "Making Property Ownership Simple & Rewarding", 
      subtitle: "Whether buying your first plot or seeking high-return investments, we make the journey easy and profitable"
    },
    {
      src: "https://images.unsplash.com/photo-1726341034445-658d368c334a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaW52ZXN0bWVudCUyMHNreXNjcmFwZXJ8ZW58MXx8fHwxNzU2MDU3MjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Investment Skyscraper",
      title: "Premium Investment Opportunities",
      subtitle: "Strategic locations with guaranteed ROI for savvy property investors"
    },
    {
      src: "https://images.unsplash.com/photo-1709106740324-9f861038ffc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzdWJ1cmJhbiUyMGVzdGF0ZXxlbnwxfHx8fDE3NTYwNTcyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Beautiful Suburban Estate",
      title: "Shortlet Accommodation",
      subtitle: "Modern, furnished apartments for business travelers and families"
    },
    {
      src: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTU5NzU1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury Villa Architecture",
      title: "Property Development Excellence",
      subtitle: "Custom developments that combine beauty, durability, and long-term value"
    }
  ];

  const testimonials = [
    {
      name: "Mr. Adewale A.",
      text: "Landley Properties made my first land purchase stress-free. Their transparency and support were top-notch. I now feel confident investing in real estate.",
      rating: 5
    },
    {
      name: "Mrs. Chidinma O.",
      text: "I was amazed at how professional and efficient their team was. They helped me secure a property with flexible payment options that suited my budget perfectly.",
      rating: 5
    },
    {
      name: "Tunde B.",
      text: "Their shortlet apartments are modern, clean, and very affordable. I'll definitely use them again on my next trip to Ogun State.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Image Carousel */}
      <section className="relative">
        <ImageCarousel images={carouselImages} />
        
        {/* CTA Overlay */}
        <div className="absolute bottom-32 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-[var(--brand-green)] text-white hover:bg-[var(--brand-dark-green)] shadow-xl"
                onClick={() => onPageChange('projects')}
              >
                Explore Our Properties
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[var(--brand-green)] shadow-xl"
                onClick={() => onPageChange('services')}
              >
                Book a Shortlet
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
              Our Track Record Speaks
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Data-driven insights showcasing our impact in the Nigerian real estate market
            </p>
          </motion.div>

          {/* Key Performance Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, label: "Happy Clients", value: "500+", color: "text-blue-600" },
              { icon: Home, label: "Properties Sold", value: "750+", color: "text-green-600" },
              { icon: Target, label: "Average ROI", value: "45%", color: "text-purple-600" },
              { icon: Award, label: "Years Experience", value: "8+", color: "text-orange-600" }
            ].map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <kpi.icon className={`h-8 w-8 mx-auto mb-3 ${kpi.color}`} />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</div>
                    <div className="text-sm text-gray-600">{kpi.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Property Value Appreciation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[var(--brand-green)]">Property Value Appreciation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={[
                      { year: '2019', value: 100, market: 95 },
                      { year: '2020', value: 118, market: 102 },
                      { year: '2021', value: 135, market: 115 },
                      { year: '2022', value: 152, market: 125 },
                      { year: '2023', value: 178, market: 138 },
                      { year: '2024', value: 205, market: 148 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value, name) => [`${value}%`, name === 'value' ? 'Our Properties' : 'Market Average']} />
                      <Area type="monotone" dataKey="value" stackId="1" stroke="var(--brand-green)" fill="var(--brand-green)" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="market" stackId="2" stroke="#94A3B8" fill="#94A3B8" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sales Performance */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[var(--brand-green)]">Monthly Sales Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={[
                      { month: 'Jan', sales: 45, target: 40 },
                      { month: 'Feb', sales: 52, target: 45 },
                      { month: 'Mar', sales: 38, target: 42 },
                      { month: 'Apr', sales: 61, target: 48 },
                      { month: 'May', sales: 55, target: 50 },
                      { month: 'Jun', sales: 67, target: 52 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sales" fill="var(--brand-green)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="target" fill="var(--brand-light-green)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Location Performance & Client Satisfaction */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Property Distribution by Location */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[var(--brand-green)]">Property Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Ikanna Balogun', value: 35, color: 'var(--brand-green)' },
                          { name: 'Solomo-Asipa', value: 28, color: 'var(--brand-light-green)' },
                          { name: 'Redemption City', value: 20, color: '#10B981' },
                          { name: 'Other Areas', value: 17, color: '#6EE7B7' }
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {[
                          { name: 'Ikanna Balogun', value: 35, color: 'var(--brand-green)' },
                          { name: 'Solomo-Asipa', value: 28, color: 'var(--brand-light-green)' },
                          { name: 'Redemption City', value: 20, color: '#10B981' },
                          { name: 'Other Areas', value: 17, color: '#6EE7B7' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Client Satisfaction Trends */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[var(--brand-green)]">Client Satisfaction Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={[
                      { month: 'Jan', satisfaction: 4.2, reviews: 45 },
                      { month: 'Feb', satisfaction: 4.4, reviews: 52 },
                      { month: 'Mar', satisfaction: 4.3, reviews: 38 },
                      { month: 'Apr', satisfaction: 4.6, reviews: 61 },
                      { month: 'May', satisfaction: 4.7, reviews: 55 },
                      { month: 'Jun', satisfaction: 4.8, reviews: 67 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[3.5, 5]} />
                      <Tooltip formatter={(value) => [`${value}/5.0`, 'Satisfaction Score']} />
                      <Line 
                        type="monotone" 
                        dataKey="satisfaction" 
                        stroke="var(--brand-green)" 
                        strokeWidth={3}
                        dot={{ fill: 'var(--brand-green)', strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, fill: 'var(--brand-dark-green)' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Market Insights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-light-green)] text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <TrendingUp className="h-8 w-8 mx-auto mb-3" />
                    <h3 className="text-xl mb-2">Market Growth</h3>
                    <p className="text-white/90">Ogun State property market has grown 25% annually over the past 3 years</p>
                  </div>
                  <div>
                    <Building2 className="h-8 w-8 mx-auto mb-3" />
                    <h3 className="text-xl mb-2">Infrastructure Development</h3>
                    <p className="text-white/90">Major infrastructure projects increasing property values in our locations</p>
                  </div>
                  <div>
                    <Shield className="h-8 w-8 mx-auto mb-3" />
                    <h3 className="text-xl mb-2">Investment Security</h3>
                    <p className="text-white/90">All properties backed by verified documentation and government approvals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            <h2 className="text-3xl md:text-4xl mb-8 text-[var(--brand-green)]">
              Welcome to Landley Properties & Real Estate Development Limited
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Your trusted partner in property ownership, development, and investment. We are a forward-thinking real estate company committed to making property ownership simple, transparent, and rewarding.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Whether you are buying your first plot of land, seeking high-return investment opportunities, or searching for a short-term rental, Landley makes the journey easy, reliable, and profitable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Us?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Affordable and flexible payment plans",
                description: "We offer payment solutions that work for every budget and investment level"
              },
              {
                title: "Verified properties with secure documentation", 
                description: "All properties come with proper titles and verified legal documentation"
              },
              {
                title: "Professional expertise with a client-first approach",
                description: "Our experienced team puts your needs and goals at the center of everything we do"
              },
              {
                title: "Properties in strategic locations with guaranteed ROI",
                description: "Prime locations selected for maximum appreciation and investment returns"
              },
              {
                title: "A reputation built on trust, integrity, and excellence",
                description: "Years of proven track record in delivering exceptional real estate experiences"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-[var(--brand-green)]">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[var(--brand-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <h3 className="text-lg mb-3 text-[var(--brand-green)]">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
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
              Company Overview
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We are a dynamic, forward-thinking company dedicated to delivering exceptional value in property brokerage, 
              real estate development, and investment opportunities. At Landley, we believe that owning land and properties 
              should be simple, transparent, and rewarding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Transparency",
                description: "Building trust through transparency and honesty in every transaction with verified properties and secure documentation."
              },
              {
                icon: TrendingUp,
                title: "Investment Growth",
                description: "Strategic locations that guarantee high returns on investment with flexible payment plans for all classes of investors."
              },
              {
                icon: Building2,
                title: "Professional Excellence",
                description: "A team of seasoned professionals with proven expertise delivering beyond promises with superior customer service."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-t-4 border-t-[var(--brand-green)] hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-[var(--brand-green)] mx-auto mb-4" />
                    <h3 className="text-xl mb-3 text-[var(--brand-green)]">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-light-green)] rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              With a blend of professionalism, market expertise, and integrity, we are shaping communities, 
              creating wealth opportunities, and helping individuals and families find their dream properties.
            </p>
          </motion.div>
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic leading-relaxed">
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
              Ready to Start Your Property Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have found their dream properties with Landley
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
                onClick={() => onPageChange('projects')}
              >
                👉 Explore Our Properties
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
                onClick={() => onPageChange('services')}
              >
                👉 Book a Shortlet
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-[var(--brand-green)] hover:bg-gray-100"
                onClick={() => onPageChange('contact')}
              >
                👉 Contact Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}