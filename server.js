const express = require('express')

const app = express()

require('./src/config/database-conf')

var port = 3000


app.use('/api', require('./src/config/routes'))


app.listen(port, () => console.log(`Server Started. Port: ${port}`))