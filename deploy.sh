#!/bin/bash
set -e

echo "==> Pulling latest code..."
git checkout -- frontend/package-lock.json 2>/dev/null || true
git pull

echo "==> Installing backend dependencies..."
npm install --prefix backend

echo "==> Restarting server..."
pm2 restart recipeasy

echo "==> Done!"
