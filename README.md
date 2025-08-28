# 🐻 SuperBear Market

A modern, responsive e-commerce web application built with React, TypeScript, and Tailwind CSS. SuperBear Market offers a seamless shopping experience with advanced features like theme switching, shopping cart management, and smooth animations.

## ✨ Features

### 🛒 Shopping Experience
- **Product Catalog**: Browse through a curated selection of products with detailed information
- **Smart Shopping Cart**: Add, remove, and manage items with real-time updates
- **Auto-Close Cart**: Cart automatically closes after 3 seconds for better UX (hover to keep open)
- **Visual Feedback**: Instant "Added!" confirmation when items are added to cart
- **Quantity Management**: Easily adjust item quantities with intuitive controls

### 🎨 User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Theme System**: Multiple theme options (Light, Dark, System, Blue, Green, Purple)
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Loading States**: Skeleton screens and loading animations for better perceived performance
- **Lazy Loading**: Optimized image loading for improved performance

### 🔍 Navigation & Search
- **Category Filtering**: Filter products by categories
- **Search Functionality**: Find products quickly with the search bar
- **Hero Slider**: Featured products and promotions
- **Newsletter Signup**: Stay updated with latest offers

### 🎯 Performance & Accessibility
- **TypeScript**: Full type safety and better developer experience
- **Optimized Components**: React.memo and useMemo for performance
- **Accessible Design**: ARIA labels and keyboard navigation support
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **State Management**: Zustand for cart and app state
- **Animations**: Framer Motion
- **Icons**: Heroicons v2
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/superbear-market.git
   cd superbear-market
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AddToCartButton.tsx
│   ├── CartDrawer.tsx
│   ├── Categories.tsx
│   ├── Footer.tsx
│   ├── HeroSlider.tsx
│   ├── LazyImage.tsx
│   ├── Navbar.tsx
│   ├── Newsletter.tsx
│   ├── ProductCard.tsx
│   ├── ProductCardSkeleton.tsx
│   ├── ProductGrid.tsx
│   ├── SearchBar.tsx
│   ├── Section.tsx
│   ├── ThemeDropdown.tsx
│   └── ThemeToggle.tsx
├── contexts/            # React contexts
│   └── ThemeContext.tsx
├── data/               # Static data
│   ├── categories.ts
│   └── products.ts
├── lib/                # Utility libraries
│   └── filters.ts
├── store/              # State management
│   └── cart.ts
├── utils/              # Helper functions
│   ├── cn.ts
│   ├── format.ts
│   └── storage.ts
├── types.ts            # TypeScript type definitions
└── main.tsx           # Application entry point
```

## 🎨 Theme System

SuperBear Market features a comprehensive theme system with:

- **Light Theme**: Clean and bright interface
- **Dark Theme**: Easy on the eyes for low-light environments
- **System Theme**: Automatically matches your OS preference
- **Color Variants**: Blue, Green, and Purple accent colors

Themes are persisted in localStorage and applied using CSS custom properties.

## 🛒 Cart Features

### Auto-Close Functionality
- Cart automatically closes after 3 seconds when items are added
- Hover over cart to prevent auto-closing
- Visual notification shows "Added!" confirmation
- Blue notification bar explains auto-close behavior

### Cart Management
- Add/remove items with smooth animations
- Quantity controls with + and - buttons
- Real-time subtotal calculation
- Persistent cart state across sessions

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- CSS custom properties for theming
- Extended color palette
- Custom animations and transitions

### Vite Configuration
Optimized build setup with:
- Fast HMR (Hot Module Replacement)
- TypeScript support
- Path aliases for clean imports

## 🧪 Testing

The project includes comprehensive tests for:
- Cart functionality
- Utility functions
- Component behavior

Run tests with: `npm run test`

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Heroicons** for beautiful icons
- **Zustand** for simple state management

---

**Built with ❤️ by [Your Name]**

*SuperBear Market - Where shopping meets modern web technology* 🐻🛒
