#!/bin/bash

# Build the Astro application for deployment
echo "Building Astro application..."
npx astro build --no-check

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful. Starting preview server on port 5000..."
    npx astro preview --host 0.0.0.0 --port 5000
else
    echo "Build failed. Please check the build logs."
    exit 1
fi