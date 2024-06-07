#!/usr/bin/sh
cd /var/www/extramileplay/frontend/source/
npm install
whereis npm
npm run build
echo "hello"
pm2 reload ecosystem.config.js --env production
