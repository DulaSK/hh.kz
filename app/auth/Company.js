const {  DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Путь к вашему файлу с подключением Sequelize

const Company = sequelize.define('Company', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,   

  },
    description: {
        type: DataTypes.STRING,
        allowNull: false,

},
    logo: {
        type: DataTypes.STRING,
        allowNull: false,

},
    address: {
        type: DataTypes.STRING,
        allowNull: false,
},
},{
    timestamps:false, // Отключение автоматических полей createdAt и updateAt
  });

module.exports = Company;