import { Injectable } from '@nestjs/common';
import { IAccount } from './interfaces/accounts.interfaces';

@Injectable()
export class AccountsService {
  private readonly accounts = [
    {
      userId: 1,
      username: 'jhon',
      password: 'password',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'password',
    },
  ];

  async findOne(username: string): Promise<IAccount | undefined> {
    return this.accounts.find((acc) => acc.username === username);
  }
}
