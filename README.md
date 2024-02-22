# System Architecture

This is an repo for system architecture

![](./application-architecture.png)

Frontend is build on PlumeJS and Backend is build on nestjs.

Ports:

- FE: 3001
- BE: 3002

## Implementation

<hr />

Frontend is built on [PlumeJS](https://www.npmjs.com/package/@plumejs/core) and nx integrated monorepo.

The monorepo consists of a root `shell` folder which initiates the frontend application. It imports components from different lib folders (any folder other than `shell` is a lib folder) based on name defined in their respective `package.json` file as scoped package.

A component / service based `lib` use `@plumejs/core` to create the components / services.

A helper functions based library don't have to rely on PlumeJS but solely on typescript.

### Steps to create a NX and PlumeJS based monorepo

<hr />

1. run `npx create-nx-workspace@latest <your-monorepo-name> --preset=ts`
2. run `npm i @plumejs/core -s`
3. run `npm i sass -D`
4. after completion, create new `packages` folder in above monorepo.

#### Create Shell

<hr />

1. navigate to `packages` folder in monorepo and create the `shell` using below commands:

```shell
npx nx generate @nx/js:library shell \
--directory=packages/shell \
--publishable \
--importPath=@<your-monorepo-name>/shell
```

2. Choose `vite` as bundler and `vitest` as test-runner

Lets convert this lib to application with below steps

3. add `index.html` to the library root with below content:

```html
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plumejs Template</title>
    <script type="module" src="./src/index.ts"></script>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

4. add a `public` folder to above lib for images, fonts
5. update `vite.config.ts` by adding:

```javascript
{
  ...
  server: {
    host: true,
    port: 3001,
    open: '/'
  }
}
```

and remove `lib` section from `build` in vite config as `shell` is not a lib.

6. update `index.ts` in `src` as below:

```typescript
import { Component, html } from "@plumejs/core";
import globalstyles from "./styles/styles.scss?inline";

@Component({
  selector: "app-root",
  styles: globalstyles,
  root: true,
})
export class AppComponent {
  title = "";

  mount() {
    setTimeout(() => {
      this.title = "Hello world";
    }, 2000);
  }

  render() {
    return html`
      <main class="center" data-testid="container">
        <h1>Welcome to PlumeJS</h1>
        <p>
          Please check
          <a href="https://github.com/KiranMantha/plumejs">here</a> for
          documentation
        </p>
        ${this.title
          ? `<div data-testid='content'>${this.title}</div>`
          : `<div data-testid='loader'>Loading</div>`}
      </main>
    `;
  }
}
```

7. under `src`, delete `lib` folder and create folder `styles`. Add `styles.scss` to it with below styles:

```css
* {
  font-family: Arial, Helvetica, sans-serif;
}

.center {
  text-align: center;
}
```

8. add below scripts to `package.json`

```javascript
{
  ...
  "scripts": {
    "serve": "vite"
  }
}
```

9. finally to the monorepo `package.json` add below scripts:

```javascript
{
  ...
  "scripts": {
    "nx": "nx",
    "start": "nx serve shell"
  }
}
```

10. final project structure should be in this manner:

```
your-monorepo/
├── packages/
│   └── shell/
│       └── package.json { "name": "@<your-monorepo>/shell" }
├── tools/
├── nx.json
├── README.md
├── tsconfig.base.json
└── package.json { "scripts": { "nx": "nx", "start": "nx serve shell" } }
```

11. now cd to monorepo and run `npm start`. this should launch our `shell` on `localhost:3001`.

This is a 1 time process to setup the `shell`. once it is done, we can create various libraries to consume in `shell`

#### To create a lib

<hr />

1. navigate to `packages` folders in terminal.
2. run the below commands to create the lib:

```shell
npx nx generate @nx/js:library <your-lib-name> \
--directory=packages/<your-lib-name> \
--publishable \
--importPath=@<your-monorepo-name>/<your-lib-name>
```

similar to shell, choose `vite` as bundler and `vitest` as test-runner.

3. this will create the lib folder structure as below:

```
your-monorepo/
├── packages/
│   └── <your-lib-name>/
│       └── package.json { "name": "@<your-monorepo>/<your-lib-name>" }
└── nx.json
```

4. this will automatically update `tsconfig.base.json` with new library reference.

5. add `index.ts` file at `package.json` level and export a component by default (if it is a component library then default is must. else export a collection of services)

6. import the new lib in `shell` as
   a. `import '@<your-monorepo>/<your-lib-name>'` for component lib
   b. `import { <your-service> } from '@<your-monorepo>/<your-lib-name>'` for service lib
7. run `npm start` on monorepo.
8. the new component / service will start reflecting in ui.
9. this is the basic configuration steps to create the `lib` and consume it in `shell`

### Setting up common custom typings

<hr />

1. create a folder `@types` at monorepo root
2. create `typings.d.ts` and add below typings:

```typescript
interface Window {
  __RUNTIME_CONFIG__: Record<string, string>;
}

interface HTMLElement {
  trigger: (eventName: string, isBubbling?: boolean) => void;
  update: () => void;
  getModel: () => { [key: string]: any };
}

interface Window {
  //   XMLHttpRequest: jest.Mock<any, any>;
  returnMockHttpResponse: (response: any) => void;
  MutationObserver: any;
  WebKitMutationObserver: any;
}

interface Type<T> {
  new (...args: any[]): T;
}

interface String {
  translate: (...args: any) => string;
}

interface fetch {
  resetMocks: () => void;
  mockResponseOnce: (mockResponse: string) => void;
}

declare module "*.css" {
  const content: any;
  // using style-loader will result in an object which is incompatible
  // hence use only css-loader and sass-loader which result in proper compiled css array
  // calling toString on compiled css array will result in proper css string
  // which will feed to component decorator
  export default content;
}

declare module "*.scss" {
  const content: any;
  // using style-loader will result in an object which is incompatible
  // hence use only css-loader and sass-loader which result in proper compiled css array
  // calling toString on compiled css array will result in proper css string
  // which will feed to component decorator
  export default content;
}

declare module "*.scss?inline" {
  const content: any;
  // using style-loader will result in an object which is incompatible
  // hence use only css-loader and sass-loader which result in proper compiled css array
  // calling toString on compiled css array will result in proper css string
  // which will feed to component decorator
  export default content;
}
```

3. navigate to `tsconfig.lib.json` in `shell` and every `lib` and update `includes` as below:

```json
{
  ...
  "include": ["../../@types/**/*.d.ts", "src/**/*.ts"],
}
```

4. this should suffice to run the applciation. if you need to add a custom declaration to a npm module then create a folder with that module name with index.d.ts and add the declarations to it.

The folder structure should look like below:

```
your-monorepo/
├── @types/
│   └── typings.d.ts
├── packages/
│   ├── lib1
│   ├── lib2
│   └── shell
├── tsconfig.base.json
└── nx.json
```

## Reference links

- https://nx.dev/getting-started/tutorials/integrated-repo-tutorial
