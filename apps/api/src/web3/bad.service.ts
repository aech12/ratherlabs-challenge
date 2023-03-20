import { Injectable } from '@nestjs/common';
import Web3 from 'web3';
import { AavePools } from '@aave/contract-helpers';

@Injectable()
export class AaveService {
  private web3: Web3;
  private aavePools: AavePools;

  constructor() {
    this.web3 = new Web3(process.env.ETHEREUM_PROVIDER_URL);
    this.aavePools = new AavePools(this.web3);
  }

  async getPoolsData() {
    const pools = await this.aavePools.getPools();
    const poolData = await Promise.all(
      pools.map(async (pool) => {
        const [liquidity, price] = await Promise.all([
          pool.getLiquidity(),
          pool.getPrice(),
        ]);
        return {
          address: pool.address,
          name: pool.name,
          symbol: pool.symbol,
          apy: pool.apy,
          updatedAt: pool.updatedAt,
          liquidity,
          price,
        };
      }),
    );
    return poolData;
  }
}