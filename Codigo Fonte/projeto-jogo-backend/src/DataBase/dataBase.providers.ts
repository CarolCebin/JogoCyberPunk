import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbToken',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'den1.mysql6.gear.host',
      port: 3306,
      username: 'jogo',
      password: 'teste=D',
      database: 'jogo',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];