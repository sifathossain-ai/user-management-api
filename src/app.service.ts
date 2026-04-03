import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const dbUser = this.configService.get<string>('NEST_APP', 'defaultValue');
    return `Hello World! ${dbUser}`;
  }
}
