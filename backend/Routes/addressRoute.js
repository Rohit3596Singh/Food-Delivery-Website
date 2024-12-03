const express = require("express");
const Address = require("../model/Address"); // Path to Address schema
const router = express.Router();

// POST API to save a new address
router.post("/addressform", async (req, res) => {

  console.log(req.body)
  const { userId, addressLine1, addressLine2, city, state, zipCode, isDefault } = req.body;

  try {
    // Validate required fields
    if (!userId || !addressLine1 || !city || !state || !zipCode) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided.",
      });
    }

    // Create and save a new address document
    const newAddress = new Address({
      userId,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      isDefault,
    });

    await newAddress.save();

    res.status(201).json({
      success: true,
      message: "Address added successfully!",
      address: newAddress,
    });
  } catch (error) {
    console.error("Error adding address:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add address.",
    });
  }
});

// GET API to fetch user's addresses
// router.get("/addressform", async (req, res) => {
//   const { userId } = req.query;

//   try {
//     if (!userId) {
//       return res.status(400).json({
//         success: false,
//         message: "User ID is required to fetch addresses.",
//       });
//     }

//     // Fetch all addresses for the user
//     const addresses = await Address.find({ userId });

//     if (!addresses.length) {
//       return res.status(404).json({
//         success: false,
//         message: "No addresses found for the user.",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       addresses,
//     });
//   } catch (error) {
//     console.error("Error fetching addresses:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch addresses.",
//     });
//   }
// });

module.exports = router;























// const express = require("express");
// const Address = require("../model/Address"); // Path to your Address schema
// const router = express.Router();

// // // POST API to add a new address
// // router.post("/", async (req, res) => {
// //   const { userId, addressLine1, addressLine2, city, state, zipCode, isDefault } = req.body;

// //   try {
// //     // Create a new address document
// //     const newAddress = new Address({
// //       userId,
// //       addressLine1,
// //       addressLine2,
// //       city,
// //       state,
// //       zipCode,
// //       isDefault,
// //     });

// //     // Save it to the database
// //     await newAddress.save();

// //     res.status(201).json({
// //       success: true,
// //       message: "Address added successfully!",
// //       address: newAddress,
// //     });
// //   } catch (error) {
// //     console.error("Error adding address:", error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to add address",
// //     });
// //   }
// // });

// // GET API to fetch the user's address (for now, returning default address)
// router.post("/addressform", async (req, res) => {
//     console.log(req.body);
//     try {
//       // Assuming the userId is being passed in request headers or as a query param
//       const userId = req.body.userId || "someUserId"; // Fetch from request if needed
//       const address = req.body;
//       // Find the default address for the user (or all addresses)
//       // const address = await Address.findOne({ userId, isDefault: true });

//       // const address = await user;
  
//       if (!address) {
//         return res.status(404).json({
//           success: false,
//           message: "No default address found.",
//         });
//       }
  
//       res.status(200).json({
//         success: true,
//         defaultAddress: address,
//       });
//     } catch (error) {
//       console.error("Error fetching address:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to fetch address",
//       });
//     }
//   });
  

// module.exports = router;
