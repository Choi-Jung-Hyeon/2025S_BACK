import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurant.resolver'; // 새로 추가된 Resolver

@Module({
  imports: [PrismaModule],
  providers: [RestaurantService, RestaurantResolver],
})
export class RestaurantModule {}