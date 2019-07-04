import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Jogador } from '../Entidade/Jogador.entity';
import { Aventura } from '../Entidade/Aventura.entity';
import {ParticipacaoAventura} from '../Entidade/ParticipacaoAventura.entity'
import { Artefato } from 'src/Entidade/Artefato.entity';

@Injectable()
export class RealizaAventuraService {
    constructor(
        @Inject('AventuraToken')
        private readonly aventuraRepository: Repository<Aventura>,
    ) {}

    async addParticipacaoAventura(jogador:Jogador,aventura:Aventura,sucess:boolean):ParticipacaoAventura{
        const participacaoAventura = new ParticipacaoAventura();
        participacaoAventura.aventura = aventura;
        participacaoAventura.data = new Date();
        participacaoAventura.sucesso = sucess;
        participacaoAventura.jogador = jogador;

        return participacaoAventura;

    }

    async addAventura(nome : string, descricao: string, stamina: BigInteger, imagem: Blob, dificuldade: Number): void {
        const aventura = new Aventura();
        aventura.nome = nome;
        aventura.descricao = descricao;         
        aventura.stamina = stamina;
        aventura.imagem = imagem;
        aventura.dificuldade = dificuldade;
        await this.aventuraRepository.save(aventura);
    }

    calcAventura(jogador:Jogador, aventura: Aventura): boolean{
        let chance: Number;
        let random: Number;
        chance = jogador.personagem.nivelAventureiro / aventura.dificuldade;
        random = Math.random()*100;

        if (random <= chance){
            return true;
        }
        else{
            return false;
        }

    }

    gerarEspolio(aventura:Aventura): Artefatos[]
        let lista = [];
        for (let i=0;i<aventura.artefatos.length;i++){
            let random = Math.random()*100;
            if(random>=50){
                lista.push(aventura.artefatos[i]);
            }

        }
        return lista;
    }

    salvaEspolio(lista:Array<Artefato>,jogador:Jogador){
        for (let i=0;i<lista.length;i++){
            jogador.personagem.artefatos.push(lista[i])
        }
    }

    
}


