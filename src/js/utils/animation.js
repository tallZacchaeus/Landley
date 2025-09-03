export class Animation {
    fadeOut(element, callback) {
        element.style.transition = 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out';
        element.style.opacity = '0';
        element.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            if (callback) callback();
        }, 400);
    }

    fadeIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        // Force reflow
        element.offsetHeight;
        
        element.style.transition = 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }

    slideIn(element, direction = 'left') {
        const translateX = direction === 'left' ? '-100%' : '100%';
        element.style.transform = `translateX(${translateX})`;
        element.style.transition = 'transform 0.5s ease-in-out';
        
        setTimeout(() => {
            element.style.transform = 'translateX(0)';
        }, 50);
    }

    bounceIn(element, delay = 0) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.3)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        }, delay);
    }

    staggerIn(elements, delay = 100) {
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * delay);
        });
    }
}