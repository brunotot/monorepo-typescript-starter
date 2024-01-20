## Getting started

1. Clone this repository

   ```sh
   git clone https://github.com/brunotot/monorepo-typescript-starter.git [REPO_NAME]
   ```

2. Change directory

   ```sh
   cd [REPO_NAME]
   ```

3. Remove existing `.git` directory

   ```sh
   rm -rf .git
   ```

4. Install dependencies

   ```sh
   pnpm install
   ```

5. Change specific variables through interactive CLI

   ```sh
   npx init
   ```

6. Open VSCode and start coding!
   ```sh
   code .
   ```

## Remarks

- make sure to add `NPM_TOKEN` to your GitHub repository secrets
- make sure to check `Read and write permissions` on `Workflow permissions`
- make sure to check `Allow GitHub Actions to create and approve pull requests` on `Workflow permissions` aswell
- make sure to set `gh-pages` as the deploy branch of `TypeDoc` documentation
