import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PoolsController } from './pools.controller';
import { Web3Controller } from './web3.controller';
import { PoolsService } from './pools.service';
import { Web3Service } from './web3.service';
import { AaveService } from './aave.service';

@Module({
  controllers: [PoolsController, Web3Controller],
  providers: [PoolsService, AaveService, Web3Service],
  imports: [HttpModule],
})
export class Web3Module {}
