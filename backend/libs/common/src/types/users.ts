/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "users";

/** defines the syntax of proto */

/**
 * defines all contracts to be used by this proto:
 * PaginationDto contract
 */
export interface PaginationDto {
  page: number;
  skip: number;
}

/** Empty contract */
export interface Empty {
}

/** CreateUserDto contract */
export interface CreateUserDto {
  username: string;
  password: string;
  age: number;
}

/** FindOneUserDto contract */
export interface FindOneUserDto {
  id: string;
}

/** UpdateUserDto contract */
export interface UpdateUserDto {
  id: string;
  socialMedia: SocialMedia | undefined;
}

/** User contract */
export interface User {
  id: string;
  username: string;
  password: string;
  age: number;
  subscribed: boolean;
  socialMedia: SocialMedia | undefined;
}

/** list of users contract */
export interface Users {
  users: User[];
}

/** Social Media contract */
export interface SocialMedia {
  twitterUri?: string | undefined;
  fbUri?: string | undefined;
}

export const USERS_PACKAGE_NAME = "users";

/** defines a service with all RPC methods */

export interface UserServiceClient {
  createUser(request: CreateUserDto): Observable<User>;

  findAllUsers(request: Empty): Observable<Users>;

  findOneUser(request: FindOneUserDto): Observable<User>;

  updateUser(request: UpdateUserDto): Observable<User>;

  removeUser(request: FindOneUserDto): Observable<User>;

  queryUsers(request: Observable<PaginationDto>): Observable<Users>;
}

/** defines a service with all RPC methods */

export interface UserServiceController {
  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;

  findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

  updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User;

  removeUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

  queryUsers(request: Observable<PaginationDto>): Observable<Users>;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createUser", "findAllUsers", "findOneUser", "updateUser", "removeUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = ["queryUsers"];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
