#!/bin/bash

# enable error reporting to the console
set -e

yarn build
bundle exec jekyll build

yarn minify
yarn sw
