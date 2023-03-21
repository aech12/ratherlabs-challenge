import { Controller, Get } from '@nestjs/common';
import { Web3Service } from './web3.service';

@Controller('web3')
export class Web3Controller {
  constructor(private readonly web3Service: Web3Service) {}

  @Get('provider')
  async getBlockNumber(): Promise<any> {
    return await this.web3Service.getProvider();
  }
}
