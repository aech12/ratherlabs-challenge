import { Module } from '@nestjs/common';
import { LendingPoolController } from './lending-pool.controller';
import { LendingPoolService } from './lending-pool.service';

@Module({
  controllers: [LendingPoolController],
  providers: [LendingPoolService],
})
export class LendingPoolModule {}
