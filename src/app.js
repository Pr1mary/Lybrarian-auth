require("dotenv").config();

const express = require("express");
const app = express();
const port = 8080 || process.env.PORT;

const authroutes = require("./routes/authroutes.js");

app.use(authroutes);

app.listen(port, () => {
    console.log("Server started at port: " + port);
})