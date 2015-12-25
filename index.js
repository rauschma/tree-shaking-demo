'use strict';

/**
 * import source code
 * > browserify
 * > webpack
 */
import { format } from './lib/silly-datetime.es2015.js';

/**
 * import npm package
 * > browserify with ES5
 * > rollup
 */
// import { format } from 'silly-datetime';

let getStr = () => {
    return format(new Date());
};

let formatedDate = getStr();
console.log(`now is ${formatedDate}`);