import { Injectable } from '@nestjs/common';
// import { ethers } from 'ethers';
import { LendingPool } from '@aave/contract-helpers';
import { ProviderService } from './web3.service';
import { EthereumTransactionTypeExtended } from '@aave/contract-helpers';

@Injectable()
export class LendingPoolService {
  private readonly lendingPool: LendingPool;

  constructor(private readonly providerService: ProviderService) {
    const provider = this.providerService.getProvider();
    const lendingPoolAddress = '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5';
    const wethGatewayAddress = '0x7aAa323f7C9Bf95701cAD1dDAbCd4c654A1Baf8F';

    this.lendingPool = new LendingPool(provider, {
      LENDING_POOL: lendingPoolAddress,
      WETH_GATEWAY: wethGatewayAddress,
    });
  }

  // deposits user's tokens to Pool
  async deposit(
    user: string,
    reserve: string,
    amount: string,
    onBehalfOf?: string,
  ): Promise<any> {
    const txs = await this.lendingPool.deposit({
      user,
      reserve,
      amount,
      onBehalfOf,
    });

    return txs;
  }

  // withdraws previously deposited tokens from Pool
  async withdraw(
    user: string,
    reserve: string,
    amount: string,
    aTokenAddress?: string,
    onBehalfOf?: string,
  ): Promise<EthereumTransactionTypeExtended[]> {
    const txs = await this.lendingPool.withdraw({
      user,
      reserve,
      amount,
      aTokenAddress,
      onBehalfOf,
    });
    return txs;
  }
}
