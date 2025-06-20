import { getDatabaseClient, getDatabase } from "../helper/getDatabase.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function seed() {
   const client = await getDatabaseClient();
   try {
      const db = getDatabase(client);
      const data = JSON.parse(
         fs.readFileSync(
            path.join(__dirname, "../data/dummy-data.json"),
            "utf8"
         )
      );
      const collection = db.collection("items");
      await collection.insertMany(data);
      console.log(chalk.green("Data seeded successfully!"));
   } finally {
      // Ensure the client is closed in case of an error
      await client.close();
   }
}

export default seed;
