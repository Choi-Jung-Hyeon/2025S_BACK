import { Restaurant } from '../data/restaurants';
export declare class RestaurantService {
    private restaurants;
    getAll(): Restaurant[];
    getOne(name: string): Restaurant;
    create(newRestaurant: Restaurant): Restaurant;
    delete(name: string): Restaurant;
    update(name: string, updateData: Partial<Restaurant>): Restaurant;
}
