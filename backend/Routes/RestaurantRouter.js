const express = require("express")
const Restaurant = require("../model/RestaurantList");
const router = express.Router()

// app.use('/api', RestaurantRouter);
router.get("/restaurants",async(req,res)=>{
    console.log("GET /restaurants called");
    try{
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    }
    catch(error){
        console.error("Error fetching restaurants:", error);
        res.status(500).json({
            message: "Error Fetching Restaurant",error
        })
    }
})

router.get("/restaurants/:id", async(req,res)=>{
    const {id} = req.params;
    try{
        const restaurant = await Restaurant.findById(id);
        if(!restaurant){
            return res.status(400).json({message:"Restaurant not find"});
        }
        res.json(restaurant)
    }
    catch(error){
        res.status(500).json({ message: "Error fetching restaurant details", error });
    }
})


module.exports = router;