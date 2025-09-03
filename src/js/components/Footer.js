import { Animation } from '../utils/animation.js';

export class Footer {
    constructor() {
        this.animation = new Animation();
        
        this.quickLinks = [
            { label: 'Home', page: 'home' },
            { label: 'About Us', page: 'about' },
            { label: 'Services', page: 'services' },
            { label: 'Projects', page: 'projects' },
            { label: 'Contact', page: 'contact' }
        ];

        this.services = [
            'Property Brokerage',
            'Shortlets',
            'Property Development',
            'Landbanking',
            'Real Estate Consultation'
        ];

        this.socialLinks = [
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
                name: 'Twitter',
                url: 'https://twitter.com/landleyproperties',
                icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>`
            },
            {
                name: 'LinkedIn',
                url: 'https://linkedin.com/company/landleyproperties',
                icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
    }

    render(onPageChange) {
        this.onPageChange = onPageChange;
        const footerElement = document.getElementById('footer');
        
        footerElement.innerHTML = `
            <footer class="bg-gray-900 text-white">
                <!-- CTA Section -->
                <section class="bg-[var(--brand-green)] py-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div class="footer-cta opacity-0 translate-y-12 transition-all duration-800">
                            <h2 class="text-3xl md:text-4xl mb-6 text-white">
                                Ready to Start Your Property Journey?
                            </h2>
                            <p class="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                                Join thousands of satisfied clients who have found their dream properties with Landley Properties
                            </p>
                            <button 
                                data-page="contact"
                                class="footer-cta-button px-6 py-3 bg-white text-[var(--brand-green)] rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center mx-auto"
                            >
                                Get Started Today
                                <svg class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Main Footer Content -->
                <div class="py-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                            <!-- Company Info -->
                            <div class="footer-section lg:col-span-1 opacity-0 translate-y-12 transition-all duration-800">
                                <h3 class="text-2xl mb-4 text-[var(--brand-light-green)]">
                                    Landley Properties
                                </h3>
                                <p class="text-gray-300 mb-6 leading-relaxed">
                                    Where vision meets innovation in the real estate industry. We are shaping communities, 
                                    creating wealth opportunities, and helping families find their dream properties.
                                </p>
                                
                                <!-- Social Media Links -->
                                <div class="flex space-x-4">
                                    ${this.socialLinks.map((social, index) => `
                                        <a
                                            href="${social.url}"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="social-link bg-gray-800 hover:bg-[var(--brand-green)] p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-90"
                                            title="${social.name}"
                                        >
                                            ${social.icon}
                                        </a>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Quick Links -->
                            <div class="footer-section opacity-0 translate-y-12 transition-all duration-800" style="transition-delay: 100ms">
                                <h4 class="text-xl mb-6 text-[var(--brand-light-green)]">Quick Links</h4>
                                <ul class="space-y-3">
                                    ${this.quickLinks.map((link, index) => `
                                        <li>
                                            <button
                                                data-page="${link.page}"
                                                class="quick-link text-gray-300 hover:text-[var(--brand-light-green)] transition-all duration-200 flex items-center group hover:translate-x-1"
                                            >
                                                <svg class="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                                ${link.label}
                                            </button>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>

                            <!-- Services -->
                            <div class="footer-section opacity-0 translate-y-12 transition-all duration-800" style="transition-delay: 200ms">
                                <h4 class="text-xl mb-6 text-[var(--brand-light-green)]">Our Services</h4>
                                <ul class="space-y-3">
                                    ${this.services.map((service, index) => `
                                        <li class="text-gray-300 flex items-start">
                                            <div class="w-2 h-2 bg-[var(--brand-green)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            ${service}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>

                            <!-- Contact Details -->
                            <div class="footer-section opacity-0 translate-y-12 transition-all duration-800" style="transition-delay: 300ms">
                                <h4 class="text-xl mb-6 text-[var(--brand-light-green)]">Contact Us</h4>
                                <div class="space-y-4">
                                    <div class="flex items-start">
                                        <svg class="h-5 w-5 text-[var(--brand-green)] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p class="text-gray-300 text-sm">Office Address</p>
                                            <p class="text-white">Innovation Hub, Redemption City, Ogun State</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start">
                                        <svg class="h-5 w-5 text-[var(--brand-green)] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div>
                                            <p class="text-gray-300 text-sm">Phone Numbers</p>
                                            <p class="text-white">07064288437</p>
                                            <p class="text-white">07061962893</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start">
                                        <svg class="h-5 w-5 text-[var(--brand-green)] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p class="text-gray-300 text-sm">Email</p>
                                            <p class="text-white">landleyrealestate@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer Bottom -->
                <div class="border-t border-gray-700 py-8">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex flex-col md:flex-row justify-between items-center">
                            <p class="footer-copyright text-gray-400 text-sm mb-4 md:mb-0 opacity-0 transition-opacity duration-800">
                                © 2024 Landley Properties & Real Estate Development Limited. All rights reserved.
                            </p>
                            
                            <div class="footer-links flex space-x-6 text-sm opacity-0 transition-opacity duration-800" style="transition-delay: 200ms">
                                <a href="#" class="text-gray-400 hover:text-[var(--brand-light-green)] transition-colors duration-200">
                                    Privacy Policy
                                </a>
                                <a href="#" class="text-gray-400 hover:text-[var(--brand-light-green)] transition-colors duration-200">
                                    Terms of Service
                                </a>
                                <a href="#" class="text-gray-400 hover:text-[var(--brand-light-green)] transition-colors duration-200">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;

        this.bindEvents();
        this.initAnimations();
    }

    bindEvents() {
        // Footer CTA button
        document.querySelector('.footer-cta-button').addEventListener('click', (e) => {
            const page = e.target.getAttribute('data-page') || 'contact';
            this.onPageChange(page);
        });

        // Quick links
        document.querySelectorAll('.quick-link').forEach(button => {
            button.addEventListener('click', (e) => {
                const page = e.target.getAttribute('data-page') || e.target.closest('button').getAttribute('data-page');
                this.onPageChange(page);
            });
        });
    }

    initAnimations() {
        // Setup intersection observer for scroll animations
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

        // Observe all animated elements
        document.querySelectorAll('.footer-cta, .footer-section, .footer-copyright, .footer-links').forEach(el => {
            observer.observe(el);
        });
    }
}