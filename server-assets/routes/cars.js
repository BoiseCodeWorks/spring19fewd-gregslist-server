let router = require('express').Router()
let Cars = require('../models/car')

router.get('/', (req, res, next)=>{
  Cars.find({})
  .then(cars =>{
    res.send({message:"you've got cars!", data: cars})
  })
  .catch(err=>{
    res.status(400).send(err)
  })
})

module.exports = router