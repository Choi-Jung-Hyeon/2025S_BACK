import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../data/restaurants';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    getAll(): Restaurant[];
    getOne(name: string): Restaurant;
    create(createRestaurantDto: CreateRestaurantDto): Restaurant;
    delete(name: string): Restaurant;
    update(name: string, updateRestaurantDto: UpdateRestaurantDto): Restaurant;
}
