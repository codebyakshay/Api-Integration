const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(
  "./userDb.sqlite3",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(
        "Error when connecting to the SQLite database:",
        err.message
      );
    } else {
      console.log("Connected to the SQLite database.");
      initializeDatabase(); // Initialize and optionally seed the database
    }
  }
);

function initializeDatabase() {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )`,
    (err) => {
      if (err) {
        console.error("Error creating table:", err.message);
      } else {
        console.log("Users table is ready.");
        // Only insert initial data if the table was just created
        // insertInitialData();
      }
    }
  );
}

// function insertInitialData() {
//   const users = [
//     { name: "John Doe", password: "password123" },
//     { name: "Jane Smith", password: "password123" },
//   ];

//   users.forEach((user) => {
//     db.run(
//       `INSERT OR IGNORE INTO users (name, password) VALUES (?, ?)`,
//       [user.name, user.password],
//       (err) => {
//         if (err) {
//           console.error("Error inserting user:", err.message);
//         } else {
//           console.log(`User ${user.name} added successfully.`);
//         }
//       }
//     );
//   });
// }

module.exports = db;
