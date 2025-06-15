const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const databaseName = process.env.MONGODB_DB || "auctionDatabase";

module.exports.getDatabaseClient = async function () {
   const client = new MongoClient(uri);
   await client.connect();
   return client;
};

module.exports.getDatabase = function (client) {
   return client.db(databaseName);
};
