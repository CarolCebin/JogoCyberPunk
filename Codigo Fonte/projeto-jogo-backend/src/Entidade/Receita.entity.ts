import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Artefato } from './Artefato.entity';

@Entity()
export class Receita {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  custoDeFabricacao: string;

  @OneToOne(type => Artefato, artefato => artefato.receita)
  artefato: Artefato;

}