var logFuncs = require('../index.js');
var log = require('../index.js')();

var stuff = {
	morestuff: 'stuff'
};

log.debug("Debug here",stuff);
log.warn("A warning");
function myfunc() {
	log.trace("This is a trace",stuff);
	// ot like this
	log.debug("Here: "+logFuncs.traceBack());
}
myfunc();

function myOtherFunc() {
	var stk = logFuncs.getStack(2);
	log.debug("Yo the stack:",stk);	
}

myOtherFunc();