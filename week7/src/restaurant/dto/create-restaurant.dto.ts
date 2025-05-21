// src/restaurant/dto/create-restaurant.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsString()
  phone: string;
}