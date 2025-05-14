export interface Restaurant {
  name: string;
  address: string;
  phone?: string;
}

export const Restaurants: Restaurant[] = [
  {
    "name": "블랙스미스",
    "address": "경기도 수원시 장안구 화산로233번길 47 2층",
    "phone": "0507-1314-4184"
  },
  {
    "name": "한아스콘",
    "address": "경기 수원시 장안구 율전로101번길 13 1층",
    "phone": "0507-1443-3414"
  },
  {
    "name": "봉수육",
    "address": "경기 수원시 장안구 율전로108번길 11 2층",
    "phone": "0507-1460-0903"
  }
]