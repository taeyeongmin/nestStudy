import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  private logger = new Logger();

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse();    

    this.logger.log("exception 필터 실행");

    response
      .status(status)
      .json({
        seccess:false,
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message:error
      });
  }
}