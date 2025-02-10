import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreditDomain } from '@mayon-sc-local/credit-domain';

@Controller()
export class AppController {
  private creditDomain: CreditDomain;

  constructor(private readonly appService: AppService) {
    this.creditDomain = new CreditDomain();
    this.creditDomain.init();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/route1')
  route1(): string {
    const sdkData = this.creditDomain.services.usecase1.getComplicatedData();
    return `Got ${sdkData} from sdk`;
  }
}
