#!/bin/bash
set -e

IMAGE="ayroid/lostfoundbe"

docker run -d \
    -p 3000:3000 \
    -v "$PWD":/usr/src/myapp \
    -v myvolume:/usr/src/myapp/node_modules \
    -w /usr/src/myapp \
    $IMAGE \
    bash -c "npm install && npm install nodemon -g && npm install -g npm@9.7.1 && nodemon app.js"
