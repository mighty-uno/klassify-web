#!/bin/bash
# Start the Klassify Next.js app for local preview.
set -e

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

npm run dev
