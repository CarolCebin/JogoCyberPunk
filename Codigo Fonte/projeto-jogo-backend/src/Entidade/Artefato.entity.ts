import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne,ManyToOne } from 'typeorm';
import { Personagem } from './Personagem.entity';
import { Aventura } from './Aventura.entity';


@Entity()
export class Artefato {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  classificacao: string;

  @Column()
  imagem: string;

  @Column()
  aventureiro: number;

  @Column()
  mercante: number;

  @Column()
  artesao: number;

  @Column()
  consumivel: boolean;

  @ManyToOne(type => Personagem, personagem => personagem.artefato)
  personagem: Personagem;

  @ManyToOne(type => Aventura, aventura => aventura.artefato)
  aventura: Aventura;
  
}