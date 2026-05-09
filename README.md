This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
.
├── app/                      # App Router: routes, layouts, and route handlers
│   ├── api/
│   │   └── health/
│   │       └── route.js      # GET /api/health — example route handler
│   ├── error.jsx             # Error boundary (Client Component)
│   ├── favicon.ico
│   ├── globals.css           # Tailwind + theme tokens
│   ├── layout.jsx            # Root layout
│   ├── loading.jsx           # Suspense fallback
│   ├── not-found.jsx         # 404 UI
│   └── page.jsx              # Home page (/)
├── components/               # Reusable React components
│   ├── ui/                   # Low-level primitives
│   │   └── button.jsx
│   ├── site-footer.jsx
│   └── site-header.jsx
├── hooks/                    # Custom React hooks
│   └── use-media-query.js
├── lib/                      # Framework-agnostic utilities
│   └── utils.js              # cn() class-name helper
├── public/                   # Static assets served from the site root
├── eslint.config.mjs
├── jsconfig.json             # Path alias: @/* -> ./*
├── next.config.mjs
├── package.json
└── postcss.config.mjs
```

### Path alias

Imports can use the `@/` alias for absolute paths from the project root, configured in `jsconfig.json`:

```js
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
```

### Where to put new code

- **A new page** → add `app/<route>/page.jsx`
- **A nested layout** → add `app/<route>/layout.jsx`
- **A REST/JSON endpoint** → add `app/<route>/route.js`
- **A shared component** → `components/<name>.jsx` (or `components/ui/<name>.jsx` for primitives)
- **A custom hook** → `hooks/use-<name>.js`
- **Framework-agnostic helpers** → `lib/<name>.js`
- **Static assets (images, fonts, etc.)** → `public/`
- **Code that's only used by one route** → colocate inside that route's folder, optionally under a private `_components/` or `_lib/` subfolder so it isn't treated as a route segment

See the [Next.js project structure guide](https://nextjs.org/docs/app/getting-started/project-structure) for the full set of conventions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
