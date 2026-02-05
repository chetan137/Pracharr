# Pracharr - Full-Stack MERN Implementation Plan

## Project Overview
A premium brand storytelling website and admin CMS for Pracharr creative publicity agency.

## Color Theme
- **Primary Background**: #405d49 (Grey-Green)
- **Highlights/Accents**: #fff0d8 (Beige)
- **Visual Identity**: "प्र-4" creative element

## Project Structure

```
pracharr/
├── client/                  # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/      # Reusable UI components
│   │   │   ├── layout/      # Header, Footer, Navigation
│   │   │   ├── sections/    # Homepage sections
│   │   │   └── admin/       # Admin panel components
│   │   ├── pages/
│   │   │   ├── public/      # Client-facing pages
│   │   │   └── admin/       # Admin dashboard pages
│   │   ├── hooks/           # Custom React hooks
│   │   ├── context/         # Auth & App context
│   │   ├── services/        # API service functions
│   │   ├── styles/          # Global CSS
│   │   ├── utils/           # Helper functions
│   │   └── assets/          # Images, fonts
│   └── package.json
│
├── server/                  # Node.js Backend
│   ├── config/              # DB & env configuration
│   ├── controllers/         # Route handlers
│   ├── middleware/          # Auth, validation, error handling
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   ├── utils/               # Helper utilities
│   └── server.js
│
└── package.json             # Root package.json
```

## Phase 1: Project Setup & Backend Foundation

### 1.1 Backend Setup
- [x] Initialize Node.js project
- [x] Configure Express server
- [x] Setup MongoDB connection
- [x] Configure environment variables
- [x] Setup CORS and security middleware

### 1.2 Database Models
- [x] User model (admin authentication)
- [x] HomepageContent model (manifesto, hero, sections)
- [x] Service model
- [x] CaseStudy model
- [x] Testimonial model
- [x] Founder model
- [x] Lead model (contact form submissions)
- [x] SEOSettings model

### 1.3 API Routes
- [x] Auth routes (login, logout, protected)
- [x] Content management routes
- [x] Lead management routes
- [x] Analytics routes

## Phase 2: Frontend Client Website

### 2.1 Setup & Core Components
- [x] Initialize React with Vite
- [x] Configure routing
- [x] Setup global styles with design system
- [x] Create animation utilities

### 2.2 Homepage Sections
- [x] Hero section with "प्र-4" element
- [x] Philosophy/Manifesto section
- [x] Services section
- [x] Case Studies section
- [x] Founders section
- [x] Testimonials section
- [x] Contact form section

### 2.3 Animations & Interactions
- [x] Scroll-triggered animations
- [x] Parallax effects
- [x] Staggered text reveals
- [x] Micro-interactions
- [x] Loading transitions

## Phase 3: Admin Dashboard

### 3.1 Authentication
- [x] Login page
- [x] Protected routes
- [x] Role-based access

### 3.2 Content Management
- [x] Homepage content editor
- [x] Services manager
- [x] Case studies manager
- [x] Testimonials manager
- [x] Founders manager

### 3.3 Lead Management
- [x] Lead inbox
- [x] Lead tagging (hot/warm/cold)
- [x] Internal notes
- [x] Status tracking

### 3.4 Analytics
- [x] Lead count dashboard
- [x] Conversion tracking
- [x] Basic metrics

## Technical Stack

### Frontend
- React 18+ with Vite
- React Router v6
- Framer Motion (animations)
- Intersection Observer API
- Axios for API calls
- CSS Modules / Vanilla CSS

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing
- Express Validator
- Multer (file uploads)

### Deployment Ready
- Environment configuration
- Build optimization
- Security headers
