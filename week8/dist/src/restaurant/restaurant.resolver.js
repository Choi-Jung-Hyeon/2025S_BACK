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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const restaurant_service_1 = require("./restaurant.service");
const restaurant_model_1 = require("./models/restaurant.model");
const create_restaurant_dto_1 = require("./dto/create-restaurant.dto");
const update_restaurant_dto_1 = require("./dto/update-restaurant.dto");
let RestaurantResolver = class RestaurantResolver {
    restaurantService;
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    async getAll() {
        return await this.restaurantService.getAll();
    }
    async getOne(id) {
        return await this.restaurantService.getOne(id);
    }
    async createRestaurant(createRestaurantDto) {
        return await this.restaurantService.create(createRestaurantDto);
    }
    async updateRestaurant(id, updateRestaurantDto) {
        return await this.restaurantService.update(id, updateRestaurantDto);
    }
    async deleteRestaurant(id) {
        return await this.restaurantService.delete(id);
    }
};
exports.RestaurantResolver = RestaurantResolver;
__decorate([
    (0, graphql_1.Query)(() => [restaurant_model_1.Restaurant], { name: 'restaurants' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "getAll", null);
__decorate([
    (0, graphql_1.Query)(() => restaurant_model_1.Restaurant, { name: 'restaurant' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "getOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => restaurant_model_1.Restaurant),
    __param(0, (0, graphql_1.Args)('createRestaurantDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_dto_1.CreateRestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "createRestaurant", null);
__decorate([
    (0, graphql_1.Mutation)(() => restaurant_model_1.Restaurant),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('updateRestaurantDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_restaurant_dto_1.UpdateRestaurantDto]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "updateRestaurant", null);
__decorate([
    (0, graphql_1.Mutation)(() => restaurant_model_1.Restaurant),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "deleteRestaurant", null);
exports.RestaurantResolver = RestaurantResolver = __decorate([
    (0, graphql_1.Resolver)(() => restaurant_model_1.Restaurant),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantResolver);
//# sourceMappingURL=restaurant.resolver.js.map