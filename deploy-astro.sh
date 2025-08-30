#!/bin/bash

# Astro deployment script for port 5001
echo "Building Astro application..."
npx astro build --no-check

if [ $? -eq 0 ]; then
    echo "Build successful. Starting Astro preview server on port 5001..."
    npx astro preview --host 0.0.0.0 --port 5001
else
    echo "Build failed. Exiting..."
    exit 1
fi