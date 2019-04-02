/*
 * Copyright (c) 2018, Arm Limited and affiliates.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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