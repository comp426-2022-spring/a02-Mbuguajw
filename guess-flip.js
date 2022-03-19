import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";

var call = process.argv[2];

if ((call == null && call != "heads")||(call == null && call != "tails")||( call != "heads" && call != "tails")) {
    console.log("Error: no input. \nUsage: node guess-flip --call=[heads|tails]");
}
else if (call == "heads|tails") {
    console.log(flipACoin("heads"));
}
else {
    console.log(flipACoin(call));
}