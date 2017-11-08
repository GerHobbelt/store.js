var engine  = require('../src/store-engine');
var plugins = [
        require('../plugins/json2'),
        require('../plugins/expire'),
        //require('../plugins/compression'),  charCodeAt bug on ie 11
        require('../plugins/events'),
        require('../plugins/observe'),
        require('../plugins/update')
    ];

module.exports = {
    storage : engine.createStore(require('../storages/localStorage'), plugins),
    cookie  : engine.createStore(require('../storages/cookieStorage'), plugins),
    session : engine.createStore(require('../storages/sessionStorage'), plugins),
    memory  : engine.createStore(require('../storages/memoryStorage'), plugins)
};
