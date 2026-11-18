# Vivek Mahajan — Premium AI/ML Engineer Portfolio

A production-quality personal portfolio website tailored for an aspiring **AI/ML Engineer**, **Generative AI Developer**, and **Agentic AI Enthusiast**. Inspired by the modern fixed-sidebar layout aesthetic, built with React, Vite, TypeScript, and Tailwind CSS.

---

## 🚀 Live Preview & Development

The preview server is configured and running:
- **Local URL**: [http://localhost:3000](http://localhost:3000)

To run the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

---

## 🎨 Color Palette & Design Tokens

| Token | Hex Value | Purpose |
| :--- | :--- | :--- |
| **Background** | `#0B1120` | Deep dark slate main canvas |
| **Sidebar** | `#050B14` | Midnight navy fixed navigation |
| **Cards** | `#111827` | Content & project showcase containers |
| **Primary Accent** | `#00A6D6` | Vibrant cyan highlighting active states & actions |
| **Text Primary** | `#FFFFFF` | Crisp white typography |
| **Secondary Text** | `#9CA3AF` | Muted slate secondary labels & descriptions |

---

## 📂 Architecture & Directory Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Custom geometric developer favicon
│   ├── resume.pdf              # Downloadable resume PDF
│   └── images/
│       └── hero-reference.jpg  # Hero & profile visual assets
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx         # Fixed vertical sidebar navigation with active indicator
│   │   ├── MobileHeader.tsx    # Responsive top app bar with mobile menu toggle
│   │   ├── Hero.tsx            # Full-height hero with typing effect & CTA buttons
│   │   ├── About.tsx           # Bio, MIT College education (7.99 CGPA) & stat cards
│   │   ├── Resume.tsx          # Education & project experience timeline
│   │   ├── Skills.tsx          # Categorized technical competencies with search
│   │   ├── Projects.tsx        # Project showcase with category filtering
│   │   ├── ProjectCard.tsx     # Modern project cards with status badges
│   │   ├── ProjectModal.tsx    # Detailed architectural view modal
│   │   ├── Services.tsx        # Technical offerings and collaborative focus areas
│   │   ├── Certifications.tsx  # Verifiable certification cards with credentials
│   │   ├── Contact.tsx         # Working contact form with validation & mail fallback
│   │   ├── Footer.tsx          # Dynamic copyright year & back-to-top button
│   │   ├── ThemeToggle.tsx     # Smooth dark/light theme switch
│   │   └── NotFound.tsx        # Custom 404 error display
│   ├── data/
│   │   ├── personal.ts         # Centralized profile information
│   │   ├── skills.ts           # 6 technical skill categories
│   │   ├── projects.ts         # 6 featured AI/ML project specifications
│   │   ├── services.ts         # 6 core technical service definitions
│   │   └── certifications.ts   # Verifiable course certifications
│   ├── hooks/
│   │   ├── useActiveSection.ts # Scroll spy intersection tracker
│   │   ├── useTheme.ts         # Persistent light/dark mode state
│   │   └── useTypingEffect.ts  # Smooth typing loop for hero roles
│   ├── types/
│   │   └── index.ts            # Complete TypeScript interface definitions
│   ├── App.tsx                 # Main application layout coordinator
│   ├── main.tsx                # React root mount
│   └── index.css               # Tailwind directives & custom scrollbars
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Key Features Implemented

1. **Fixed Sidebar Navigation**:
   - Circular profile portrait with hover glow and online status badge.
   - Vivek Mahajan typography with `#00A6D6` role subtitle.
   - Quick social links: GitHub, LinkedIn, Instagram, Email.
   - Active section tracking (scroll-spy) with smooth scrolling and cyan indicators.
   - Collapsible mobile drawer with backdrop blur.

2. **Cinematic Hero Section**:
   - Darkened photographic developer background.
   - Dynamic typing loop cycling through: *Machine Learning Developer*, *Generative AI Developer*, *Agentic AI Enthusiast*, *Python Developer*, and *Computer Vision Enthusiast*.
   - Direct CTA buttons: **Explore My Projects** & **Download Resume**.
   - Animated scroll-down indicator.

3. **About Me**:
   - Authentic profile details: Final-year Engineering student at **MIT College**, **7.99 CGPA**, **Maharashtra, India**.
   - 4 honest achievement cards: *AI/ML Projects (6+)*, *Technologies Mastered (25+)*, *Specializations (3)*, *Problem-Solving Focus (100%)*.

4. **Resume Timeline**:
   - Structured education and project-based experience timeline.
   - Honest representation without fabricated employment history.

5. **Categorized Skills**:
   - *Programming Languages*, *Data Science*, *Machine Learning*, *Deep Learning*, *Generative AI*, *Tools & Technologies*.
   - Real-time instant search filter.
   - Clean badges without misleading percentage meters.

6. **Featured Projects Showcase**:
   - **Student Performance Prediction** (Supervised ML)
   - **Student ERP Risk Prediction System** (Random Forest, Supabase, SQLAlchemy)
   - **IPC.AI – Indian Legal AI Assistant** (RAG, ChromaDB, Sentence Transformers)
   - **MSRTC Smart Bus Tracking System** (FastAPI, Kafka, Google Maps API)
   - **AI Job Outreach Agent** (Agentic AI, Multi-agent graphs, Redis)
   - **Semantic Cache** (Vector embeddings, latency reduction for LLMs)
   - Category filtering (All, Machine Learning, Deep Learning, Generative AI, Agentic AI, Full Stack AI).
   - Interactive **Project Details Modal** with architecture diagrams and source repository links.

7. **Contact & Email Handling**:
   - Comprehensive form validation for name, email, subject, and message.
   - API dispatch with automatic mail client fallback.

