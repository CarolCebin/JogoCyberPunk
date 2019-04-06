import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Jogador } from './Jogador.entity';

@Entity()
export class Personagem {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome: string;

    @Column()
    moeda: number;

    @Column()
    staminaAtual: number;

    @Column()
    nivelAventureiro: number;

    @Column()
    nivelMercante: number;

    @Column()
    nivelArtesao: number;
  
    @OneToOne(type => Jogador, jogador => jogador.personagem)
    jogador: Jogador;
  
}