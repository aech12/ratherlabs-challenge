import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class Web3Service {
  private provider: ethers.providers.JsonRpcProvider;

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(
      process.env.ETHEREUM_PROVIDER_URL,
    );
  }

  getProvider(): ethers.providers.JsonRpcProvider {
    return this.provider;
  }
}
