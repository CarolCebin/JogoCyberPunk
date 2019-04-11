import { Module } from '@nestjs/common';
import { DatabaseModule } from '../DataBase/dataBase.module';

import { CadastroController } from './cadastro.controller';
import { cadastroProviders } from './cadastro.providers';


@Module({
  imports: [DatabaseModule],
  providers: [...cadastroProviders],
  controllers: [CadastroController]
})
export class CadastroModule { }
