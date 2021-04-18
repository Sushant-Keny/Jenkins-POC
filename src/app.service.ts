import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger: Logger;
  
  constructor() {
    this.logger = new Logger(AppService.name);
  }
  
  getHello(): string {
    throw new Error('There is a problem!');
    this.logger.log('Hello World! from App Service');
    return 'Hello World!';
  }
}
