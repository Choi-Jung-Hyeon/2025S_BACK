// src/restaurant/models/restaurant.model.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => Int) // GraphQL에서는 ID를 Int로 표현
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phone: string;
}