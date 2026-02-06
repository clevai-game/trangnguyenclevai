---
description: Deploy website to public URL using Vercel CLI (fastest method)
---

# Quick Deploy with Vercel CLI

This workflow deploys a Vite/React project to a public URL in under 1 minute.

## Prerequisites

// turbo
1. Install Vercel CLI (one-time setup):
```bash
npm install -g vercel
```

2. Login to Vercel (one-time setup):
```bash
vercel login
```

## Deploy Steps

### Step 1: Ensure vite.config.ts has NO base path
```typescript
// vite.config.ts - CORRECT for Vercel
export default defineConfig({
    plugins: [react()],
    // DO NOT set 'base' property, or set to '/'
});
```

⚠️ **WARNING**: If `base: '/some-path/'` is set, the deployed site will show a BLANK PAGE!

// turbo
### Step 2: Build the project
```bash
npm run build
```

// turbo
### Step 3: Deploy to Vercel
```bash
vercel dist --prod
```

Answer prompts:
- "Set up and deploy?" → Y
- "Which scope?" → Press Enter (default)
- "Link to project?" → Y
- "Pull environment variables?" → Y

### Step 4: Get your URL
After deployment, you'll see:
```
✅  Production: https://your-project.vercel.app
```

## Alternative: Deploy Different Versions

To deploy multiple style versions (e.g., Style D, E, F):

1. Edit `src/main.tsx` to import the desired App component
2. Run `npm run build`
3. Run `vercel dist --prod`

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Blank page | Remove `base` property from `vite.config.ts` |
| Auth error | Run `vercel login` again |
| Old version showing | Clear browser cache or use incognito |

## Other Options (Backup)

- **Netlify Drop**: Drag `dist` folder to https://app.netlify.com/drop
- **Firebase**: `firebase deploy` (requires more setup)
- **GitHub Pages**: Needs `base: '/repo-name/'` in vite.config.ts
