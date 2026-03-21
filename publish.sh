#!/bin/bash
set -e

SERVER=root@138.197.45.11
REMOTE_DIR=/var/www/recipeasy

echo "==> Building frontend..."
npm install --prefix frontend
NODE_OPTIONS=--max-old-space-size=4096 npm run build --prefix frontend

echo "==> Committing and pushing..."
git add -f frontend/dist
git diff --cached --quiet || git commit -m "chore: update frontend build"
git push

echo "==> Deploying on server..."
ssh $SERVER "cd $REMOTE_DIR && bash deploy.sh"

echo "==> All done!"
