// username :- srohit2806
// password of cluster:-  FZNFtnRkqu5qGQC6
const express = require("express")
const PORT = process.env.PORT || 3000
const app = express()
const env = require("dotenv")
const path = require("path");
env.config()
const bodyParser = require("body-parser")
const cors = require("cors")

require('./model/db')
const AuthRouter = require("./Routes/AuthRouter")
const RestaurantRouter  = require("./Routes/RestaurantRouter")
const AddressRouter = require("./Routes/addressRoute")
const ProfileRoute = require("./Routes/ProfileRoute")
const AddCardRoute = require("./Routes/AddCardRoute")
const GetCardRoute = require("./Routes/GetCardRoute")

// app.use(cors());
// app.use("/api", RestaurantRouter);
// require('./script/importData')

app.use(cors({ origin: "http://localhost:5173", credentials: true }));



// app.use(express.static("uploads")); // Ensure images are in the 'uploads' folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// app.use(express.json()); 

app.use(bodyParser.json())
// app.use(cors({
//     origin: '*',  // Allows all domains
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
//   }));


// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));





app.use("/auth",AuthRouter)
app.use("/api",RestaurantRouter)
app.use("/address",AddressRouter);
app.use("/profile",ProfileRoute );
app.use("/bank",AddCardRoute );
app.use("/credential",GetCardRoute)



app.listen(PORT,()=>{
    console.log(`Server is listening at port http://localhost:${PORT}`)
})












// const express = require("express");
// const PORT = process.env.PORT || 3000;
// const app = express();
// const env = require("dotenv");
// env.config();
// const bodyParser = require("body-parser");
// const cors = require("cors");

// // Import your database model and routes
// require('./model/db');
// const AuthRouter = require("./Routes/AuthRouter");
// const RestaurantRouter = require("./Routes/RestaurantRouter");

// // CORS middleware to allow frontend requests from http://localhost:5173
// app.use(cors());

// // Middleware to serve static images from 'uploads' folder
// app.use(express.static("uploads"));

// // Middleware for parsing JSON bodies
// app.use(bodyParser.json());

// // Routes for authentication and restaurant data
// app.use("/auth", AuthRouter);
// app.use("/api", RestaurantRouter);

// // Optional root route if needed
// app.get("/", (req, res) => {
//   res.send("API is working");
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is listening at port http://localhost:${PORT}`);
// });
