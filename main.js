var app = require('./config/server');

var server = app.listen(app.config.ini.port, function(){
    console.log('[OK] servidor online');
});