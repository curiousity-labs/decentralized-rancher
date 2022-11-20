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


### Develop

To develop all apps and packages, run the following command:

install with `pnpm`
```
pnpm install
```

and then run Docker services (Database and Local blockchain)

```
docker compose up --build 
```

```
pnpm run dev
```

Updates to README will happen in the future