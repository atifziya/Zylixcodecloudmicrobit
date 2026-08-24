#!/bin/sh

echo "Starting ZylixCode Cloud Microbit..."

./node_modules/.bin/pxt serve --hostname 0.0.0.0 --port "${PORT:-10000}"
