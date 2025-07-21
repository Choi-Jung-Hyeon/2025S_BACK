import { RestaurantService } from './restaurant.service';
import { Restaurant } from './models/restaurant.model';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    getAll(): Promise<Restaurant[]>;
    getOne(id: number): Promise<Restaurant>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    updateRestaurant(id: number, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant>;
    deleteRestaurant(id: number): Promise<Restaurant>;
}
