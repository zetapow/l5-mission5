import { getDatabaseClient, getDatabase } from "../helper/getDatabase.js";
// import readline from "readline";

import inquirer from "inquirer";
import chalk from "chalk";

// function ask(question) {
//    const read = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//    });
//    return new Promise((resolve) =>
//       read.question(question, (answer) => {
//          read.close();
//          resolve(answer);
//       })
//    );
// }

export default async function addItem() {
   const responses = await inquirer.prompt([
      {
         name: "title",
         message: "Enter item title:",
      },
      {
         name: "description",
         message: "Enter item description:",
      },
      {
         name: "start_price",
         message: "Enter start price:",
         validate: (input) => !isNaN(input) || "Please enter a valid number",
      },
      {
         name: "reserve_price",
         message: "Enter reserve price:",
         validate: (input) => !isNaN(input) || "Please enter a valid number",
      },
   ]);

   const item = {
      title: responses.title,
      description: responses.description,
      start_price: parseFloat(responses.start_price),
      reserve_price: parseFloat(responses.reserve_price),
   };

   const client = await getDatabaseClient();
   try {
      const db = getDatabase(client);
      await db.collection("items").insertOne(item);
      console.log(chalk.green("Manual item added successfully!"));
   } finally {
      await client.close();
   }
}
