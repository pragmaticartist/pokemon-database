import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonMove } from './entities/pokemon-move.entity';
import { PokemonType } from './entities/pokemon-type.entity';
import { PokemonResolver } from './pokemon.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pokemon]),
    TypeOrmModule.forFeature([PokemonMove]),
    TypeOrmModule.forFeature([PokemonType]),
  ],
  controllers: [PokemonController],
  providers: [PokemonResolver, PokemonService],
})
export class PokemonModule {}
