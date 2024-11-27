// username :- srohit2806
// password of cluster:-  FZNFtnRkqu5qGQC6
const express = require("express")
const PORT = process.env.PORT || 3000
const app = express()
const env = require("dotenv")
env.config()
const bodyParser = require("body-parser")
const cors = require("cors")

require('./model/db')
const AuthRouter = require("./Routes/AuthRouter")
const RestaurantRouter  = require("./Routes/RestaurantRouter")
app.use("/api", RestaurantRouter);
// require('./script/importData')


// app.use(express.json()); 

app.use(bodyParser.json())
app.use(cors())


app.use("/auth",AuthRouter)
app.use("/api",RestaurantRouter)

app.listen(PORT,()=>{
    console.log(`Server is listening at port http://localhost:${PORT}`)
})
