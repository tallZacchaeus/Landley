import { Animation } from '../utils/animation.js';

export class Navigation {
    constructor() {
        this.isMenuOpen = false;
        this.currentPage = 'home';
        this.animation = new Animation();
        
        this.navItems = [
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About Us' },
            { id: 'services', label: 'Services' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' },
        ];
    }

    render(onPageChange) {
        this.onPageChange = onPageChange;
        const navigationElement = document.getElementById('navigation');
        
        navigationElement.innerHTML = `
            <nav class="bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-[var(--brand-green)] fixed top-0 left-0 right-0 z-50 transform -translate-y-full transition-transform duration-500">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-20">
                        <!-- Logo -->
                        <div class="flex items-center space-x-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                            <img 
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Landley Properties Logo" 
                                class="h-12 w-auto rounded-lg"
                            />
                        </div>

                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex space-x-8">
                            ${this.navItems.map(item => `
                                <button
                                    data-page="${item.id}"
                                    class="nav-item relative px-3 py-2 transition-all duration-200 hover:scale-105 active:scale-95 ${
                                        this.currentPage === item.id
                                            ? 'text-[var(--brand-green)]'
                                            : 'text-gray-700 hover:text-[var(--brand-green)]'
                                    }"
                                >
                                    ${item.label}
                                    ${this.currentPage === item.id ? '<div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--brand-green)] active-tab"></div>' : ''}
                                </button>
                            `).join('')}
                        </div>

                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button
                                id="mobile-menu-button"
                                class="p-2 rounded-md text-gray-700 hover:text-[var(--brand-green)] hover:bg-gray-100 transition-colors duration-200"
                            >
                                <svg id="menu-icon" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg id="close-icon" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Navigation -->
                    <div id="mobile-menu" class="md:hidden overflow-hidden max-h-0 opacity-0 transition-all duration-300">
                        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                            ${this.navItems.map(item => `
                                <button
                                    data-page="${item.id}"
                                    class="mobile-nav-item block w-full text-left px-3 py-2 rounded-md transition-all duration-200 hover:translate-x-2 active:scale-98 ${
                                        this.currentPage === item.id
                                            ? 'text-[var(--brand-green)] bg-green-50'
                                            : 'text-gray-700 hover:text-[var(--brand-green)] hover:bg-green-50'
                                    }"
                                >
                                    ${item.label}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </nav>
        `;

        this.bindEvents();
        this.animateIn();
    }

    bindEvents() {
        // Desktop navigation
        document.querySelectorAll('.nav-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const page = e.target.getAttribute('data-page');
                this.onPageChange(page);
            });
        });

        // Mobile navigation
        document.querySelectorAll('.mobile-nav-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const page = e.target.getAttribute('data-page');
                this.onPageChange(page);
                this.closeMobileMenu();
            });
        });

        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', () => {
            this.toggleMobileMenu();
        });
    }

    animateIn() {
        const nav = document.querySelector('nav');
        setTimeout(() => {
            nav.classList.remove('-translate-y-full');
            nav.classList.add('translate-y-0');
        }, 100);
    }

    updateActiveState(page) {
        this.currentPage = page;
        
        // Update desktop navigation
        document.querySelectorAll('.nav-item').forEach(button => {
            const buttonPage = button.getAttribute('data-page');
            const isActive = buttonPage === page;
            
            if (isActive) {
                button.classList.add('text-[var(--brand-green)]');
                button.classList.remove('text-gray-700');
                
                // Add active tab indicator
                const existingTab = button.querySelector('.active-tab');
                if (!existingTab) {
                    button.innerHTML += '<div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--brand-green)] active-tab"></div>';
                }
            } else {
                button.classList.remove('text-[var(--brand-green)]');
                button.classList.add('text-gray-700');
                
                // Remove active tab indicator
                const activeTab = button.querySelector('.active-tab');
                if (activeTab) {
                    activeTab.remove();
                }
            }
        });

        // Update mobile navigation
        document.querySelectorAll('.mobile-nav-item').forEach(button => {
            const buttonPage = button.getAttribute('data-page');
            const isActive = buttonPage === page;
            
            if (isActive) {
                button.classList.add('text-[var(--brand-green)]', 'bg-green-50');
                button.classList.remove('text-gray-700');
            } else {
                button.classList.remove('text-[var(--brand-green)]', 'bg-green-50');
                button.classList.add('text-gray-700');
            }
        });
    }

    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        if (this.isMenuOpen) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0');
            mobileMenu.classList.add('max-h-96', 'opacity-100');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            this.closeMobileMenu();
        }
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        mobileMenu.classList.add('max-h-0', 'opacity-0');
        mobileMenu.classList.remove('max-h-96', 'opacity-100');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}