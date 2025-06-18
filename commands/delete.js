import { getDatabase, getDatabaseClient } from "../helper/getDatabase.js";

import inquirer from "inquirer";
import chalk from "chalk";

async function deleteAll() {
   const confirm = await inquirer.prompt([
      {
         type: "confirm",
         name: "confirmDelete",
         message: "Are you sure you want to delete all auction data?",
         default: false,
      },
   ]);

   if (!confirm.confirmDelete) {
      console.log(chalk.yellow("Deletion cancelled."));
      return;
   }

   const client = await getDatabaseClient();

   try {
      const db = getDatabase(client);

      await db.collection("items").deleteMany({});
      console.log(chalk.red("Deleted all auction data!"));
   } finally {
      // Ensure the client is closed in case of an error=_
      try {
         await client.close();
      } catch (closeErr) {
         console.error(chalk.red("Error closing database client:"), closeErr);
      }
   }
}

export default deleteAll;
