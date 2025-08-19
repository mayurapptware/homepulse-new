# PulseZenith - Modern Home Management Platform

A beautiful, modern React TypeScript application built with Material UI that replicates the PulseZenith redesign. This project showcases a sleek, professional landing page for a home management platform with AI-powered features.

## 🚀 Features

- **Modern Design**: Sleek, gradient-based design with glass morphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Fade-in and slide-up animations for enhanced UX
- **Material UI**: Built with Material UI components for consistency
- **TypeScript**: Full TypeScript support for better development experience
- **Dark Theme**: Beautiful dark theme with custom color palette
- **Interactive Elements**: Hover effects and smooth transitions

## 🎨 Design Highlights

- **Color Scheme**: Modern purple-blue gradient (#667eea to #764ba2)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Glass Morphism**: Translucent cards with backdrop blur effects
- **Gradient Buttons**: Eye-catching call-to-action buttons
- **Custom Scrollbar**: Styled scrollbar matching the theme
- **Mobile-First**: Optimized for mobile devices with hamburger menu

## 🛠️ Tech Stack

- **React 19.1.1** - Latest React with hooks
- **TypeScript 4.9.5** - Type safety and better development experience
- **Material UI 7.3.1** - Component library and theming
- **Emotion** - CSS-in-JS styling
- **React Scripts** - Build and development tools

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd homepulse-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── HomePulseLanding.tsx    # Main landing page component
│   └── MobileMenu.tsx          # Mobile navigation menu
├── App.tsx                     # Main app component with theme
├── index.css                   # Global styles and animations
└── index.tsx                   # App entry point
```

## 🎯 Key Components

### HomePulseLanding
The main landing page component featuring:
- Hero section with compelling copy
- Feature highlights with icons
- Customer testimonials
- Call-to-action sections
- Background graphics and animations

### MobileMenu
Responsive mobile navigation with:
- Hamburger menu toggle
- Smooth slide-in animation
- Branded header
- Navigation links
- Action buttons

## 🎨 Customization

### Colors
The color scheme can be customized in `src/App.tsx`:
```typescript
palette: {
  primary: {
    main: '#667eea',    // Primary purple
  },
  secondary: {
    main: '#764ba2',    // Secondary purple
  },
}
```

### Typography
Font weights and sizes are defined in the theme:
```typescript
typography: {
  h1: {
    fontWeight: 800,
    fontSize: '4rem',
  },
  // ... other variants
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Material UI**
