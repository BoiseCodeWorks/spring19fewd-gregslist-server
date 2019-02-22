let mongoose = require('mongoose')
let connectionStr = "" //PUT YOUR CONNECTION STRING FROM MONGO ATLAS HERE
let connection = mongoose.connection

mongoose.connect(connectionStr, {
  useNewUrlParser: true
})

connection.on("error", e =>{
  console.log("DB error:", e )
})

connection.on("open", ()=>{
  console.log("Connected to db!")
})