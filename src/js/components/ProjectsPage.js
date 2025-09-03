import { Animation } from '../utils/animation.js';

export class ProjectsPage {
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
                        <div class="projects-hero opacity-0 translate-y-12 transition-all duration-800">
                            <h1 class="text-4xl md:text-6xl mb-6">Our Projects</h1>
                            <p class="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                                Premium properties in strategic locations with guaranteed returns
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Featured Projects -->
                <section class="py-20 bg-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h2 class="projects-title text-3xl md:text-4xl mb-6 text-[var(--brand-green)] opacity-0 translate-y-12 transition-all duration-800">
                                Featured Properties
                            </h2>
                            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                                Carefully selected properties in prime locations
                            </p>
                        </div>

                        <div class="space-y-16">
                            ${this.renderProjects()}
                        </div>
                    </div>
                </section>

                <!-- Investment Benefits -->
                <section class="py-20 bg-gray-50">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h2 class="benefits-title text-3xl md:text-4xl mb-6 text-[var(--brand-green)] opacity-0 translate-y-12 transition-all duration-800">
                                Why Invest With Us?
                            </h2>
                        </div>

                        <div class="grid md:grid-cols-3 gap-8">
                            ${this.renderBenefits()}
                        </div>
                    </div>
                </section>

                <!-- Testimonials -->
                <section class="py-20 bg-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h2 class="testimonials-title text-3xl md:text-4xl mb-6 text-[var(--brand-green)] opacity-0 translate-y-12 transition-all duration-800">
                                Client Success Stories
                            </h2>
                        </div>

                        <div class="grid md:grid-cols-2 gap-8">
                            ${this.renderTestimonials()}
                        </div>
                    </div>
                </section>

                <!-- CTA Section -->
                <section class="py-20 bg-[var(--brand-green)] text-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div class="projects-cta opacity-0 translate-y-12 transition-all duration-800">
                            <h2 class="text-3xl md:text-4xl mb-6">Start Your Investment Journey Today</h2>
                            <p class="text-xl mb-8 max-w-2xl mx-auto">
                                Join successful investors who have secured their financial future through strategic property investments.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    data-page="contact"
                                    class="cta-button px-8 py-4 bg-white text-[var(--brand-green)] rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                                >
                                    Schedule Site Visit
                                </button>
                                <a 
                                    href="https://wa.me/2347064288437"
                                    target="_blank"
                                    class="cta-button inline-block px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[var(--brand-green)] transition-all duration-300 hover:scale-105"
                                >
                                    WhatsApp Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;

