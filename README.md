# Auction Items Project

## Overview

This project includes:

-  A CLI tool for seeding, adding, and deleting items in the database.
-  A REST API (Node.js, Express, MongoDB/Mongoose) for searching auction items.

---

## Folder Structure

```
l5-mission5/
├── api/                # REST API source code
│   ├── src/
│   │   ├── app.js
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   ├── package.json
│   └── .env
├── commands/           # CLI tool commands
│   ├── addItem.js
│   ├── delete.js
│   └── seed.js
├── data/
│   └── dummy-data.json # Sample data for seeding
├── helper/
│   └── getDatabase.js
├── index.js            # CLI entry point
├── package.json        # CLI tool dependencies
└── .gitignore
```

---

## CLI Tool

The CLI tool lets you seed, add, or delete items in the database from the command line.

### **Install dependencies:**

```sh
npm install
```

### **Usage:**

Run from the root of the project:

-  **Seed the database with sample data:**
   ```sh
   node index.js --seed
   ```
-  **Add an item manually (interactive prompts):**
   ```sh
   node index.js --add
   ```
-  **Delete all items (with confirmation):**
   ```sh
   node index.js --delete
   ```

You can also use the shortcut commands:

-  `-s` for `--seed`
-  `-a` for `--add`
-  `-d` for `--delete`

---

## API Setup & Usage

1. **Install dependencies:**

   ```sh
   cd api
   npm install
   ```

2. **Configure environment variables:**

   -  Create a `.env` file in the `api` folder:
      ```
      MONGODB_URI=mongodb://localhost:27017/auctionDatabase
      PORT=3000
      ```

3. **Start the API server:**

   ```sh
   npm start
   ```

   The server will run on [http://localhost:3000](http://localhost:3000) by default.

4. **Search Items (Example):**
   ```
   GET http://localhost:3000/api/items?title=console&start_price=100
   ```
   -  Query parameters: `title`, `description`, `start_price`, `reserve_price`

---

## Notes

-  Ensure MongoDB is running and accessible at the URI you provide.
-  The API and CLI both use the same database and collection (`items`).
-  Modify `data/dummy-data.json` to change the seed data.
