import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';


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


  
}