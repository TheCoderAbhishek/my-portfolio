# My Portfolio

A modern, responsive, and animated **developer portfolio website** built using **React 19, TypeScript, and Vite**.  
This portfolio showcases my professional experience, technical skills, featured projects, and contact details with a clean dark UI, smooth animations, and a production-ready frontend architecture.

🌐 **Live Demo**  
https://thecoderabhishek.github.io/my-portfolio

---

## ✨ Features

- Built with **React 19 + TypeScript + Vite**
- Modern **dark theme with glassmorphism UI**
- Smooth, scroll-based animations using **Framer Motion**
- Fully **responsive and mobile-first design**
- Sticky navbar with **active section highlighting**
- Modular, reusable, strongly-typed components
- Strict **ESLint + TypeScript** configuration
- Optimized build and **GitHub Pages deployment**

---

## 🛠 Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Bootstrap 5 & React-Bootstrap
- Framer Motion
- Lucide React & React Icons

### Tooling
- ESLint (Flat Config)
- TypeScript (Strict Mode)
- GitHub Pages (gh-pages)

---

## 📂 Project Structure

```text
my-portfolio/
├─ public/
│  ├─ profile_photo.jpg
│  ├─ about.jpg
│  ├─ resume.pdf
│  └─ project images
│
├─ src/
│  ├─ components/
│  │  ├─ AnimatedSection.tsx
│  │  ├─ NavbarComponent.tsx
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Contact.tsx
│  │  └─ Footer.tsx
│  │
│  ├─ style/
│  │  ├─ Hero.css
│  │  ├─ About.css
│  │  ├─ Experience.css
│  │  ├─ Skills.css
│  │  ├─ Projects.css
│  │  ├─ Contact.css
│  │  ├─ NavbarComponent.css
│  │  └─ Footer.css
│  │
│  ├─ App.tsx
│  ├─ App.css
│  ├─ main.tsx
│  └─ index.css
│
├─ vite.config.ts
├─ eslint.config.js
├─ tsconfig.json
├─ package.json
└─ index.html
````

---

## 🧠 Architecture Overview

* `index.html` mounts the React application at `#root`
* `main.tsx` bootstraps React using `createRoot`
* `App.tsx` acts as the root layout and manages **active section state**
* Each major section (Hero, About, Experience, etc.) is a **self-contained component**
* `AnimatedSection` wraps sections to:

  * Trigger animations when entering the viewport
  * Update navbar state based on scroll position
* State flow is **simple, predictable, and local**, avoiding unnecessary global state

This architecture prioritizes **readability, scalability, and maintainability**.

---

## 🎬 Animations

Animations are implemented using **Framer Motion**:

* Section fade-in and slide-up effects
* Staggered animations for text and images
* Alternating left/right animations for the Experience timeline
* Viewport-based triggers to ensure animations run **only once**
* Smooth transitions without impacting performance

---

## 🎨 Styling Approach

* Global styles defined in `App.css`
* Section-specific styles under `src/style`
* Dark UI theme with accent color `#7a5af8`
* Glassmorphism effect using `backdrop-filter`
* Bootstrap grid system for responsive layouts
* CSS kept modular and readable for easy customization

---

## 🚀 Getting Started

### Prerequisites

* Node.js **18+**
* npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open in browser:
`http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🌍 Deployment (GitHub Pages)

This project is configured for GitHub Pages deployment.

* `homepage` is defined in `package.json`
* `base: '/my-portfolio/'` is set in `vite.config.ts`

### Deploy

```bash
npm run deploy
```

This command:

1. Builds the project
2. Publishes the `dist/` folder to GitHub Pages

---

## 🛠 Customization Guide

* **Hero & intro text** → `Hero.tsx`
* **About content** → `About.tsx`
* **Experience timeline** → `experienceData` in `Experience.tsx`
* **Skills list** → `skillData` in `Skills.tsx`
* **Projects** → `projectData` in `Projects.tsx`
* **Resume file** → Replace `public/resume.pdf`
* **Images** → Update files in `public/`

---

## 👨‍💻 Author

**Abhishek Hanumant Patil**
Full Stack Developer (.NET & React)

* GitHub: [https://github.com/TheCoderAbhishek](https://github.com/TheCoderAbhishek)
* LinkedIn: [https://linkedin.com/in/yuvraj96k](https://linkedin.com/in/yuvraj96k)
* Email: [patil.abhishek.66333@gmail.com](mailto:patil.abhishek.66333@gmail.com)

---

## 📄 License

This is a **personal portfolio project**.
You are free to fork and customize it for your own portfolio, but please avoid direct content plagiarism.

⭐ If you like this project, consider starring the repository!

```
If you want next, I can:
- Add a **“Design Decisions”** section
- Add a **“What recruiters should notice”** section
- Make a **short ATS-friendly README**
- Add **screenshots + badges**

But structurally, this README is now **complete, professional, and production-grade**.
```