        this.bindEvents(onPageChange);
        this.initAnimations();
    }

    renderProjects() {
        const projects = [
            {
                name: "Landmark Parks & Gardens",
                location: "Ikanna Balogun",
                image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "A prestigious residential development featuring modern amenities, 24/7 security, and excellent connectivity to major highways.",
                features: [
                    "500sqm - 1200sqm plot sizes",
                    "24/7 security and gated community",
                    "Tarred roads and drainage",
                    "Electricity and water supply",
                    "Recreation center and park"
                ],
                pricing: "From ₦2.5M per plot",
                paymentPlan: "Initial deposit of 30%, balance spread over 12-18 months"
            },
            {
                name: "Landmark Farm Estate",
                location: "Solomo-Asipa Owode",
                image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Agricultural and residential plots in a rapidly developing area with high appreciation potential and government backing.",
                features: [
                    "600sqm - 2000sqm plot sizes",
                    "Government approved layout",
                    "Survey and legal documentation",
                    "Agricultural support services",
                    "Investment-grade location"
                ],
                pricing: "From ₦1.8M per plot",
                paymentPlan: "Flexible payment options starting from 25% deposit"
            }
        ];

        return projects.map((project, index) => `
            <div class="project-card grid lg:grid-cols-2 gap-12 items-center opacity-0 translate-y-12 transition-all duration-800" style="transition-delay: ${index * 200}ms">
                <div class="${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}">
                    <img 
                        src="${project.image}" 
                        alt="${project.name}" 
                        class="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                </div>
                <div class="${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}">
                    <h3 class="text-3xl mb-2 text-[var(--brand-green)]">${project.name}</h3>
                    <p class="text-lg text-gray-600 mb-4">📍 ${project.location}</p>
                    <p class="text-gray-700 mb-6 leading-relaxed">${project.description}</p>
                    
                    <div class="mb-6">
                        <h4 class="text-lg mb-3 text-[var(--brand-green)]">Key Features:</h4>
                        <ul class="space-y-2">
                            ${project.features.map(feature => `
                                <li class="flex items-center text-gray-600">
                                    <div class="w-2 h-2 bg-[var(--brand-green)] rounded-full mr-3"></div>
                                    ${feature}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-6">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <p class="text-sm text-gray-600 mb-1">Starting Price</p>
                                <p class="text-xl text-[var(--brand-green)] font-semibold">${project.pricing}</p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-600 mb-1">Payment Plan</p>
                                <p class="text-sm text-gray-700">${project.paymentPlan}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <button 
                            data-page="contact"
                            class="project-button flex-1 px-6 py-3 bg-[var(--brand-green)] text-white rounded-lg hover:bg-[var(--brand-dark-green)] transition-all duration-300 hover:scale-105"
                        >
                            Get Details
                        </button>
                        <a 
                            href="https://wa.me/2347064288437"
                            target="_blank"
                            class="flex-1 px-6 py-3 border-2 border-[var(--brand-green)] text-[var(--brand-green)] rounded-lg hover:bg-[var(--brand-green)] hover:text-white transition-all duration-300 hover:scale-105 text-center"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderBenefits() {
        const benefits = [
            {
                icon: "📈",
                title: "High ROI Guaranteed",
                description: "Our properties are strategically located in high-growth areas with projected returns of 40-60% annually."
            },
            {
                icon: "🏆",
                title: "Verified Documentation",
                description: "All properties come with proper titles, surveys, and government approvals for peace of mind."
            },
            {
                icon: "💰",
                title: "Flexible Payment Plans",
                description: "Start with as low as 25% down payment and spread the balance over convenient installments."
            }
        ];

        return benefits.map((benefit, index) => `
            <div class="benefit-card text-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 translate-y-12" style="transition-delay: ${index * 100}ms">
                <div class="text-4xl mb-6">${benefit.icon}</div>
                <h3 class="text-xl mb-4 text-[var(--brand-green)]">${benefit.title}</h3>
                <p class="text-gray-600 leading-relaxed">${benefit.description}</p>
            </div>
        `).join('');
    }

    renderTestimonials() {
        const testimonials = [
            {
                name: "Adebola Olatunji",
                text: "I bought 3 plots at Landmark Parks & Gardens last year. The value has already increased by 45% and the development is progressing beautifully. Excellent investment!",
                location: "Lagos State"
            },
            {
                name: "Mrs. Comfort Eze", 
                text: "The payment plan was very flexible and the team was professional throughout the process. I now own property in a prime location that I couldn't have afforded with full payment.",
                location: "Abuja"
            }
        ];

        return testimonials.map((testimonial, index) => `
            <div class="testimonial-card bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 opacity-0 translate-y-12" style="transition-delay: ${index * 100}ms">
                <div class="flex mb-4">
                    ${'★'.repeat(5).split('').map(() => '<span class="text-yellow-400 text-lg">★</span>').join('')}
                </div>
                <p class="text-gray-700 mb-6 italic leading-relaxed">"${testimonial.text}"</p>
                <div class="border-t pt-4">
                    <p class="text-[var(--brand-green)] font-medium">${testimonial.name}</p>
                    <p class="text-gray-600 text-sm">${testimonial.location}</p>
                </div>
            </div>
        `).join('');
    }

    bindEvents(onPageChange) {
        document.querySelectorAll('.cta-button, .project-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                if (page) {
                    onPageChange(page);
                }
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

        document.querySelectorAll('.projects-hero, .projects-title, .project-card, .benefits-title, .benefit-card, .testimonials-title, .testimonial-card, .projects-cta').forEach(el => {
            observer.observe(el);
        });
    }
}