import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Aventura } from './Aventura.entity';


@Entity()
export class ParticipacaoAventura {
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: Date;
  
    @Column()
    sucesso: boolean;

    @OneToMany(type => Aventura, aventura => aventura.participacaoAventura)
    aventura: Aventura;

}