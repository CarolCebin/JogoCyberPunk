import { Controller, Inject, Post, Get, Body } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Jogador } from '../Entidade/Jogador.entity';
import { CadastroService } from './cadastro.service';



@Controller('cadastro')
export class CadastroController{

    
    constructor(
        @Inject('JogadorToken')
        private readonly jogadorRepository: Repository<Jogador>,
    ) {
    }
    
    private service: CadastroService = new CadastroService(this.jogadorRepository);
    
    @Post()
    async cadastro(@Body('email') email, @Body('senha') senha, @Body('nome') nome, @Body('sexo') sexo, @Body('apelido') apelido) {
        return await this.service.addJogador(email, senha, nome, sexo, apelido);
    }


}