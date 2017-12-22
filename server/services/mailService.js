(function () {
    var transport = require('../config/mailconfig');


    module.exports.mailer = function (mail, callback) {
        try{
            transport.sendMail(mail,function (err, data) {
                callback(err);
            });
        }
        catch(err){
            callback(err);
        }
    };


})();