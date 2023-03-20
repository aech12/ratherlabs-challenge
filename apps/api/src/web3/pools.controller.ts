import { Controller, Get } from '@nestjs/common';
import { Pool } from 'ui/types';

const stakedTokens: Pool[] = [
  {
    liquidity: {
      usd: 1234567.89,
      eth: 9876.54,
      native: 654321.98,
    },
    price: {
      eth: 0.123456,
      usd: 456.789,
    },
    address: '0x1234567890123456789012345678901234567890',
    name: 'Mock Token 1',
    symbol: 'MT1',
    apy: '3.14',
    updatedAt: '2022-03-19T22:56:10.000Z',
  },
  {
    liquidity: {
      usd: 9876543.21,
      eth: 6543.21,
      native: 3210987.65,
    },
    price: {
      eth: 0.987654,
      usd: 321.098,
    },
    address: '0x0987654321098765432109876543210987654321',
    name: 'Mock Token 2',
    symbol: 'MT2',
    apy: '7.77',
    updatedAt: '2022-03-19T23:01:05.000Z',
  },
];

@Controller('pools')
export class PoolsController {
  @Get()
  getPools() {
    return stakedTokens;
  }
}
