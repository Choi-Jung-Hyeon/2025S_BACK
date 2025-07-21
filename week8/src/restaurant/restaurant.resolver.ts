// src/restaurant/restaurant.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './models/restaurant.model';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [Restaurant], { name: 'restaurants' })
  async getAll(): Promise<Restaurant[]> {
    return await this.restaurantService.getAll();
  }

  @Query(() => Restaurant, { name: 'restaurant' })
  async getOne(@Args('id', { type: () => Int }) id: number): Promise<Restaurant> {
    return await this.restaurantService.getOne(id);
  }

  @Mutation(() => Restaurant)
  async createRestaurant(@Args('createRestaurantDto') createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    return await this.restaurantService.create(createRestaurantDto);
  }

  @Mutation(() => Restaurant)
  async updateRestaurant(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateRestaurantDto') updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return await this.restaurantService.update(id, updateRestaurantDto);
  }

  @Mutation(() => Restaurant)
  async deleteRestaurant(@Args('id', { type: () => Int }) id: number): Promise<Restaurant> {
    return await this.restaurantService.delete(id);
  }
}