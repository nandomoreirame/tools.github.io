#!/bin/bash

# enable error reporting to the console
set -e

yarn build
JEKYLL_ENV=production bundle exec jekyll build

yarn minify
yarn sw
