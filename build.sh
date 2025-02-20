#!/bin/bash
set -e # abort if any command fails

ROOT="$(pwd)"
SERVER_FOLDER="$ROOT/.output/server"

npm ci
npm run build

# .env link
ln -s "$ROOT/.env" $SERVER_FOLDER

if [ "$(command -v pm2)" ]; then
	echo "PM2 encontrado. Verificando processos anteriores."

	if pm2 describe "portfolio" >/dev/null 2>&1; then
    echo "Stoping the previous 'portfolio' process."
		pm2 stop "portfolio"
		pm2 delete "portfolio"
	fi

  echo "Starting the application with PM2"
	pm2 start "$SERVER_FOLDER/index.mjs" --name "portfolio"
else
  echo "PM2 not found. Starting the application with Node.js"
	node "$SERVER_FOLDER/index.mjs"
fi

