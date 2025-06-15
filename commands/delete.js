const { getDatabase, getDatabaseClient } = require("../db");

module.exports = async function deleteAll() {
   const client = await getDatabaseClient();

   try {
      const db = getDatabase(client);

      const collection = client.db().collection("auctions");
      await collection.deleteMany({});
      console.log("Deleted all auction data!");
   } finally {
      // Ensure the client is closed in case of an error
      await client.close();
   }
};
