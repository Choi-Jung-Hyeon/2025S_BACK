"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantService = void 0;
const common_1 = require("@nestjs/common");
const restaurants_1 = require("../data/restaurants");
let RestaurantService = class RestaurantService {
    restaurants = [...restaurants_1.Restaurants];
    getAll() {
        return this.restaurants;
    }
    getOne(name) {
        const restaurant = this.restaurants.find((r) => r.name === name);
        if (!restaurant) {
            throw new common_1.NotFoundException(`해당 맛집 정보(${name})가 존재하지 않습니다.`);
        }
        return restaurant;
    }
    create(newRestaurant) {
        const exists = this.restaurants.some((r) => r.name === newRestaurant.name);
        if (exists) {
            throw new common_1.ConflictException('이미 해당 맛집 정보가 존재합니다.');
        }
        this.restaurants.push(newRestaurant);
        return newRestaurant;
    }
    delete(name) {
        const index = this.restaurants.findIndex((r) => r.name === name);
        if (index === -1) {
            throw new common_1.NotFoundException(`해당 맛집 정보(${name})가 존재하지 않습니다.`);
        }
        const [deleted] = this.restaurants.splice(index, 1);
        return deleted;
    }
    update(name, updateData) {
        const restaurant = this.getOne(name);
        Object.assign(restaurant, updateData);
        return restaurant;
    }
};
exports.RestaurantService = RestaurantService;
exports.RestaurantService = RestaurantService = __decorate([
    (0, common_1.Injectable)()
], RestaurantService);
//# sourceMappingURL=restaurant.service.js.map