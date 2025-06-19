# LeetGuard Landing Page

A modern, premium SaaS landing page for LeetGuard built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, premium design with LeetCode yellow accents
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎯 Clean, modular React components
- 🎭 Smooth hover animations and transitions
- 🌙 Dark theme with premium gradients

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: DM Sans (Google Fonts)
- **Language**: TypeScript

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
web/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features grid
│   └── Footer.tsx           # Footer component
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## Design System

### Colors

- **Primary**: LeetCode Yellow (#FFA116)
- **Background**: Black (#000000) with premium gradients
- **Text**: Warm grays and off-whites for readability

### Typography

- **Font Family**: DM Sans
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components

- Clean, spacious layout with clear hierarchy
- Rounded corners and subtle shadows
- Smooth hover animations (underline effects only)
- No zoom or pop effects as per design guidelines

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

The design system is easily customizable through the `tailwind.config.js` file. You can modify:

- Colors in the `colors` section
- Font families in the `fontFamily` section
- Spacing and other design tokens

## Deployment

This is a standard Next.js application that can be deployed to:

- Vercel (recommended)
- Netlify
- Any other platform that supports Next.js
