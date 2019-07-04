import { Controller, Inject, Post, Get, Body } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Jogador } from '../Entidade/Jogador.entity';
import { Aventura } from '../Entidade/Aventura.entity';
import { RealizaAventuraService } from './realizaAventura.service';



@Controller('realizaAventura')
export class RealizaAventuraController{

    
    constructor(
        @Inject('ParticipacaoAventuraToken')
        private readonly participacaoAventudaRepository: Repository<ParticipacaoAvnetura>,
    ) {
    }
    
    private service: RealizaAventuraService = new RealizaAventuraService(this.jogadorRepository);
    
    @Post()
    async cadastro(@Body('nome') nome, @Body('descricao') descricao, @Body('stamina') stamina, @Body('imagem') imagem, @Body('dificuldade') dificuldade) {
       aventura = new Aventura();
       participcaoAventura = new ParticipacaoAventura();
       aventura = await this.service.addAventura(nome, descricao, stamina, imagem, dificuldade);
       participacaoAventura = await this.service.addParticipacaoAventura(jogador,aventura,sucess);
        if participacaoAventura.sucess == true{
             participcaoAventura.artefatos = await this.service.calculaAventura(jogador, aventura);
             await this.service.geraEspolio(aventura));
             await this.service.salvaEspolio(participcaoAventura.artefatos, jogador);
        }
      
    }
}
