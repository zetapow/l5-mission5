#!/usr/bin/env node

const { program } = require("commander");
const seed = require("./commands/seed");
const deleteAll = require("./commands/delete");

program
   .command("seed")
   .description("Seed the database with dummy data")
   .action(async () => {
      await seed();
   });

program
   .command("delete")
   .description("Delete all auction data")
   .action(async () => {
      await deleteAll();
   });

// if (cmd === "seed") {
//    require("./commands/seed")();
// } else if (cmd === "delete") {
//    require("./commands/delete")();
// } else {
//    console.log("Usage: node index.js [seed|delete]");
// }

program.parse(process.argv);
