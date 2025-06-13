# Flowgenix AI Deployment Instructions

## Current Status
- **Brand**: Flowgenix AI (fully rebranded from King K Consulting)
- **Version**: 2.0.0-flowgenix-rebrand
- **Deployment Date**: June 13, 2025

## Cache Busting Measures Implemented

### 1. Asset Versioning
- Logo files: `?v=flowgenix-rebrand-2025`
- CSS/JS files: Automatic versioning via Next.js
- Meta tags: `deployment-id="flowgenix-ai-rebrand"`

### 2. HTTP Headers
- `Cache-Control: no-cache, no-store, must-revalidate`
- `Pragma: no-cache`
- `Expires: 0`
- `X-Deployment-Version: flowgenix-rebrand-june13-2025`

### 3. Files Added for Deployment
- `public/_headers` - Netlify/Vercel cache control
- `public/.htaccess` - Apache cache control
- `public/deployment-status.json` - Deployment verification
- `force-deployment-refresh.js` - Client-side cache busting

## Deployment Process

### Step 1: Clear All Caches
1. Clear browser cache (Ctrl+Shift+Delete)
2. Clear CDN cache (if using Cloudflare/similar)
3. Force refresh with Ctrl+F5

### Step 2: Verify Deployment
Check these URLs after deployment:
- `/deployment-status.json` - Should show Flowgenix AI status
- Main site should show cyan/blue logo, not King K Consulting
- Browser dev tools > Network tab should show `X-Deployment-Version` header

### Step 3: Manual Cache Busting (if needed)
If old design still appears:
1. Add `?v=flowgenix-rebrand-2025` to the deployed URL
2. Use incognito/private browsing mode
3. Try different browsers
4. Check mobile devices

## Troubleshooting

### If Old Design Still Shows:
1. **Browser Level**: Clear cache, try incognito mode
2. **CDN Level**: Purge CDN cache in hosting dashboard
3. **Server Level**: Check if .htaccess is working
4. **DNS Level**: Wait 24-48 hours for full propagation

### Verification Commands:
```bash
# Check deployment headers
curl -I https://your-domain.com

# Check deployment status
curl https://your-domain.com/deployment-status.json

# Check logo loading
curl -I https://your-domain.com/flowgenix-ai-logo-sm.png
```

## Expected Results
- Header: Dark charcoal background with Flowgenix AI logo (300px width)
- Colors: Cyan/blue theme (#00BFFF primary, #2F3349 secondary)
- Typography: Modern sans-serif with gradient text effects
- Logo: Should show AI brain icon with "FLOWGENIX AI" text

## Contact
If deployment issues persist beyond 48 hours, the cache busting measures should force a refresh. All files are properly configured for the Flowgenix AI rebrand.