# replit.md

## Overview

This repository contains a modern Next.js website for Flowgenix AI (formerly King K Consulting), an AI consulting business targeting small and midsize businesses. The application is built as a hybrid system that supports both static HTML and Next.js functionality, designed to be deployable on various hosting platforms including traditional cPanel hosting and modern cloud platforms.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15.3.3 with React 19.1.0
- **Styling**: Tailwind CSS with custom global styles
- **TypeScript**: Full TypeScript implementation for type safety
- **Build Output**: Configured as standalone for flexible deployment

### Hybrid Design Approach
The application maintains both static HTML files and Next.js components to support different deployment scenarios:
- Static HTML files (`index.html`, `styles.css`, `script.js`) for traditional hosting
- Next.js pages and components for modern hosting with server-side capabilities

### Responsive Design
- Mobile-first responsive design approach
- Custom Tailwind configuration with extended color palette
- Professional blue-based color scheme with navy, light blue, and white
- Inter font family for modern typography

## Key Components

### Pages Structure
- **Homepage** (`pages/index.tsx`): Hero section with AI consulting messaging
- **Blog System** (`pages/blog/`): Dynamic blog with markdown post support
- **API Routes** (`pages/api/contact.ts`): Contact form handling with email integration

### Component Architecture
- **Layout Component**: Consistent header/footer across all pages
- **Header**: Sticky navigation with scroll effects and mobile menu
- **Footer**: Company information and contact links
- **ContactForm**: React Hook Form with Yup validation and API integration

### Content Management
- **Blog Posts**: Markdown files in `/posts` directory with frontmatter metadata
- **Static Assets**: SVG icons and images in `/public` and `/assets` directories
- **Gray-matter**: For parsing markdown frontmatter and content

## Data Flow

### Content Rendering
1. Markdown blog posts are processed using `remark` and `remark-html`
2. Static generation at build time for optimal performance
3. Dynamic routing for individual blog posts using `[id].tsx`

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
   - Next.js standalone build for containerized deployment
   - API routes for enhanced functionality
   - Server-side rendering capabilities

3. **Development Environment**:
   - Replit configuration with Node.js 20 and Python 3.11
   - Development server on port 5000
   - Hot reloading for development

### Build Configuration
- **Standalone Output**: Self-contained deployment package
- **Image Optimization**: Configured for various hosting environments
- **Trailing Slash**: URL structure optimization
- **Static Export**: Compatible with static hosting when needed

## Changelog

```
Changelog:
- June 13, 2025. Initial setup
- June 13, 2025. Complete rebrand to Flowgenix AI with new logo and cyan/blue color scheme
- June 13, 2025. Implemented deployment synchronization fixes with cache busting
- June 13, 2025. Added versioning to assets and cache control headers for deployment consistency
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```