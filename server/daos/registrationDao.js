(function () {
    var connection = require('../config/dbConfig');

    module.exports.register = function (param, callback) {
        try{
            var query = "INSERT into users set ?";
            connection.query(query,param,function (err, data) {
                callback(err,data);
            });
        }
        catch(err){
            callback(err);
        }
    }

})();