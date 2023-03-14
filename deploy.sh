#!/bin/sh

pnpm run generate
rm -rf ../lipsotiko.github.io/*
cp -r .output/public/* ../lipsotiko.github.io/
touch ../lipsotiko.github.io/.nojekyll
echo "www.greekfolk.org" > ../lipsotiko.github.io/CNAME
