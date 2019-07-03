import { Connection, Repository } from 'typeorm';
import { Aventura } from '../Entidade/Aventura.entity';
import { Jogador } from '../Entidade/Jogador.entity';


export const realizaAventuraProvider = [
  {
    provide: 'AventuraToken',
    useFactory: (connection: Connection) => connection.getRepository(Aventura),
    inject: ['DbToken'],
    
  },
];