import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Jogador } from '../Entidade/Jogador.entity';

@Injectable()
export class CadastroService {
    constructor(
        @Inject('JogadorToken')
        private readonly jogadorRepository: Repository<Jogador>,
    ) {}

    async addJogador(email : string, senha: string, nome: string, sexo: string, apelido: string) {
        const jogador = new Jogador();
        jogador.apelido = apelido; 
        jogador.nome = nome;
        jogador.senha = senha;
        jogador.sexo = sexo;
        jogador.email = email;
        await this.jogadorRepository.save(jogador);
    }

}