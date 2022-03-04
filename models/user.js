const mongoose = require('mongoose')    

const UserSchema = new mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true,
    },
    emailOrPhone: {
        type: String,
        required: true,
    },
});


mongoose.model("User", UserSchema)