# System Architecture

This is an repo for system architecture

![](./application-architecture.png)

Frontend is build on PlumeJS and Backend is build on nestjs.

Ports:

- FE: 3001
- BE: 3002

## Implementation

Frontend is built on [PlumeJS]() and nx package-based monorepo.

The monorepo consists of a root `shell` folder which initiates the frontend application. It imports components from different lib folders (any folder other than `shell` is a lib folder) based on name defined in their respective `package.json` file as scoped package.

A component / service based `lib` use `@plumejs/core` to create the components / services and `tsc` to build that lib.

A helper functions based library don't have to rely on PlumeJS but solely on typescript.

### Steps to create a NX and PlumeJS based monorepo

1. run `npx create-nx-workspace@latest <your-monorepo-name> --preset=npm`
2. after completion, navigate to `packages` folder in above monorepo and create a PlumeJS application using `yo plumejs`
3. in package.json, rename the project name as `@<your-monorepo-name>/shell` and rename `start` in scripts as `dev`
4. rename the above application root folder as `shell`
5. final project structure should be in this manner:

```
your-monorepo/
├── packages/
│   ├── lib1/
│   │   └── package.json { "name": "@<your-monorepo>/lib1" }
│   ├── lib2/
│   │   └── package.json { "name": "@<your-monorepo>/lib2" }
│   └── shell/
│       └── package.json { "name": "@<your-monorepo>/shell", "dependencies":  { "@<your-monorepo>/lib1": "*", "@<your-monorepo>/lib2": "*" } }
├── nx.json
└── package.json { "scripts": { "start": ""nx dev @<your-monorepo>/shell"" } }
```

### To implement a lib

1. add a folder under `packages` with the intended lib name.
2. run `npm init` on that folder and provide the name as `@<your-scope-package-name>/<your-lib-name>`
3. if it is a component / service based lib then add `@plumejs/core` as it's dependency and `typescript` as dev dependency.
4. add the following attributes to the `package.json`:

```json
{
  "name": "@<your-scope-package-name>/<your-lib-name>",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js"
    }
  },
  "sideEffects": false,
  "files": ["dist"],
  "scripts": {
    "build": "tsc"
  }
}
```

5. add `index.ts` file at `package.json` level and export a component by default (if it is a component library then default is must. else export a collection of services)
6. run `npm build` to build your lib
7. import the new lib in `shell` as
   a. `import '@<your-scope-package-name>/<your-lib-name>'` for component lib
   b. `import { <your-service> } from '@<your-scope-package-name>/<your-lib-name>'` for service lib
8. this is the basic configuration steps to add the lib and consume

### Reference links

- https://nx.dev/getting-started/tutorials/integrated-repo-tutorial
