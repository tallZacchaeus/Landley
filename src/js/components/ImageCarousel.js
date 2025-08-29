export class ImageCarousel {
    constructor() {
        this.currentIndex = 0;
        this.images = [];
        this.autoSlide = true;
        this.autoSlideInterval = 5000;
        this.intervalId = null;
    }

    render(images) {
        this.images = images;
        const carouselElement = document.getElementById('image-carousel');
        
        carouselElement.innerHTML = `
            <div class="relative w-full h-screen overflow-hidden">
                <!-- Image Container -->
                <div id="image-container" class="relative w-full h-full">
                    ${this.images.map((image, index) => `
                        <div class="carousel-slide absolute inset-0 transition-opacity duration-700 ${index === 0 ? 'opacity-100' : 'opacity-0'}">
                            <img
                                src="${image.src}"
                                alt="${image.alt}"
                                class="w-full h-full object-cover"
                            />
                            <!-- Overlay gradient -->
                            <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                            
                            <!-- Content overlay -->
                            <div class="absolute inset-0 flex items-center">
                                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                    <div class="max-w-2xl">
                                        <h2 class="slide-title text-3xl md:text-5xl text-white mb-4 opacity-0 translate-y-8 transition-all duration-800">
                                            ${image.title}
                                        </h2>
                                        <p class="slide-subtitle text-lg md:text-xl text-white/90 leading-relaxed opacity-0 translate-y-8 transition-all duration-800">
                                            ${image.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Navigation Arrows -->
                <button
                    id="prev-button"
                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10 hover:scale-110 active:scale-90"
                >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    id="next-button"
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10 hover:scale-110 active:scale-90"
                >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Dot indicators -->
                <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                    ${this.images.map((_, index) => `
                        <button
                            data-slide="${index}"
                            class="dot-indicator w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 active:scale-90 ${
                                index === 0 ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                            }"
                        ></button>
                    `).join('')}
                </div>

                <!-- Slide counter -->
                <div class="absolute bottom-8 right-8 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm z-10">
                    <span id="slide-counter">1 / ${this.images.length}</span>
                </div>
            </div>
        `;

        this.bindEvents();
        this.startAutoSlide();
        this.animateCurrentSlide();
    }

    bindEvents() {
        // Previous button
        document.getElementById('prev-button').addEventListener('click', () => {
            this.prevSlide();
        });

        // Next button
        document.getElementById('next-button').addEventListener('click', () => {
            this.nextSlide();
        });

        // Dot indicators
        document.querySelectorAll('.dot-indicator').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

        // Pause auto-slide on hover
        const carousel = document.getElementById('image-carousel');
        carousel.addEventListener('mouseenter', () => {
            this.stopAutoSlide();
        });

        carousel.addEventListener('mouseleave', () => {
            this.startAutoSlide();
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateSlide();
    }

    prevSlide() {
        this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
        this.updateSlide();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlide();
    }

    updateSlide() {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot-indicator');
        const counter = document.getElementById('slide-counter');

        // Update slides
        slides.forEach((slide, index) => {
            if (index === this.currentIndex) {
                slide.classList.remove('opacity-0');
                slide.classList.add('opacity-100');
            } else {
                slide.classList.remove('opacity-100');
                slide.classList.add('opacity-0');
            }
        });

        // Update dots
        dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.remove('bg-white/50');
                dot.classList.add('bg-white', 'scale-125');
            } else {
                dot.classList.remove('bg-white', 'scale-125');
                dot.classList.add('bg-white/50');
            }
        });

        // Update counter
        counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;

        // Animate content
        this.animateCurrentSlide();
    }

    animateCurrentSlide() {
        const currentSlide = document.querySelectorAll('.carousel-slide')[this.currentIndex];
        const title = currentSlide.querySelector('.slide-title');
        const subtitle = currentSlide.querySelector('.slide-subtitle');

        // Reset animations
        title.classList.add('opacity-0', 'translate-y-8');
        subtitle.classList.add('opacity-0', 'translate-y-8');

        // Animate in
        setTimeout(() => {
            title.classList.remove('opacity-0', 'translate-y-8');
            title.classList.add('opacity-100', 'translate-y-0');
        }, 300);

        setTimeout(() => {
            subtitle.classList.remove('opacity-0', 'translate-y-8');
            subtitle.classList.add('opacity-100', 'translate-y-0');
        }, 500);
    }

    startAutoSlide() {
        if (this.autoSlide && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.nextSlide();
            }, this.autoSlideInterval);
        }
    }

    stopAutoSlide() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}