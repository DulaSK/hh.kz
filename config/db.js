const { Sequelize } = require('sequelize');
const dbConf = require('./config')

// Замените 'your_database_name', 'your_username', 'your_password' и 'your_host' на реальные значения
const sequelize = new Sequelize(dbConf.development.database , dbConf.development.username , dbConf.development.password, {
    host: dbConf.development.host,
    dialect: dbConf.development.dialect,
});

// Проверка подключения к базе данных
sequelize.authenticate().then(() => {
        console.log('Подключение к базе данных успешно!');
}).catch( (error)=> {
    console.error('Ошибка подключения к базе данных:', error);
  })


module.exports = sequelize;