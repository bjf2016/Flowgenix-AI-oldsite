#!/bin/bash

# Simple deployment script that you can run manually
echo "Building Astro application..."
npx astro build --no-check

if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "To start the deployment server on port 5001, run:"
    echo "cd dist && python3 -m http.server 5001 --bind 0.0.0.0"
else
    echo "Build failed. Please check the build logs."
    exit 1
fi