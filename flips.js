import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";

var num = prompt();
const trial = 0;

if (num == null) {
    trial = coinFlips(1);
}
else {
    trial = coinFlips(num);
}

console.log(trial);
console.log(countFlips(trial));
