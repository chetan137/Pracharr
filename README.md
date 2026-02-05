# Pracharr - Creative Publicity Agency

A premium brand storytelling website and admin CMS built with the MERN stack.

## 🎨 Features

### Client Website
- **Manifesto-driven homepage** with cinematic scroll animations
- **Visual identity** using "प्र-4" creative element
- **Scroll-triggered animations** with parallax effects
- **Smart contact form** for lead capture
- **Responsive design** for all devices

### Admin CMS
- **Secure authentication** with JWT
- **Lead management** with tagging (hot/warm/cold)
- **Content management** for all homepage sections
- **Services, case studies, testimonials** management
- **Analytics dashboard** with lead statistics

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Installation

1. **Clone and install dependencies:**
```bash
npm run install-all
```

2. **Configure environment:**
- Copy `server/.env.example` to `server/.env`
- Update MongoDB URI if needed

3. **Seed the database:**
```bash
cd server
node seed.js
```

4. **Run development servers:**
```bash
npm run dev
```

### Access
- **Website:** http://localhost:5173
- **Admin:** http://localhost:5173/admin
- **API:** http://localhost:5000

### Default Admin Credentials
- **Email:** admin@pracharr.com
- **Password:** Admin@123

## 🎨 Design System

### Colors
- **Primary:** `#405d49` (Grey-Green)
- **Accent:** `#fff0d8` (Beige)

### Typography
- **Display:** Playfair Display
- **Body:** Outfit

### Visual Identity
- The "प्र-4" element appears throughout as:
  - Hero background
  - Section separators
  - Loading transitions
  - Decorative overlays

## 📁 Project Structure

```
pracharr/
├── client/                  # React Frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── context/         # Auth context
│   │   └── App.jsx          # Main app
│   └── index.html
│
├── server/                  # Node.js Backend
│   ├── controllers/         # Route handlers
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Auth middleware
│   └── server.js            # Express server
│
└── package.json             # Root scripts
```

## 🔧 API Endpoints

### Public
- `GET /api/content` - Homepage content
- `GET /api/services` - All services
- `GET /api/case-studies` - Portfolio items
- `GET /api/testimonials` - Client reviews
- `GET /api/founders` - Team members
- `POST /api/leads` - Submit contact form

### Protected (Admin)
- `POST /api/auth/login` - Admin login
- `GET /api/leads` - View all leads
- `PUT /api/leads/:id` - Update lead status/tag
- `POST /api/leads/:id/notes` - Add internal note
- `PUT /api/content/:section` - Update content
- And more...

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Animation Features
- Scroll-triggered reveals
- Parallax background effects
- Staggered text animations
- Hover micro-interactions
- Loading screen transitions

---

**Built with ❤️ by Pracharr Team**
