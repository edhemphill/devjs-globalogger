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

#### Prerequisites

Basically nothing. Includes underscore.js - otherwise will use the `global.log` if its there. So on `devicejs run` it will use the default devicejs logger. When use with `Runner`, it will use the grease log system. If there is no `global.log` it will **not** create a `global.log` but will return a log object which will log to the console in a reasonable manner.

