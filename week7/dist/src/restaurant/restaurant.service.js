"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RestaurantService = class RestaurantService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return await this.prisma.restaurant.findMany();
    }
    async getOne(id) {
        const restaurant = await this.prisma.restaurant.findUnique({
            where: { id },
        });
        if (!restaurant) {
            throw new common_1.NotFoundException(`맛집 정보 (ID: ${id})가 존재하지 않습니다.`);
        }
        return restaurant;
    }
    async create(createRestaurantDto) {
        try {
            return await this.prisma.restaurant.create({
                data: createRestaurantDto,
            });
        }
        catch (error) {
            throw new common_1.ConflictException('이미 해당 맛집 정보가 존재합니다.');
        }
    }
    async update(id, updateRestaurantDto) {
        await this.getOne(id);
        return await this.prisma.restaurant.update({
            where: { id },
            data: updateRestaurantDto,
        });
    }
    async delete(id) {
        await this.getOne(id);
        return await this.prisma.restaurant.delete({
            where: { id },
        });
    }
};
exports.RestaurantService = RestaurantService;
exports.RestaurantService = RestaurantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RestaurantService);
//# sourceMappingURL=restaurant.service.js.map