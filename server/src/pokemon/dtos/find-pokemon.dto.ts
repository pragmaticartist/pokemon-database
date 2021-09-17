import { IsNumber, IsOptional, IsString } from 'class-validator';

export class FindPokemonDto {
  @IsNumber()
  @IsOptional()
  pokedex: number;

  @IsString()
  @IsOptional()
  name: string;

  // ?
  //  moves: PokemonMove[];

  // ?
  //  types: PokemonType[];
}
