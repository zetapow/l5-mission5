#!/usr/bin/env node

const [, , cmd] = process.argv;

if (cmd === "seed") {
   require("../src/commands/seed")();
} else if (cmd === "delete") {
   require("../src/commands/delete")();
} else {
   console.log("Usage: node bin/index.js [seed|delete]");
}
