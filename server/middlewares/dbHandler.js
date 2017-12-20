(function () {

    var responseHandler = require('../helpers/responseHandler');

    module.exports = function (connection) {
        var dbHandler = function (req, res, next) {
            try{
                if(connection.state === "authenticated"){
                    console.log('Working');
                    return next();
                }
                else{
                    connection.connect(function (err) {
                        if(err){
                            return dbHandler.failed(res,"Error in connection");
                        }
                        else{
                            return next();
                        }
                    });

                    process.on('SIGINT',function () {
                        connection.end(function () {
                            console.log("App terminated and DB closed");
                            process.exit(0);
                        });
                    });

                    process.on('SIGTERM',function () {
                        connection.end(function () {
                            console.log("App terminated and DB closed");
                            process.exit(0);
                        });
                    });
                }
            }
            catch (err){
                return dbHandler.failed(res,"Error in connection")
            }

        };
        dbHandler.failed = function () {
            dbHandler.failed=function(res,mes){
                var err = new Error(mes);
                err.statusCode = 401;
                responseHandler.error(res,err);
            };
        };
        return dbHandler;
    };

})();