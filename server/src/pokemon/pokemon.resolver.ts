import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto } from './dtos/create-pokemon.dto';
import { PokemonService } from './pokemon.service';
import { CreatePokemonInput } from './inputs/pokemon.input';
import { GetPokemonArgs } from './dtos/get-pokemon-args';
import { number, string } from '@hapi/joi';
import { Ctx } from 'type-graphql';

@Resolver((of) => Pokemon)
export class PokemonResolver {
  constructor(private pokemonService: PokemonService) {}

  @Query((returns) => Pokemon)
  async getAllPokemon() {
    return this.pokemonService.find();
  }

  @Query((returns) => Pokemon, { name: 'pokemon' })
  async getPokemon(@Args() args: GetPokemonArgs) {
    return this.pokemonService.findOne(args.pokedex);
  }

  @Mutation((returns) => Pokemon)
  async createPokemon(
    @Args('data') data: CreatePokemonInput,
  ): Promise<Pokemon> {
    return this.pokemonService.create(data.pokedex, data.name);
  }
}
