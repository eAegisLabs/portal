# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📝 Configuration

### Update Site Information

1. **Company Details** - Update in:
   - `app/metadata.ts` - Site metadata
   - `components/Footer.tsx` - Contact information
   - `components/Navbar.tsx` - Logo/brand name

2. **Colors & Theme** - Customize in:
   - `app/globals.css` - CSS variables at the top

3. **Domain URL** - Update in:
   - `app/metadata.ts` - Replace `https://aegis360.xyz`
   - `app/sitemap.ts` - Replace base URL
   - `app/robots.ts` - Replace sitemap URL

## 🎨 Customization

### Change Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --bg-primary: #0a0e27;        /* Main background */
  --bg-secondary: #141b2d;      /* Card backgrounds */
  --accent-primary: #00ff88;    /* Primary accent (green) */
  --accent-secondary: #00d9ff;  /* Secondary accent (cyan) */
  --text-primary: #ffffff;      /* Main text */
  --text-secondary: #a0aec0;    /* Secondary text */
}
```

### Update Content

- **Homepage**: `app/page.tsx`
- **Services**: `app/services/page.tsx`
- **Team Members**: `app/team/page.tsx`
- **Case Studies**: `app/case-studies/page.tsx`
- **Blog Posts**: `app/blog/page.tsx`

## 🔧 Features to Configure

### Quote Calculator
- Pricing model in `components/QuoteCalculator.tsx`
- Adjust multipliers for complexity and scope

### Client Portal
- Currently in demo mode
- Connect to your authentication system
- Integrate with your project database

### Contact Form
- Add email service integration
- Configure form submission endpoint

## 📦 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site is a standard Next.js application compatible with:
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

## ✨ Next Steps

1. **Add Assets**
   - Place logo in `public/logo.png`
   - Add favicon to `public/favicon.ico`
   - Add OG image to `public/og-image.jpg`

2. **Connect Backend**
   - Contact form API
   - Client portal authentication
   - File storage for reports

3. **Content**
   - Add real team photos
   - Write blog posts
   - Update case studies with real examples

4. **Analytics**
   - Add Google Analytics
   - Configure error tracking

## 🆘 Troubleshooting

### Build Errors
- Check Node.js version (requires 18+)
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Port Already in Use
- Change port: `PORT=3001 npm run dev`
- Or kill process: `lsof -ti:3000 | xargs kill`

## 📚 Documentation

- Full project details: See `PROJECT_SUMMARY.md`
- Next.js docs: https://nextjs.org/docs
- Project README: See `README.md`
