import { Injectable } from '@nestjs/common';
import { Pool } from 'ui/types';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class PoolsService {
  constructor(private httpService: HttpService) {}

  async getPools(): Promise<Pool[]> {
    const response = await this.httpService
      .get('https://aave-api-v2.aave.com/data/pools')
      .pipe(
        catchError((error: AxiosError) => {
          console.error(error.response.data);
          throw error;
        }),
      );

    const { data } = await lastValueFrom(response);

    return data;
  }
}
