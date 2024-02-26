import {
  CreateUserDto,
  USER_SERVICE_NAME,
  UpdateUserDto,
  UserServiceClient
} from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { USERS_SERVICE } from './constants';

@Injectable()
export class UsersService implements OnModuleInit {
  private userService: UserServiceClient;

  constructor(@Inject(USERS_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService(USER_SERVICE_NAME);
  }
  create(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  findAll() {
    return this.userService.findAllUsers({});
  }

  findOne(id: string) {
    return this.userService.findOneUser({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userService.updateUser({ id, ...updateUserDto });
  }

  remove(id: string) {
    return this.userService.removeUser({ id });
  }

  queryUsers() {}
}
