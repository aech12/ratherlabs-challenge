import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PoolsService {
  constructor(private httpService: HttpService) {}

  async getPools() {
    const response = await this.httpService
      .get('https://aave-api-v2.aave.com/data/pools')
      .toPromise();
    return response.data;
  }
}
