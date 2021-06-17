const express = require("express");
const router = express.Router();

const { EncryptJWT } = require("jose/jwt/encrypt");

router
.route("/login")
.post((req, res, next) => {

});

router
.route("/register")
.post((req, res, next) => {

});

router
.route("/auth")
.get((req, res, next) => {

});

module.exports = router;