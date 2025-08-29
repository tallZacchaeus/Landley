import { Navigation } from './components/Navigation.js';
import { HomePage } from './components/HomePage.js';
import { AboutPage } from './components/AboutPage.js';
import { ServicesPage } from './components/ServicesPage.js';
import { ProjectsPage } from './components/ProjectsPage.js';
import { ContactPage } from './components/ContactPage.js';
import { Footer } from './components/Footer.js';
import { Router } from './utils/router.js';
import { Animation } from './utils/animation.js';

class App {
    constructor() {
        this.currentPage = 'home';
        this.navigation = new Navigation();
        this.footer = new Footer();
        this.router = new Router();
        this.animation = new Animation();
        
        this.pages = {
            home: new HomePage(),
            about: new AboutPage(),
            services: new ServicesPage(),
            projects: new ProjectsPage(),
            contact: new ContactPage()
        };

        this.init();
    }

    init() {
        // Initialize navigation and footer
        this.navigation.render(this.handlePageChange.bind(this));
        this.footer.render(this.handlePageChange.bind(this));
        
        // Setup router
        this.router.init(this.handlePageChange.bind(this));
        
        // Show initial page
        this.handlePageChange(this.router.getCurrentPage());
        
        // Show WhatsApp button with animation
        this.showWhatsAppButton();
    }

    handlePageChange(page) {
        const mainContent = document.getElementById('main-content');
        
        if (this.currentPage === page) return;
        
        // Update current page
        this.currentPage = page;
        
        // Update router
        this.router.navigate(page);
        
        // Update navigation active state
        this.navigation.updateActiveState(page);
        
        // Animate page transition
        this.animation.fadeOut(mainContent, () => {
            // Render new page
            if (this.pages[page]) {
                this.pages[page].render(this.handlePageChange.bind(this));
            } else {
                this.pages.home.render(this.handlePageChange.bind(this));
            }
            
            this.animation.fadeIn(mainContent);
        });
    }

    showWhatsAppButton() {
        setTimeout(() => {
            const whatsappButton = document.getElementById('whatsapp-button');
            whatsappButton.classList.remove('opacity-0', 'scale-0');
            whatsappButton.classList.add('opacity-100', 'scale-100');
        }, 1000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});