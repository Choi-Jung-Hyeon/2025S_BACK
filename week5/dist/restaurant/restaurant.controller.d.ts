import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../data/restaurants';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    getAll(): Restaurant[];
    getOne(name: string): Restaurant;
    create(restaurant: Restaurant): Restaurant;
    delete(name: string): Restaurant;
    update(name: string, updateData: Partial<Restaurant>): Restaurant;
}
