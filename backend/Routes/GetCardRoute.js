const express = require("express");
const router = express.Router();
const UserModel = require("../model/user.schema");

app.get("/profile/get-cards", async (req, res) => {
    const { email } = req.query;
    const user = await UserModel.findOne({ email });
    if (user) {
        res.json({ cards: user.CardCredentials || [] });
    } else {
        res.status(404).send("User not found.");
    }
});


module.exports = router;
