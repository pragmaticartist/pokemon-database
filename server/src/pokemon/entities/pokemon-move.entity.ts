import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class PokemonMove {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  pp: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  damageClass: string;

  @Field()
  @Column()
  power: number;
}
