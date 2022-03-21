import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";

import minimist from "minimist"
const args = minimist(process.argv.slice(2))
args['call']
const command = args.call

if (command == "heads" || command == "tails") {
    console.log(flipACoin(command));
}
else if (command == null) {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}
else {
    console.log("Error: bad input.\nUsage: node guess-flip --call=[heads|tails]");
}