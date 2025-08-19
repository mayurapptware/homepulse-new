# HomePulse AI Landing Page

A modern, responsive landing page for HomePulse AI built with React and Material-UI (MUI). This project recreates the design from the provided screenshot with a dark theme, gradient accents, and mobile-responsive layout.

## Features

- 🎨 **Dark Theme Design** - Matches the original HomePulse AI design with dark background and blue-orange gradients
- 📱 **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- 🎯 **Modern UI Components** - Built with Material-UI for consistent design and accessibility
- ⚡ **Fast Performance** - Optimized React components with TypeScript
- 🎭 **Custom Styling** - Gradient buttons, custom typography, and animated elements

## Design Elements

- **Color Scheme**: Dark charcoal background (#1A1A1A) with blue (#4A90E2) and orange (#F5A623) accents
- **Typography**: Roboto font family with varying weights for hierarchy
- **Gradients**: Blue-to-orange gradients for buttons and text highlights
- **Layout**: Clean, centered design with subtle background graphics

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd homepulse-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/
│   ├── HomePulseLanding.tsx    # Main landing page component
│   └── MobileMenu.tsx          # Mobile navigation menu
├── App.tsx                     # Main app component with theme setup
├── index.tsx                   # App entry point
└── index.css                   # Global styles
```

## Customization

### Colors
The color scheme can be modified in `src/App.tsx` within the theme configuration:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // Blue accent
    },
    secondary: {
      main: '#F5A623', // Orange accent
    },
    background: {
      default: '#1A1A1A', // Dark background
    },
  },
});
```

### Typography
Font sizes and weights can be adjusted in the theme configuration:

```typescript
typography: {
  h1: {
    fontWeight: 700,
    fontSize: '3.5rem',
  },
  // ... other typography variants
}
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Material-UI (MUI)** - Component library
- **Emotion** - CSS-in-JS styling
- **Roboto Font** - Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

To build the project for production:

```bash
npm run build
```

The build files will be created in the `build/` directory, ready for deployment to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the repository.
