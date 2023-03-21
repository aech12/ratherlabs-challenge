import { Controller, Get, Post, Body } from '@nestjs/common';
import { PoolsService } from './pools.service';
import { AaveService } from './aave.service';

@Controller('pools')
export class PoolsController {
  constructor(
    private readonly poolsService: PoolsService,
    private readonly aaveService: AaveService,
  ) {}

  @Get()
  getPools() {
    return this.poolsService.getPools();
  }

  @Post('deposit')
  async supply(
    @Body() body: { user: string; reserve: string; amount: string },
  ) {
    const { user, reserve, amount } = body;
    return await this.aaveService.supply(user, reserve, amount);
  }

  @Post('withdraw')
  async withdraw(
    @Body()
    body: {
      user: string;
      reserve: string;
      amount: string;
      aTokenAddres: string;
    },
  ) {
    const { user, reserve, amount, aTokenAddres } = body;
    return await this.aaveService.withdraw(user, reserve, amount, aTokenAddres);
  }
}
