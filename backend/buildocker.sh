#!/bin/bash
set -e
# Build the docker image

DOCKERFILE="backend.Dockerfile"
IMAGE="ayroid/lostfoundbe"

docker build -t $IMAGE -f $DOCKERFILE .