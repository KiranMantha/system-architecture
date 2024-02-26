import {
  CreateUserDto,
  FindOneUserDto,
  PaginationDto,
  UpdateUserDto,
  User,
  UserServiceController,
  UserServiceControllerMethods,
  Users
} from '@app/common';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(
    createUserDto: CreateUserDto
  ): User | Observable<User> | Promise<User> {
    return this.usersService.create(createUserDto);
  }

  findAllUsers(): Users | Observable<Users> | Promise<Users> {
    return this.usersService.findAll();
  }

  findOneUser(
    findOneUserDto: FindOneUserDto
  ): User | Observable<User> | Promise<User> {
    return this.usersService.findOne(findOneUserDto.id);
  }

  updateUser(
    updateUserDto: UpdateUserDto
  ): User | Observable<User> | Promise<User> {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  removeUser(
    findOneUserDto: FindOneUserDto
  ): User | Observable<User> | Promise<User> {
    return this.usersService.remove(findOneUserDto.id);
  }

  queryUsers(
    paginationDtoStream: Observable<PaginationDto>
  ): Observable<Users> {
    return this.usersService.queryUsers(paginationDtoStream);
  }
}
