const Skill = require('./Skill')
const { Op} = require('sequelize')

const getAllSkills = async (req, res) => {
    const skills = await Skill.findAll()

    res.status(200).send(skills)
}

const getSkillByKey = async (req, res) => {
    const skills = await Skill.findAll({where: {
        name: {
            [Op.ilike]: `%${req.params.key}%`
        }
     }})

    res.status(200).send(skills)
}

module.exports = {
    getAllSkills,
    getSkillByKey
}