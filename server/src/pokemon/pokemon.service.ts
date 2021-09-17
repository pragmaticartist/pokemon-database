import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(@InjectRepository(Pokemon) private repo: Repository<Pokemon>) {}

  async create(pokedex: number, name: string) {
    const pokemon = await this.repo.create({ pokedex, name });

    await this.repo.save(pokemon);
    console.log(`created pokemon: ${JSON.stringify(pokemon)}!`);
    return pokemon;
  }

  async find() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOne(id);
  }
}
