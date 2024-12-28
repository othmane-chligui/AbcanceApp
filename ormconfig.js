module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'gestion_absences',
    synchronize: false, 
    logging: true,
    entities: ['./src/entities/*.js'],
    migrations: ['./src/migrations/*.js'],
    cli: {
      migrationsDir: './src/migrations',
    },
  };
  