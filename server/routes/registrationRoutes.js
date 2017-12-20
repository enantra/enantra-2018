(function () {
    var express = require('express');
    var router = express.Router();
    var registrationController = require('../controllers/registrationController');

    router.get('/register',function (req, res) {
        res.send("I am working");
    });

    module.exports = router;
})();