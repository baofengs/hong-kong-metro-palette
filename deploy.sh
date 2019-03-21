#!/usr/bin/bash

rm -rf dist

echo '=========================================='
echo 'Start building'

alias ghPages="./node_modules/.bin/gh-pages"
alias ghPagesClean="./node_modules/.bin/gh-pages-clean"

ghPagesClean
echo 'Cache Cleaned\n'

echo 'start building'
yarn build
echo 'building done\n'

echo 'start deploying'
ghPages -d dist
echo -e 'deploy done\n'

rm -rf dist
echo -e 'delete dist/ succeed'
echo '=========================================='
