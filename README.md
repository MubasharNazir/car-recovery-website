# UAE Car Recovery Services - Abu Dhabi

A professional car recovery and towing services website for Abu Dhabi, connecting vehicle owners with trusted service providers.

## Features

- **Multiple Pages**: Home, Services, Service Providers, About, and Contact pages
- **Professional Design**: Clean, modern UI with balanced typography
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Service Provider Network**: Connect with verified, licensed service providers
- **24/7 Emergency Service**: Quick access to emergency assistance
- **Complete Routing**: Full Next.js App Router implementation

## Pages

1. **Home** (`/`) - Hero section, features, services preview, and call-to-action
2. **Services** (`/services`) - Detailed list of all car recovery services
3. **Service Providers** (`/service-providers`) - Network of verified service providers
4. **About** (`/about`) - Company information and mission
5. **Contact** (`/contact`) - Contact form and business information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── services/       # Services page
│   ├── service-providers/  # Service providers page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
└── package.json        # Dependencies
```

## Customization

- Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`
- Modify service providers list in `app/service-providers/page.tsx`
- Customize colors in `tailwind.config.ts`
- Update content in respective page files

## License

All rights reserved.
