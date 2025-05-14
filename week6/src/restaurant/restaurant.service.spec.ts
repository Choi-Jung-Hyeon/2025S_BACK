// src/restaurant/restaurant.service.spec.ts
import { RestaurantService } from './restaurant.service';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { Restaurant } from '../data/restaurants';

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    service = new RestaurantService();
  });

  it('should get all restaurants', () => {
    const restaurants = service.getAll();
    expect(Array.isArray(restaurants)).toBe(true);
  });

  it('should create a new restaurant', () => {
    const newRestaurant: Restaurant = {
      name: 'TestRestaurant',
      address: 'Test Address',
      phone: '000-0000',
    };
    const result = service.create(newRestaurant);
    expect(result).toEqual(newRestaurant);
    expect(service.getAll()).toContain(newRestaurant);
  });

  it('should throw a ConflictException when creating an existing restaurant', () => {
    const existing = service.getAll()[0];
    expect(() => service.create(existing)).toThrow(ConflictException);
  });

  it('should delete a restaurant', () => {
    const restaurant = service.getAll()[0];
    const deleted = service.delete(restaurant.name);
    expect(deleted).toEqual(restaurant);
    expect(() => service.getOne(restaurant.name)).toThrow(NotFoundException);
  });

  it('should update a restaurant', () => {
    const restaurant = service.getAll()[0];
    const updated = service.update(restaurant.name, { address: 'New Address' });
    expect(updated.address).toEqual('New Address');
  });
});