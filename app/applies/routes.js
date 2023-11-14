const express = require('express')
const router = express.Router()
const passport = require('passport')
const {isEmployee, isManager} = require('../auth/middlewares')
const {createApply, getEmpoyeeApplies, deleteApply, acceptEmployee, declineEmploee, getVacancyApplies} = require('./controllers')
const {validateApply, isAuthorOfApply, isApplyExists} = require('./middlwares')
const {isAuthorOfVacancy, }= require('../vacancy/middlewares')

router.post('/api/applies',passport.authenticate('jwt', {session:false}), isEmployee, validateApply, createApply)
router.get('/api/applies/employee', passport.authenticate('jwt',{session:false}), isEmployee, getEmpoyeeApplies)
router.delete('/api/applies/:id', passport.authenticate('jwt',{session:false}), isEmployee, isAuthorOfApply, deleteApply)

router.put('/api/applies/accept/employee', passport.authenticate('jwt',{session:false}), isManager, isApplyExists, isAuthorOfVacancy, acceptEmployee)
router.put('/api/applies/decline/employee', passport.authenticate('jwt',{session:false}), isManager, isApplyExists, isAuthorOfVacancy, declineEmploee)
router.get('/api/applies/vacncy/:id', passport.authenticate('jwt',{session:false}), isManager, isManager, isAuthorOfVacancy, getVacancyApplies)

module.exports = router