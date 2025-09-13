const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('map_db', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

// Testar a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados PostgreSQL foi bem-sucedida!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco:', err);
  });

module.exports = sequelize;