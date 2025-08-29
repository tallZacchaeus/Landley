export class Router {
    constructor() {
        this.currentPage = 'home';
    }

    init(onPageChange) {
        this.onPageChange = onPageChange;
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            const page = this.getCurrentPage();
            this.onPageChange(page);
        });
        
        // Set initial page from URL
        this.currentPage = this.getCurrentPage();
    }

    navigate(page) {
        this.currentPage = page;
        const url = page === 'home' ? '/' : `#${page}`;
        history.pushState({ page }, '', url);
    }

    getCurrentPage() {
        const hash = window.location.hash.slice(1);
        return hash || 'home';
    }
}