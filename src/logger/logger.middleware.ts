import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: () => void) {

    this.logger.log(req.ip, req.originalUrl);  

    res.on('finish', () => {
      this.logger.log('응답 객체 리턴 전 ');
    });

    next();
  }
}
