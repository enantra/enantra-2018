(function () {
    var express = require('express');
    var router = express.Router();
    var registrationController = require('../controllers/registrationController');

    router.get('/register',function (req, res) {
        registrationController.register(req,res);
    });

    module.exports = router;
})();