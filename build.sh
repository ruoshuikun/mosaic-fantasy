git pull &&
rm -rf ../html/* &&
pnpm i &&
pnpm run build &&
mv build/* ../html/
