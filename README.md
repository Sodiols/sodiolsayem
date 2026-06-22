# Sodiol Sayem Portfolio

A deployment ready Next.js portfolio website using JavaScript, Tailwind CSS, dark theme support, blog pages, contact form, WhatsApp floating chat button, sitemap, robots file, structured data, Open Graph metadata, and Vercel SEO safeguards.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Important SEO files

```txt
app/layout.js
app/page.js
app/sitemap.js
app/robots.js
app/blog/page.js
app/blog/[slug]/page.js
lib/seo.js
proxy.js
public/og-image.png
public/site.webmanifest
```

## Before deploying

1. Open `lib/seo.js` and confirm the site URL is your real production Vercel domain.
2. In Vercel, add this environment variable if your domain is different:

```txt
NEXT_PUBLIC_SITE_URL=https://your-real-vercel-domain.vercel.app
```

3. Deploy the project.
4. Open these URLs after deployment:

```txt
/sitemap.xml
/robots.txt
/og-image.png
```

5. Add your site to Google Search Console and submit:

```txt
https://your-real-vercel-domain.vercel.app/sitemap.xml
```

## Google verification

After Google Search Console gives you a verification code, add it in Vercel as an environment variable:

```txt
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code-here
```

## Vercel deployment note

This project now uses `npm ci` through `vercel.json`, includes `package-lock.json`, and pins Node to `20.x` to avoid automatic major Node upgrades.
