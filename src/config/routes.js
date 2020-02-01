const express = require('express')
const bodyParser = require('body-parser')


const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

require('./routes/productRoutes')(router)


module.exports = router