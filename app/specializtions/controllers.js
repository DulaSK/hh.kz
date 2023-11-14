const Specialization = require('./models/Specialization')
const SpecializationType = require('./models/SpecializationType')

const getSpecializtions = async (req , res) => {
    const specializationType = await SpecializationType.findAll({ 
        include:{
            model: Specialization,
            as: 'specializations'
        }
    })
    res.status(200).send(specializationType)
}

module.exports = {
    getSpecializtions
}