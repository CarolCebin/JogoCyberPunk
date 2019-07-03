import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne,ManyToOne } from 'typeorm';
import { Aventura } from './Aventura.entity';
import { Jogador } from './Jogador.entity';


@Entity()
export class ParticipacaoAventura {
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: Date;
  
    @Column()
    sucesso: boolean;

    @ManyToOne(type => Aventura, aventura => aventura.participacaoAventura)
    aventura: Aventura;
    
    @ManyToOne(type => Jogador, jogador => jogador.participacaoAventura)
    jogador: Jogador;


}