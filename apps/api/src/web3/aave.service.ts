import { Injectable } from '@nestjs/common';
import { Pool, EthereumTransactionTypeExtended } from '@aave/contract-helpers';
import { Web3Service } from './web3.service';
// import { BigNumber, providers } from 'ethers';

@Injectable()
export class AaveService {
  private pool: Pool;

  constructor(private web3Service: Web3Service) {
    // Pool parameters setup
    const provider = this.web3Service.getProvider();
    const poolAddress = process.env.AAVE_LENDING_POOL_ADDRESS;
    const wethGatewayAddress = process.env.WETH_GATEWAY_CONTRACT_ADDRESS;

    this.pool = new Pool(provider, {
      POOL: poolAddress,
      WETH_GATEWAY: wethGatewayAddress,
    });
  }

  // - @param `user` The ethereum address that will make the deposit
  // - @param `reserve` The ethereum address of the reserve
  // - @param `amount` The amount to be deposited
  async supply(user: string, reserve: string, amount: string) {
    console.log('supply body', user, reserve, amount);

    const txs: EthereumTransactionTypeExtended[] = await this.pool.supply({
      user,
      reserve,
      amount,
    });

    console.log('txs', txs);

    return txs;
  }

  // - @param `user` The ethereum address that will make the deposit
  // - @param `reserve` The ethereum address of the reserve
  // - @param `amount` The amount to be deposited
  // - @param `aTokenAddress` The aToken to redeem for underlying asset
  async withdraw(
    user: string,
    reserve: string,
    amount: string,
    aTokenAddress: string,
  ) {
    console.log('supply body', user, reserve, amount, aTokenAddress);

    const txs: EthereumTransactionTypeExtended[] = await this.pool.withdraw({
      user,
      reserve,
      amount,
      aTokenAddress,
    });
    console.log('txs', txs);

    return txs;
  }

  // submitTransaction({
  //   provider: providers.Web3Provider,
  //   tx: EthereumTransactionTypeExtended
  // }){
  //   const extendedTxData = await tx.tx();
  //   const { from, ...txData } = extendedTxData;
  //   const signer = provider.getSigner(from);
  //   const txResponse = await signer.sendTransaction({
  //     ...txData,
  //     value: txData.value ? BigNumber.from(txData.value) : undefined,
  //   });
  // }
}
