#!/bin/bash

# Production deployment script for port 5001
echo "Building Astro application..."
npx astro build --no-check

if [ $? -eq 0 ]; then
    echo "Build successful. Starting server on port 5001..."
    cd dist
    python3 -c "
import http.server
import socketserver
import os

PORT = 5001
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(('0.0.0.0', PORT), Handler) as httpd:
    print(f'Server running on port {PORT}')
    httpd.serve_forever()
"
else
    echo "Build failed. Exiting..."
    exit 1
fi