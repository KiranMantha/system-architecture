# Description

`backend` is build on top of nestjs and gRPC. to make use of gRPC, we need to install gRPC on the development machine by following this [guide](https://grpc.io/docs/protoc-installation/)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Reference links:

- nestjs-grpc: https://www.youtube.com/watch?v=UkWcjVWs2UQ
- grpc-chat-app: https://daily.dev/blog/build-a-chat-app-using-grpc-and-reactjs

## Folder structure:

```
backend/
├── apps/
│   ├── users/ (gRPC module)
│   └── apigateway/
│       └── src/
│           └── users
├── libs/
│   └── common/
│       └── types/
│           └── users.ts
├── proto/
│   └── users/
│       └── users.proto
├── next-cli.json
└── package.json
```

1. `apps` folder contains a gateway that expose all gRPC methods via rest api.

- `apps/apigateway` => gateway to consume grpc methods via rest api
- `apps/users` this contains `UsersModule` that use gRPC transport protocol instead of rest protocol.

2. `libs/common` contains all model definitions that are generated from proto files.
3. `proto` folder contains definitions for rpc protocall buffers.
