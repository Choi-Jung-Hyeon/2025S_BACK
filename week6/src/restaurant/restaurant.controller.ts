// src/restaurant/restaurant.controller.ts
import { 
  Controller, Get, Post, Delete, Patch, 
  Param, Body, NotFoundException 
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../data/restaurants';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

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
  create(@Body() createRestaurantDto: CreateRestaurantDto): Restaurant {
    return this.restaurantService.create(createRestaurantDto);
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
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ): Restaurant {
    return this.restaurantService.update(name, updateRestaurantDto);
  }
}