import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Artefato } from './Artefato.entity';

@Entity()
export class TipoArtefato {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  custoDeFabricacao: string;

  @ManyToOne(type => Artefato, artefato => artefato.tipoArtefato)
  artefato: Artefato[];

}