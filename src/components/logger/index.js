//Requires
const modulename = 'Logger';
const { dir, log, logOk, logWarn, logError } = require('../../extras/console')(modulename);
const AdminLogger = require('./handlers/admin');
// const FXServerLogger = require('./handlers/fxserver');

// NOTE: to turn this into an universal class outside txAdmin() instance
// when a txAdmin profile starts, it does universal.logger.start(profilename)
// and then the logger can be called as universal.logger.profiles[profilename].fxserver
module.exports = class Logger {
    constructor(config) {
        //FIXME: move these to class fields as soon as eslint v8 drops
        this.admin = null;
        this.fxserver = null;
        this.server = null;
        this.console = null;
        this.config = null;

        //Config stuff
        this.config = config;
        this.basePath = `${globals.info.serverProfilePath}/logs/`;

        //Starting handlers
        this.admin = new AdminLogger(this.basePath, this.config.admin);
        // this.fxserver = new FXServerLogger(this.basePath, this.config.fxserver);
        // setInterval(() => {
        //     this.fxserver.write('stdout', 'lorem ipsum dolor sit amet\n');
        // }, 50);
        // this.server = null;
        // this.console = null;
    }


    //================================================================
    getUsageStats() {
        //{loggerName: statsString}
        throw new Error('Not yet implemented.');
    }


    //================================================================
    getStorageSize() {
        // {total: xxx, loggers: [{loggerName: sizeSum}]}
        throw new Error('Not yet implemented.');
    }
}; //Fim Logger()

