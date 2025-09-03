import { Animation } from '../utils/animation.js';

export class AboutPage {
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
                        <div class="about-hero opacity-0 translate-y-12 transition-all duration-800">
                            <h1 class="text-4xl md:text-6xl mb-6">About Landley Properties</h1>
                            <p class="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                                Building Dreams. Securing Futures. Creating Wealth Through Real Estate.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Company Story -->
                <section class="py-20 bg-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="grid lg:grid-cols-2 gap-12 items-center">
                            <div class="story-content opacity-0 translate-y-12 transition-all duration-800">
                                <h2 class="text-3xl md:text-4xl mb-8 text-[var(--brand-green)]">Our Story</h2>
                                <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Landley Properties & Real Estate Development Limited was founded with a simple yet powerful vision: to make property ownership accessible, transparent, and profitable for everyone.
                                    </p>
                                    <p>
                                        We recognized that many Nigerians dream of owning land and property but face barriers like complex processes, lack of transparency, and limited flexible payment options. That's why we created Landley – to bridge that gap and turn dreams into reality.
                                    </p>
                                    <p>
                                        Today, we are proud to be a trusted partner for hundreds of clients who have successfully invested in real estate through our platform. Our commitment to excellence, integrity, and customer satisfaction drives everything we do.
                                    </p>
                                </div>
                            </div>
                            <div class="story-image opacity-0 translate-y-12 transition-all duration-800" style="transition-delay: 200ms">
                                <img 
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Modern real estate office" 
                                    class="rounded-lg shadow-xl w-full h-96 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Mission, Vision, Values -->
                <section class="py-20 bg-gray-50">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h2 class="mvv-title text-3xl md:text-4xl mb-6 text-[var(--brand-green)] opacity-0 translate-y-12 transition-all duration-800">
                                Our Foundation
                            </h2>
                        </div>

                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="mvv-card text-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 translate-y-12" style="transition-delay: 0ms">
                                <div class="w-16 h-16 bg-[var(--brand-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span class="text-white text-2xl">🎯</span>
                                </div>
                                <h3 class="text-2xl mb-4 text-[var(--brand-green)]">Our Mission</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    To make property ownership simple, transparent, and rewarding while building lasting relationships based on trust and excellence.
                                </p>
                            </div>

                            <div class="mvv-card text-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 translate-y-12" style="transition-delay: 100ms">
                                <div class="w-16 h-16 bg-[var(--brand-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span class="text-white text-2xl">🔮</span>
                                </div>
                                <h3 class="text-2xl mb-4 text-[var(--brand-green)]">Our Vision</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    To become Nigeria's leading real estate platform, empowering millions to achieve property ownership and build generational wealth.
                                </p>
                            </div>

                            <div class="mvv-card text-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 translate-y-12" style="transition-delay: 200ms">
                                <div class="w-16 h-16 bg-[var(--brand-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span class="text-white text-2xl">💎</span>
                                </div>
                                <h3 class="text-2xl mb-4 text-[var(--brand-green)]">Our Values</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Integrity, transparency, excellence, and customer-first approach guide every decision and interaction we make.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Team Section -->
                <section class="py-20 bg-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h2 class="team-title text-3xl md:text-4xl mb-6 text-[var(--brand-green)] opacity-0 translate-y-12 transition-all duration-800">
                                Meet Our Team
                            </h2>
                            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                                Dedicated professionals committed to your success
                            </p>
                        </div>

                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${this.renderTeamMembers()}
                        </div>
                    </div>
                </section>

                <!-- Why Choose Us -->
                <section class="py-20 bg-[var(--brand-green)] text-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div class="why-choose opacity-0 translate-y-12 transition-all duration-800">
                            <h2 class="text-3xl md:text-4xl mb-8">Why Choose Landley Properties?</h2>
                            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                                <div class="text-center">
                                    <div class="text-4xl mb-4">🏆</div>
                                    <h3 class="text-xl mb-2">Proven Track Record</h3>
                                    <p class="text-white/90">Years of successful transactions</p>
                                </div>
                                <div class="text-center">
                                    <div class="text-4xl mb-4">🔒</div>
                                    <h3 class="text-xl mb-2">Secure Transactions</h3>
                                    <p class="text-white/90">Verified properties and documentation</p>
                                </div>
                                <div class="text-center">
                                    <div class="text-4xl mb-4">💰</div>
                                    <h3 class="text-xl mb-2">Flexible Payment</h3>
                                    <p class="text-white/90">Payment plans that work for you</p>
                                </div>
                                <div class="text-center">
                                    <div class="text-4xl mb-4">🤝</div>
                                    <h3 class="text-xl mb-2">Customer First</h3>
                                    <p class="text-white/90">Your success is our priority</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- CTA Section -->
                <section class="py-20 bg-gray-50">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div class="cta-section opacity-0 translate-y-12 transition-all duration-800">
                            <h2 class="text-3xl md:text-4xl mb-6 text-[var(--brand-green)]">Ready to Start Your Journey?</h2>
                            <p class="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
                                Join hundreds of satisfied clients who have achieved their property ownership dreams with Landley Properties.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    data-page="projects"
                                    class="cta-button px-8 py-4 bg-[var(--brand-green)] text-white rounded-lg hover:bg-[var(--brand-dark-green)] transition-all duration-300 hover:scale-105"
                                >
                                    View Our Projects
                                </button>
                                <button 
                                    data-page="contact"
                                    class="cta-button px-8 py-4 border-2 border-[var(--brand-green)] text-[var(--brand-green)] rounded-lg hover:bg-[var(--brand-green)] hover:text-white transition-all duration-300 hover:scale-105"
                                >
                                    Contact Us Today
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

    renderTeamMembers() {
        const teamMembers = [
            {
                name: "Emmanuel Adebayo",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Visionary leader with 10+ years in real estate development"
            },
            {
                name: "Sarah Johnson",
                role: "Head of Sales",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Expert in client relations and property consultations"
            },
            {
                name: "Michael Chen",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Ensuring smooth operations and customer satisfaction"
            }
        ];

        return teamMembers.map((member, index) => `
            <div class="team-member text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 translate-y-12" style="transition-delay: ${index * 100}ms">
                <img 
                    src="${member.image}" 
                    alt="${member.name}" 
                    class="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 class="text-xl mb-2 text-[var(--brand-green)]">${member.name}</h3>
                <p class="text-[var(--brand-green)] mb-4 font-medium">${member.role}</p>
                <p class="text-gray-600 leading-relaxed">${member.description}</p>
            </div>
        `).join('');
    }

    bindEvents(onPageChange) {
        document.querySelectorAll('.cta-button').forEach(button => {
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

        document.querySelectorAll('.about-hero, .story-content, .story-image, .mvv-title, .mvv-card, .team-title, .team-member, .why-choose, .cta-section').forEach(el => {
            observer.observe(el);
        });
    }
}