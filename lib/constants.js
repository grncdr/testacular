var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync(__dirname + '/../package.json').toString());

exports.VERSION = pkg.version;

exports.DEFAULT_PORT = 9876;
exports.DEFAULT_RUNNER_PORT = 9100;

// log levels
exports.LOG_DISABLE = -1;
exports.LOG_ERROR   =  1;
exports.LOG_WARN    =  2;
exports.LOG_INFO    =  3;
exports.LOG_DEBUG   =  4;


// adapters
var ADAPTER_DIR = __dirname + '/../adapter';
exports.JASMINE = ADAPTER_DIR + '/lib/jasmine.js';
exports.JASMINE_ADAPTER = ADAPTER_DIR + '/jasmine.js';
exports.MOCHA = ADAPTER_DIR + '/lib/mocha.js';
exports.MOCHA_ADAPTER = ADAPTER_DIR + '/mocha.js';
exports.ANGULAR_SCENARIO = ADAPTER_DIR + '/lib/angular-scenario.js';
exports.ANGULAR_SCENARIO_ADAPTER = ADAPTER_DIR + '/angular-scenario.js';

exports.EXIT_CODE_0 = '\x1FEXIT0';
