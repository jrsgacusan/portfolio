# Portfolio Website

A simple and elegant portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and responsive design
- 📱 Mobile-first approach
- ⏱️ Interactive timeline for experience and education
- 🎨 Clean and elegant UI
- 🚀 Optimized for Vercel deployment

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling (CSS-first configuration)
- **Vite** - Build tool
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (install with `npm install -g pnpm` or see [pnpm installation guide](https://pnpm.io/installation))

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory.

## Development

### Code Formatting

Format all files with Prettier:

```bash
pnpm run format
```

Check if files are formatted correctly:

```bash
pnpm run format:check
```

### Linting

Run ESLint to check for code issues:

```bash
pnpm run lint
```

## Contact Form Setup

The contact form uses EmailJS to send emails. To set it up:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (optional, can be set in template)
4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
5. Create a `.env` file in the root directory (copy from `env.example`)
6. Add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_CONTACT_EMAIL=your-email@example.com
   ```
7. For Vercel deployment, add these as environment variables in your Vercel project settings

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Add your environment variables in Vercel project settings (see Contact Form Setup above)
4. Vercel will automatically detect the build settings from `vercel.json`
5. Your site will be live!

## Customization

### Update Personal Information

1. Edit `src/components/Hero.tsx` to update your name and title
2. Edit `src/components/About.tsx` to update your bio and skills
3. Edit `src/data/timelineData.ts` to update your experience and education
4. Edit `src/components/Projects.tsx` to update your projects
5. Edit `src/components/Contact.tsx` to update contact information

### Styling

The color scheme can be customized in `src/index.css` using the `@theme` directive (Tailwind CSS v4 uses CSS-first configuration). The primary color is set to a blue palette, but you can change it to match your preferences.

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── data/          # Data files (timeline, etc.)
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## License

MIT
