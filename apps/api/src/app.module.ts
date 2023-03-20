import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
// import { UserModule } from './user/user.module';
import { Web3Module } from './web3/web3.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    // AppModule,
    PrismaModule,
    Web3Module,
    // UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
