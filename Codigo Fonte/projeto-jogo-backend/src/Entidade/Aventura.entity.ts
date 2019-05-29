import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne , ManyToOne } from 'typeorm';
import { ParticipacaoAventura } from './ParticipacaoAventura.entity';


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
    dificuldade: BigInteger;
  
    @ManyToOne(type => ParticipacaoAventura, participacaoAventura => participacaoAventura.aventura)
    participacaoAventura: ParticipacaoAventura[];

}