const mongoose = require('mongoose')
//Promises do mongoose descontinuada, dessa forma utilizamos a promise global
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useNewUrlParser: true,
    useFindAndModify: false, 
    useCreateIndex: true,
    useUnifiedTopology: true,    
})