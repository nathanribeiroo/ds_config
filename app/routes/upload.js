module.exports = function(application){
    application.get('/upload', function(req, res){
        application.app.controllers.upload.index(application, req, res);
    });
}
