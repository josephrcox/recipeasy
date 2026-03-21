#!/bin/bash
set -e

SERVER=root@138.197.45.11
REMOTE_DIR=/var/www/recipeasy

echo "==> Building frontend locally..."
npm install --prefix frontend
npm run build --prefix frontend

echo "==> Pushing code to server..."
git push

echo "==> Uploading frontend dist..."
scp -r frontend/dist/ $SERVER:$REMOTE_DIR/frontend/dist/

echo "==> Deploying on server..."
ssh $SERVER "cd $REMOTE_DIR && bash deploy.sh"

echo "==> All done!"
