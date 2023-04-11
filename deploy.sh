
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:indisofyar/portfolio-2023.git master:gh-pages

cd -