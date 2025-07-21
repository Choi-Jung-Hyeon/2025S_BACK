import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from '@prisma/client';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    getAll(): Promise<Restaurant[]>;
    getOne(id: number): Promise<Restaurant>;
    create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    delete(id: number): Promise<Restaurant>;
    update(id: number, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant>;
}
