const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Coordenada = sequelize.define('Coordenada', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: false
  }
});

module.exports = Coordenada;
