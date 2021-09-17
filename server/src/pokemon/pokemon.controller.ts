import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dtos/create-pokemon.dto';
import { FindPokemonDto } from './dtos/find-pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  async findPokemon(@Query() property: FindPokemonDto) {
    const pokemon = await this.pokemonService.find();
    if (!pokemon) throw new NotFoundException('pokemon not found');

    return pokemon;
  }

  @Get('/:id')
  async findOnePokemon(@Param('id') id: string) {
    const pokemon = await this.pokemonService.findOne(parseInt(id));
    if (!pokemon) throw new NotFoundException('pokemon not found');

    return pokemon;
  }

  @Post('/add')
  createPokemon(@Body() body: CreatePokemonDto) {
    this.pokemonService.create(body.pokedex, body.name);
  }
}
