import { Field, ArgsType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@ArgsType()
export class GetPokemonArgs {
  @Field({ nullable: true })
  pokedex?: number;

  @Field({ nullable: true })
  @MinLength(3)
  name?: string;

  @Field({ nullable: true })
  @MinLength(3)
  move?: string;

  @Field({ nullable: true })
  @MinLength(3)
  type?: string;
}
