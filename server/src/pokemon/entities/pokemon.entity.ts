import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PokemonType } from './pokemon-type.entity';
import { PokemonMove } from './pokemon-move.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Pokemon {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  pokedex: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [PokemonMove])
  @ManyToMany(() => PokemonMove)
  @JoinTable()
  moves: PokemonMove[];

  @Field(() => [PokemonType])
  @ManyToMany(() => PokemonType)
  @JoinTable()
  types: PokemonType[];
}
