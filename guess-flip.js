import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";

const command = process.argv[2];
if (command == "head" || command == "tails") {
    console.log(flipACoin(command));
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}