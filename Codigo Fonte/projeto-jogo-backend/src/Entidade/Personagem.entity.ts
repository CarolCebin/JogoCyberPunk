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

    @Column({name: "stamina_atual"})
    staminaAtual: number;

    @Column({name: "nivel_aventureiro"})
    nivelAventureiro: number;

    @Column({name: "nivel_mercante"})
    nivelMercante: number;

    @Column({name: "nivel_aventureiro"})
    nivelArtesao: number;

    @OneToOne(type => Jogador, jogador => jogador.personagem)
    jogador: Jogador;
  

}