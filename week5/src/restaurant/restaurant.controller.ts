// src/restaurant/restaurant.controller.ts
import { Controller, Get, Post, Delete, Patch, Param, Body } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../data/restaurants';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  // GET /restaurants – 전체 맛집 목록 반환
  @Get()
  getAll(): Restaurant[] {
    return this.restaurantService.getAll();
  }

  // GET /restaurants/:name – 특정 맛집 정보 반환
  @Get(':name')
  getOne(@Param('name') name: string): Restaurant {
    return this.restaurantService.getOne(name);
  }

  // POST /restaurants – 맛집 정보 생성
  @Post()
  create(@Body() restaurant: Restaurant): Restaurant {
    return this.restaurantService.create(restaurant);
  }

  // DELETE /restaurants/:name – 특정 맛집 정보 삭제
  @Delete(':name')
  delete(@Param('name') name: string): Restaurant {
    return this.restaurantService.delete(name);
  }

  // PATCH /restaurants/:name – 특정 맛집 정보 수정
  @Patch(':name')
  update(
    @Param('name') name: string,
    @Body() updateData: Partial<Restaurant>,
  ): Restaurant {
    return this.restaurantService.update(name, updateData);
  }
}