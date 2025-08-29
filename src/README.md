# Landley Properties - Vanilla JavaScript Website

A modern, responsive real estate website for Landley Properties & Real Estate Development Limited, built with vanilla JavaScript, HTML, and Tailwind CSS.

## Features

- **Fully Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS transitions and intersection observer-based scroll animations
- **Interactive Image Carousel**: Auto-sliding hero carousel with navigation controls
- **Single Page Application**: Client-side routing with browser history support
- **Modern UI Components**: Professional design with green color scheme
- **Contact Forms**: Functional contact form with validation
- **SEO Optimized**: Clean HTML structure with proper meta tags

## Pages

1. **Home** - Hero carousel, company overview, testimonials
2. **About** - Company story, mission/vision, team members
3. **Services** - Property brokerage, shortlets, development, landbanking
4. **Projects** - Featured properties with detailed information
5. **Contact** - Contact form, office details, FAQs

## Technology Stack

- **HTML5** - Semantic markup
- **Vanilla JavaScript** - ES6+ modules and classes
- **Tailwind CSS v4** - Utility-first CSS framework
- **CSS Custom Properties** - Theme system with brand colors
- **Intersection Observer API** - Scroll-triggered animations
- **History API** - Client-side routing

## Getting Started

### Prerequisites

You need a local web server to run this application due to ES6 modules. You can use any of the following:

### Option 1: Python (if installed)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Option 2: Node.js (if installed)
```bash
# Install a simple server globally
npm install -g http-server

# Run in project directory
http-server -p 8000
```

### Option 3: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Any other local server
You can use any local development server of your choice.

## File Structure

```
├── index.html                 # Main HTML file
├── js/
│   ├── app.js                # Main application entry point
│   ├── components/           # Page components
│   │   ├── Navigation.js     # Navigation component
│   │   ├── HomePage.js       # Home page
│   │   ├── AboutPage.js      # About page
│   │   ├── ServicesPage.js   # Services page
│   │   ├── ProjectsPage.js   # Projects page
│   │   ├── ContactPage.js    # Contact page
│   │   ├── Footer.js         # Footer component
│   │   └── ImageCarousel.js  # Carousel component
│   └── utils/                # Utility classes
│       ├── router.js         # Client-side routing
│       └── animation.js      # Animation utilities
├── styles/
│   └── globals.css           # Global CSS and Tailwind config
└── README.md                 # This file
```

## Key Features Explained

### Component Architecture
Each page is implemented as an ES6 class with methods for rendering HTML and handling events. Components are modular and reusable.

### Routing System
The application uses hash-based routing for simplicity and compatibility. The router handles browser navigation and updates the URL without page reloads.

### Animation System
Scroll-triggered animations are implemented using the Intersection Observer API for better performance than scroll event listeners.

### Responsive Design
Built mobile-first with Tailwind CSS utilities. All components adapt smoothly to different screen sizes.

### Performance Optimizations
- Lazy loading of animations
- Efficient event delegation
- Minimal DOM manipulation
- CSS-based animations where possible

## Customization

### Brand Colors
Update the CSS custom properties in `styles/globals.css`:

```css
:root {
  --brand-green: #228B22;
  --brand-light-green: #32CD32;
  --brand-dark-green: #006400;
}
```

### Content
Edit the component files in `js/components/` to update:
- Text content
- Images
- Contact information
- Project details

### Styling
Modify Tailwind classes throughout the components or add custom CSS to `globals.css`.

## Contact Information

- **Phone**: 07064288437, 07061962893
- **Email**: landleyrealestate@gmail.com
- **Address**: Innovation Hub, Redemption City, Ogun State
- **WhatsApp**: https://wa.me/2347064288437

## Browser Support

- Chrome 61+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

© 2024 Landley Properties & Real Estate Development Limited. All rights reserved.