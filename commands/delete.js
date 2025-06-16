import { getDatabase, getDatabaseClient } from "../db.js";

async function deleteAll() {
   const client = await getDatabaseClient();

   try {
      const db = getDatabase(client);

      // const collection = client.db().collection("auctions");
      await db.collection("auctions").deleteMany({});
      console.log("Deleted all auction data!");
   } finally {
      // Ensure the client is closed in case of an error=_
      try {
         await client.close();
      } catch (closeErr) {
         console.error("Error closing database client:", closeErr);
      }
   }
}

export default deleteAll;
