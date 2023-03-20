import { Controller, Get } from '@nestjs/common';
import { PoolsService } from './pools.service';

@Controller('pools')
export class PoolsController {
  constructor(private readonly poolsService: PoolsService) {}

  @Get()
  getPools() {
    return this.poolsService.getPools();
  }
}
