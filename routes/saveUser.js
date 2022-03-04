const express = require("express");
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")

router.get('/', (req, res) => {
    res.send("Hello");
})

router.post("/saveSignupData", (req, res) => {
    const { name, emailOrPhone, _id } = req.body

    if (!name || !emailOrPhone || !_id) {
        return res.status(422).json({ error: "All field's are required" })
    }

    User.findOne({ emailOrPhone }).then(savedUser => {
        if (savedUser) {
            return res.status(422).json({ error: "User already exists" })
        }

        const user = new User({
            _id,
            name,
            emailOrPhone,
        })
        
        user.save().then(data => {
            res.json({ message: "successfully saved" })
        })

    })
})

module.exports = router;