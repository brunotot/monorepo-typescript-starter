#!/bin/bash

REPO_SRC="https://github.com/brunotot/monorepo-typescript-starter.git"
REPO_NAME="$1"
git clone "$REPO_SRC" "$REPO_NAME"
cd "./$REPO_NAME"
rm -rf .git
git init
pnpm install
npx my-cli
if command -v code >/dev/null 2>&1; then
    code .
fi