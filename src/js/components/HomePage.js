import { ImageCarousel } from './ImageCarousel.js';

export class HomePage {
  constructor() {
    this.carouselImages = [
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

    this.testimonials = [
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

    this.chartData = {
      propertyAppreciation: [
        { year: '2019', value: 100, market: 95 },
        { year: '2020', value: 118, market: 102 },
        { year: '2021', value: 135, market: 115 },
        { year: '2022', value: 152, market: 125 },
        { year: '2023', value: 178, market: 138 },
        { year: '2024', value: 205, market: 148 }
      ],
      salesPerformance: [
        { month: 'Jan', sales: 45, target: 40 },
        { month: 'Feb', sales: 52, target: 45 },
        { month: 'Mar', sales: 38, target: 42 },
        { month: 'Apr', sales: 61, target: 48 },
        { month: 'May', sales: 55, target: 50 },
        { month: 'Jun', sales: 67, target: 52 }
      ],
      propertyDistribution: [
        { name: 'Ikanna Balogun', value: 35, color: '#228B22' },
        { name: 'Solomo-Asipa', value: 28, color: '#32CD32' },
        { name: 'Redemption City', value: 20, color: '#10B981' },
        { name: 'Other Areas', value: 17, color: '#6EE7B7' }
      ],
      clientSatisfaction: [
        { month: 'Jan', satisfaction: 4.2 },
        { month: 'Feb', satisfaction: 4.4 },
        { month: 'Mar', satisfaction: 4.3 },
        { month: 'Apr', satisfaction: 4.6 },
        { month: 'May', satisfaction: 4.7 },
        { month: 'Jun', satisfaction: 4.8 }
      ]
    };
  }

  createAreaChart(canvas, data, primaryKey, secondaryKey) {
    const ctx = canvas.getContext('2d');
    const padding = 40;
    const width = canvas.width - 2 * padding;
    const height = canvas.height - 2 * padding;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get data ranges
    const maxValue = Math.max(...data.map(d => Math.max(d[primaryKey], d[secondaryKey])));
    const minValue = Math.min(...data.map(d => Math.min(d[primaryKey], d[secondaryKey])));

    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding + (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + width, y);
      ctx.stroke();
    }

    // Draw areas
    this.drawArea(ctx, data, primaryKey, maxValue, minValue, width, height, padding, '#228B22', 0.6);
    this.drawArea(ctx, data, secondaryKey, maxValue, minValue, width, height, padding, '#94A3B8', 0.3);

    // Draw axes labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px Inter';
    data.forEach((d, i) => {
      const x = padding + (width / (data.length - 1)) * i;
      ctx.fillText(d.year, x - 10, canvas.height - 10);
    });
  }

  drawArea(ctx, data, key, maxValue, minValue, width, height, padding, color, opacity) {
    const gradient = ctx.createLinearGradient(0, padding, 0, padding + height);
    gradient.addColorStop(0, color + Math.round(opacity * 255).toString(16).padStart(2, '0'));
    gradient.addColorStop(1, color + '00');

    ctx.fillStyle = gradient;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    ctx.beginPath();
    data.forEach((d, i) => {
      const x = padding + (width / (data.length - 1)) * i;
      const y = padding + height - ((d[key] - minValue) / (maxValue - minValue)) * height;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    // Close the path for area fill
    const lastX = padding + width;
    const baseY = padding + height;
    ctx.lineTo(lastX, baseY);
    ctx.lineTo(padding, baseY);
    ctx.closePath();
    ctx.fill();

    // Draw the line
    ctx.beginPath();
    data.forEach((d, i) => {
      const x = padding + (width / (data.length - 1)) * i;
      const y = padding + height - ((d[key] - minValue) / (maxValue - minValue)) * height;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
  }

  createBarChart(canvas, data) {
    const ctx = canvas.getContext('2d');
    const padding = 40;
    const width = canvas.width - 2 * padding;
    const height = canvas.height - 2 * padding;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maxValue = Math.max(...data.map(d => Math.max(d.sales, d.target)));
    const barWidth = width / (data.length * 2.5);

    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding + (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + width, y);
      ctx.stroke();
    }

    // Draw bars
    data.forEach((d, i) => {
      const x = padding + (width / data.length) * i + barWidth * 0.2;
      
      // Sales bar
      const salesHeight = (d.sales / maxValue) * height;
      ctx.fillStyle = '#228B22';
      ctx.fillRect(x, padding + height - salesHeight, barWidth, salesHeight);
      
      // Target bar
      const targetHeight = (d.target / maxValue) * height;
      ctx.fillStyle = '#32CD32';
      ctx.fillRect(x + barWidth + 5, padding + height - targetHeight, barWidth, targetHeight);
      
      // Month label
      ctx.fillStyle = '#6b7280';
      ctx.font = '12px Inter';
      ctx.fillText(d.month, x + barWidth / 2 - 5, canvas.height - 10);
    });
  }

  createPieChart(canvas, data) {
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const total = data.reduce((sum, d) => sum + d.value, 0);
    let currentAngle = -Math.PI / 2;

    data.forEach((d, i) => {
      const sliceAngle = (d.value / total) * 2 * Math.PI;
      
      // Draw pie slice
      ctx.fillStyle = d.color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fill();

      // Draw label
      const labelAngle = currentAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(labelAngle) * (radius + 15);
      const labelY = centerY + Math.sin(labelAngle) * (radius + 15);
      
      ctx.fillStyle = '#374151';
      ctx.font = '11px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(`${d.name} ${Math.round((d.value / total) * 100)}%`, labelX, labelY);

      currentAngle += sliceAngle;
    });
  }

  createLineChart(canvas, data) {
    const ctx = canvas.getContext('2d');
    const padding = 40;
    const width = canvas.width - 2 * padding;
    const height = canvas.height - 2 * padding;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maxValue = 5;
    const minValue = 3.5;

    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding + (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + width, y);
      ctx.stroke();
    }

    // Draw line
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((d, i) => {
      const x = padding + (width / (data.length - 1)) * i;
      const y = padding + height - ((d.satisfaction - minValue) / (maxValue - minValue)) * height;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      
      // Draw dots
      ctx.fillStyle = '#228B22';
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.fill();
    });

    ctx.stroke();

    // Draw month labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px Inter';
    data.forEach((d, i) => {
      const x = padding + (width / (data.length - 1)) * i;
      ctx.fillText(d.month, x - 10, canvas.height - 10);
    });
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Initialize charts when they come into view
          if (entry.target.classList.contains('chart-container')) {
            this.initializeCharts();
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  initializeCharts() {
    // Property Appreciation Chart
    const appreciationCanvas = document.getElementById('appreciation-chart');
    if (appreciationCanvas) {
      appreciationCanvas.width = appreciationCanvas.offsetWidth;
      appreciationCanvas.height = 300;
      this.createAreaChart(appreciationCanvas, this.chartData.propertyAppreciation, 'value', 'market');
    }

    // Sales Performance Chart
    const salesCanvas = document.getElementById('sales-chart');
    if (salesCanvas) {
      salesCanvas.width = salesCanvas.offsetWidth;
      salesCanvas.height = 300;
      this.createBarChart(salesCanvas, this.chartData.salesPerformance);
    }

    // Property Distribution Chart
    const distributionCanvas = document.getElementById('distribution-chart');
    if (distributionCanvas) {
      distributionCanvas.width = distributionCanvas.offsetWidth;
      distributionCanvas.height = 300;
      this.createPieChart(distributionCanvas, this.chartData.propertyDistribution);
    }

    // Client Satisfaction Chart
    const satisfactionCanvas = document.getElementById('satisfaction-chart');
    if (satisfactionCanvas) {
      satisfactionCanvas.width = satisfactionCanvas.offsetWidth;
      satisfactionCanvas.height = 300;
      this.createLineChart(satisfactionCanvas, this.chartData.clientSatisfaction);
    }
  }

  render() {
    return `
      <div class="min-h-screen pt-20">
        <!-- Hero Section with Image Carousel -->
        <section class="relative">
          <div id="hero-carousel"></div>
          
          <!-- CTA Overlay -->
          <div class="absolute bottom-32 left-0 right-0 z-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-800 delay-600">
                <button class="bg-[var(--brand-green)] text-white hover:bg-[var(--brand-dark-green)] shadow-xl px-8 py-3 rounded-lg transition-colors duration-300" onclick="window.router.navigate('projects')">
                  Explore Our Properties
                </button>
                <button class="border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[var(--brand-green)] shadow-xl px-8 py-3 rounded-lg border transition-all duration-300" onclick="window.router.navigate('services')">
                  Book a Shortlet
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Statistics Dashboard -->
        <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-800">
              <h2 class="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
                Our Track Record Speaks
              </h2>
              <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Data-driven insights showcasing our impact in the Nigerian real estate market
              </p>
            </div>

            <!-- Key Performance Indicators -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              ${[
                { icon: "👥", label: "Happy Clients", value: "500+", color: "text-blue-600" },
                { icon: "🏠", label: "Properties Sold", value: "750+", color: "text-green-600" },
                { icon: "🎯", label: "Average ROI", value: "45%", color: "text-purple-600" },
                { icon: "🏆", label: "Years Experience", value: "8+", color: "text-orange-600" }
              ].map((kpi, index) => `
                <div class="animate-on-scroll opacity-0 scale-90 transition-all duration-600" style="transition-delay: ${index * 100}ms">
                  <div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border">
                    <div class="pt-6 pb-6 px-6 text-center">
                      <div class="text-2xl mb-3">${kpi.icon}</div>
                      <div class="text-2xl font-bold text-gray-900 mb-1">${kpi.value}</div>
                      <div class="text-sm text-gray-600">${kpi.label}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Charts Section -->
            <div class="grid lg:grid-cols-2 gap-8 mb-12 chart-container">
              <!-- Property Value Appreciation -->
              <div class="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-800">
                <div class="bg-white rounded-lg shadow-sm border">
                  <div class="p-6 border-b">
                    <h3 class="text-lg font-medium text-[var(--brand-green)]">Property Value Appreciation</h3>
                  </div>
                  <div class="p-6">
                    <canvas id="appreciation-chart" class="w-full h-[300px]"></canvas>
                  </div>
                </div>
              </div>

              <!-- Sales Performance -->
              <div class="animate-on-scroll opacity-0 translate-x-12 transition-all duration-800">
                <div class="bg-white rounded-lg shadow-sm border">
                  <div class="p-6 border-b">
                    <h3 class="text-lg font-medium text-[var(--brand-green)]">Monthly Sales Performance</h3>
                  </div>
                  <div class="p-6">
                    <canvas id="sales-chart" class="w-full h-[300px]"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location Performance & Client Satisfaction -->
            <div class="grid lg:grid-cols-2 gap-8">
              <!-- Property Distribution by Location -->
              <div class="animate-on-scroll opacity-0 translate-y-12 transition-all duration-800">
                <div class="bg-white rounded-lg shadow-sm border">
                  <div class="p-6 border-b">
                    <h3 class="text-lg font-medium text-[var(--brand-green)]">Property Distribution</h3>
                  </div>
                  <div class="p-6">
                    <canvas id="distribution-chart" class="w-full h-[300px]"></canvas>
                  </div>
                </div>
              </div>

              <!-- Client Satisfaction Trends -->
              <div class="animate-on-scroll opacity-0 translate-y-12 transition-all duration-800 delay-200">
                <div class="bg-white rounded-lg shadow-sm border">
                  <div class="p-6 border-b">
                    <h3 class="text-lg font-medium text-[var(--brand-green)]">Client Satisfaction Score</h3>
                  </div>
                  <div class="p-6">
                    <canvas id="satisfaction-chart" class="w-full h-[300px]"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <!-- Market Insights -->
            <div class="mt-12 animate-on-scroll opacity-0 translate-y-12 transition-all duration-800">
              <div class="bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-light-green)] text-white rounded-lg">
                <div class="p-8">
                  <div class="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div class="text-2xl mb-3">📈</div>
                      <h3 class="text-xl mb-2">Market Growth</h3>
                      <p class="text-white/90">Ogun State property market has grown 25% annually over the past 3 years</p>
                    </div>
                    <div>
                      <div class="text-2xl mb-3">🏗️</div>
                      <h3 class="text-xl mb-2">Infrastructure Development</h3>
                      <p class="text-white/90">Major infrastructure projects increasing property values in our locations</p>
                    </div>
                    <div>
                      <div class="text-2xl mb-3">🛡️</div>
                      <h3 class="text-xl mb-2">Investment Security</h3>
                      <p class="text-white/90">All properties backed by verified documentation and government approvals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Introduction -->
        <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-800">
              <h2 class="text-3xl md:text-4xl mb-8 text-[var(--brand-green)]">
                Welcome to Landley Properties & Real Estate Development Limited
              </h2>
              <p class="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                Your trusted partner in property ownership, development, and investment. We are a forward-thinking real estate company committed to making property ownership simple, transparent, and rewarding.
              </p>
              <p class="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Whether you are buying your first plot of land, seeking high-return investment opportunities, or searching for a short-term rental, Landley makes the journey easy, reliable, and profitable.
              </p>
            </div>
          </div>
        </section>

        <!-- Why Choose Us -->
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-800">
              <h2 class="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
                Why Choose Us?
              </h2>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              ${[
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
              ].map((feature, index) => `
                <div class="animate-on-scroll opacity-0 translate-y-12 transition-all duration-800 hover:-translate-y-2" style="transition-delay: ${index * 100}ms; ${index === 4 ? 'grid-column: 1 / -1; max-width: 400px; margin: 0 auto;' : ''}">
                  <div class="h-full bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-t-[var(--brand-green)]">
                    <div class="p-6 text-center">
                      <div class="w-12 h-12 bg-[var(--brand-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-white text-xl">✓</span>
                      </div>
                      <h3 class="text-lg mb-3 text-[var(--brand-green)]">${feature.title}</h3>
                      <p class="text-gray-600 leading-relaxed">${feature.description}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Company Overview -->
        <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-800">
              <h2 class="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
                Company Overview
              </h2>
              <p class="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We are a dynamic, forward-thinking company dedicated to delivering exceptional value in property brokerage, 
                real estate development, and investment opportunities. At Landley, we believe that owning land and properties 
                should be simple, transparent, and rewarding.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              ${[
                {
                  icon: "🛡️",
                  title: "Trust & Transparency",
                  description: "Building trust through transparency and honesty in every transaction with verified properties and secure documentation."
                },
                {
                  icon: "📈",
                  title: "Investment Growth",
                  description: "Strategic locations that guarantee high returns on investment with flexible payment plans for all classes of investors."
                },
                {
                  icon: "🏗️",
                  title: "Professional Excellence",
                  description: "A team of seasoned professionals with proven expertise delivering beyond promises with superior customer service."
                }
              ].map((feature, index) => `
                <div class="animate-on-scroll opacity-0 translate-y-12 transition-all duration-800 hover:-translate-y-2" style="transition-delay: ${index * 200}ms">
                  <div class="h-full border-t-4 border-t-[var(--brand-green)] bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div class="p-6 text-center">
                      <div class="text-3xl mb-4">${feature.icon}</div>
                      <h3 class="text-xl mb-3 text-[var(--brand-green)]">${feature.title}</h3>
                      <p class="text-gray-600 leading-relaxed">${feature.description}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Mission Statement -->
        <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-light-green)] rounded-2xl p-12 text-white animate-on-scroll opacity-0 scale-90 transition-all duration-800">
              <h2 class="text-3xl md:text-4xl mb-6">Our Mission</h2>
              <p class="text-xl leading-relaxed max-w-4xl mx-auto">
                With a blend of professionalism, market expertise, and integrity, we are shaping communities, 
                creating wealth opportunities, and helping individuals and families find their dream properties.
              </p>
            </div>
          </div>
        </section>

        <!-- Testimonials -->
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-800">
              <h2 class="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">
                What Our Clients Say
              </h2>
              <p class="text-lg text-gray-700">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              ${this.testimonials.map((testimonial, index) => `
                <div class="animate-on-scroll opacity-0 translate-y-12 transition-all duration-800 hover:scale-105" style="transition-delay: ${index * 200}ms">
                  <div class="h-full bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div class="p-6">
                      <div class="flex mb-4">
                        ${'★'.repeat(testimonial.rating).split('').map(() => `<span class="text-yellow-400">★</span>`).join('')}
                      </div>
                      <p class="text-gray-700 mb-4 italic leading-relaxed">
                        "${testimonial.text}"
                      </p>
                      <p class="text-[var(--brand-green)]">
                        — ${testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-[var(--brand-green)] text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="animate-on-scroll opacity-0 translate-y-12 transition-all duration-800">
              <h2 class="text-3xl md:text-4xl mb-6">
                Ready to Start Your Property Journey?
              </h2>
              <p class="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients who have found their dream properties with Landley
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-white text-[var(--brand-green)] hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors duration-300" onclick="window.router.navigate('projects')">
                  👉 Explore Our Properties
                </button>
                <button class="bg-white text-[var(--brand-green)] hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors duration-300" onclick="window.router.navigate('services')">
                  👉 Book a Shortlet
                </button>
                <button class="bg-white text-[var(--brand-green)] hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors duration-300" onclick="window.router.navigate('contact')">
                  👉 Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  mount() {
    const carousel = new ImageCarousel(this.carouselImages);
    document.getElementById('hero-carousel').innerHTML = carousel.render();
    carousel.mount();

    // Setup intersection observer for animations
    this.setupIntersectionObserver();

    // Initialize charts after a small delay to ensure canvas elements are rendered
    setTimeout(() => {
      this.initializeCharts();
    }, 100);

    // Add window resize handler for responsive charts
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.initializeCharts();
      }, 100);
    });
  }
}