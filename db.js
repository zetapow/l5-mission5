import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const databaseName = process.env.MONGODB_DB || "auctionDatabase";

async function getDatabaseClient() {
   const client = new MongoClient(uri);
   await client.connect();
   return client;
}

function getDatabase(client) {
   return client.db(databaseName);
}

export { getDatabaseClient, getDatabase };
