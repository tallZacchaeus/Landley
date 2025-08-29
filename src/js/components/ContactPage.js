import { Animation } from '../utils/animation.js';

export class ContactPage {
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
                        <div class="contact-hero opacity-0 translate-y-12 transition-all duration-800">
                            <h1 class="text-4xl md:text-6xl mb-6">Contact Us</h1>
                            <p class="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                                Ready to start your property journey? Let's discuss your goals and find the perfect solution.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Contact Information & Form -->
                <section class="py-20 bg-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="grid lg:grid-cols-2 gap-16">
                            <!-- Contact Information -->
                            <div class="contact-info opacity-0 translate-y-12 transition-all duration-800">
                                <h2 class="text-3xl mb-8 text-[var(--brand-green)]">Get in Touch</h2>
                                <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                                    Whether you're looking to buy your first property, need a comfortable shortlet accommodation, 
                                    or want to explore investment opportunities, our team is here to help.
                                </p>

                                <div class="space-y-6">
                                    <div class="flex items-start">
                                        <div class="w-12 h-12 bg-[var(--brand-green)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="text-xl mb-2 text-[var(--brand-green)]">Office Address</h3>
                                            <p class="text-gray-700">Innovation Hub, Redemption City, Ogun State</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <div class="w-12 h-12 bg-[var(--brand-green)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="text-xl mb-2 text-[var(--brand-green)]">Phone Numbers</h3>
                                            <p class="text-gray-700">07064288437</p>
                                            <p class="text-gray-700">07061962893</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <div class="w-12 h-12 bg-[var(--brand-green)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="text-xl mb-2 text-[var(--brand-green)]">Email</h3>
                                            <p class="text-gray-700">landleyrealestate@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Social Media -->
                                <div class="mt-8">
                                    <h3 class="text-xl mb-4 text-[var(--brand-green)]">Follow Us</h3>
                                    <div class="flex space-x-4">
                                        ${this.renderSocialLinks()}
                                    </div>
                                </div>
                            </div>

                            <!-- Contact Form -->
                            <div class="contact-form opacity-0 translate-y-12 transition-all duration-800" style="transition-delay: 200ms">
                                <div class="bg-gray-50 rounded-xl p-8">
                                    <h2 class="text-3xl mb-8 text-[var(--brand-green)]">Send Us a Message</h2>
                                    <form id="contact-form" class="space-y-6">
                                        <div class="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label for="firstName" class="block text-sm mb-2 text-gray-700">First Name *</label>
                                                <input 
                                                    type="text" 
                                                    id="firstName" 
                                                    name="firstName" 
                                                    required
                                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                            <div>
                                                <label for="lastName" class="block text-sm mb-2 text-gray-700">Last Name *</label>
                                                <input 
                                                    type="text" 
                                                    id="lastName" 
                                                    name="lastName" 
                                                    required
                                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="email" class="block text-sm mb-2 text-gray-700">Email Address *</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                required
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div>
                                            <label for="phone" class="block text-sm mb-2 text-gray-700">Phone Number *</label>
                                            <input 
                                                type="tel" 
                                                id="phone" 
                                                name="phone" 
                                                required
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div>
                                            <label for="service" class="block text-sm mb-2 text-gray-700">Service Interest</label>
                                            <select 
                                                id="service" 
                                                name="service"
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all duration-200"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="property-brokerage">Property Brokerage</option>
                                                <option value="shortlets">Shortlets</option>
                                                <option value="property-development">Property Development</option>
                                                <option value="landbanking">Landbanking</option>
                                                <option value="consultation">General Consultation</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label for="budget" class="block text-sm mb-2 text-gray-700">Budget Range</label>
                                            <select 
                                                id="budget" 
                                                name="budget"
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all duration-200"
                                            >
                                                <option value="">Select budget range</option>
                                                <option value="under-2m">Under ₦2M</option>
                                                <option value="2m-5m">₦2M - ₦5M</option>
                                                <option value="5m-10m">₦5M - ₦10M</option>
                                                <option value="10m-20m">₦10M - ₦20M</option>
                                                <option value="above-20m">Above ₦20M</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label for="message" class="block text-sm mb-2 text-gray-700">Message *</label>
                                            <textarea 
                                                id="message" 
                                                name="message" 
                                                rows="4" 
                                                required
                                                placeholder="Tell us about your property needs, preferred locations, or any questions you have..."
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent transition-all duration-200 resize-none"
                                            ></textarea>
                                        </div>

