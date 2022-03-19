import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";

//const process = require('process');
var number = process.argv[2];
var trial = 0;

if (number == null) {
    trial = coinFlips(1);
}
else {
    trial = coinFlips(number);
}

console.log(trial);
console.log(countFlips(trial));
