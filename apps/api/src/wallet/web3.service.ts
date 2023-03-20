import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class ProviderService {
  private provider: ethers.providers.JsonRpcProvider;

  constructor() {
    // if (process.env.NODE_ENV === "development") {} // example for loading testnet 
    this.provider = new ethers.providers.JsonRpcProvider(
      process.env.ETHEREUM_PROVIDER_URL,
    );
  }

  getProvider(): ethers.providers.JsonRpcProvider {
    return this.provider;
  }
}
