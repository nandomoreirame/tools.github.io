#!/bin/bash

# skip if build is triggered by pull request
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

# cleanup "_site"
rm -rf _site
mkdir _site

yarn build
bundle exec jekyll build
bundle exec htmlproofer ./_site
