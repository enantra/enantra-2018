(function () {

    var connection = require('../config/dbConfig');

    module.exports.beginTransaction = function (callback) {
        try{
            connection.beginTransaction(function (err) {
                callback(err);
            });
        }
        catch(err){
            callback(err);
        }
    };

    module.exports.rollback = function (callback) {
        try{
            connection.rollback(function (err) {
                callback(err);
            });
        }
        catch (err){
            callback(err);
        }
    };

    module.exports.commit = function (callback) {
        try{
            connection.commit(function (err) {
                callback(err);
            });
        }
        catch (err){
            callback(err);
        }
    };

})();