// // const mongoose  = require ("mongoose")
// // const { applyDefaults } = require("./user.schema")
// // const Schema = mongoose.Schema;

// // // app.use('/uploads', express.static('uploads'));
// // // app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// // const DishSchema = new Schema([{
// //     name: {
// //       type: String,
// //       required: true,
// //     },
// //     price: {
// //       type: Number,
// //       required: true,
// //     },
// //   }])


// // const RestaurantSchema = new Schema([{
// //     name:{
// //         type:String,
// //         required:true,
// //     },
// //     imageUrl:{
// //         type:String,
// //     },
// //     description:{
// //         type:String,
// //         required:true,
// //     },
// //     dishes:[DishSchema]
// // }])

// // const RestaurantModel = mongoose.model("restaurant",RestaurantSchema)
// // module.exports = RestaurantModel;






// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


// // app.use(express.static("uploads")); // Ensure images are in the 'uploads' folder

// // Define the dish schema
// const DishSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
// });

// // Define the restaurant schema
// const RestaurantSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   dishes: [DishSchema], // Array of dishes
// });

// const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
// module.exports = RestaurantModel;
























const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the dish schema
const DishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Define the restaurant schema
const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String, // Path to the image
    // required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dishes: [DishSchema], // Array of dishes
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;


