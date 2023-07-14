import { Body, Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name') // pathValue
  getHello(
    @Req() req: Request,
    @Param() param,
    @Body() body,
    @Query('age') age:number
  ): string {
    // console.log('req : ', req);
    console.log('param : ', param);
    console.log('queryParam : ', age);
    
    
    return this.appService.getHello();
  }
}
