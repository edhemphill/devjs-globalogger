# devjs-globalogger
This is a global logger shim. Use it instead on `console.X`

#### How to use

```javascript
// Example use
var log = require('devjs-globallogger');

...

log.info("Info...");
log.error("An error",somevar);
log.debug("debug");

```

#### Prerequisites & Behavior

Basically nothing. Includes underscore.js. 

It will use the `global.log` if its there. So on `devicejs run` it will use the default devicejs logger. When used with `Runner`, it will use the grease log system. If there is no `global.log` it will **not** create a `global.log` but will return a log object which will log to the console in a reasonable manner, and be fully compatible with the logging normall available as a global in devicejs.

*Note:* Testing for `global.log` is done at `require` time, not runtime.

#### Levels

The same as in deviceJS.

    log
    error
    warn
    debug
    debug2
    debug3
    user1
    user2
    success
    info
    verbose
    trace
