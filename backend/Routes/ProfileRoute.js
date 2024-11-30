const express = require("express");
const router = express.Router();
const UserModel = require("../model/user.schema");

router.put("/update-profile", async (req, res) => {
    try {
        const { email, gender, country } = req.body;
        const user = await UserModel.findOneAndUpdate(
            { email },
            { Gender: gender, Country: country },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            gender: user.Gender,
            country: user.Country,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
});

module.exports = router;
