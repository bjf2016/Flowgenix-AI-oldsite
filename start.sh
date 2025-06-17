#!/bin/bash

# Production deployment script
echo "Building Astro application..."
npx astro build --no-check

if [ $? -eq 0 ]; then
    echo "Build successful. Starting server on port 5001..."
    npx serve dist --listen 5001 --single
else
    echo "Build failed. Exiting..."
    exit 1
fi