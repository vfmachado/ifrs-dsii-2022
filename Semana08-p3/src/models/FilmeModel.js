const { sequelize } = require('./../config/connection-db');
const { Model, DataTypes } = require('sequelize');

class FilmeModel extends Model {}
FilmeModel.init({
  nome: DataTypes.STRING,
  sinopse: DataTypes.STRING,
  genero: DataTypes.STRING,
  lancamento: {
      field: 'data_lancamento',
      type: DataTypes.DATE
  }
}, { sequelize, modelName: 'filmes' });

(async () => {
    await sequelize.sync();
})();

module.exports = { FilmeModel };
