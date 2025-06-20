#!/bin/bash
npm install
npx astro build
node ./dist/server/entry.mjs
