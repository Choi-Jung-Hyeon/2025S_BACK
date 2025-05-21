// src/restaurant/restaurant.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  // 전체 맛집 목록 조회
  async getAll(): Promise<any[]> {
    return await this.prisma.restaurant.findMany();
  }

  // ID를 기준으로 단일 맛집 조회
  async getOne(id: number) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id },
    });
    if (!restaurant) {
      throw new NotFoundException(`맛집 정보 (ID: ${id})가 존재하지 않습니다.`);
    }
    return restaurant;
  }

  // 맛집 정보 생성
  async create(createRestaurantDto: CreateRestaurantDto) {
    try {
      return await this.prisma.restaurant.create({
        data: createRestaurantDto,
      });
    } catch (error) {
      // 예를 들어, 중복된 이름으로 인한 에러 발생 시 ConflictException 처리
      throw new ConflictException('이미 해당 맛집 정보가 존재합니다.');
    }
  }

  // 맛집 정보 수정 (ID 기준)
  async update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    // 먼저 존재하는지 확인
    await this.getOne(id);
    return await this.prisma.restaurant.update({
      where: { id },
      data: updateRestaurantDto,
    });
  }

  // 맛집 정보 삭제 (ID 기준)
  async delete(id: number) {
    // 먼저 존재하는지 확인
    await this.getOne(id);
    return await this.prisma.restaurant.delete({
      where: { id },
    });
  }
}