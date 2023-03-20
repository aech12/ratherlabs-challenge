import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PoolsController } from './pools.controller';
import { PoolsService } from './pools.service';
// import { LendingPoolController } from './lending-pool.controller';
// import { LendingPoolService } from './lending-pool.service';

@Module({
  controllers: [PoolsController],
  providers: [PoolsService],
  imports: [HttpModule],
})
export class Web3Module {}
