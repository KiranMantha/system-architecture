import {
  CreateUserDto,
  PaginationDto,
  UpdateUserDto,
  User,
  Users
} from '@app/common';
import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly users: User[] = [];

  onModuleInit() {
    for (let i = 10; i < 20; i++) {
      this.create({ username: randomUUID(), password: randomUUID(), age: i });
    }
  }

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: randomUUID(),
      ...createUserDto,
      subscribed: false,
      socialMedia: {}
    };
    this.users.push(user);
    return user;
  }

  findAll(): Users {
    return { users: this.users };
  }

  findOne(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const selectedUserIndex = this.users.findIndex((user) => user.id === id);
    if (selectedUserIndex !== -1) {
      this.users[selectedUserIndex] = {
        ...this.users[selectedUserIndex],
        ...updateUserDto
      };
      return this.users[selectedUserIndex];
    }
    throw new NotFoundException(`user not found for id: ${id}`);
  }

  remove(id: string): User {
    const selectedUserIndex = this.users.findIndex((user) => user.id === id);
    if (selectedUserIndex !== -1) {
      return this.users.splice(selectedUserIndex)[0];
    }
    throw new NotFoundException(`user not found for id: ${id}`);
  }

  queryUsers(
    paginationDtoStream: Observable<PaginationDto>
  ): Observable<Users> {
    const userSubject = new Subject<Users>();
    const onNext = ({ page, skip }: PaginationDto) => {
      const start = page * skip;
      userSubject.next({
        users: this.users.slice(start, start + skip)
      });
    };
    const onComplete = () => {
      userSubject.complete();
    };
    paginationDtoStream.subscribe({ next: onNext, complete: onComplete });
    return userSubject.asObservable();
  }
}
