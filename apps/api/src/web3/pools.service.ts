import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
// import type { Pool } from 'ui/types'

@Injectable()
export class PoolsService {
  constructor(private httpService: HttpService) { }

  async getPools() {
    const response = await this.httpService
      .get('https://aave-api-v2.aave.com/data/pools')
      .toPromise();
    console.log('POOSL', response);
    return response.data;
  }
}
