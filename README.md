# Mercury Dashboard Clone

A React-based clone of the Mercury dashboard built with Tailwind CSS and TypeScript.

## Features

- **Modern Dashboard UI**: Clean, professional design inspired by Mercury's dashboard
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Interactive Components**: Tab navigation, period selectors, and interactive charts
- **Real-time Data**: Mock data that simulates real financial transactions
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## Components

- **Header**: Mercury branding with navigation
- **Stats Cards**: Key financial metrics (Income, Expenses, Net Income, Pending)
- **Cash Flow Chart**: Visual representation of income vs expenses over time
- **Recent Transactions**: List of latest financial activities
- **Quick Actions**: Common dashboard actions (New Transaction, Send Money, etc.)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Technology Stack

- **React 19**: Latest React with hooks and functional components
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer

## Project Structure

```
src/
├── components/
│   └── MercuryDashboard.tsx    # Main dashboard component
├── App.tsx                     # App entry point
├── index.css                   # Global styles with Tailwind
└── index.tsx                   # React entry point
```

## Customization

The dashboard uses Tailwind CSS classes for styling. You can customize:

- Colors: Modify the `tailwind.config.js` color palette
- Layout: Adjust grid systems and spacing
- Components: Modify the component structure and styling

## Features to Add

- Real API integration
- User authentication
- More detailed transaction views
- Export functionality
- Advanced filtering and search
- Dark mode toggle

## License

This project is for educational purposes and demonstrates modern React development practices.
