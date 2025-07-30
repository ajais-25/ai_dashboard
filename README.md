# AI-Powered Analytics Dashboard

A modern, responsive analytics dashboard built with Next.js 15, Material-UI, and Tailwind CSS. This application provides comprehensive insights and data visualization capabilities with a clean, professional interface.

## 🚀 Features

### Core Features

- **Modern Dashboard Interface**: Clean, professional design with responsive layout
- **Dark/Light Theme Support**: Seamless theme switching using next-themes
- **Interactive Data Visualization**: Multiple chart types for comprehensive analytics
- **Data Grid**: Advanced data table with filtering, sorting, and pagination
- **Key Performance Metrics**: KPI cards with trend indicators

### Dashboard Components

#### 📊 Key Metrics Cards

- **Total Revenue**: Revenue tracking with percentage change indicators
- **New Customers**: Customer acquisition metrics
- **Active Accounts**: User engagement statistics
- **Growth Rate**: Business growth indicators

#### 📈 Charts & Visualizations

- **Sessions Chart**: Line chart showing user session trends over time
- **Page Views Bar Chart**: Bar chart for page view analytics
- **User by Country Chart**: Geographic distribution of users
- **Interactive Data Grid**: Sortable, filterable data table with MUI X DataGrid

#### 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme Toggle**: Light/dark mode with system preference detection
- **Gradient Backgrounds**: Modern visual design elements

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.0** - Latest React version
- **TypeScript 5** - Type-safe development

### UI Libraries

- **Material-UI (MUI) 7.2.0** - Component library and theming
- **MUI X Charts 8.9.0** - Advanced charting components
- **MUI X DataGrid 8.9.1** - Professional data grid
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Headless UI components for accessibility

### Additional Libraries

- **next-themes 0.4.6** - Theme management
- **Lucide React** - Modern icon library
- **Recharts 2.15.4** - Additional charting library
- **@tabler/icons-react** - Icon collection
- **clsx & tailwind-merge** - Conditional styling utilities

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.17 or higher)
- **npm** or **yarn** or **pnpm** package manager
- **Git** (for cloning the repository)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ajais-25/ai_dashboard.git
cd ai_dashboard
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
ai_dashboard/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── dashboard/  # Dashboard page
│   │   └── layout.tsx  # Root layout
│   ├── components/     # Reusable components
│   │   ├── charts/     # Chart components
│   │   └── key-metrics/ # KPI cards
│   ├── internals/      # Internal utilities
│   │   └── data/       # Mock data
│   └── lib/            # Utilities and configurations
├── components.json     # shadcn/ui configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── next.config.ts      # Next.js configuration
```

## 🎨 Customization

### Theme Configuration

The application uses a dual-theme system:

- **Tailwind CSS** for layout and utilities
- **Material-UI** for components and advanced theming

To customize the theme:

1. Edit `src/lib/theme.ts` for MUI theme settings
2. Modify `tailwind.config.js` for Tailwind customizations

### Adding New Components

1. Create components in appropriate directories under `src/components/`
2. Follow the existing naming conventions
3. Use TypeScript for type safety

### Data Configuration

Mock data is stored in `src/internals/data/gridData.tsx`. Replace with your actual data sources:

1. Update data structures
2. Modify API endpoints (when implemented)
3. Adjust chart configurations

## 🔧 Configuration Files

- **ESLint**: `eslint.config.mjs` - Code quality rules
- **TypeScript**: `tsconfig.json` - TypeScript configuration
- **PostCSS**: `postcss.config.mjs` - CSS processing
- **Next.js**: `next.config.ts` - Framework configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**ADmyBRAND Insights** - Empowering data-driven decisions with beautiful analytics.
