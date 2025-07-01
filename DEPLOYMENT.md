# GitHub Pages Deployment Guide

## Current Setup

Your portfolio is now ready for GitHub Pages deployment with the production build in the `docs/` directory.

## How to Deploy

### 1. Push to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "Add production build for GitHub Pages deployment"

# Push to your repository
git push origin main
```

### 2. Configure GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Pages** section in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ docs** folder
5. Click **Save**

### 3. Access Your Live Website

After deployment (usually takes 2-5 minutes), your portfolio will be available at:
`https://vishaktalak.github.io/`

## What's Included in the Build

✅ **Optimized Production Files**
- Minified JavaScript and CSS
- Asset optimization and bundling
- Progressive loading for better performance

✅ **SEO Ready**
- Meta tags for search engines
- Open Graph tags for social media
- Proper HTML structure

✅ **Mobile Responsive**
- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized for mobile browsers

✅ **Performance Optimized**
- Code splitting and lazy loading
- Compressed assets
- Fast loading times

## Folder Structure

```
docs/                 # GitHub Pages deployment folder
├── index.html       # Main HTML file with bundled assets
├── assets/          # Optimized CSS and JS files
    ├── index-*.css  # Bundled and minified CSS
    └── index-*.js   # Bundled and minified JavaScript
```

## Troubleshooting

### If the site shows blank page:
1. Check that files are in `docs/` directory
2. Ensure GitHub Pages is configured to use `docs/` folder
3. Wait 5-10 minutes for deployment to complete
4. Check browser developer console for any errors

### If assets don't load:
1. Verify the `base` path in build configuration is set to `"./"`
2. Check that all asset files are in the `docs/assets/` directory
3. Ensure file paths in `index.html` use relative paths

## Updating the Website

When you make changes to your portfolio:

1. Make changes to source files in `client/src/`
2. Run production build: `npm run build`
3. Copy build files: `cp -r client/dist/* docs/`
4. Commit and push to GitHub
5. GitHub Pages will automatically update

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `docs/` directory
2. Add your domain name (e.g., `yourname.com`)
3. Configure DNS records with your domain provider
4. Update GitHub Pages settings to use your custom domain