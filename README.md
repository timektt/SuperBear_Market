# SuperBear Market

A premium e-commerce platform built with React, TypeScript, and Tailwind CSS featuring a sophisticated design system and comprehensive shopping experience.

## Features

- 🎨 **Premium Design System**: Model-inspired aesthetic with high-contrast minimalism
- 🌓 **Dark/Light Theme**: User-selectable theme with system preference support
- 🛒 **Shopping Cart**: Full cart functionality with local persistence
- 📱 **Responsive Design**: Mobile-first approach with optimized breakpoints
- 🔍 **Search & Filter**: Client-side product search and sorting
- ♿ **Accessibility**: WCAG AA compliant with proper ARIA labels
- 🧪 **Testing**: Comprehensive test suite with Vitest

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **State Management**: Zustand for cart state
- **Animations**: Framer Motion
- **Icons**: React Icons (Heroicons v2)
- **Testing**: Vitest, React Testing Library
- **Build Tool**: Vite

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Theme)
├── data/              # Mock data (products, categories)
├── lib/               # Utility functions (filters, etc.)
├── store/             # State management (cart)
├── types.ts           # TypeScript type definitions
├── utils/             # Helper utilities
└── test/              # Test setup and utilities
```

## Design System

The project uses a token-based design system with CSS variables for consistent theming:

- **Colors**: Semantic color tokens for light/dark themes
- **Typography**: Editorial-style typography with proper hierarchy
- **Spacing**: 8px grid system for consistent layouts
- **Shadows**: Soft elevation system without heavy borders
- **Motion**: Subtle micro-animations with reduced motion support

## Screenshots

### Light Theme - Desktop
![Light Theme Desktop](placeholder-light-desktop.png)

### Dark Theme - Desktop  
![Dark Theme Desktop](placeholder-dark-desktop.png)

### Mobile Views
![Mobile Light](placeholder-mobile-light.png) ![Mobile Dark](placeholder-mobile-dark.png)

## License

MIT License - see LICENSE file for details.
