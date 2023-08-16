import {add, multiply} from './one.js'; //named import

import one from './one.js' // default import

console.log("ïn two.js");


export function process(){

    add(2,3);
    one.add(4,5);
    console.log("in process of two.js");
}