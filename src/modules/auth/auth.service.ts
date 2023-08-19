import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountsService } from '@/modules/accounts/accounts.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async singIn(username: string, password: string) {
    const account = await this.accountsService.findOne(username);
    if (account?.password === password) {
      throw new UnauthorizedException();
    }
    const payload = { username: account.username, sub: account.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
