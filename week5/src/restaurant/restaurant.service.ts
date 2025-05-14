// src/restaurant/restaurant.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { Restaurant, Restaurants as RestaurantData } from '../data/restaurants';

@Injectable()
export class RestaurantService {
  // 초기 데이터 복사(원본 데이터를 직접 수정하지 않기 위해)
  private restaurants: Restaurant[] = [...RestaurantData];

  // 전체 맛집 목록 반환
  getAll(): Restaurant[] {
    return this.restaurants;
  }

  // 특정 맛집 정보 반환
  getOne(name: string): Restaurant {
    const restaurant = this.restaurants.find((r) => r.name === name);
    if (!restaurant) {
      throw new NotFoundException(`해당 맛집 정보(${name})가 존재하지 않습니다.`);
    }
    return restaurant;
  }

  // 맛집 정보 생성
  create(newRestaurant: Restaurant): Restaurant {
    const exists = this.restaurants.some((r) => r.name === newRestaurant.name);
    if (exists) {
      throw new ConflictException('이미 해당 맛집 정보가 존재합니다.');
    }
    this.restaurants.push(newRestaurant);
    return newRestaurant;
  }

  // 맛집 정보 삭제
  delete(name: string): Restaurant {
    const index = this.restaurants.findIndex((r) => r.name === name);
    if (index === -1) {
      throw new NotFoundException(`해당 맛집 정보(${name})가 존재하지 않습니다.`);
    }
    const [deleted] = this.restaurants.splice(index, 1);
    return deleted;
  }

  // 맛집 정보 수정
  update(name: string, updateData: Partial<Restaurant>): Restaurant {
    const restaurant = this.getOne(name);
    Object.assign(restaurant, updateData);
    return restaurant;
  }
}