import { Controller, Get } from '@nestjs/common';

@Controller('pools')
export class PoolsController {
  @Get()
  getAvailablePools() {
    return ['This', 'will', 'return', 'all', 'the', 'users'];
  }
}
