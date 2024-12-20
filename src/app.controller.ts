import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): string {
    return 'this is test to learn nestjs';
  }

  @Get('/user/:name')
  sayHello(@Param('name') name): string {
    return this.appService.getHelloToTheUser(name);
  }
  @Get('/user')
  sayHelloFromQueryString(@Query('name') name): string {
    //@Body('name') name
    return this.appService.getHelloToTheUser(name);
  }

  @Post('/user')
  sayHelloFromPost(@Body('name') name): string {
    //@Body('name') name

    return this.appService.getHelloToTheUser(name);
  }
}
