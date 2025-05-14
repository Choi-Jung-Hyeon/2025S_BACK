import { Restaurant } from '../data/restaurants';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantService {
    private restaurants;
    getAll(): Restaurant[];
    getOne(name: string): Restaurant;
    create(createRestaurantDto: CreateRestaurantDto): Restaurant;
    delete(name: string): Restaurant;
    update(name: string, updateRestaurantDto: UpdateRestaurantDto): Restaurant;
}
