import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne , ManyToOne } from 'typeorm';
import { ParticipacaoAventura } from './ParticipacaoAventura.entity';
import {Artefato} from './Artefato.entity'


@Entity()
export class Aventura {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome: string;
  
    @Column()
    descricao: string;
  
    @Column()
    stamina: BigInteger;

    @Column()
    imagem: Blob;

    @Column()
    dificuldade: Number;

    @OneToMany(type => Artefato, artefato => artefato.aventura)
    artefatos: Artefato[];
  
    @OneToMany(type => ParticipacaoAventura, participacaoAventura => participacaoAventura.aventura)
    participacaoAventura: ParticipacaoAventura[];

}