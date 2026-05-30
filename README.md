# Relève Énergie

Welcome to the **Relève Énergie** website project. This is a modern, fast, and fully responsive platform built for energy renovation services.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS & Lucide Icons
- **Internationalization**: `next-intl` (French & English)
- **Forms**: React Server Actions & standard HTML5 validations

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure
- `/src/app/[locale]`: Core application pages, supporting `fr` (default) and `en` locales.
- `/src/components`: Reusable UI components (header, footer, forms, cards).
- `/messages`: JSON translation dictionaries for French and English content.
- `/src/i18n`: Configuration and routing setup for next-intl.

## Deployment
This project is optimized for deployment on Vercel. 
To deploy, simply import this repository into your Vercel dashboard and the build settings will be automatically detected.
