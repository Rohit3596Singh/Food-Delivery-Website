const express = require("express");
const router = express.Router();
const UserModel = require("../model/user.schema.js");

// Route to fetch cards
router.get("/get-card", async (req, res) => {
    const { email } = req.query; // Correctly access query parameters
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            res.json({ success: true, cards: user.CardCredentials || [] });
        } else {
            res.status(404).json({ success: false, message: "User not found." });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error.", error });
    }
});

// Route to add a card
router.post("/add-card", async (req, res) => {
    console.log(req.body)
    const { email, card } = req.body; // Access the request body
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            user.CardCredentials.push(card); // Assuming `CardCredentials` is an array
            console.log(user)
            await user.save();
            res.json({ success: true, message: "Card added successfully." });
        } else {
            res.status(404).json({ success: false, message: "User not found." });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error.", error });
    }
});

module.exports = router;
