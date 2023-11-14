const express = require('express');
const logger = require('morgan')
const  passport = require('passport')

// const multer = require('multer')
// const upload = multer()

const app = express();

app.use(logger('dev'))
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.use(passport.initialize())

require('./app/auth/passport')

// app.use(upload.any())

app.use(require('./app/auth/routes'))
app.use(require('./app/region/routes'))
app.use(require('./app/skills/router'))
app.use(require('./app/employment-type/routes'))
app.use(require('./app/languages/routes'))
app.use(require('./app/resume/routes'))
app.use(require('./app/specializtions/routes'))
app.use(require('./app/vacancy/routes'))
app.use(require('./app/applies/routes'))


// app.get('/', (req, res) => {
//     res.send("ok")    
// })

// app.post('/api', (req, res) => {
//     console.log('req.body = ' , req.body) //post,put
//     console.log('req.headers = ', req.headers) //all method
//     console.log('req.query = ' , req.query)
//     console.log('req.params = ' , req.params)
//     res.status(200).send("POST /api works")
// })

app.listen(3000, () => {
    console.log('listening on port 3000');
})