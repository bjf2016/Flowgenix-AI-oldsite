#!/bin/bash

# Node.js deployment script for port 5001
echo "Building Astro application..."
npx astro build --no-check

if [ $? -eq 0 ]; then
    echo "Build successful. Starting Node.js server on port 5001..."
    PORT=5001 node server.js
else
    echo "Build failed. Exiting..."
    exit 1
fi