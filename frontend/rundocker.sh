#!/bin/bash
set -e

IMAGE="ayroid/lostfoundfe"

docker run -d \
    -p 4000:4000 \
    -v "$PWD":/usr/src/myapp \
    -v myvolume:/usr/src/myapp/node_modules \
    -w /usr/src/myapp \
    $IMAGE \
    bash -c "npm install && npm install nodemon -g && npm install -g npm@9.7.1 && nodemon app.js"
