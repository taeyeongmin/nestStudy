import { Body, Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService, private readonly catsService: CatsService) {}

  @Get('hello/:id/:name') // pathValue
  getHello(): string {
    
    console.log("app.controller 호출");
    const cats = this.catsService.findAllCats();
    
    return cats;
  }
}
