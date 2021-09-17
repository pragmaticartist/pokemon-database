import { InputType, Field } from '@nestjs/graphql';
import { Pokemon } from '../entities/pokemon.entity';

@InputType()
export class CreatePokemonInput implements Partial<Pokemon> {
  @Field({ nullable: true }) readonly name?: string;
  @Field({ nullable: true }) readonly pokedex?: number;
  @Field(() => [String]) readonly move?: string[];
  @Field(() => [String]) readonly type?: string[];
}
