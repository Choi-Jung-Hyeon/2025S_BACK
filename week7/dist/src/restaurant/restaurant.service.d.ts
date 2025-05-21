import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<any[]>;
    getOne(id: number): Promise<{
        id: number;
        name: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createRestaurantDto: CreateRestaurantDto): Promise<{
        id: number;
        name: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateRestaurantDto: UpdateRestaurantDto): Promise<{
        id: number;
        name: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
