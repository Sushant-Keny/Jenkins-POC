import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger: Logger;
  
  constructor() {
    this.logger = new Logger(AppService.name);
  }
  
  getHello(): string {
    return 'Hello World!';
  }
}
