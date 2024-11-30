const express = require("express");
const router = express.Router();
const UserModel = require("../model/user.schema");

app.post("/profile/add-card", async (req, res) => {
    const { email, card } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        user.CardCredentials.push(card);
        await user.save();
        res.json({ success: true, message: "Card added successfully." });
    } else {
        res.status(404).send("User not found.");
    }
});



module.exports = router;