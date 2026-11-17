# Sanjay G.P. — Developer Portfolio

A minimalist, high-performance interactive 3D developer portfolio for **Sanjay G.P.**, an Artificial Intelligence and Data Science undergraduate at Sri Krishna College of Engineering and Technology (SKCET), Coimbatore.

Designed with an editorial minimalist aesthetic:
- **Pure Dark Palette**: Deep black background (`#050505`), subtle dark zinc surfaces (`#0a0a0c`), and ultra-fine border lines (`rgba(255, 255, 255, 0.08)`).
- **Crisp Typography**: High-contrast white typography (`Inter`) paired with monospace accents (`JetBrains Mono`).
- **Electric Blue Highlights**: `#0066FF` and `#00F0FF` accents utilized with precision for specular reflections, synaptic pulses, and focus indicators.
- **3D Spherical Neural Connectome**: 208 interconnected nodes across layered depth strata with real-time travelling action potential pulses and mouse-responsive parallax physics built with Three.js.
- **Centralized Contact Configuration**: Single source of truth in `src/config/contact.ts` powering all email, phone, GitHub, and LinkedIn links.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js (Hardware accelerated with automatic WebGL detection and graceful fallback)
- **Icons**: Lucide React + custom inline SVGs for GitHub and LinkedIn
- **Animations**: Framer Motion & custom smooth CSS transitions

---

## 📂 Project Structure

```text
SANJAY-PORTFOLIO/
├── index.html                   # SEO metadata, Google Fonts, theme color & favicon
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Minimalist dark theme & electric blue palette
├── public/
│   └── images/
│       └── sanjay-profile.jpg   # Profile photograph
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Root layout composing portfolio sections
│   ├── index.css                # Tailwind directives & custom utilities
│   ├── config/
│   │   └── contact.ts           # Centralized verified contact configuration
│   ├── data/
│   │   └── portfolioData.ts     # Centralized, fully typed portfolio content
│   └── components/
│       ├── Navbar.tsx           # Sticky glassmorphic header with mobile drawer
│       ├── Hero.tsx             # Main hero section with identity & CTAs
│       ├── Hero3D.tsx           # Interactive 3D spherical neural network visualization
│       ├── About.tsx            # Profile photo, academic background & engineering tenets
│       ├── Skills.tsx           # Categorized technical capabilities
│       ├── Projects.tsx         # EMBER, STORYPILOT, MachineSense, AI Crack Detection
│       ├── Certifications.tsx   # Verified Microsoft, Meta, IBM, Snowflake credentials
│       ├── Contact.tsx          # Email, phone, GitHub/LinkedIn & direct inquiry form
│       ├── Footer.tsx           # Minimalist footer with back-to-top action
│       ├── ResumeModal.tsx      # Interactive resume viewer with print/save PDF
│       └── Icons.tsx            # Clean SVGs for GitHub & LinkedIn
```

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📬 Contact

- **Email**: [sanjayskcet@gmail.com](mailto:sanjayskcet@gmail.com)
- **Phone**: +91 6374278990
- **GitHub**: [https://github.com/sanjaygp-22](https://github.com/sanjaygp-22)
- **LinkedIn**: [https://www.linkedin.com/in/sanjay-g-p-27497137b/](https://www.linkedin.com/in/sanjay-g-p-27497137b/)
