(function () {
    module.exports = function (app) {
        app.use('/api/web',require('./routes/registrationRoutes'));
    }
})();