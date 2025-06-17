#!/bin/bash

# Production deployment script for port 5001
echo "Building Astro application..."
npx astro build --no-check

if [ $? -eq 0 ]; then
    echo "Build successful. Starting server on port 5001..."
    cd dist && python3 -m http.server 5001
else
    echo "Build failed. Exiting..."
    exit 1
fi