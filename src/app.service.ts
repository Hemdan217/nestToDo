import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloToTheUser(name: string): string {
    return `Hello World! ${name} From the user`;
  }
}
