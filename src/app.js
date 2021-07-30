require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://"+process.env.DB_URI+":"+process.env.DB_PORT+"/"+process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.API_PORT || 8080;

const authroutes = require("./routes/auth_routes.js");

app.use(bodyparser.json());
app.use(authroutes);

app.listen(port, () => {
    console.log("Server started at port: " + port);
})