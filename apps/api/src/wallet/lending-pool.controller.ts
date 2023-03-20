import { Controller, Post, Body } from '@nestjs/common';
import { LendingPoolService } from './lending-pool.service';

@Controller('lending-pool')
export class LendingPoolController {
  constructor(private readonly lendingPoolService: LendingPoolService) {}

  @Post('deposit')
  async depositToPool(
    @Body()
    depositParams: {
      user: string;
      reserve: string;
      amount: string;
      onBehalfOf?: string;
    },
  ) {
    const { user, reserve, amount, onBehalfOf } = depositParams;
    await this.lendingPoolService.deposit(user, reserve, amount, onBehalfOf);
    return { message: 'Deposit successful' };
  }

  @Post('withdraw')
  async withdrawFromPool(
    @Body()
    withdrawParams: {
      user: string;
      reserve: string;
      amount: string;
      aTokenAddress?: string;
      onBehalfOf?: string;
    },
  ) {
    const { user, reserve, amount, aTokenAddress, onBehalfOf } = withdrawParams;
    await this.lendingPoolService.withdraw(
      user,
      reserve,
      amount,
      aTokenAddress,
      onBehalfOf,
    );
    return { message: 'Withdrawal successful' };
  }
}
