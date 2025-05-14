// src/restaurant/restaurant.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { Restaurant, Restaurants as RestaurantData } from '../data/restaurants';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  private restaurants: Restaurant[] = [...RestaurantData];

  getAll(): Restaurant[] {
    return this.restaurants;
  }

  getOne(name: string): Restaurant {
    const restaurant = this.restaurants.find((r) => r.name === name);
    if (!restaurant) {
      throw new NotFoundException(`맛집 정보(${name})가 존재하지 않습니다.`);
    }
    return restaurant;
  }

  create(createRestaurantDto: CreateRestaurantDto): Restaurant {
    const exists = this.restaurants.some((r) => r.name === createRestaurantDto.name);
    if (exists) {
      throw new ConflictException('이미 해당 맛집 정보가 존재합니다.');
    }
    this.restaurants.push(createRestaurantDto);
    return createRestaurantDto;
  }

  delete(name: string): Restaurant {
    const index = this.restaurants.findIndex((r) => r.name === name);
    if (index === -1) {
      throw new NotFoundException(`맛집 정보(${name})가 존재하지 않습니다.`);
    }
    const [deleted] = this.restaurants.splice(index, 1);
    return deleted;
  }

  update(name: string, updateRestaurantDto: UpdateRestaurantDto): Restaurant {
    const restaurant = this.getOne(name);
    Object.assign(restaurant, updateRestaurantDto);
    return restaurant;
  }
}