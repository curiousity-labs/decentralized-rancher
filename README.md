# Decentralized Rancher

Description: Coming soon...

## Local Development

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `decentralized-rancher-api`: ExpressJS Typescript Restful APi
- `decentralized-rancher-interface`: ReactJs Typescript dApp
- `contracts`: TBD

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking


### Let's get started then

Let's change things up and give you a table to look at

| command | description |
| :------- | :----------- |
|`nvm use` | Please use proper node version |
|`pnpm install` | installs dependencies of app and packages |
|`docker compose up --build` | Run in a seperate terminal or in detached mode `-d`. This will create dockerized containers for database and a local blockchain node. `docker compose up --build database` will only start the database when ran. Note: This needs to be running before running next command |
|`pnpm run dev` | Last but not least run the development servers for apps. Then will run the app's interface on port `4000` and the api on port `8080` |

And thats it for now. You should be up and running locally

Updates to README will happen in the future