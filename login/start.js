const express = require('express');
const login = require("./login.js");

const router = express.Router();

console.log("HELLO BRO WHAT");



router.post('/loginNew', function(req, res) { //Is called when data is sent to /loginNew via POST
    console.log("check 1");
    var password = req.body.password;
    var username = req.body.username;

    console.log("checking login");
    console.log(password)
    console.log(username)

    console.log(login.getPassword(username, function(result) {
        if (password == result) {
            console.log("Logged in.");
            res.redirect("/");

        }
    }));




});

router.post('success', function(req, res) {

});
module.exports = router;