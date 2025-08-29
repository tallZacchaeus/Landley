import { Animation } from '../utils/animation.js';

export class ServicesPage {
    constructor() {
        this.animation = new Animation();
    }

    render(onPageChange) {
        const mainContent = document.getElementById('main-content');
        
        mainContent.innerHTML = `
            <div class="min-h-screen pt-20">
                <!-- Hero Section -->
                <section class="py-20 bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-light-green)] text-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div class="services-hero opacity-0 translate-y-12 transition-all duration-800">
                            <h1 class="text-4xl md:text-6xl mb-6">Our Services</h1>
                            <p class="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                                Comprehensive real estate solutions tailored to your needs
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Services Grid -->
                <section class="py-20 bg-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="grid lg:grid-cols-2 gap-12">
                            ${this.renderServices()}
                        </div>
                    </div>
                </section>

                <!-- Process Section -->
                <section class="py-20 bg-gray-50">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h2 class="process-title text-3xl md:text-4xl mb-6 text-[var(--brand-green)] opacity-0 translate-y-12 transition-all duration-800">
                                Our Process
                            </h2>
                            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                                Simple steps to get you started on your property journey
                            </p>
                        </div>

                        <div class="grid md:grid-cols-4 gap-8">
                            ${this.renderProcessSteps()}
                        </div>
                    </div>
                </section>

                <!-- CTA Section -->
                <section class="py-20 bg-[var(--brand-green)] text-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div class="services-cta opacity-0 translate-y-12 transition-all duration-800">
                            <h2 class="text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
                            <p class="text-xl mb-8 max-w-2xl mx-auto">
                                Choose the service that best fits your needs and let us help you achieve your property goals.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    data-page="projects"
                                    class="cta-button px-8 py-4 bg-white text-[var(--brand-green)] rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                                >
                                    View Available Properties
                                </button>
                                <button 
                                    data-page="contact"
                                    class="cta-button px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[var(--brand-green)] transition-all duration-300 hover:scale-105"
                                >
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;

        this.bindEvents(onPageChange);
        this.initAnimations();
    }

    renderServices() {
        const services = [
            {
                title: "Property Brokerage",
                icon: "🏠",
                description: "We connect you with verified, high-quality properties that match your budget and preferences. Our extensive network ensures you get the best deals in prime locations.",
                features: [
                    "Verified property listings",
                    "Market analysis and valuation",
                    "Negotiation support",
                    "Legal documentation assistance"
                ]
            },
            {
                title: "Shortlets",
                icon: "🏨",
                description: "Modern, fully-furnished apartments perfect for business travelers, families on vacation, or anyone needing temporary accommodation in Ogun State.",
                features: [
                    "Fully furnished apartments",
                    "24/7 customer support",
                    "Flexible booking options",
                    "Prime locations"
                ]
            },
            {
                title: "Property Development",
                icon: "🏗️",
                description: "From concept to completion, we handle every aspect of property development, ensuring quality construction that stands the test of time.",
                features: [
                    "Custom property design",
                    "Quality construction management",
                    "Timeline and budget compliance",
                    "Modern amenities integration"
                ]
            },
            {
                title: "Landbanking",
                icon: "🌍",
                description: "Strategic land acquisition and investment opportunities that guarantee high returns. Perfect for long-term wealth building and portfolio diversification.",
                features: [
                    "Strategic location selection",
                    "Guaranteed ROI projections",
                    "Flexible payment plans",
                    "Legal title verification"
                ]
            }
        ];

        return services.map((service, index) => `
            <div class="service-card bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 translate-y-12" style="transition-delay: ${index * 100}ms">
                <div class="flex items-center mb-6">
                    <div class="text-4xl mr-4">${service.icon}</div>
                    <h3 class="text-2xl text-[var(--brand-green)]">${service.title}</h3>
                </div>
                
                <p class="text-gray-700 mb-6 leading-relaxed">${service.description}</p>
                
                <ul class="space-y-2">
                    ${service.features.map(feature => `
                        <li class="flex items-center text-gray-600">
                            <div class="w-2 h-2 bg-[var(--brand-green)] rounded-full mr-3"></div>
                            ${feature}
                        </li>
                    `).join('')}
                </ul>
                
                <button 
                    data-page="contact"
                    class="service-button mt-6 w-full px-6 py-3 bg-[var(--brand-green)] text-white rounded-lg hover:bg-[var(--brand-dark-green)] transition-all duration-300 hover:scale-105"
                >
                    Learn More
                </button>
            </div>
        `).join('');
    }

    renderProcessSteps() {
        const steps = [
            {
                number: "01",
                title: "Consultation",
                description: "We discuss your needs, budget, and preferences to understand your goals."
            },
            {
                number: "02", 
                title: "Property Search",
                description: "We present carefully selected options that match your criteria."
            },
            {
                number: "03",
                title: "Documentation",
                description: "We handle all legal paperwork and verification processes."
            },
            {
                number: "04",
                title: "Completion",
                description: "You get your property keys and ongoing support from our team."
            }
        ];

        return steps.map((step, index) => `
            <div class="process-step text-center opacity-0 translate-y-12 transition-all duration-800" style="transition-delay: ${index * 100}ms">
                <div class="w-16 h-16 bg-[var(--brand-green)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    ${step.number}
                </div>
                <h3 class="text-xl mb-3 text-[var(--brand-green)]">${step.title}</h3>
                <p class="text-gray-600 leading-relaxed">${step.description}</p>
            </div>
        `).join('');
    }

    bindEvents(onPageChange) {
        document.querySelectorAll('.cta-button, .service-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const page = e.target.getAttribute('data-page');
                onPageChange(page);
            });
        });
    }

    initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-12');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.services-hero, .service-card, .process-title, .process-step, .services-cta').forEach(el => {
            observer.observe(el);
        });
    }
}