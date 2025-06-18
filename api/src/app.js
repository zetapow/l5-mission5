import express from "express";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
import dotenv from "dotenv";

import itemRoutes from "./routes/items.js";

const app = express();

// environment variables
dotenv.config();

// set port and URI for MongoDB
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
   process.env.MONGODB_URI || "mongodb://localhost:27017/auctionDatabase";

app.use(express.json());

mongoose
   .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log("Connected to MongoDB");
   })
   .catch((err) => {
      console.error("MongoDB connection error:", err);
   });

app.use("/api/items", itemRoutes);

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
