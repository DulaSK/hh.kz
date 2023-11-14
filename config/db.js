const { Sequelize } = require('sequelize');
const dbConf = require('./config')
let sequelize 

if(process.env.NODE_ENV === 'production'){
  console.log('===========')
    // Замените 'your_database_name', 'your_username', 'your_password' и 'your_host' на реальные значения
    sequelize = new Sequelize(dbConf.production.database , dbConf.production.username , dbConf.production.password, {
      host: dbConf.production.host,
      dialect: dbConf.production.dialect,
  });
}else{
  // Замените 'your_database_name', 'your_username', 'your_password' и 'your_host' на реальные значения
   sequelize = new Sequelize(dbConf.development.database , dbConf.development.username , dbConf.development.password, {
      host: dbConf.development.host,
      dialect: dbConf.development.dialect,
  });
}

// Проверка подключения к базе данных
sequelize.authenticate().then(() => {
        console.log('Подключение к базе данных успешно!');
}).catch( (error)=> {
    console.error('Ошибка подключения к базе данных:', error);
  })


module.exports = sequelize;