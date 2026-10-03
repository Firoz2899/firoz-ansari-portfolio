# 🚀 Personal Portfolio

A modern, responsive developer portfolio built with **React, TypeScript, Vite, and Tailwind CSS**.

The portfolio showcases my skills, professional experience, projects, services, technology stack, GitHub activity, and contact information in a clean and interactive interface.

## ✨ Features

* 🎨 Modern and responsive UI
* 🌙 Dark / Light / System theme support
* 💾 Theme preference persisted in `localStorage`
* 📱 Fully responsive across desktop, tablet, and mobile
* ⚡ Fast development and production builds with Vite
* 🧩 Reusable React components
* 🎯 Smooth scrolling navigation
* 💻 Skills and technology stack showcase
* 💼 Professional experience section
* 🚀 Projects showcase
* 🛠️ Services section
* 🐙 GitHub activity section
* 📬 Contact section
* ✨ Modern animations and visual effects
* 🔤 TypeScript for type safety
* 🎨 Tailwind CSS utility-first styling

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Lucide React

### Development Tools

* ESLint
* TypeScript
* Vite
* npm / pnpm

## 📁 Project Structure

```text
src/
├── components/
│   ├── sections/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── GitHubActivity/
│   │   ├── Hero/
│   │   ├── Projects/
│   │   ├── Services/
│   │   ├── Skills/
│   │   ├── TechStack/
│   │   └── Footer/
│   │
│   ├── Navbar/
│   └── ThemeToggle/
│
├── hooks/
│   └── useTheme.ts
│
├── lib/
│
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-portfolio.git
```

### 2. Navigate to the project

```bash
cd your-portfolio
```

### 3. Install dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

### 4. Start the development server

Using npm:

```bash
npm run dev
```

Or using pnpm:

```bash
pnpm dev
```

The application will usually be available at:

```text
http://localhost:5173
```

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Or:

```bash
pnpm build
```

Preview the production build locally:

```bash
npm run preview
```

Or:

```bash
pnpm preview
```

## 🎨 Theme System

The portfolio supports three theme modes:

* ☀️ Light
* 🌙 Dark
* 💻 System

The selected theme is stored in `localStorage`, so the user's preference remains available after refreshing or reopening the website.

The theme system uses CSS variables together with Tailwind CSS.

For example:

```css
:root {
  --ink-950: 248 250 252;
  --ink-100: 15 23 42;
}

.dark {
  --ink-950: 12 14 19;
  --ink-100: 248 250 252;
}
```

This allows existing Tailwind classes such as:

```tsx
<div className="bg-ink-950 text-ink-100">
  ...
</div>
```

to automatically adapt to the active theme.

## 🧭 Navigation

Navigation links are defined in a centralized configuration:

```ts
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
] as const;
```

The `href` type can be automatically derived from the configuration:

```ts
export type NavHref = (typeof navLinks)[number]['href'];
```

This means adding a new navigation item automatically updates the corresponding TypeScript type.

## 📱 Responsive Design

The portfolio is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Tailwind CSS responsive utilities are used to adapt layouts and components to different screen sizes.

## 🔧 Customization

You can customize the portfolio by updating:

### Personal Information

Update the relevant section components with your:

* Name
* Professional title
* Introduction
* Experience
* Skills
* Projects
* Services
* Contact information
* Social links

### Navigation

Update the navigation configuration to add, remove, or rename sections.

### Theme

Theme colors can be customized through the CSS variables in:

```text
src/index.css
```

### Tailwind Configuration

Tailwind-specific configuration can be modified in:

```text
tailwind.config.js
```

## 🌐 Deployment

The project can be deployed to platforms such as:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages
* Any static hosting provider

For most hosting platforms, the build command is:

```bash
npm run build
```

and the output directory is:

```text
dist
```

## 📌 Environment Variables

If the project uses environment variables, create a `.env` file in the project root:

```env
VITE_API_URL=your_api_url
```

For Vite applications, client-side environment variables must start with:

```text
VITE_
```

Do not commit sensitive credentials or secrets to the repository.

## 📄 License

This project is available for personal and educational use.

If you reuse parts of the project, please consider giving appropriate credit.

---

## 👨‍💻 About

Built with ❤️ using **React + TypeScript + Vite + Tailwind CSS**.

⭐ If you find this project useful, consider giving the repository a star.
