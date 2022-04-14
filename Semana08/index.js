const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://suyanloriewldo:df2cba65014f84a238dcca8cf78df3f7006319fc4eddef7a0b76997c8be67350@ec2-3-217-251-77.compute-1.amazonaws.com:5432/d19id9d1a5kfad', {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// })();



(async () => {
  await sequelize.sync();
  const vini = await User.create({
    username: 'vini',
    email: 'vinicius.machado@riogrande.ifrs.edu.br',
    password: '1234',
    birthday: new Date(1991, 6, 14)
  });
  console.log(vini.toJSON());
})();
