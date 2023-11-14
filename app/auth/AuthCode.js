const {  DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Путь к вашему файлу с подключением Sequelize

const AuthCode = sequelize.define('AuthCode', {

    email: {
        type: DataTypes.STRING,
        allowNull: false,  
  },
    code: {
        type: DataTypes.STRING,
        allowNull: false,

},
    valid_till: {
        type: DataTypes.DATE,
        allowNull: false,

},
},{
    timestamps:false, // Отключение автоматических полей createdAt и updateAt
  });

module.exports = AuthCode;