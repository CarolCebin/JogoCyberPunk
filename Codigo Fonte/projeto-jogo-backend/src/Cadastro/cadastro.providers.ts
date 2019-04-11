import { Connection, Repository } from 'typeorm';
import { Jogador } from '../Entidade/Jogador.entity';



export const cadastroProviders = [
  {
    provide: 'JogadorToken',
    useFactory: (connection: Connection) => connection.getRepository(Jogador),
    inject: ['DbToken'],
  },
];