const mongoose  = require ("mongoose")
const Schema = mongoose.Schema()

app.use('/uploads', express.static('uploads'));
// app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

const Restaurants = new Schema(
    {
        "id":"1",
        "name":"McDonald's",
        "description": "fast food restraunt",
        "image":"../uploads/MacD.png"
    },
    {
        "id":"2",
        "name":"Papa Johns",
        "description": "fast food restraunt",
        "image":"../uploads/papaJohns.png"
    },
    {
        "id":"3",
        "name":"KFC",
        "description": "fast food restraunt",
        "image":"../uploads/KFC.png"
    },
    
    {
        "id":"4",
        "name":"Texas",
        "description": "fast food restraunt",
        "image":"../uploads/Texas.png"
    },
    {
        "id":"5",
        "name":"Burger King",
        "description": "fast food restraunt",
        "image":"../uploads/BurgerKing.png"
    },
    {
        "id":"6",
        "name":"Shaurma",
        "description": "fast food restraunt",
        "image":"../uploads/shaurma.png"
    },
)

const RestaurantListModel = mongoose.model("restaurant",Restaurants)
module.exports = RestaurantListModel;