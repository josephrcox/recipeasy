#!/bin/bash
set -e

echo "==> Pulling latest code..."
git pull

echo "==> Installing backend dependencies..."
npm install --prefix backend

echo "==> Installing & building frontend..."
npm install --prefix frontend
npm run build --prefix frontend

echo "==> Restarting server..."
pm2 restart recipeasy

echo "==> Done!"
