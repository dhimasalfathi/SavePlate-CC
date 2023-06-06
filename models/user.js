const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    username : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true,
        default:
          "https://storage.googleapis.com/profile_user/default%20image.jpg",
    },

}, {timestamps : true});

module.exports = mongoose.model("User", UserSchema);