#!/bin/bash
set -e
# Build the docker image

DOCKERFILE="frontend.Dockerfile"
IMAGE="ayroid/lostfoundfe"

docker build -t $IMAGE -f $DOCKERFILE .