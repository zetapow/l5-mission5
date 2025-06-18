#!/usr/bin/env node

import { program } from "commander";

// import command functions
import seed from "./commands/seed.js";
import deleteAll from "./commands/delete.js";
import addItem from "./commands/addItem.js";

// setting command line options
program
   .description("options to seed or delete the database")
   .version("1.0.0")
   .option("-s, --seed", "seed the database")
   .option("-a, --add", "add an item to the database")
   .option("-d, --delete", "delete the database");

// action to run for each command
program.action(async (options) => {
   if (options.seed) {
      await seed();
   } else if (options.add) {
      await addItem();
   } else if (options.delete) {
      await deleteAll();
   } else {
      console.log("Usage: node index.js --seed or --delete");
   }
});

// help text if no command selected
if (!process.argv.slice(2).length) {
   program.outputHelp();
   process.exit(1);
}

program.parse(process.argv);
