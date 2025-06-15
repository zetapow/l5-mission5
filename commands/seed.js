const { getDatabaseClient, getDatabase } = require("../db");
const fs = require("fs");
const path = require("path");

module.exports = async function seed() {
   const client = await getDatabaseClient();
   try {
      const db = getDatabase(client);
      const data = JSON.parse(
         fs.readFileSync(
            path.join(__dirname, "../data/dummy-data.json"),
            "utf8"
         )
      );
      const collection = db.collection("auctions");
      await collection.insertMany(data);
      console.log("Data seeded successfully!");
   } finally {
      // Ensure the client is closed in case of an error
      await client.close();
   }
};
