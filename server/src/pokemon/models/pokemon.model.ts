import { PokemonType } from '../entities/pokemon-type.entity';
import { PokemonMove } from '../entities/pokemon-move.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pokemon {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  pokedex: number;

  @Field()
  name: string;

  @Field(() => [PokemonMove])
  moves: PokemonMove[];

  @Field(() => [PokemonType])
  types: PokemonType[];
}
