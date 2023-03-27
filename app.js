const express= require("express")
const app = express()
require("dotenv").config()
require("./config/dbConnector")

const userRoute = require("./routes/route")

const PORT = process.env.port
app.use(express.json())

app.use("/",userRoute)

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT} `)
})
