(function () {
    var responseHandler = require('../helpers/responseHandler');
    var commonService = require('../services/commonService');
    var config = require('../config/config.json');
    var transformer = require('../helpers/transformer');
    var transactionHandler = require('../helpers/transactionHandler');
    var registrationService = require('../services/registrationService');
    var mailer = require('../services/mailService');
    
    module.exports.register = function (req, res) {
        try{
            commonService.beginTransaction(function (err) {
                if(err){
                    responseHandler.error(res,err);
                }
                else{
                    if(req.body){
                        commonService.generateToken(8,config.referralPrefix,function (err, code) {
                            if(err){
                                transactionHandler.rollbackHandler(res,err);
                            }
                            else{
                                transformer.constructRegisterData(req.body,code,function(err,param){
                                    if(err){
                                        transactionHandler.rollbackHandler(res,err);
                                    }
                                    else{
                                        registrationService.register(param,function(err,data){
                                            if(err){
                                                transactionHandler.rollbackHandler(res,err);
                                            }
                                            else{
                                                transformer.constructMail(param.e_id,param.referralcode,param.email,function (err, mail) {
                                                    if(err){
                                                        transactionHandler.rollbackHandler(res,err);
                                                    }
                                                    else{
                                                        mailer.mailer(mail,function (err, data) {
                                                            if(err){
                                                                transactionHandler.rollbackHandler(res,err);
                                                            }
                                                            else{
                                                                transactionHandler.commitHandler(res,param);
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                    else {
                        responseHandler.error(res,{message:"empty body",statusCode:333});
                    }
                }
            });
        }
        catch(err){
            responseHandler.error(res,err);
        }
    }
    
})();