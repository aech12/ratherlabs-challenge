import { Injectable } from '@nestjs/common';
import { Pool, EthereumTransactionTypeExtended } from '@aave/contract-helpers';
import { Web3Service } from './web3.service';

@Injectable()
export class AaveService {
  private pool: Pool;

  constructor(private web3Service: Web3Service, private poolAddress) {
    const provider = this.web3Service.getProvider();
    // const poolAddress = '...'; // specify the pool address here
    const wethGatewayAddress = '...'; // specify the WETH gateway address here

    this.pool = new Pool(provider, {
      POOL: poolAddress,
      WETH_GATEWAY: wethGatewayAddress,
    });
  }

  async supply(
    user: string,
    reserve: string,
    amount: string,
    onBehalfOf?: string,
  ) {
    const txs: EthereumTransactionTypeExtended[] = await this.pool.supply({
      user,
      reserve,
      amount,
      onBehalfOf,
    });

    console.log('txs', txs);

    // handle transactions here
  }
}
