import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";

var call = process.argv[2];

if (call == "heads" || call == "tails") {
    console.log(flipACoin(call));
}
else {
    console.log("Error: no input. \nUsage: node guess-flip --call=[heads|tails]");
}