import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";

var command = process.argv[2];

if (command == 'heads' || command == 'tails') {
    console.log(flipACoin(call));
}
else if (command == null) {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}
else {
    console.log("Error: wrong input.\nUsage: node guess-flip --call=[heads|tails]");
}