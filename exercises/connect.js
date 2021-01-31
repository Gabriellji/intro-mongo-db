const mongoose = require('mongoose')
mongoose.Promise = global.Promise


const connect = (url) => mongoose.connect(url, {
    useNewUrlParser: true,
    poolSize: 10, 
    bufferMaxEntries: 0, 
    reconnectTries: 5000,
    useUnifiedTopology: true
  })
  

module.exports = connect

