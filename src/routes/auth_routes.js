const express = require("express");
const router = express.Router();

// const { Sign, default: SignJWT } = require("jose/jwt/sign");
const signkey = "c97966853cd7c4c22b1a396bc862d730";

const jwt = require("jsonwebtoken");

router
.route("/login")
.post((req, res, next) => {
    
    const loginData = req.body;
    
    // const jwt = new SignJWT(loginData)
    // .setProtectedHeader({ alg: "HS256"})
    // .setIssuedAt()
    // .setIssuer("server")
    // .setAudience("client")
    // .setExpirationTime("2h")
    // .sign(signString);

    jwt.sign(loginData, signkey, (err, token) => {
        if(err){
            res.status(500).send({ status: "ERROR", msg: err });
        }else{
            res.send({ status: "OK", token: token });
        }
    });

});

router
.route("/register")
.post((req, res, next) => {

});

router
.route("/auth")
.get((req, res, next) => {

    const token = req.body.token;

    jwt.verify(token, signkey, (err, decoded) => {
        if(err){
            res.status(500).send({ status: "ERROR", token: err });
        }else{
            res.send({ status: "OK", token: token });
        }
    });

});

module.exports = router;