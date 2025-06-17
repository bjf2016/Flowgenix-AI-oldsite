# replit.md

## Overview

This repository contains a modern Next.js website for Flowgenix AI (formerly King K Consulting), an AI consulting business targeting small and midsize businesses. The application is built as a hybrid system that supports both static HTML and Next.js functionality, designed to be deployable on various hosting platforms including traditional cPanel hosting and modern cloud platforms.

## System Architecture

### Frontend Architecture
- **Framework**: Astro 5.9.3 with TypeScript integration
- **Styling**: Tailwind CSS with custom configuration and design system
- **TypeScript**: Full TypeScript implementation for type safety
- **Build Output**: Static site generation for optimal performance

### Component-Based Architecture
The application uses Astro's component system with:
- Astro components for layout and UI elements (.astro files)
- Static site generation with dynamic content capabilities
- Tailwind CSS integration for responsive design

### Responsive Design
- Mobile-first responsive design approach
- Custom Tailwind configuration with extended color palette
- Professional blue-based color scheme with navy, light blue, and white
- Inter font family for modern typography

## Key Components

### Pages Structure
- **Homepage** (`src/pages/index.astro`): Hero section with AI consulting messaging and recent blog posts
- **Blog Index** (`src/pages/blog/index.astro`): Full blog listing with category filtering
- **Blog Posts** (`src/pages/blog/[slug].astro`): Dynamic individual blog post pages
- **Layout System** (`src/layouts/Layout.astro`): Base layout template
- **Component Library** (`src/components/`): Reusable UI components

### Component Architecture
- **Layout Component** (`Layout.astro`): Base template with meta tags and styles
- **Header Component** (`Header.astro`): Sticky navigation with smooth scrolling and blog link
- **Footer Component** (`Footer.astro`): Company information and contact details
- **Contact Form** (`ContactForm.astro`): Contact form with validation
- **Blog Components**: BlogSection, BlogCard for homepage and blog pages
- **Sanity Integration** (`src/lib/sanity.ts`): CMS client and data fetching

### Content Management
- **Sanity CMS**: Headless CMS integration for blog content management
- **Blog System**: Complete blog functionality with categories, authors, and rich content
- **Static Assets**: SVG icons and images in `/public` and `/assets` directories
- **Dynamic Content**: Real-time content fetching from Sanity API

## Data Flow

### Content Rendering
1. Blog content is fetched from Sanity CMS using GROQ queries
2. Static generation at build time with dynamic content updates
3. Dynamic routing for individual blog posts using `[slug].astro`
4. Graceful error handling when CMS is not yet configured

### Form Handling
1. Client-side validation using React Hook Form and Yup schemas
2. API route processes form data and sends emails via Nodemailer
3. SMTP configuration for email delivery
4. Spam detection and validation on server side

### Navigation
1. Smooth scrolling for anchor links within the same page
2. Dynamic active state management for navigation items
3. Mobile menu toggle functionality

## External Dependencies

### Email Service
- **Nodemailer**: For sending contact form emails
- **SMTP Configuration**: Gmail SMTP setup in environment variables
- **Validation**: Email format validation and spam detection

### Third-party Services
- **Sanity CMS**: Headless content management system for blog functionality
- **Google Fonts**: Inter font family loading
- **CDN Assets**: Optimized for external font and icon delivery

### Development Tools
- **Date-fns**: Date formatting for blog posts
- **Autoprefixer**: CSS vendor prefixing
- **PostCSS**: CSS processing pipeline

## Deployment Strategy

### Multi-platform Support
The application is designed to work across different hosting environments:

1. **Traditional Hosting (cPanel/Namecheap)**:
   - Static HTML files can be uploaded directly
   - No server-side requirements for basic functionality
   - Client-side JavaScript for interactivity

2. **Modern Cloud Hosting**:
   - Astro static build for containerized deployment
   - Optimized static assets for CDN delivery
   - Fast loading with pre-built HTML pages

3. **Development Environment**:
   - Replit configuration with Node.js 20 and Python 3.11
   - Astro development server on port 5000
   - Hot module replacement for development

### Build Configuration
- **Static Output**: Astro static site generation for optimal performance
- **Port Configuration**: Consistent port 5000 across all environments
- **Deployment Script**: Custom deploy.sh for proper build and serve process
- **Preview Server**: Astro preview server for production-like testing

## Changelog

```
Changelog:
- June 13, 2025. Initial setup
- June 13, 2025. Complete rebrand to Flowgenix AI with new logo and cyan/blue color scheme
- June 13, 2025. Implemented deployment synchronization fixes with cache busting
- June 13, 2025. Added versioning to assets and cache control headers for deployment consistency
- June 17, 2025. Fixed port configuration issues and corrected architecture documentation (Astro, not Next.js)
- June 17, 2025. Configured workflow to run on port 5001 with proper server settings
- June 17, 2025. Fixed deployment configuration to use port 5000 consistently across all configs
- June 17, 2025. Updated deployment strategy with proper Astro build and preview commands
- June 17, 2025. Fixed deployment script permissions and created reliable port 5001 deployment configuration
- June 17, 2025. Complete blog system implementation with Sanity CMS integration
- June 17, 2025. Added BlogSection to homepage showing recent posts with graceful error handling
- June 17, 2025. Created blog index page at /blog with category filtering and responsive design
- June 17, 2025. Implemented dynamic blog post pages with rich content rendering
- June 17, 2025. Added comprehensive Sanity setup guide (sanity-setup.md) for content management
- June 17, 2025. Successfully deployed complete blog system - website live with full blog functionality
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```