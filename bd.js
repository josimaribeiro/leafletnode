const sequelize = require('./src/config/database');

sequelize
  .sync({ alter: true }) // cria/atualiza tabelas conforme os models
  .then(() => console.log('Banco sincronizado com sucesso'))
  .catch(err => console.error('Erro ao sincronizar banco:', err));
