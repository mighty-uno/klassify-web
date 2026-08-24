#!/usr/bin/env bash
# Start the SkooBee Next.js app for local preview.
set -euo pipefail

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

npm run dev
