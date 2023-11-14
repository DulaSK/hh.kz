const Role = require('./Role')
const User = require('./User')


const isEmployee = async (req, res, next) => {
    if(req.user){
        const role = await Role.findByPk(req.user.roleId)
        if(role.name === 'employee') next();
        else res.status(403).send({message: 'Access deinied'})

    }else res.status(403).send({message: 'Unauthorized'})
}

const isManager = async (req, res, next) =>{
    if(req.user){
        const role = await Role.findByPk(req.user.roleId)
        if(role.name === 'manager') next();
        else res.status(403).send({message: 'Access deinied'})

    }else res.status(403).send({message: 'Unauthorized'})
}

const validateSignUp = async (req, res, next) =>{
    let errors = {}

    if(!req.body.email || req.body.email.lenght === 0){
        errors.email = 'Поле Email обязательно'
    }
    if(!req.body.full_name || req.body.full_name.lenght === 0){
        errors.full_name = 'Поле full_name обязательно'
    }
    if(!req.body.company_name || req.body.company_name.lenght === 0){
        errors.company_name = 'Поле company_name обязательно'        
    }
    if(!req.body.password || req.body.password.lenght === 0){
        errors.password = 'Поле password обязательно'
    }
    if(!req.body.password2 || req.body.password2.lenght === 0){
        errors.password2 = 'Поле password 2 обязательно'
    }
    if(req.body.password !== req.body.password2){
        errors.password2 = 'Пароли не совпадают'
        console.log( req.body.password2)
    }
    const user = await User.findOne({ 
        where: { 
            email: req.body.email
        }
    })

    if(user){
        errors.email = 'Пользаватель с таким email уже зарегитрирован'
    }

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

module.exports = {
    isEmployee,
    isManager,
    validateSignUp
}