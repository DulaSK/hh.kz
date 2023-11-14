const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); // Путь к вашему файлу с подключением Sequelize

const Role = sequelize.define('Role', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,   
  },
},{
  timestamps:false, // Отключение автоматических полей createdAt и updateAt
});

module.exports = Role;