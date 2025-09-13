const express = require('express');

const sequelize = require('./src/config/database');
const indexRouter = require('./src/routes/index'); // só um require
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Usa o router
app.use('/', indexRouter);





sequelize.sync().then(() => {
  console.log('Banco sincronizado');
  app.listen(3000, () => console.log('Servidor rodando em http://0.0.0.0:3000'));
});
