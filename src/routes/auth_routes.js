const express = require("express");
const router = express.Router();

const crypto = require("crypto");

const jwt = require("jsonwebtoken");
const signkey = "c97966853cd7c4c22b1a396bc862d730";

const accMdl = require("../model/account_model.js");

router
.route("/login")
.post(async (req, res, next) => {
    
    let loginData = req.body;
    let loginStatus;

    try {
        loginData.pss = await crypto.createHash("sha256").update(loginData.pss).digest("base64");
        loginStatus = await accMdl.exists({ username: loginData.usr}) && await accMdl.exists({ password: loginData.pss });
    } catch (error) {
        console.log(error);
        loginStatus = false;
    }

    if(loginStatus){
        jwt.sign({
            usr: loginData.usr,
            role: "admin",
            timestamp: Date.now()
        }, signkey, (err, token) => {
            if(err){
                res.status(500).send({ status: "ERROR", msg: err });
            }else{
                res.send({ status: "OK", token: token });
            }
        });
    }else{
        res.status(404).send({ status: "ERROR", msg: "User not found!"});
    }

});

router
.route("/register")
.post(async (req, res, next) => {

    let reqdata = req.body;

    reqdata.password = await crypto.createHash("sha256").update(reqdata.password).digest("base64");

    try{
        const data = new accMdl(reqdata);
        data.save().then(() => {
            res.send({ status: "OK", msg: "Adding user succeed!"}).status(201);
        });
    } catch (error) {
        res.send({ status: "ERROR", msg: error}).status(500);
    }

});

router
.route("/auth")
.post(async (req, res, next) => {

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