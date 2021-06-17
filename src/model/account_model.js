const mongoose = require("mongoose");

const accSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
    role: String,
    timestamp: Date
});

const accMdl = mongoose.model("account", accSchema);

module.exports = accMdl;