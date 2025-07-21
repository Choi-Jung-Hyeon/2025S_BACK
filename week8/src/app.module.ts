import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    // GraphQLModule 설정 (코드 퍼스트 접근법)
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile 옵션을 사용하면 NestJS가 자동으로 정적 스키마를 생성합니다.
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    RestaurantModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}