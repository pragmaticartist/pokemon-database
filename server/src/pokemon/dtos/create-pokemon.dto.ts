import { IsNumber, IsString } from 'class-validator';

export class CreatePokemonDto {
  @IsNumber()
  pokedex: number;

  @IsString()
  name: string;
}
