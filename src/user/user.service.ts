import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'carlomigueldy',
      password: 'password',
    },
  ];

  async findByUsername(username: string): Promise<User> {
    return this.users.find((user) => user.username === username);
  }
}
