import { Module } from '@nestjs/common';
import { DatabaseModule } from '../DataBase/dataBase.module';

import { RealizaAventuraController } from './realizaAventura.controller';
import { realizaAventuraProvider } from './realizaAventura.provider';


@Module({
  imports: [DatabaseModule],
  providers: [...realizaAventuraProvider],
  controllers: [RealizaAventuraController]
})
export class realizaAventuraModule { }