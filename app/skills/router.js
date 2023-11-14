const express = require('express')
const router = express.Router()
const {getAllSkills, getSkillByKey} = require('./controllers')

router.get('/api/skills', getAllSkills)
router.get('/api/skills/:key', getSkillByKey)



module.exports = router