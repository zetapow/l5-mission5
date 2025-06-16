#!/usr/bin/env node

import { program } from "commander";
import seed from "./commands/seed.js";
import deleteAll from "./commands/delete.js";

program
   // .command("seed")
   .description("Seed the database with dummy data")
   .version("1.0.0")
   .option("-s, --seed", "seed the database")
   .option("-d, --delete", "delete the database");
// .action(async () => {
//    await seed();
// });

program.action(async (options) => {
   if (options.seed) {
      await seed();
   } else if (options.delete) {
      await deleteAll();
   } else {
      console.log("Usage: node index.js --seed or --delete");
   }
});

program.parse(process.argv);
