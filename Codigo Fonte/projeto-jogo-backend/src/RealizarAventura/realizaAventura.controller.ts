import { Controller, Inject, Post, Get, Body } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Jogador } from '../Entidade/Jogador.entity';
import { Aventura } from '../Entidade/Aventura.entity';
import { RealizaAventuraService } from './realizaAventura.service';



@Controller('cadastro')
export class RealizaAventuraController{

    
    constructor(
        @Inject('JogadorToken')
        private readonly jogadorRepository: Repository<Jogador>,
    ) {
    }
    
    private service: RealizaAventuraService = new RealizaAventuraService(this.jogadorRepository);
    
    @Post()
    async cadastro(@Body('nome') nome, @Body('descricao') descricao, @Body('stamina') stamina, @Body('imagem') imagem, @Body('dificuldade') dificuldade) {
        return await this.service.addAventura(nome, descricao, stamina, imagem, dificuldade);
    }




}