                                        <button 
                                            type="submit"
                                            class="w-full px-6 py-4 bg-[var(--brand-green)] text-white rounded-lg hover:bg-[var(--brand-dark-green)] transition-all duration-300 hover:scale-105 flex items-center justify-center"
                                        >
                                            Send Message
                                            <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- FAQ Section -->
                <section class="py-20 bg-gray-50">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h2 class="faq-title text-3xl md:text-4xl mb-6 text-[var(--brand-green)] opacity-0 translate-y-12 transition-all duration-800">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div class="max-w-3xl mx-auto space-y-4">
                            ${this.renderFAQs()}
                        </div>
                    </div>
                </section>

                <!-- Quick Action -->
                <section class="py-20 bg-[var(--brand-green)] text-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div class="quick-action opacity-0 translate-y-12 transition-all duration-800">
                            <h2 class="text-3xl md:text-4xl mb-6">Need Immediate Assistance?</h2>
                            <p class="text-xl mb-8 max-w-2xl mx-auto">
                                Our team is ready to help you find the perfect property solution.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="https://wa.me/2347064288437"
                                    target="_blank"
                                    class="px-8 py-4 bg-white text-[var(--brand-green)] rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                                >
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                    WhatsApp Us
                                </a>
                                <a 
                                    href="tel:07064288437"
                                    class="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[var(--brand-green)] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                                >
                                    <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Now
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

    renderSocialLinks() {
        const socialLinks = [
            {
                name: 'Facebook',
                url: 'https://facebook.com/landleyproperties',
                icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>`
            },
            {
                name: 'Instagram',
                url: 'https://instagram.com/landleyproperties',
                icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>`
            },
            {
                name: 'WhatsApp',
                url: 'https://wa.me/2347064288437',
                icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>`
            }
        ];

        return socialLinks.map(social => `
            <a
                href="${social.url}"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-[var(--brand-green)] hover:bg-[var(--brand-dark-green)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="${social.name}"
            >
                ${social.icon}
            </a>
        `).join('');
    }

    renderFAQs() {
        const faqs = [
            {
                question: "What payment options do you offer?",
                answer: "We offer flexible payment plans starting from 25-30% initial deposit with the balance spread over 12-18 months. We also accept bank transfers, cash, and other secure payment methods."
            },
            {
                question: "Are all properties verified and legally documented?",
                answer: "Yes, all our properties come with proper titles, surveys, and government approvals. We conduct thorough due diligence to ensure you're making a secure investment."
            },
            {
                question: "Can I visit the properties before making a decision?",
                answer: "Absolutely! We encourage site visits and provide free guided tours of all our properties. Simply contact us to schedule your visit."
            },
            {
                question: "What areas do you cover?",
                answer: "We primarily focus on Ogun State, with properties in high-growth areas like Ikanna Balogun, Solomo-Asipa Owode, and other strategic locations with excellent appreciation potential."
            },
            {
                question: "Do you provide after-sales support?",
                answer: "Yes, we provide comprehensive after-sales support including assistance with property development, documentation updates, and ongoing investment advice."
            }
        ];

        return faqs.map((faq, index) => `
            <div class="faq-item bg-white rounded-lg shadow-md opacity-0 translate-y-12 transition-all duration-800" style="transition-delay: ${index * 100}ms">
                <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <span class="text-lg text-gray-800">${faq.question}</span>
                    <svg class="faq-icon w-5 h-5 text-[var(--brand-green)] transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div class="faq-answer overflow-hidden max-h-0 transition-all duration-300">
                    <div class="px-6 pb-4 text-gray-600 leading-relaxed">
                        ${faq.answer}
                    </div>
                </div>
            </div>
        `).join('');
    }

    bindEvents(onPageChange) {
        // Handle form submission
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            // Show success message (in real app, you'd send this to a server)
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            e.target.reset();
        });

        // Handle FAQ toggle
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.parentElement;
                const answer = faqItem.querySelector('.faq-answer');
                const icon = button.querySelector('.faq-icon');
                
                const isOpen = answer.classList.contains('max-h-96');
                
                // Close all FAQs
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('max-h-96');
                    ans.classList.add('max-h-0');
                });
                
                document.querySelectorAll('.faq-icon').forEach(ic => {
                    ic.classList.remove('rotate-180');
                });
                
                // Open clicked FAQ if it was closed
                if (!isOpen) {
                    answer.classList.remove('max-h-0');
                    answer.classList.add('max-h-96');
                    icon.classList.add('rotate-180');
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

        document.querySelectorAll('.contact-hero, .contact-info, .contact-form, .faq-title, .faq-item, .quick-action').forEach(el => {
            observer.observe(el);
        });
    }
}