const nodemailer = require('nodemailer');

// Настройки для отправки через Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dulatsagadat@gmail.com', // Замените на вашу почту Gmail
    pass: 'zhlorgeeporwelno', // Замените на ваш пароль Gmail или используйте приложение-пароль
  },
  // Опции для временного отключения проверки сертификата
  tls: {
    rejectUnauthorized: false
  }
});

// Функция для отправки email сообщения
function sendEmail(to, subject, text) {
    const mailOptions = {
      from: 'dulatsagadat@gmail.com', // Отправитель (ваша почта Gmail)
      to: to, // Получатель
      subject: subject, // Тема письма
      text: text, // Текст письма
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
        }else{
            console.log('Email sent:' + info.response)
        }
    });
}

module.exports = sendEmail;