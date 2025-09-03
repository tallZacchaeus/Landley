# Landley Properties Real Estate Website

A modern, responsive real estate website for Landley Properties & Real Estate Development Limited, built with React, TypeScript, and Vite.

## Features

- **Modern React Architecture**: Built with React 18 and TypeScript for type safety
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional UI Components**: Clean, modern interface with Tailwind CSS
- **Single Page Application**: Smooth navigation between sections
- **Image Carousel**: Interactive hero section with property showcases
- **Contact Forms**: Functional contact forms with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technology Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautifully designed components
- **CSS Animations** - Smooth transitions and interactions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tallZacchaeus/Landley.git
cd Landley
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be available in the `build/` directory.

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── AboutPage.tsx   # About page component
│   │   ├── ContactPage.tsx # Contact page component
│   │   ├── Footer.tsx      # Footer component
│   │   ├── HomePage.tsx    # Home page component
│   │   ├── ImageCarousel.tsx # Image carousel component
│   │   ├── Navigation.tsx  # Navigation component
│   │   ├── ProjectsPage.tsx # Projects page component
│   │   └── ServicesPage.tsx # Services page component
│   ├── assets/             # Static assets (images, etc.)
│   ├── styles/             # CSS styles
│   │   └── globals.css     # Global styles
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Application entry point
│   └── index.html          # HTML template
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization

### Brand Colors
Update the CSS custom properties in `src/styles/globals.css` to match your brand colors.

### Content
Edit the component files in `src/components/` to update:
- Company information
- Property listings
- Contact details
- Service descriptions

### Styling
Modify Tailwind classes in components or add custom CSS to `globals.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Landley Properties & Real Estate Development Limited. All rights reserved.
