// Force deployment refresh script
// This file forces browsers to load the latest version of the site

const DEPLOYMENT_VERSION = 'flowgenix-ai-rebrand-june13-2025';

// Add deployment version to all asset URLs
if (typeof window !== 'undefined') {
  // Force refresh of cached resources
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    if (typeof url === 'string' && !url.includes('?')) {
      url += `?v=${DEPLOYMENT_VERSION}`;
    }
    return originalFetch(url, options);
  };

  // Set deployment metadata
  document.addEventListener('DOMContentLoaded', function() {
    const meta = document.createElement('meta');
    meta.name = 'deployment-version';
    meta.content = DEPLOYMENT_VERSION;
    document.head.appendChild(meta);
    
    console.log('Flowgenix AI deployment active:', DEPLOYMENT_VERSION);
  });
}