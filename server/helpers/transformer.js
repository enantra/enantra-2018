(function () {

    var commonService = require('../services/commonService');
    var config = require('../config/config.json');

    module.exports.constructRegisterData = function (body, code, callback) {
        commonService.generateToken(6,config.userPrefix,function (err, token) {
            if(err){
                callback(err,token);
            }
            else{
                var postData = {};
                postData.name = body.name;
                postData.email = body.email;
                postData.number = body.number;
                postData.dob = body.dob;
                postData.college = body.college;
                postData.year = body.year;
                postData.accomodation = body.accomodation;
                postData.referralcode = code;
                postData.e_id = token;
                callback(null,postData);
            }
        });
    };

    module.exports.constructMail = function (e_id, token,mail,callback) {
        var mail = {
            from : "Enantra 2k18",
            to : mail,
            subject : "User registration regarding",
            text : "Enantra id:"+e_id+'\n'+"Referral code:"+token
        };
        callback(null,mail);
    };

})();