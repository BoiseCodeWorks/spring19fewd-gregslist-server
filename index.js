let express = require('express')
let bp = require('body-parser')
let server = express()
let PORT = 3000
require('./server-assets/db/db-config') // DONT FORGET TO ADD YOUR CONNECTION STRING IN HERE

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

let carRoutes = require('./server-assets/routes/cars')
server.use('/api/cars', carRoutes)


server.listen(PORT, ()=> console.log(`server is a listenin on:${PORT}`))