// src/restaurant/restaurant.controller.ts
import { 
  Controller, 
  Get, 
  Post, 
  Delete, 
  Patch, 
  Param, 
  Body, 
  ParseIntPipe 
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
// Prisma가 생성한 타입을 사용하거나, 별도의 인터페이스를 정의할 수 있습니다.
import { Restaurant } from '@prisma/client';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  // GET /restaurants – 전체 맛집 목록 반환
  @Get()
  async getAll(): Promise<Restaurant[]> {
    return await this.restaurantService.getAll();
  }

  // GET /restaurants/:id – 특정 맛집 정보 반환
  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<Restaurant> {
    return await this.restaurantService.getOne(id);
  }

  // POST /restaurants – 맛집 정보 생성
  @Post()
  async create(
    @Body() createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return await this.restaurantService.create(createRestaurantDto);
  }

  // DELETE /restaurants/:id – 특정 맛집 정보 삭제
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Restaurant> {
    return await this.restaurantService.delete(id);
  }

  // PATCH /restaurants/:id – 특정 맛집 정보 수정
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return await this.restaurantService.update(id, updateRestaurantDto);
  }
}