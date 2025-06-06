//restaurant.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService],
  imports: [PrismaModule],
})
export class RestaurantModule {}