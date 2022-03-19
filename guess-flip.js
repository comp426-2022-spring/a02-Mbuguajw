import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

var args = minimist((process.argv.slice(2)));
var command = args.call;

if (command == 'heads' || command == 'tails') {
    console.log(flipACoin(call));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}